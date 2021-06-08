// Hector Diaz, Jesús Lozano, Adrián Hinojosa, 
// This file adds the base house to the scene.
import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js';
import { getBoxGeometry, createInstance } from './box.js'

export const createHouse = (scene) => {
	const loader = new THREE.TextureLoader();
    const color = 0xffffff
    const ccMaterial = new THREE.MeshPhongMaterial({color})

	const baseHouseGeometry = getBoxGeometry(0.2,0.2,0.2);
	createInstance(scene, baseHouseGeometry, ccMaterial, 2,0.15, -4)
}