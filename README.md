# React Native Package for Lineicons — Essential UI Icons for React Native

**Lineicons React Native** provides lightweight, fully customizable SVG icons as React Native components.
Easily use **Free** or **Pro** icons in your mobile apps with support for size, color, stroke width, and styling.

---

## ✨ Features

* 🎨 **Multiple Styles** — Stroke, Solid, Duotone, Bulk, and Outlined icons
* 📱 **React Native Ready** — Optimized for mobile performance
* 🧩 **Customizable** — Control size, color, stroke width, and styles
* 🚀 **Tree Shaking** — Only bundle the icons you use
* 🧑‍💻 **TypeScript Support** — Full type definitions included
* 📦 **Lightweight** — Minimal bundle size impact

---

## 📦 Installation

```bash
npm install @lineiconshq/react-native-lineicons @lineiconshq/free-icons react-native-svg
```

or

```bash
yarn add @lineiconshq/react-native-lineicons @lineiconshq/free-icons react-native-svg
```

### Peer Dependencies

Make sure you have the following installed:

```bash
npm install react-native-svg
```

### iOS Setup (React Native CLI)

If you’re using **React Native CLI** (not Expo), install iOS pods:

```bash
cd ios && pod install
```

---

## 🚀 Usage

### Basic Example

```tsx
import { Lineicons } from '@lineiconshq/react-native-lineicons';
import { Search1Stroke } from '@lineiconshq/free-icons';

export default function App() {
  return (
    <Lineicons
      icon={Search1Stroke}
      size={24}
      color="#000000"
      strokeWidth={2} // Only for stroke icons
    />
  );
}
```

### Advanced Customization

```tsx
import { Lineicons } from '@lineiconshq/react-native-lineicons';
import { Aeroplane1Stroke } from '@lineiconshq/free-icons';

export default function CustomIcon() {
  return (
    <Lineicons
      icon={Aeroplane1Stroke}
      size={48}
      color="#007AFF"
      strokeWidth={2.5}
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
      opacity={0.8}
      // All other react-native-svg Svg props are supported
    />
  );
}
```

---

## 📚 Props

| Prop            | Type               | Default        | Description                                      |
| --------------- | ------------------ | -------------- | ------------------------------------------------ |
| `icon`          | `IconData`         | — *(required)* | Icon object containing SVG path data.            |
| `size`          | `number \| string` | `24`           | Icon size (pixels or percentages).               |
| `color`         | `string`           | `currentColor` | Icon color (hex, rgb, or named colors).          |
| `strokeWidth`   | `number`           | `1.5`          | Stroke width (only for stroke icons).            |
| `style`         | `ViewStyle`        | —              | Additional React Native styles.                  |
| `...otherProps` | `SvgProps`         | —              | All other props supported by `react-native-svg`. |

---

## 🔧 Requirements

* **React Native** ≥ 0.60.0
* **React** ≥ 16.8.0
* **react-native-svg** ≥ 12.0.0

---

## 📱 Platform Support

* ✅ iOS
* ✅ Android
* ✅ Web (via [react-native-web](https://github.com/necolas/react-native-web))

---

## 🛠️ Development

### Build Package

```bash
npm run build
```

### Development Mode

```bash
npm run dev
```

---

## 📚 Resources & Support

* [📖 Documentation](https://lineicons.com/docs)
* [💬 Support](https://lineicons.com/support)
* [🎨 Figma Plugin](https://www.figma.com/community/plugin/1217738304122072948/Lineicons)
* [📁 Figma Source](https://www.figma.com/community/file/1198194066179400874)

---

## ⚖️ License

* **Free Icons:** [MIT License](https://opensource.org/licenses/MIT)

