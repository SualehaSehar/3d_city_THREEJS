import { Car } from "/js/car.js";
import { Trees } from "/js/trees.js";
import { Roads } from "/js/addRoads.js";
import { Buildings } from "/js/buildings.js";
import { Lights } from "/js/addLights.js";
import { Skybox } from "/js/skybox.js";
import { Factory } from "/js/factory.js";

// Create your scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

var factory = new Factory(200, 60, -400, 400);

initialize();
animate();

function initialize() {
  var skBox = new Skybox();
  skBox.addSkBox(scene);

  var light = new Lights();
  light.addL(scene);

  function grndf(s, l) {
    const grnd_geo = new THREE.PlaneGeometry(100, 100);
    var loader = new THREE.TextureLoader();
    const grnd_mat = new THREE.MeshBasicMaterial({
      map: loader.load("image/ground.jpg"),
      //color: 0xffff00,
      side: THREE.DoubleSide,
    });
    const grnd = new THREE.Mesh(grnd_geo, grnd_mat);
    scene.add(grnd);

    grnd.rotation.x = -0.5 * Math.PI;
    grnd.position.x = s;
    grnd.position.y = 0;
    grnd.position.z = l;

    var road = new Roads();
    road.roadf(s, l, scene);

    var car = new Car();
    const car1 = car.createCar(-19);
    scene.add(car1);
    const car2 = car.createCar(-220);
    scene.add(car2);

    var tree = new Trees();
    tree.trees(scene);

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
      if (i % 2 == 0) {
        building.b4(c[i][0], c[i][1]);
      } else if (i == 13) {
        building.tower(c[i][0], c[i][1]);
      } else if (i % 3 == 0) {
        building.b3(c[i][0], c[i][1]);
      } else if (i % 5 == 0) {
        building.b2(c[i][0], c[i][1]);
      } else if (i % 7 == 0) {
      } else {
        building.b1(c[i][0], c[i][1]);
      }
    }

    const animate1 = (t) => {
      car1.position.x = +t / 300;
      car2.position.x = +t / 300;
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
  factory.renderScene(scene);
}
