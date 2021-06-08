 // Hector Diaz, Jesús Lozano, Adrián Hinojosa, 
// This is the main file which loads images and imports base components that will be used for the game's setup.
import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/examples/jsm/controls/OrbitControls.js';
import { camera } from './camera.js'
import { light } from './light.js'
import { getBoxGeometry, createInstance } from './box.js'
import { createBoard } from './board.js'
import { createMoney } from './money.js'
import { createDice } from './dice.js'
import { createHouse } from './house.js'

const createCardsMaterials = (texture, color) => {
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
    const scTexture = loader.load('assets/community.jpg')
    const scColor = 0x0000FF
    const scMaterials = createCardsMaterials(scTexture, scColor)
    const specialCardsGeometry = getBoxGeometry(.60,0.15,.90);
    const specialCards = createInstance(scene, specialCardsGeometry, scMaterials, -1,-0.37, -3)

    // Chance Cards
    const chanceTexture = loader.load('assets/chance.jpg')
    const chanceColor = 0xFFA500
    const chanceMaterials = createCardsMaterials(chanceTexture, chanceColor)
    const chanceCardsGeometry = getBoxGeometry(.60, 0.15, .90);
    const chanceCards = createInstance(scene, chanceCardsGeometry, chanceMaterials, 0, -0.37, -3)

    //player piece 1
    let playerPiecePositionX = 2;
    const ppMaterial = new THREE.MeshPhongMaterial({color: green})
    const ppGeometry = getBoxGeometry(.15, .4, .15);
    const playerPiece = createInstance(scene, ppGeometry, ppMaterial, playerPiecePositionX, -0.96, -1.9)

    //player piece 2
    let playerPiece1PositionX = 2.3
    const pp1Material = new THREE.MeshPhongMaterial({color: blue})
    const pp1Geometry = getBoxGeometry(.15, .4, .15);
    const playerPiece1 = createInstance(scene, pp1Geometry, pp1Material, playerPiece1PositionX, -.8, -2.15)
    

    //player piece 3
    let playerPiece2PositionX = 2;
    const pp2Material = new THREE.MeshPhongMaterial({color: white})
    const pp2Geometry = getBoxGeometry(.15, .4, .15);
    const playerPiece2 = createInstance(scene, pp2Geometry, pp2Material, playerPiece2PositionX, -.8, -2.15)

    //player piece 4
    let playerPiece3PositionX = 2.3;
    const pp3Material = new THREE.MeshPhongMaterial({color: orange})
    const pp3Geometry = getBoxGeometry(.15, .4, .15);
    const playerPiece3 = createInstance(scene, pp3Geometry, pp3Material, playerPiece3PositionX, -.96, -1.9)

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
        if (playerPiecePositionX > -2.20) {
            playerPiecePositionX -= 0.01
        } else {
            if (playerPiece1PositionX > -0.45) {
                playerPiece1PositionX -= 0.01
            } else {
                if (playerPiece2PositionX > 0) {
                    playerPiece2PositionX -= 0.01
                } else {
                    if (playerPiece3PositionX > 0.9) {
                        playerPiece3PositionX -= 0.01
                    }
                }
            }
        }
        playerPiece.position.x = playerPiecePositionX
        playerPiece1.position.x = playerPiece1PositionX
        playerPiece2.position.x = playerPiece2PositionX
        playerPiece3.position.x = playerPiece3PositionX

        console.log({ playerPiecePositionX })
        requestAnimationFrame( animate );
        controls.update();
        renderer.render( scene, camera );
    };
    animate();
}

main();
