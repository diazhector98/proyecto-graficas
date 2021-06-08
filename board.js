// This file helps create the inital monopoly board.
// Hector Diaz, Jesús Lozano, Adrián Hinojosa, 
import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js';
import { getBoxGeometry, createInstance } from './box.js'

// Create and export the board.
export const createBoard = (scene) => {
    const loader = new THREE.TextureLoader();
    const white = 0xffffff
    const texture = loader.load('assets/monopoly.jpg');
    const material = new THREE.MeshBasicMaterial({
        map: texture
    })

    const boardGeometry = getBoxGeometry(5,0.1,5);
    const board = createInstance(scene, boardGeometry, material, 0,0, -4)
    return board
} 