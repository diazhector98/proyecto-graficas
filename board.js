import { getBoxGeometry, createInstance } from './box.js'

export const createBoard = (scene) => {
    const white = 0xffffff
    const boardGeometry = getBoxGeometry(5,0.1,5);
    const board = createInstance(scene, boardGeometry, white, 0,0, -4)
    return board
} 