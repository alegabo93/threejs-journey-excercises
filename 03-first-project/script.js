import * as THREE from 'three';

// get the canvas from html
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Object - mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'red' });
const mesh = new THREE.Mesh(geometry, material);

// Add mesh to the scene
scene.add(mesh);

// Camera
const sizes = {
  height: 600,
  width: 800
};
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

// Add camera to the scene
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);