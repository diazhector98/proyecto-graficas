import { getCubePositions } from './cube.js'
import { initShaderProgram } from './shader-program.js'

main();

function main() {
    const gl = getWebGL()
    gl.clearColor(196.0/255.0, 221.0/255.0, 1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    const shaderProgram = initShaderProgram(gl)
    const programInfo = getProgramInfo(gl, shaderProgram)

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
