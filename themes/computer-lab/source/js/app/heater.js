// ThreeJS
//
//
  // Find the latest version by visiting https://unpkg.com/three. The URL will
  // redirect to the newest stable release.
import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three/examples/jsm/loaders/GLTFLoader.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const canvas = document.getElementById('heater');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize( window.innerWidth, window.innerHeight );
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
console.log('foo');
camera.position.z = 5;
const controls = new OrbitControls(camera, renderer.domElement);

const gltfLoader = new GLTFLoader();
const light = new THREE.PointLight( 0xffffff, 10, 100 );
light.position.set( 5, 5, 5 );
scene.add( light );

gltfLoader.load(
  '/heater.gltf',
  function (gltf) {
    scene.add(gltf.scene)
  },
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);


const animate = function () {
  requestAnimationFrame( animate );
  controls.update();
  renderer.render( scene, camera );
};
animate();




// define([], function () {
//   // const scene = new THREE.Scene();
//   // const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
//   // const canvas = document.getElementById('heater');

//   // const renderer = new THREE.WebGLRenderer({ canvas });
//   // renderer.setSize( window.innerWidth, window.innerHeight );

//   // const geometry = new THREE.BoxGeometry();
//   // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//   // const cube = new THREE.Mesh( geometry, material );
//   // scene.add( cube );

//   // camera.position.z = 5;


//   // const animate = function () {
//   //   requestAnimationFrame( animate );

//   //   cube.rotation.x += 0.01;
//   //   cube.rotation.y += 0.01;

//   //   renderer.render( scene, camera );
//   // };

//   // animate();
// });
