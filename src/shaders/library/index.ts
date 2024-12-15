import type { Shader } from '../types';
import baseVertex from '../base-vertex.glsl';
import vesica from './procedural-vesica-geometry/fragment.glsl';
import pixelart from './procedural-pixelart/fragment.glsl';

const base = {
    vertex: baseVertex,
    cameraType: "orthographic",
    geometry: "plane",
    controls: false,
} as Shader

export const shaders: Record<string, Shader> = {
    "procedural-pixel-art": {
        ...base,
        fragment: pixelart,
    },
    "procedural-vesica-geometry": {
        ...base,
        fragment: vesica,
    }
};