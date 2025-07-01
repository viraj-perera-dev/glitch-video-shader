# @developer-hub/glitch-video-shader

**Interactive hover glitch video shader** built with **React Three Fiber** and custom GLSL shaders. Creates a mesmerizing RGB displacement glitch effect on looping video content with smooth mouse-following interactions and 3D displacement morphing.

## 🌌 Demo

[Click here to view demo](https://demo-glitch-shader.vercel.app/)

---

## ✨ Features

- 🎬 **Video texture mapping** with seamless looping
- 🎨 **RGB channel separation** glitch effects
- 🖱️ **Smooth mouse tracking** with UV coordinate mapping
- 📐 **3D surface displacement** that follows cursor proximity
- ⏱️ **Smart hover delays** to prevent flickering
- 🎯 **Localized glitch zones** with customizable falloff
- 🔧 **Fully customizable** dimensions and textures

---

## 📦 Installation

```bash
npm install @developer-hub/glitch-video-shader
```

or

```bash
yarn add @developer-hub/glitch-video-shader
```

---

## 🧩 Usage

```jsx
"use client";
import { Canvas } from "@react-three/fiber";
import { GlitchVideo } from "@developer-hub/glitch-video-shader";

export default function MyScene() {
  return (
    <div className="h-screen w-screen bg-black">
      <Canvas orthographic camera={{ zoom: 200, position: [0, 0, 100] }}>
        <GlitchVideo
          videoSrc="/your-video.mp4"
          noiseTextureSrc="/noise-texture.jpg"
          width={6}
          height={4}
        />
      </Canvas>
    </div>
  );
}
```

---

## ⚙️ Props

| Prop              | Type     | Default         | Description                            |
| ----------------- | -------- | --------------- | -------------------------------------- |
| `videoSrc`        | `string` | `"/video3.mp4"` | Path to the video file to be looped    |
| `noiseTextureSrc` | `string` | `"/noise5.jpg"` | Path to grayscale displacement texture |
| `width`           | `number` | `4`             | Width of the video plane in R3F units  |
| `height`          | `number` | `4`             | Height of the video plane in R3F units |

---

## 📁 Asset Requirements

### Video Files

- Place video files in your `public/` folder
- Supported formats: `.mp4`, `.webm`, `.mov`
- Recommended: compressed, web-optimized videos for better performance

### Noise Textures

- Grayscale images work best for displacement
- Formats: `.jpg`, `.png`, `.webp`
- Higher contrast = more dramatic glitch effects
- Recommended size: 512x512 or 1024x1024

---

## 🧠 How It Works

The component uses a sophisticated dual-shader approach:

### Vertex Shader

- **3D Displacement**: Creates surface bumps that follow mouse position
- **Smooth Falloff**: Uses `smoothstep` for natural height transitions
- **Hover Animation**: Animates displacement intensity based on interaction state

### Fragment Shader

- **RGB Channel Separation**: Samples each color channel with slight offsets
- **Noise-Based Displacement**: Uses grayscale texture for organic distortion patterns
- **Localized Effects**: Glitch intensity is masked to areas near the cursor
- **Real-time Updates**: All effects respond to live mouse coordinates in UV space

### Interaction System

- **Smart Delays**: 200ms delay before glitch activation prevents flickering
- **Auto-timeout**: Effects fade after 300ms of mouse inactivity
- **Smooth Interpolation**: Mouse position and hover states are smoothly animated
- **UV Coordinate Mapping**: Converts 3D mouse position to texture coordinates

---

## 🎮 Dependencies

Ensure these are installed in your project:

```json
{
  "peerDependencies": {
    "@react-three/fiber": ">=8.0.0",
    "@react-three/drei": ">=9.0.0",
    "three": ">=0.150.0",
    "react": ">=18.0.0"
  }
}
```

---

## 🛠️ Advanced Usage

```jsx
// Custom styling with Tailwind classes
<div className="relative overflow-hidden">
  <Canvas
    orthographic
    camera={{ zoom: 200, position: [0, 0, 100] }}
    className="absolute inset-0"
  >
    <GlitchVideo
      videoSrc="/hero-video.mp4"
      noiseTextureSrc="/custom-noise.jpg"
      width={8}
      height={6}
    />
  </Canvas>
  <div className="relative z-10 p-8">{/* Your overlay content */}</div>
</div>
```

---

## 📄 License

MIT License © developer-hub

For detailed license information, see the [LICENSE file](https://github.com/viraj-perera-dev/glitch-video-shader/blob/main/LICENSE) in the repository.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## ✅ Next Steps

- ✅ Add this `README.md` to your package root
- ✅ Create demo GIF or CodeSandbox example
- ✅ Push to GitHub for public sharing
- ✅ Run `npm publish` to update package documentation

---

## 🐛 Issues & Support

Found a bug or have a feature request? Please open an issue on [GitHub](https://github.com/viraj-perera-dev/glitch-video-shader/issues).

# 💬 Community & Discussions
Join the community discussion for tips, showcase your projects, and get help from other developers:
👉 [GitHub Discussions](https://github.com/viraj-perera-dev/glitch-video-shader/discussions)

---

_Built with ❤️ using React Three Fiber and WebGL shaders_
