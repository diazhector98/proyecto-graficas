import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js';

export const getBoxGeometry = (width, height, depth) => {
    const geometry = new THREE.BoxGeometry(width, height, depth);
    return geometry
}

export const createInstance = (scene, geometry, material, x, y, z) => {
    console.log({ material })
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
   
    cube.position.x = x;
    cube.position.y = y;
    cube.position.z = z;
    cube.rotation.x = 0.5;
   
    return cube;
}