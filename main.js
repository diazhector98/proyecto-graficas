import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/examples/jsm/controls/OrbitControls.js';
import { camera } from './camera.js'
import { light } from './light.js'
import { getBoxGeometry, createInstance } from './box.js'
import { createBoard } from './board.js'
import { createMoney } from './money.js'
import { createDice } from './dice.js'
import { createHouse } from './house.js'

function main() {
    // Setup
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer();
    const loader = new THREE.TextureLoader();
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
    const specialCards = createInstance(scene, specialCardsGeometry, scMaterial, -1,-0.37, -3)

    // Chance Cards
    const ccMaterial = new THREE.MeshPhongMaterial({color: orange})
    const chanceCardsGeometry = getBoxGeometry(.60, 0.15, .70);
    const chanceCards = createInstance(scene, chanceCardsGeometry, ccMaterial, 0, -0.37, -3)

    //player piece 1
    const ppMaterial = new THREE.MeshPhongMaterial({color: green})
    const ppGeometry = getBoxGeometry(.15, .4, .15);
    const playerPiece = createInstance(scene, ppGeometry, ppMaterial, 2, -.96, -1.9)

    //player piece 2
    const pp1Material = new THREE.MeshPhongMaterial({color: blue})
    const pp1Geometry = getBoxGeometry(.15, .4, .15);
    const playerPiece1 = createInstance(scene, pp1Geometry, pp1Material, 2.3, -.8, -2.15)
    
    //player piece 3
    const pp2Material = new THREE.MeshPhongMaterial({color: white})
    const pp2Geometry = getBoxGeometry(.15, .4, .15);
    const playerPiece2 = createInstance(scene, pp2Geometry, pp2Material, 2, -.8, -2.15)

    //player piece 4
    const pp3Material = new THREE.MeshPhongMaterial({color: orange})
    const pp3Geometry = getBoxGeometry(.15, .4, .15);
    const playerPiece3 = createInstance(scene, pp3Geometry, pp3Material, 2.3, -.96, -1.9)

    // Money
    createMoney(scene)

    // Dices
    createDice(scene)

    // House
    createHouse(scene)

    camera.position.z = 4;
    camera.position.y = 2;
    camera.rotation.x = -0.3;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.update();

    const animate = function () {
        requestAnimationFrame( animate );
        controls.update();
        renderer.render( scene, camera );
    };
    animate();
}

main();
