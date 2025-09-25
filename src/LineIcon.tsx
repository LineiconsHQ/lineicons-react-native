// import React, { useMemo } from 'react';
// import Svg, { Path, SvgXml } from 'react-native-svg';
// import type { FillRule } from 'react-native-svg';

// export interface IconData {
//   name: string;
//   svg: string;
//   viewBox: string;
//   defaultFill?: string;
//   defaultStroke?: string;
//   hasFill: boolean;
//   hasStroke: boolean;
//   hasStrokeWidth: boolean;
//   category?: string;
//   variant?: string;
//   style?: string;
// }

// export interface LineIconProps {
//   icon: IconData;
//   size?: number | string;
//   color?: string;
//   strokeWidth?: number;
//   style?: any;
//   [key: string]: any; // allow other SvgXml props
// }

// export const LineIcon: React.FC<LineIconProps> = ({
//   icon,
//   size = 24,
//   color = 'currentColor',
//   strokeWidth = 1.5,
//   style,
//   ...otherProps
// }) => {
//   const processedSvgContent = useMemo(() => {
//     let content = icon.svg;
  
//     // Fix invalid comment-like endings
//     content = content.replace(/\/{2}>/g, '/>');
  
//     // Remove any encoded XML payload attribute from <svg>
//     content = content.replace(/\s+xml="[^"]*"/g, '');
  
//     // If the SVG string starts with encoded xml content instead of <svg>, decode it
//     if (!content.trim().startsWith('<svg')) {
//       const xmlMatch = content.match(/xml="([^"]*)"/);
//       if (xmlMatch) {
//         content = xmlMatch[1]
//           .replace(/&lt;/g, '<')
//           .replace(/&gt;/g, '>')
//           .replace(/&quot;/g, '"')
//           .replace(/&amp;/g, '&');
//       } else {
//         content = `<svg viewBox="${icon.viewBox}" fill="none" stroke="none">${content}</svg>`;
//       }
//     }
  
//     // Remove any remaining xml="…" again after decoding
//     content = content.replace(/\s+xml="[^"]*"/g, '');
  
//     // Remove fill-rule/clip-rule on <svg>
//     content = content.replace(
//       /<svg([^>]*)fill-rule="[^"]*"([^>]*)clip-rule="[^"]*"([^>]*)>/,
//       `<svg$1$2$3 fill="none" stroke="none">`
//     );
  
//     // Ensure fill-rule and clip-rule on shapes
//     content = content.replace(
//       /<(path|circle|rect|polygon|polyline|line)(\s[^>]*)>/g,
//       (match, tag, attrs) => {
//         if (!/fill-rule=/.test(attrs)) {
//           attrs = ` fill-rule="evenodd"${attrs}`;
//         }
//         if (!/clip-rule=/.test(attrs)) {
//           attrs = ` clip-rule="evenodd"${attrs}`;
//         }
//         return `<${tag}${attrs}>`;
//       }
//     );
  
//     // Fill handling
//     if (icon.hasFill) {
//       content = content.replace(/fill="{color}"/g, `fill="${color}"`);
//       if (!/fill="/.test(content) && color !== 'currentColor') {
//         content = content.replace(
//           /<(path|circle|rect|polygon|polyline|line)(\s)/g,
//           `<$1 fill="${color}"$2`
//         );
//       }
//     }
  
//     // Stroke handling
//     if (icon.hasStroke) {
//       content = content.replace(/stroke="{color}"/g, `stroke="${color}"`);
//       if (!/stroke="/.test(content) && color !== 'currentColor') {
//         content = content.replace(
//           /<(path|circle|rect|polygon|polyline|line)(\s)/g,
//           `<$1 stroke="${color}"$2`
//         );
//       }
//     }
  
//     // Stroke width handling
//     if (strokeWidth && icon.hasStrokeWidth) {
//       content = content.replace(/stroke-width="{strokeWidth}"/g, `stroke-width="${strokeWidth}"`);
//       if (!/stroke-width="/.test(content) && strokeWidth !== 1.5) {
//         content = content.replace(
//           /<(path|circle|rect|polygon|polyline|line)(\s)/g,
//           `<$1 stroke-width="${strokeWidth}"$2`
//         );
//       }
//     }
  
//     return content;
//   }, [icon, color, strokeWidth]);
  

//   return (
//     <SvgXml
//       xml={processedSvgContent}
//       width={size}
//       height={size}
//       viewBox={icon.viewBox}
//       style={style}
//       {...otherProps}
//     />
//   );
// };


// export default LineIcon;


import React, { useMemo } from 'react';
import { Svg, Path } from 'react-native-svg';

export interface IconData {
  name: string;
  svg: string;
  viewBox: string;
  defaultFill?: string;
  defaultStroke?: string;
  hasFill: boolean;
  hasStroke: boolean;
  hasStrokeWidth: boolean;
  category?: string;
  variant?: string;
  style?: string;
}

export interface LineIconProps {
  icon: IconData;
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  style?: any;
  [key: string]: any; // Allow other Svg props
}

export const LineIcon: React.FC<LineIconProps> = ({
  icon,
  size = 24,
  color = 'currentColor',
  strokeWidth = 1.5,
  style,
  ...otherProps
}) => {
  const paths = useMemo(() => {
    let svgContent = icon.svg;

    // Debug: Log raw input
    // console.log('Raw icon.svg:', svgContent);

    // Fix invalid comment-like endings
    svgContent = svgContent.replace(/\/{2}>/g, '/>');

    // Extract all <path> elements
    const pathMatches = svgContent.matchAll(/<path\s+([^>]*)>/g);
    const pathPropsArray: { [key: string]: string }[] = [];

    for (const match of pathMatches) {
      const attrsString = match[1];
      const attrs: { [key: string]: string } = {};

      // Parse attributes (e.g., d, fill, fill-rule, clip-rule, opacity)
      const attrMatches = attrsString.matchAll(/(\w+[-:a-zA-Z]*)="([^"]*)"/g);
      for (const attrMatch of attrMatches) {
        attrs[attrMatch[1]] = attrMatch[2];
      }

      // Apply fill
      if (icon.hasFill) {
        attrs.fill = attrs.fill === '{color}' ? color : attrs.fill || color;
      } else {
        attrs.fill = attrs.fill || 'none';
      }

      // Apply stroke
      if (icon.hasStroke) {
        attrs.stroke = attrs.stroke === '{color}' ? color : attrs.stroke || color;
      } else {
        attrs.stroke = attrs.stroke || 'none';
      }

      // Apply stroke width
      if (strokeWidth && icon.hasStrokeWidth) {
        attrs['stroke-width'] = attrs['stroke-width'] === '{strokeWidth}' ? strokeWidth.toString() : attrs['stroke-width'] || strokeWidth.toString();
      }
      

      // Ensure fill-rule and clip-rule
      if (!attrs['fill-rule']) {
        attrs['fill-rule'] = 'evenodd';
      }
      if (!attrs['clip-rule']) {
        attrs['clip-rule'] = 'evenodd';
      }

      pathPropsArray.push(attrs);
    }

    if (pathPropsArray.length === 0) {
      // console.warn('No valid <path> elements found in SVG:', svgContent);
    }

    // Debug: Log parsed paths
    // console.log('Parsed path attributes:', pathPropsArray);

    return pathPropsArray;
  }, [icon, color, strokeWidth]);

  return (
    <Svg
      width={size}
      height={size}
      viewBox={icon.viewBox}
      style={style}
      {...otherProps}
    >
      {paths.map((props, index) => (
        <Path
          key={index}
          d={props.d}
          fill={props.fill}
          stroke={props.stroke}
          strokeWidth={props['stroke-width']}
          fillRule={props['fill-rule'] as 'evenodd' | 'nonzero'}
          clipRule={props['clip-rule'] as 'evenodd' | 'nonzero'}
          opacity={props.opacity} // Support opacity for duotone icons
        />
      ))}
    </Svg>
  );
};

export default LineIcon;