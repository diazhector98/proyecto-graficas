import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js';

const fov = 75;
const aspect = 2;  // the canvas default
const near = 0.1;
const far = 1000;

export const camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, near, 1000 );