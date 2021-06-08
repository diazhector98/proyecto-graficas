// Hector Diaz, Jesús Lozano, Adrián Hinojosa, 
// This file adds the money and it's functinos to the game.

import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js';
import { getBoxGeometry, createInstance } from './box.js'


const createMoneyMaterials = (texture, color) => {
    const topMaterial = new THREE.MeshBasicMaterial({
        map: texture
    })

    const materials = [
        new THREE.MeshPhongMaterial({color}),
        new THREE.MeshPhongMaterial({color}),
        topMaterial,
        new THREE.MeshPhongMaterial({color}),
        new THREE.MeshPhongMaterial({color}),
        new THREE.MeshPhongMaterial({color}),
    ]

    return materials
}


export const createMoney = (scene) => {
    const white = 0xffffff
    const loader = new THREE.TextureLoader();

    // $1
    const b3Texture = loader.load('assets/1dls.jpg')
    const b3Color = white
    const b3Materials = createMoneyMaterials(b3Texture, b3Color)
    const billete1Geometry = getBoxGeometry(1, 0.15, .60);
    const billete1 = createInstance(scene, billete1Geometry, b3Materials, 3.1, -1, -2)

    // $5
    const b4Texture = loader.load('assets/5dls.jpg');
    const b4Color = 0xCA9CA9
    const b4Materials = createMoneyMaterials(b4Texture, b4Color)
    const billete4Geometry = getBoxGeometry(1, 0.15, .60);
    const billete4 = createInstance(scene, billete4Geometry, b4Materials, 3.1, 0.5, -5)

    // $10
    const b6Texture = loader.load('assets/10.jpg');
    const b6Color = 0x7ABACA
    const b6Materials = createMoneyMaterials(b6Texture, b6Color)
    const billete6Geometry = getBoxGeometry(1, 0.15, .60);
    const billete6 = createInstance(scene, billete6Geometry, b6Materials, 3.1, 1, -6)

    // $20
    const b1Texture = loader.load('assets/20.jpeg');
    const b1Color = 0xabffda
    const b1Materials = createMoneyMaterials(b1Texture, b1Color)
    const b1Geometry = getBoxGeometry(1, 0.15, .60);
    const b1 = createInstance(scene, b1Geometry, b1Materials, 3.1, 0, -4)

    // $50
    const b7Texture = loader.load('assets/50.jpg');
    const b7Color = 0xAC96B7
    const b7Materials = createMoneyMaterials(b7Texture, b7Color)
    const b7Geometry = getBoxGeometry(1, 0.15, .60);
    const b7 = createInstance(scene, b7Geometry, b7Materials, 4.5, -1, -2)

    // $100
    const b2Texture = loader.load('assets/100.jpeg');
    const b2Color = 0xffe7ab
    const b2Materials = createMoneyMaterials(b2Texture, b2Color)
    const billete5Geometry = getBoxGeometry(1, 0.15, .60);
    const billete5 = createInstance(scene, billete5Geometry, b2Materials, 3.1, -0.5, -3)

    // $500
    const b8Texture = loader.load('assets/500.jpg');
    const b8Color = 0xCAAD50
    const b8Materials = createMoneyMaterials(b8Texture, b8Color)
    const b8Geometry = getBoxGeometry(1, 0.15, .60);
    const b8 = createInstance(scene, b8Geometry, b8Materials, 4.5, -0.5, -3)


}