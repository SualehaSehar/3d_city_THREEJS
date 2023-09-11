import { Train } from "/js/train.js";
import { Car } from "/js/car.js";
import { Trees } from "/js/trees.js";
import { Roads } from "/js/addRoads.js";
import { Buildings } from "/js/buildings.js";
import { Lights } from "/js/addLights.js";
import { Skybox } from "/js/skybox.js";
import { OrbitControls } from "/js/OrbitControls.js";
import { GridF } from "/js/gridFaces.js";


var renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true,
});

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const loader = new THREE.TextureLoader();

// Create your scene
const scene = new THREE.Scene();
scene.background = loader.load("image/rainbow_up.png");

var w=window.innerWidth;
  var h=window.innerHeight;
var camWidth = w / 4;
var camHeight = h / 4;
var as = camWidth / camHeight;
var camera1 = new THREE.PerspectiveCamera(10, as, 0.5, 1000);

camera1.position.set(100, 200, 0);

// Camera 2

var camera2 = new THREE.PerspectiveCamera(75, as, 0.5, 1000);
camera2.position.set(300, 30, -400);

scene.add(camera2);

// Camera 3

var camera3 = new THREE.PerspectiveCamera(75, as, 0.5, 1000);
camera3.position.set(300, 50, -400);

scene.add(camera3);

// Camera 4

var camera4 = new THREE.PerspectiveCamera(75, as, 0.5, 1000);

camera4.position.set(30, 20, -100);

const orbit1 = new OrbitControls(camera1, renderer.domElement);
orbit1.update();
const orbit2 = new OrbitControls(camera4, renderer.domElement);
orbit2.update();
const orbit3 = new OrbitControls(camera3, renderer.domElement);
orbit3.update();
const orbit4 = new OrbitControls(camera2, renderer.domElement);
orbit4.update();

initialize();
animate();
var gg;
var car1 ; 
var car2,train1;
function initialize() {
  var skBox = new Skybox();
  //skBox.addSkBox(scene);

  var light = new Lights();
  light.addL(scene);



  function grndf(s, l) {
    
      var gri = new GridF(100, 100, 100, 100, "green", scene);
      gg = gri.drawGrid();
      scene.add(gg);

      
      gg.position.x = s;
      gg.position.y = 0;
      gg.position.z = l;

      var road = new Roads();
      road.roadf(s, l, scene);

      var car = new Car();
      car1 = car.createCar(-320);
      scene.add(car1);
      car2 = car.createCar(-220);
      scene.add(car2);

      var tree = new Trees();
      const tree1 = tree.trees(scene);
      //scene.add(tree1);

      var train = new Train();
      train1 = train.createMeshes();
      scene.add(train1);

      const rows = 22;
      const col = 2;
      const c = [];
      var z0 = l - 35,
        z1 = l - 5,
        z2 = l + 13,
        z3 = l + 35;
      var x0 = s + -40,
        x1 = s + -40;

      for (let i = 0; i < rows; i++) {
        c[i] = [];
        for (let j = 0; j < col; j++) {
          if (j == 0) {
            if (i % 5 == 0) {
              x0 = s - 40;
            } else {
              x0 += 20;
            }
            c[i][j] = x0;
          } else {
            if (i < 5) {
              c[i][j] = z0;
            } else if (i < 10) {
              c[i][j] = z1;
            } else if (i < 15) {
              c[i][j] = z2;
            } else {
              c[i][j] = z3;
            }
          }
        }
      }

      var building = new Buildings(scene);
      for (var i = 0; i < 21; i++) {
        if (i % 6 == 0) {
          building.b4(c[i][0], c[i][1]);
        } else if (i == 13) {
          building.tower(c[i][0], c[i][1]);
        } else if (i % 4 == 0) {
          building.b3(c[i][0], c[i][1]);
        } else if (i % 5 == 0) {
          building.b2(c[i][0], c[i][1]);
        } else if (i % 3 == 0) {
          building.b1(c[i][0], c[i][1]);
        } else {
          building.b5(c[i][0], c[i][1]);
        }
      }

    

    const animate1 = (t) => {
      car1.position.x = +t / 300;
      car2.position.x = +t / 300;
      train1.position.x = +t / 300;

      window.requestAnimationFrame(animate1);
    };
    animate1(30000);
  }

  var g = 0,
    p = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      grndf(g, p);
      g += 100;
    }
    p -= 100;
    g = 0;
  }
}

function animate() {
  
  window.requestAnimationFrame(animate.bind(this));
  renderer.setViewport(0, 0, w/2, h/2 );

  renderer.render(scene, camera1);


  // Cutting For Second View Port
  renderer.setScissorTest(true);
  renderer.setScissor(0, h/2, w/2, h/2 );

  // FOR CAMERA 2
  renderer.setViewport(0, h/2, w/2,h/2 );

  renderer.render(scene, camera2);


  // Cutting For Third View Port

  renderer.setScissorTest(true);
  renderer.setScissor(w/2, 0, w/2, h/2 );

  // FOR CAMERA 3

  renderer.setViewport(w/2, 0, w/2, h/2 );
  renderer.render(scene, camera3);

  // Cutting For Forth View Port

  renderer.setScissorTest(true);
  renderer.setScissor(w/2, h/2, w/2, h/2 );

  // FOR CAMERA 4

  renderer.setViewport(w/2, h/2, w/2, h/2 );

  renderer.render(scene, camera4);
  renderer.setScissorTest(false);

}

