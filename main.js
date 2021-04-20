
function getWebGL() {
    const canvas = document.querySelector('#glcanvas');
    const gl = canvas.getContext('webgl');
    if (!gl) {
        alert('Unable to initialize WebGL. Your browser or machine may not support it.');
        return;
    }
    return gl;
}

function main() {
    const gl = getWebGL()
    gl.clearColor(196.0/255.0, 221.0/255.0, 1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

main();
