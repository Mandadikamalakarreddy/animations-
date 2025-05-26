# Animations Library

![License](https://img.shields.io/github/license/Mandadikamalakarreddy/animations-)
![TypeScript](https://img.shields.io/badge/TypeScript-87%25-blue)
![CSS](https://img.shields.io/badge/CSS-10.5%25-purple)
![JavaScript](https://img.shields.io/badge/JavaScript-2.5%25-yellow)

A modern, lightweight animation library built with TypeScript for creating smooth, performant animations for web applications.

## 🚀 Features

- **TypeScript-First**: Built with type safety in mind
- **Lightweight**: Minimal impact on your bundle size
- **Customizable**: Easily adjust animations to suit your needs
- **Cross-Browser Compatible**: Works seamlessly across modern browsers
- **Performance-Focused**: Optimized for smooth animations even on mobile devices

## 📋 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## 🔧 Installation

```bash
# Using npm
npm install @mandadikamalakarreddy/animations

# Using yarn
yarn add @mandadikamalakarreddy/animations

# Using pnpm
pnpm add @mandadikamalakarreddy/animations
```

## 🎯 Usage

```typescript
import { fadeIn, slideIn, rotate } from '@mandadikamalakarreddy/animations';

// Apply a fade-in animation to an element
const element = document.querySelector('.my-element');
fadeIn(element, {
  duration: 500,
  easing: 'ease-in-out',
  delay: 100
});

// Chain multiple animations
slideIn(element, { direction: 'left' })
  .then(() => rotate(element, { degrees: 360 }))
  .catch(error => console.error('Animation failed:', error));
```

## 📊 Examples

### Basic Animations

```typescript
// Fade in animation
fadeIn(element);

// Slide in from the left
slideIn(element, { direction: 'left' });

// Scale up animation
scale(element, { from: 0.5, to: 1 });
```

### Animation with Callbacks

```typescript
fadeIn(element, {
  duration: 300,
  onStart: () => console.log('Animation started'),
  onComplete: () => console.log('Animation completed')
});
```

### Advanced Customization

```typescript
customAnimate(element, {
  properties: {
    opacity: [0, 1],
    transform: ['translateY(20px)', 'translateY(0)']
  },
  duration: 500,
  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  delay: 100
});
```

## 📘 API Reference

### Core Functions

| Function | Description | Parameters |
|----------|-------------|------------|
| `fadeIn` | Fades an element in | `(element, options?)` |
| `fadeOut` | Fades an element out | `(element, options?)` |
| `slideIn` | Slides an element in | `(element, options?)` |
| `slideOut` | Slides an element out | `(element, options?)` |
| `scale` | Scales an element | `(element, options?)` |
| `rotate` | Rotates an element | `(element, options?)` |
| `customAnimate` | Create custom animations | `(element, options)` |

### Options

All animation functions accept an options object with the following properties:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `duration` | `number` | `300` | Duration of the animation in milliseconds |
| `delay` | `number` | `0` | Delay before animation starts in milliseconds |
| `easing` | `string` | `'ease'` | CSS easing function |
| `onStart` | `function` | `undefined` | Callback fired when animation starts |
| `onComplete` | `function` | `undefined` | Callback fired when animation completes |

## 🤝 Contributing

Contributions are always welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please make sure to update tests as appropriate and adhere to the existing coding style.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

Mandadi Kamalakar Reddy - [@YourTwitterHandle](https://twitter.com/YourTwitterHandle)

Project Link: [https://github.com/Mandadikamalakarreddy/animations-](https://github.com/Mandadikamalakarreddy/animations-)

---

Made with ❤️ by [Mandadi Kamalakar Reddy](https://github.com/Mandadikamalakarreddy)
```

Feel free to adjust this README according to the specific features and usage patterns of your animations library!