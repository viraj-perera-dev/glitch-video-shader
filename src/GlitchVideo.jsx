"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

const vertexShader = `
  uniform vec2 uMousePos;
  uniform float uHoverProgress;

  varying vec2 vUv;

  void main() {
    vUv = uv;

    vec3 pos = position;

    float dist = distance(uv, uMousePos);
    float radius = 0.3;
    float height = 0.4;
    float falloff = smoothstep(radius, 0.0, dist);

    pos.z += falloff * height * uHoverProgress;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;


const fragmentShader = `
// Fragment Shader: glitch color shifts with mask near mouse
uniform sampler2D tMap;
uniform sampler2D tMouseComputation;
uniform float uHoverProgress;
uniform float uDisplacement;
uniform float uShift;
uniform vec2 uMousePos; // Mouse position in UV coords
varying vec2 vUv;

float circle(vec2 uv, vec2 center, float radius, float edge) {
  float dist = distance(uv, center);
  return smoothstep(radius, radius - edge, dist);
}

void main() {
  vec2 uv = vUv;
  vec4 displacement = texture2D(tMouseComputation, uv);

  // Mask to limit glitch effect near mouse
  float mask = circle(uv, uMousePos, 0.3, 0.1);

  // Displacement vector scaled by hover progress and mask
  vec2 disp = displacement.rg * uHoverProgress * mask * 0.03 * uDisplacement;

  // Sample red, green, blue channels with slight shifts for glitch
  vec4 colorR = texture2D(tMap, uv - disp - vec2(displacement.g * 0.01 * uShift, 0.0));
  vec4 colorG = texture2D(tMap, uv - disp);
  vec4 colorB = texture2D(tMap, uv - disp - vec2(displacement.r * 0.01 * uShift, 0.0));

  gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);
}
`;

const GlitchMaterial = shaderMaterial(
  {
    tMap: null,
    tMouseComputation: null,
    uHoverProgress: 0,
    uDisplacement: 1,
    uShift: 1,
    uMousePos: new THREE.Vector2(0.5, 0.5),
  },
  vertexShader,
  fragmentShader
);

extend({ GlitchMaterial });

export function GlitchVideo({ videoSrc="/video3.mp4", noiseTextureSrc = "/noise5.jpg", height = 4, width = 4 }) {
  const materialRef = useRef();
  const videoRef = useRef();
  const noiseTexture = useRef(null);
  const meshRef = useRef();

  const [hover, setHover] = useState(false);
  const [pendingHover, setPendingHover] = useState(false); 
  const hoverProgress = useRef(0);
  const lastMoveTime = useRef(Date.now());
  const delayTimer = useRef(null);
  const targetMouseUV = useRef([0.5, 0.5]);
  const smoothMouseUV = useRef([0.5, 0.5]);




  useEffect(() => {
    // Create and play video texture
    const video = document.createElement("video");
    video.src = videoSrc;
    video.crossOrigin = "anonymous";
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;
    video.play();

    videoRef.current = video;
    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    videoTexture.format = THREE.RGBFormat;

    if (materialRef.current) materialRef.current.tMap = videoTexture;

    // Load noise texture
    const loader = new THREE.TextureLoader();
    loader.load(noiseTextureSrc, (texture) => {
      noiseTexture.current = texture;
      if (materialRef.current) {
        materialRef.current.tMouseComputation = noiseTexture.current;
      }
    });
  }, [videoSrc]);

  // Handle mouse move over plane: get UV coords of pointer
  const onPointerMove = (e) => {
    const geometry = meshRef.current.geometry;
    const width = geometry.parameters.width;
    const height = geometry.parameters.height;
    
    const x = (e.point.x + width / 2) / width;
    const y = (e.point.y + height / 2) / height;
    targetMouseUV.current = [x, y];
    
  
    // Reset hover timeout if glitch was stopped due to idleness
    const now = Date.now();
    if (!hover && !pendingHover) {
      setPendingHover(true);
      delayTimer.current = setTimeout(() => {
        setHover(true);
        setPendingHover(false);
      }, 200);
    }
  
    lastMoveTime.current = now;
  };
  
  


  // Animate hover progress smoothly & update mouse UV in shader
  useFrame((state, delta) => {
    if (!materialRef.current) return;
  
    const now = Date.now();
    if (hover && now - lastMoveTime.current > 300) {
      setHover(false);
      setPendingHover(false); // 👈 make sure this resets too
      if (delayTimer.current) clearTimeout(delayTimer.current);
    }

    // Smoothly interpolate the mouse UV
    const lerpSpeed = 2; // Increase for faster follow
    smoothMouseUV.current[0] += (targetMouseUV.current[0] - smoothMouseUV.current[0]) * delta * lerpSpeed;
    smoothMouseUV.current[1] += (targetMouseUV.current[1] - smoothMouseUV.current[1]) * delta * lerpSpeed;

    materialRef.current.uMousePos = new THREE.Vector2(
    smoothMouseUV.current[0],
    smoothMouseUV.current[1]
    );

  
    const target = hover ? 1 : 0;
    const speed = 3;
    hoverProgress.current += (target - hoverProgress.current) * delta * speed;
  
    materialRef.current.uHoverProgress = hoverProgress.current;
  });
  
  
  

  return (
    <mesh
      ref={meshRef}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => {
        setHover(false);
        setPendingHover(false);
        if (delayTimer.current) clearTimeout(delayTimer.current);
      }}
      onPointerMove={onPointerMove}
    >
      <planeGeometry args={[width, height]} />
      <glitchMaterial
        ref={materialRef}
        uDisplacement={1}
        uShift={1}
      />
    </mesh>
  );
}

