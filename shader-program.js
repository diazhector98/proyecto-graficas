 // Vertex shader program

 const vsSource = `
 attribute vec4 aVertexPosition;
 uniform mat4 uModelViewMatrix;
 uniform mat4 uProjectionMatrix;
 void main() {
   gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
 }
`;

// Fragment shader program

const fsSource = `
 void main() {
   gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
 }
`;


export function initShaderProgram(gl) {
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

    // Create the shader program

    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    // If creating the shader program failed, alert

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
        return null;
    }

    return shaderProgram;
}
