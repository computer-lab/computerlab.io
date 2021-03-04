// ThreeJS
//
//
  // Find the latest version by visiting https://unpkg.com/three. The URL will
  // redirect to the newest stable release.
import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three/examples/jsm/loaders/GLTFLoader.js';
import { EffectComposer } from 'https://unpkg.com/three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'https://unpkg.com/three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'https://unpkg.com/three/examples/jsm/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'https://unpkg.com/three/examples/jsm/postprocessing/UnrealBloomPass.js';
const ENTIRE_SCENE = 0, BLOOM_SCENE = 3

const bloomLayer = new THREE.Layers()
bloomLayer.set(BLOOM_SCENE);

const params = {
  exposure: 1,
  bloomStrength: 1,
  bloomThreshold: 0.1,
  bloomRadius: 0.1,
  scene: "Scene with Glow"
}
const scene = new THREE.Scene();
const darkMaterial = new THREE.MeshBasicMaterial( { color: "black" } );
const materials = {};
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const canvas = document.getElementById('heater');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.z = 1.5;
camera.position.y = 0.5;
camera.position.x = 0.3;
const controls = new OrbitControls(camera, renderer.domElement);

const gltfLoader = new GLTFLoader();
const light = new THREE.PointLight( 0xffffff, 10, 100 );
light.position.set( 5, 5, 5 );
scene.add(light);
const glow = new THREE.PointLight( 0xe5373d, 2, 100 );
glow.position.set( 0, 0.01, 0 );
scene.add(glow);

gltfLoader.load(
  '/heater.gltf',
  function (gltf) {
    console.log('gltf:', gltf)
    gltf.scene.children[0].material.roughness = 0.9
    gltf.scene.children[8].material.emissive = new THREE.Color(0xc5373d)
    gltf.scene.children[8].material.emissiveIntensity = 2
    gltf.scene.children[8].layers.enable(BLOOM_SCENE)
    gltf.scene.children[5].layers.enable(BLOOM_SCENE)
    console.log('gltf.scene:', gltf.scene)

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

controls.enableZoom = true;
controls.enablePan = false;
controls.minAzimuthAngle = 1;
controls.maxPolarAngle = Math.PI / 2;



const renderScene = new RenderPass(scene, camera)

const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85)
bloomPass.threshold = params.bloomThreshold
bloomPass.strength = params.bloomStrength
bloomPass.radius = params.bloomRadius

const bloomComposer = new EffectComposer(renderer)
bloomComposer.renderToScreen = false
bloomComposer.addPass(renderScene)
bloomComposer.addPass(bloomPass)

const finalPass = new ShaderPass(
  new THREE.ShaderMaterial({
    uniforms: {
      baseTexture: { value: null },
      bloomTexture: { value: bloomComposer.readBuffer },
    },
    vertexShader: `
			varying vec2 vUv;
			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,
    fragmentShader: `
			uniform sampler2D baseTexture;
			uniform sampler2D bloomTexture;
			varying vec2 vUv;
			void main() {
				gl_FragColor = ( texture2D( baseTexture, vUv ) + vec4( 1.0 ) * texture2D( bloomTexture, vUv ) );
			}
      `,
    defines: {},
  }),
  "baseTexture"
)
finalPass.needsSwap = true

const finalComposer = new EffectComposer(renderer)
finalComposer.addPass(renderScene)
finalComposer.addPass(finalPass)

function render() {
  scene.traverse(darkenNonBloomed)
  bloomComposer.render()
  scene.traverse(restoreMaterial)
  finalComposer.render()
}


function darkenNonBloomed( obj ) {
  if (obj.isMesh && bloomLayer.test( obj.layers ) === false ) {
    materials[ obj.uuid ] = obj.material;
    obj.material = darkMaterial;
  }
}

function restoreMaterial( obj ) {
  if ( materials[ obj.uuid ] ) {
    obj.material = materials[ obj.uuid ];
    delete materials[ obj.uuid ];
  }
}

const animate = function () {
  requestAnimationFrame( animate )
  controls.update()
  render()
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
