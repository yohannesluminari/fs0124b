// document.addEventListener('DOMContentLoaded', () => {
//     const file = document.querySelector('.file');
//     const container = document.querySelector('.container');
//     const containerWidthInches = 2; // Larghezza del contenitore in pollici
//     const containerHeightInches = 2; // Altezza del contenitore in pollici
    
//     const dpi = window.devicePixelRatio * 96; // Densità dei pixel del dispositivo
//     const containerWidth = containerWidthInches * dpi; // Larghezza del contenitore in pixel
//     const containerHeight = containerHeightInches * dpi; // Altezza del contenitore in pixel
//     const radius = Math.min(containerWidth, containerHeight) / 2; // Raggio del cerchio
    
//     let angle = 0; // Angolo iniziale
    
//     setInterval(() => {
//         const x = containerWidth / 2 + Math.cos(angle) * radius; // Calcolo della coordinata X
//         const y = containerHeight / 2 + Math.sin(angle) * radius; // Calcolo della coordinata Y
        
//         file.style.transition = 'transform 0.5s ease'; // Aggiungiamo una transizione
//         file.style.transform = `translate(${x}px, ${y}px)`; // Applichiamo la traslazione
        
//         angle += Math.PI / 180; // Incrementiamo l'angolo (1 grado) per il prossimo punto sul cerchio
//         if (angle >= Math.PI * 2) {
//             angle = 0; // Reset dell'angolo quando si completa un giro completo (360 gradi)
//         }
//     }, 30); // Aggiorniamo ogni 30 millisecondi per un movimento più fluido
// });

// Inizializza la scena
const scene = new THREE.Scene();

// Inizializza la fotocamera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Inizializza il renderer
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') });
renderer.setSize(window.innerWidth, window.innerHeight);

// Carica l'immagine
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('img/home.png');

// Crea il materiale con shader
const shaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
        texture: { value: texture },
        time: { value: 0 }
    },
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform sampler2D texture;
        uniform float time;
        varying vec2 vUv;
        void main() {
            vec2 uv = vUv;
            uv.x += sin(uv.y * 10.0 + time * 2.0) * 0.02;
            gl_FragColor = texture2D(texture, uv);
        }
    `
});

// Crea il cubo con l'immagine e il materiale shader
const geometry = new THREE.PlaneGeometry(2, 2);
const cube = new THREE.Mesh(geometry, shaderMaterial);
scene.add(cube);

// Funzione per l'animazione
function animate() {
    requestAnimationFrame(animate);
    cube.material.uniforms.time.value += 0.01;
    renderer.render(scene, camera);
}

animate();
