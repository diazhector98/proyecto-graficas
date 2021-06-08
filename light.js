// Hector Diaz, Jesús Lozano, Adrián Hinojosa, 
// This file adds the scene's lights and intensity in 3D
import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js';

const color = 0xFFFFFF;
const intensity = 1;
export const light = new THREE.DirectionalLight(color, intensity);
