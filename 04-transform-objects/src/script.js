import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// MESH POSITION
mesh.position.x = 0.7
mesh.position.y = - 0.6
mesh.position.z = 1
// mesh.position.set(0.7, - 0.6, 1)
// mesh.position.normalize() // will round properties to 1

// MESH SCALE
mesh.scale.x = 2
mesh.scale.y = 0.5
mesh.scale.z = 0.5
// mesh.scale.set(2, 0.5, 0.5)

// MESH ROTATION
mesh.rotation.reorder('YXZ') // prioritize the order in which the rotation will happen
mesh.rotation.y = Math.PI * 0.25
mesh.rotation.x = Math.PI * 0.25

// GROUPS
const group = new THREE.Group();
group.position.y = 1;
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 'blue' })
);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 'green' })
);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 'orange' })
);

cube2.position.x = -2;
cube3.position.x = 2;
group.add(cube1);
group.add(cube2);
group.add(cube3);


// Axes helper
const axesHelper = new THREE.AxesHelper(3) // the 3 represents the length of the helper

scene.add(axesHelper);

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)

// CAMERA POSITION
// camera.position.x = 1
// camera.position.y = 1
camera.position.z = 3

// LOOK AT
// camera.lookAt(new THREE.Vector3(0, 0, 0))
// camera.lookAt(mesh.position)

scene.add(camera)

// Testing METHODS
console.log({
  distance: mesh.position.distanceTo(camera.position),
  positionLength: mesh.position.length()
})

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)