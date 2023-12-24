import Gallery from "../components/Gallery";
import GoogleMapsComponent from "../components/Maps";

export type GridItemLayout = "1x1" | "1x2" | "2x1" | "2x2" | "4x2" | "2x4" | "2x3" | "4x4";

export interface GridItemInterface {
    layout : GridItemLayout;
    title?: string;
    children?: React.ReactNode
}
const photoAlbum = [
    "/images/about/1x1/about-1.jpg",
    "/images/about/1x1/about-2.jpg",
    "/images/about/1x1/about-4.jpg",
    "/images/about/1x1/about-6.jpg",
]
export const DesktopGridItems : GridItemInterface[] = [
    {
        layout: "2x2",
        title:"Short introduction",
    },
    {
        layout: "1x2",
        title:"photo album",
        children: <Gallery images={photoAlbum} />
    },
    {
        layout: "1x2",
        title:"1x2",
    },
    {
        layout: "2x4",
        title:"description",
    },
    {
        layout: "2x3",
        title:"map",
        children: <GoogleMapsComponent apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}/>
    },
    {
        layout: "2x2",
        title:"2x2",
    },
    {
        layout: "1x1",
        title:"techStack",
    },
    {
        layout: "1x1",
        title:"digital space",
    },
]

export const MobileGridItems : GridItemInterface[] = [
    {
        layout: "2x2",
        title:"album",
        children: <Gallery images={photoAlbum} />
    },
    {
        layout: "2x1",
        title:"short desciption",
    },
    {
        layout: "1x1",
        title:"digi space",
    },
    {
        layout: "1x1",
        title:"tech stack",
    },
    {
        layout: "4x2",
        title:"description",
    },
    {
        layout: "2x2",
        title:"2x2",
    },
    {
        layout: "2x2",
        title:"map",
        children: <GoogleMapsComponent apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}/>
    },
    {
        layout: "4x2",
        title:"2x4",
    },
   
]