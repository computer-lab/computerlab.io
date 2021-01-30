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
camera.position.z = 1.5;
camera.position.y = 0.5;
camera.position.x = 0.3;
const controls = new OrbitControls(camera, renderer.domElement);

const gltfLoader = new GLTFLoader();
const light = new THREE.PointLight( 0xffffff, 10, 100 );
light.position.set( 5, 5, 5 );
scene.add(light);
const glow = new THREE.PointLight( 0xff6600, 2, 100 );
glow.position.set( 0, 0.2, 0 );
scene.add(glow);

gltfLoader.load(
  '/heater.gltf',
  function (gltf) {
    scene.add(gltf.scene)
  },
  // called while loading is progressing
  function ( xhr ) {
    console.log(( xhr.loaded / xhr.total * 100 ) + '% loaded');
  },
  // called when loading has errors
  function ( error ) {
    console.log(error);

  }
);

controls.enableZoom = false;
controls.enablePan = false;
controls.minAzimuthAngle = 1;
controls.maxPolarAngle = Math.PI / 2;


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
//   //   requestAnimationFrame( animate );

//   //   cube.rotation.x += 0.01;
//   //   cube.rotation.y += 0.01;

//   //   renderer.render( scene, camera );
//   // };

//   // animate();
// });
