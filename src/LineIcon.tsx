

// react native 
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

export interface LineiconsProps {
  icon: IconData;
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  style?: any;
  [key: string]: any; // Allow other Svg props
}

export const Lineicons: React.FC<LineiconsProps> = ({
  icon,
  size = 24,
  color = 'currentColor',
  strokeWidth = 1.5,
  style,
  ...otherProps
}) => {
  const paths = useMemo(() => {
    let svgContent = icon.svg;

    // Fix invalid comment-like endings
    svgContent = svgContent.replace(/\/{2}>/g, '/>');

    // Extract all <path> elements
    const pathMatches = svgContent.matchAll(/<path\s+([^>]*)>/g);
    const pathPropsArray: { [key: string]: string }[] = [];

    for (const match of pathMatches) {
      const attrsString = match[1];
      const attrs: { [key: string]: string } = {};

      // Parse attributes
      const attrMatches = attrsString.matchAll(/(\w+[-:a-zA-Z]*)="([^"]*)"/g);
      for (const attrMatch of attrMatches) {
        attrs[attrMatch[1]] = attrMatch[2];
      }

      // --- Fill handling ---
      if (icon.hasFill) {
        if (attrs.fill === '{color}') {
          attrs.fill = color;
        } else if (!attrs.fill) {
          attrs.fill = icon.defaultFill || 'none';
        }
      } else {
        attrs.fill = icon.defaultFill || 'none';
      }

      // --- Stroke handling ---
      if (icon.hasStroke) {
        if (attrs.stroke === '{color}') {
          attrs.stroke = color;
        } else if (!attrs.stroke) {
          attrs.stroke = icon.defaultStroke || 'none';
        }
      } else {
        attrs.stroke = icon.defaultStroke || 'none';
      }

      // --- Stroke width handling ---
      if (strokeWidth && icon.hasStrokeWidth) {
        attrs['stroke-width'] =
          attrs['stroke-width'] === '{strokeWidth}'
            ? strokeWidth.toString()
            : attrs['stroke-width'] || strokeWidth.toString();
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
          opacity={props.opacity}
        />
      ))}
    </Svg>
  );
};

export default Lineicons;
