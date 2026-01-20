"use client"

import * as React from "react"
import { createRoot } from "react-dom/client"
import maplibregl from "maplibre-gl"
import { cn } from "@/app/lib/utils"

export interface MapRef {
  flyTo: (options: { center: [number, number]; zoom: number }) => void
  getMap: () => maplibregl.Map | null
}

export interface MapProps extends React.HTMLAttributes<HTMLDivElement> {
  center: [number, number]
  zoom?: number
  className?: string
  children?: React.ReactNode
  theme?: 'light' | 'dark' | 'auto'
}

const MapContext = React.createContext<{
  map: maplibregl.Map | null
  isLoaded: boolean
}>({
  map: null,
  isLoaded: false,
})

export const useMap = () => React.useContext(MapContext)

const Map = React.forwardRef<MapRef, MapProps>(
  ({ center, zoom = 10, className, children, theme = 'auto', ...props }, ref) => {
    const mapContainer = React.useRef<HTMLDivElement>(null)
    const mapInstance = React.useRef<maplibregl.Map | null>(null)
    const [isLoaded, setIsLoaded] = React.useState(false)
    const [isDark, setIsDark] = React.useState(false)

    // Detect dark mode
    React.useEffect(() => {
      if (theme === 'auto') {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        setIsDark(mediaQuery.matches)
        
        const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches)
        mediaQuery.addEventListener('change', handleChange)
        return () => mediaQuery.removeEventListener('change', handleChange)
      } else {
        setIsDark(theme === 'dark')
      }
    }, [theme])

    React.useEffect(() => {
      if (!mapContainer.current) return

      const getMapStyle = () => {
        const isDarkMode = theme === 'auto' ? isDark : theme === 'dark'
        
        if (isDarkMode) {
          return {
            version: 8,
            sources: {
              "carto-dark": {
                type: "raster",
                tiles: [
                  "https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
                  "https://b.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
                  "https://c.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
                ],
                tileSize: 256,
              },
            },
            layers: [
              {
                id: "carto-dark-layer",
                type: "raster",
                source: "carto-dark",
              },
            ],
          }
        } else {
          return {
            version: 8,
            sources: {
              "carto-positron": {
                type: "raster",
                tiles: [
                  "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
                  "https://b.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
                  "https://c.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
                ],
                tileSize: 256,
              },
            },
            layers: [
              {
                id: "carto-positron-layer",
                type: "raster",
                source: "carto-positron",
              },
            ],
          }
        }
      }

      const map = new maplibregl.Map({
        container: mapContainer.current,
        style: getMapStyle(),
        center: center,
        zoom: zoom,
        attributionControl: false,
      })

      map.on("load", () => {
        setIsLoaded(true)
        // Trigger resize to ensure map renders correctly, especially on mobile
        map.resize()
      })

      mapInstance.current = map

      // Resize map when container size changes (important for mobile)
      const resizeObserver = new ResizeObserver(() => {
        if (mapInstance.current) {
          mapInstance.current.resize()
        }
      })

      if (mapContainer.current) {
        resizeObserver.observe(mapContainer.current)
      }

      return () => {
        resizeObserver.disconnect()
        map.remove()
      }
    }, [isDark])

    // Update center and zoom when they change
    React.useEffect(() => {
      if (mapInstance.current) {
        mapInstance.current.setCenter(center)
        mapInstance.current.setZoom(zoom)
      }
    }, [center, zoom])

    // Update map style when theme changes
    React.useEffect(() => {
      if (!mapInstance.current || !isLoaded) return
      
      const isDarkMode = theme === 'auto' ? isDark : theme === 'dark'
      const newStyle = isDarkMode
        ? {
            version: 8,
            sources: {
              "carto-dark": {
                type: "raster",
                tiles: [
                  "https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
                  "https://b.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
                  "https://c.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
                ],
                tileSize: 256,
              },
            },
            layers: [
              {
                id: "carto-dark-layer",
                type: "raster",
                source: "carto-dark",
              },
            ],
          }
        : {
            version: 8,
            sources: {
              "carto-positron": {
                type: "raster",
                tiles: [
                  "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
                  "https://b.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
                  "https://c.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
                ],
                tileSize: 256,
              },
            },
            layers: [
              {
                id: "carto-positron-layer",
                type: "raster",
                source: "carto-positron",
              },
            ],
          }
      
      mapInstance.current.once('style.load', () => {
        setIsLoaded(true)
      })
      mapInstance.current.setStyle(newStyle as any)
    }, [isDark, theme, isLoaded])

    React.useImperativeHandle(ref, () => ({
      flyTo: (options: { center: [number, number]; zoom: number }) => {
        mapInstance.current?.flyTo({
          center: options.center,
          zoom: options.zoom,
        })
      },
      getMap: () => mapInstance.current,
    }))

    const [mapContext, setMapContext] = React.useState({
      map: mapInstance.current,
      isLoaded,
    })

    React.useEffect(() => {
      setMapContext({
        map: mapInstance.current,
        isLoaded,
      })
    }, [isLoaded])

    return (
      <MapContext.Provider value={mapContext}>
        <div
          ref={mapContainer}
          className={cn("w-full h-full min-h-[250px] sm:min-h-[300px] md:min-h-0", className)}
          {...props}
        >
          {children}
        </div>
      </MapContext.Provider>
    )
  }
)
Map.displayName = "Map"

export interface MapMarkerProps {
  position: [number, number]
  children?: React.ReactNode
  popup?: React.ReactNode
  icon?: string
  iconSize?: [number, number]
  anchor?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

export const MapMarker: React.FC<MapMarkerProps> = ({
  position,
  children,
  popup,
  icon,
  iconSize = [48, 48],
  anchor = 'bottom',
}) => {
  const { map, isLoaded } = useMap()
  const markerRef = React.useRef<maplibregl.Marker | null>(null)
  const popupRef = React.useRef<maplibregl.Popup | null>(null)
  const rootRef = React.useRef<any>(null)

  React.useEffect(() => {
    if (!map || !isLoaded) return

    let marker: maplibregl.Marker

    if (icon) {
      // Use image icon directly
      const img = document.createElement("img")
      img.src = icon
      img.style.width = `${iconSize[0]}px`
      img.style.height = `${iconSize[1]}px`
      img.style.objectFit = "contain"
      img.style.cursor = "pointer"
      img.style.pointerEvents = "auto"
      
      const el = document.createElement("div")
      el.appendChild(img)
      el.className = "map-marker"
      
      marker = new maplibregl.Marker({
        element: el,
        anchor: anchor,
      }).setLngLat(position).addTo(map)
    } else {
      const el = document.createElement("div")
      el.className = "map-marker"
      
      if (children) {
        // Use React to render children into the DOM element
        const root = createRoot(el)
        rootRef.current = root
        root.render(<>{children}</>)
      } else {
        el.style.width = "20px"
        el.style.height = "20px"
        el.style.borderRadius = "50%"
        el.style.backgroundColor = "#ef4444"
        el.style.border = "2px solid white"
        el.style.cursor = "pointer"
      }

      marker = new maplibregl.Marker(el).setLngLat(position).addTo(map)
    }

    if (popup) {
      const popupEl = document.createElement("div")
      const popupRoot = createRoot(popupEl)
      popupRoot.render(<>{popup}</>)
      const popupInstance = new maplibregl.Popup({ offset: 25 }).setDOMContent(popupEl)
      marker.setPopup(popupInstance)
      popupRef.current = popupInstance
    }

    markerRef.current = marker

    return () => {
      if (rootRef.current) {
        rootRef.current.unmount()
      }
      marker.remove()
    }
  }, [map, isLoaded, position, icon, iconSize, anchor, children, popup])

  // Re-render children if they change
  React.useEffect(() => {
    if (!map || !isLoaded || !children || !rootRef.current) return
    
    rootRef.current.render(<>{children}</>)
  }, [map, isLoaded, children])

  return null
}

export interface MapControlsProps {
  className?: string
}

export const MapControls: React.FC<MapControlsProps> = ({ className }) => {
  const { map, isLoaded } = useMap()

  if (!map || !isLoaded) return null

  return (
    <div className={cn("absolute top-4 right-4 z-10 flex flex-col gap-2", className)}>
      <button
        onClick={() => map.zoomIn()}
        className="bg-white rounded-md shadow-md p-2 hover:bg-gray-100 transition-colors"
        aria-label="Zoom in"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 3V13M3 8H13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <button
        onClick={() => map.zoomOut()}
        className="bg-white rounded-md shadow-md p-2 hover:bg-gray-100 transition-colors"
        aria-label="Zoom out"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 8H13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  )
}

export { Map }
