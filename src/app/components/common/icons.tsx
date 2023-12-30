import React, { useEffect, useState } from 'react'

interface LucideIconProps {
    color?: string;
    className?:string;
}

const convertSvgToLucideIcon = (path:string)=>{
    const CustomIcon: React.FC<LucideIconProps> = ({ color, className }) => {
      const [svgContent, setSvgContent] = useState<React.ReactNode | null>(null);
  
      useEffect(() => {
        const fetchSvg = async () => {
          try {
            const response = await fetch(path);
            const svgText = await response.text();
            setSvgContent(<div dangerouslySetInnerHTML={{ __html: svgText }} />);
          } catch (error) {
            console.error('Error loading SVG:', error);
          }
        };
  
        fetchSvg();
      }, []);
  
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color || 'currentColor'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          {svgContent}
        </svg>
      );
    };
    return CustomIcon;
  };


export const ReactIcon = convertSvgToLucideIcon('/images/icons/react.svg')
export const CssIcon = convertSvgToLucideIcon('/images/icons/css.svg')
export const FlutterIcon = convertSvgToLucideIcon('/images/icons/flutter.svg')
export const HtmlIcon = convertSvgToLucideIcon('/images/icons/html.svg')
export const JavaIcon = convertSvgToLucideIcon('/images/icons/java.svg')
export const JavascriptIcon = convertSvgToLucideIcon('/images/icons/javascript.svg')
export const NetSuiteIcon = convertSvgToLucideIcon('/images/icons/netsuite.svg')
export const NextIcon = convertSvgToLucideIcon('/images/icons/nextjs.svg')
export const NodeIcon = convertSvgToLucideIcon('/images/icons/nodejs.svg')
export const SassIcon = convertSvgToLucideIcon('/images/icons/sass.svg')
export const SpringIcon = convertSvgToLucideIcon('/images/icons/spring.svg')
export const TailwindIcon = convertSvgToLucideIcon('/images/icons/tailwind.svg')
export const TypeScriptIcon = convertSvgToLucideIcon('/images/icons/typescript.svg')