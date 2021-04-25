import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js';
import { camera } from './camera.js'
import { light } from './light.js'
import { getBoxGeometry, createInstance } from './box.js'

function main() {
    // Setup
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    // Lighting 
    light.position.set(-1, 2, 4);
    scene.add(light)

    // Colors
    const white = 0xffffff
    const blue = 0x0000FF
    const green = 0x00FF00

    // Board
    const boardGeometry = getBoxGeometry(5,0.1,5);
    const board = createInstance(scene, boardGeometry, white, 0,0, -4)

    // Special Cards
    const specialCardsGeometry = getBoxGeometry(1,0.15,1);
    const specialCards = createInstance(scene, specialCardsGeometry, blue, -1,0, -3)

    // Dices
    const diceGeometry = getBoxGeometry(0.2,0.2,0.2)
    const dice1 = createInstance(scene, diceGeometry, green, 1,1, -3)
    const dice2 = createInstance(scene, diceGeometry, green, 1.3,1, -3)



    camera.position.z = 4;
    camera.position.y = 2;
    camera.rotation.x = -0.3;

    const animate = function () {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );
    };
    animate();
}

main();
