import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1
// mesh.position.set(0.7, -0.6, 1)
// scene.add(mesh)
const group = new THREE.Group()
group.position.y = 1
group.scale.y = 1.5
group.rotation.y = 1


scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x9a00c4 })
)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x004ccf})
)

cube1.position.set(-1.5,0,0)
cube3.position.set(1.5,0,0)


group.add(cube1)
group.add(cube2)
group.add(cube3)

//mesh.position.length() gives distance between center to object
//mesh.position.distanceTo(camera.position) gives distance between camera and object
//mesh.position.normalize() takes vector and reduces it to 1

// Scale
// mesh.scale.x = 2
// mesh.scale.y = .5
// mesh.scale.z = .5
// mesh.scale.set(2, .5, .5)

// Rotation
// mesh.rotation.reorder('YXZ')
// mesh.rotation.y = Math.PI * .25
// mesh.rotation.x = Math.PI * .25

// Axes Helper
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

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
camera.position.z = 3
scene.add(camera)

// camera.lookAt(mesh.position)
// mesh.position is a Vector3

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)