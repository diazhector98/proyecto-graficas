import { getCubePositions } from './cube.js'
import { getSquarePositions } from './shapes/square.js'
import { initShaderProgram } from './shader-program.js'
import { drawScene } from './draw-scene.js'

main();

function main() {
    const gl = getWebGL()
    gl.clear(gl.COLOR_BUFFER_BIT);

    const shaderProgram = initShaderProgram(gl)
    const programInfo = getProgramInfo(gl, shaderProgram)
    const buffers = initBuffers(gl)
    drawScene(gl, programInfo, buffers)

    const cubePositions = getCubePositions()
}

function getWebGL() {
    const canvas = document.querySelector('#glcanvas');
    const gl = canvas.getContext('webgl');
    if (!gl) {
        alert('Unable to initialize WebGL. Your browser or machine may not support it.');
        return;
    }
    return gl;
}

function getProgramInfo(gl, shaderProgram) {
    return {
        program: shaderProgram,
        attribLocations: {
          vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
        },
        uniformLocations: {
          projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
          modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
        },
    }
}

function initBuffers(gl) {
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    // Now create an array of positions for the square.
    const positions = getSquarePositions()
    gl.bufferData(gl.ARRAY_BUFFER,
                    new Float32Array(positions),
                    gl.STATIC_DRAW);
    return {
        position: positionBuffer,
    };
}
  
