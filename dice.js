import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js';
import { getBoxGeometry, createInstance } from './box.js'


const shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

const createDiceSide = (number) => {
    const loader = new THREE.TextureLoader();
    const texture = loader.load(`assets/${number}.png`)
    return new THREE.MeshBasicMaterial({
        map: texture
    })
}

const createDiceMaterials = () => {
    const loader = new THREE.TextureLoader();
    var sides = [
        createDiceSide(1),
        createDiceSide(2),
        createDiceSide(3),
        createDiceSide(4),
        createDiceSide(5),
        createDiceSide(6)
    ]
    shuffle(sides)
    return sides

}

export const createDice = (scene) => {
    const white = 0xffffff

    const dice1Materials = createDiceMaterials()
    const dice2Materials = createDiceMaterials()
    const diceGeometry = getBoxGeometry(0.2,0.2,0.2)
    const dice1 = createInstance(scene, diceGeometry, dice1Materials, 1,1, -3)
    const dice2 = createInstance(scene, diceGeometry, dice2Materials, 1.3,1, -3)
}