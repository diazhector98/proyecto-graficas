import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js';
import { camera } from './camera.js'
import { light } from './light.js'
import { getBoxGeometry, createInstance } from './box.js'
import { createBoard } from './board.js'

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
    const orange = 0xFFA500

    // Board
    createBoard(scene)

    // Special Cards
    const scMaterial = new THREE.MeshPhongMaterial({color: blue})
    const specialCardsGeometry = getBoxGeometry(.60,0.15,.70);
    const specialCards = createInstance(scene, specialCardsGeometry, scMaterial, -1,0, -3)

    // Chance Cards
    const ccMaterial = new THREE.MeshPhongMaterial({color: orange})
    const chanceCardsGeometry = getBoxGeometry(.60, 0.15, .70);
    const chanceCards = createInstance(scene, chanceCardsGeometry, ccMaterial, 0, 0, -3)

    // $1
    const b1Material = new THREE.MeshPhongMaterial({color: white})
    const billete1Geometry = getBoxGeometry(1, 0.15, .60);
    const billete1 = createInstance(scene, billete1Geometry, b1Material, 2.8, 1, -4)

    // $5
    const b2Material = new THREE.MeshPhongMaterial({color: white})
    const billete5Geometry = getBoxGeometry(1, 0.15, .60);
    const billete5 = createInstance(scene, billete5Geometry, b2Material, 2.8, 1.2, -4)


    // $10


    // $20


    // $50


    // $100

    // Dices
    const diceMaterial = new THREE.MeshPhongMaterial({color: white})
    const diceGeometry = getBoxGeometry(0.2,0.2,0.2)
    const dice1 = createInstance(scene, diceGeometry, diceMaterial, 1,1, -3)
    const dice2 = createInstance(scene, diceGeometry, diceMaterial, 1.3,1, -3)



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
