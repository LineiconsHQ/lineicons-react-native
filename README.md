# @lineiconshq/react-native-lineicons

React Native components for LineIcons - Free and Pro icon library with 26079+ icons in multiple styles.

## ✨ Features

- 🎨 **Multiple Styles**: Stroke, Solid, Duotone, Bulk, and Outlined icons
- 📱 **React Native Ready**: Optimized for mobile performance
- 🎯 **TypeScript Support**: Full type definitions included
- 🚀 **Tree Shaking**: Only bundle the icons you use
- 🎨 **Customizable**: Full control over size, color, and stroke width
- 📦 **Lightweight**: Minimal bundle size impact

## 📦 Installation

```bash
npm install @lineiconshq/react-native-lineicons @lineiconshq/free-icons react-native-svg
```

or

```bash
yarn add @lineiconshq/react-native-lineicons @lineiconshq/free-icons react-native-svg
```

### Peer Dependencies

Make sure you have the following packages installed:

```bash
npm install react-native-svg
```

### iOS Setup (React Native CLI)

If you're using React Native CLI (not Expo), run the following command to install iOS dependencies:

```bash
cd ios && pod install
```

## 🚀 Usage

### Basic Usage

```tsx
import { LineIcon } from '@lineiconshq/react-native-lineicons';
import { Search1Stroke } from '@lineiconshq/free-icons';

export default function App() {
  return (
    <LineIcon
      icon={Search1Stroke}
      size={24}
      color="#000000"
      strokeWidth={2} //only available for stroke icons
    />
  );
}
```

### Advanced Customization

```tsx
import { LineIcon } from '@lineiconshq/react-native-lineicons';
import { Aeroplane1Stroke } from '@lineiconshq/free-icons';

export default function CustomIcon() {
  return (
    <LineIcon
      icon={Aeroplane1Stroke}
      size={48}
      color="#007AFF"
      strokeWidth={2.5} //only available for stroke icons
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
      // All other react-native-svg Svg props are supported
      opacity={0.8}
    />
  );
}
```

## 📚 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `IconData` | **Required** | The icon data object containing SVG path data |
| `size` | `number \| string` | `24` | Icon size in pixels or percentage |
| `color` | `string` | `'currentColor'` | Icon color (hex, rgb, or named colors) |
| `strokeWidth` | `number` | `1.5` | Stroke width for stroke icons |
| `style` | `ViewStyle` | `undefined` | Additional React Native styles |
| `...otherProps` | `SvgProps` | - | All other `react-native-svg` Svg component props |

## 🔧 Requirements

- **React Native** >= 0.60.0
- **React** >= 16.8.0
- **react-native-svg** >= 12.0.0

## 📱 Platform Support

- ✅ iOS
- ✅ Android
- ✅ Web (with react-native-web)

## 🛠️ Development

### Building

```bash
npm run build
```

### Development Mode

```bash
npm run dev
```

## Support

- [Documentation](https://lineicons.com/docs)
- [Support](https://lineicons.com/support)

[![lineicons-site](https://content.lineicons.com/wp-content/uploads/2023/01/lineicons-4.png)](https://lineicons.com/)

### [Lineicons Figma Plugin](https://www.figma.com/community/plugin/1217738304122072948/Lineicons)

### [Lineicons - Figma Source](https://www.figma.com/community/file/1198194066179400874)