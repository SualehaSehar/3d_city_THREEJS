import { Cube } from '/js/cube.js';
import { Factory } from '/js/factory.js';


// Create your scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);


var factory = new Factory(2, 2, 5, 10);

initialize();
animate();


function initialize() {
  randomCubes();


}

var cube;
function randomCubes() {
  var c = new Cube('blue');
  cube = c.drawCube();
  var sx =Math.random() * 1 ;
  var sy =Math.random() * 1 ;
  var sz =Math.random() * 1 ;
  console.log(sx,sy);
  cube.scale.set(sx, sy, sz);
  var px =Math.random() * 10 - 2;
  var py =Math.random() * 10 - 2;
  console.log(px,py);
  cube.position.set(px,0,0);
  scene.add(cube);


  const hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
  hemiLight.color.setHSL( 0.6, 1, 0.6 );
  hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
  hemiLight.position.set( 0, 50, 0 );
  scene.add( hemiLight );

  const hemiLightHelper = new THREE.HemisphereLightHelper( hemiLight, 10 );
  scene.add( hemiLightHelper );



  const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);

}


function animate() {
  requestAnimationFrame(animate);
  //cube.rotation.y += 0.01;
  factory.renderScene(scene);
}

