// ThreeJS
//
//
//
define(['three'], function (THREE) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  const canvas = document.getElementById('heater');

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setClearColor(0x000000, 0);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshStandardMaterial( { color: 'hsl(20, 100%, 50%)' } );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );
  const light = new THREE.PointLight( 0xffffff, 2, 100 );
  light.position.set( 5, 5, 5 );
  scene.add( light );
  const ambient = new THREE.AmbientLight( 0x404040 ); // soft white light
  scene.add( ambient );

  camera.position.z = 5;

  const animate = function () {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
  };

  animate();
});
