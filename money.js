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
    const b1Texture = loader.load('assets/20.jpeg');
    const b1Color = 0xabffda
    const b1Materials = createMoneyMaterials(b1Texture, b1Color)
    const b1Geometry = getBoxGeometry(1, 0.15, .60);
    const b1 = createInstance(scene, b1Geometry, b1Materials, 2.8, 1, -4)

    // $5
    const b2Texture = loader.load('assets/100.jpeg');
    const b2Color = 0xffe7ab
    const b2Materials = createMoneyMaterials(b2Texture, b2Color)
    const billete5Geometry = getBoxGeometry(1, 0.15, .60);
    const billete5 = createInstance(scene, billete5Geometry, b2Materials, 2.8, 1.2, -4)


}