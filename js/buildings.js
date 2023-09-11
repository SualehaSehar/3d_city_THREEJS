//import * as THREE from "three";
import { Cube } from "/js/cube.js";
let loader = new THREE.TextureLoader();

var cube = new Cube();
var scene;

export class Buildings {
  constructor(sc) {
    scene = sc;
  }

  b1(k1, k2) {
    //const mesh = cube.shaderMesh(5, 10, 5, 1);
    const meshgeo = new THREE.BoxGeometry(10, 20, 10);
    const material = new THREE.MeshBasicMaterial({ map: loader.load("image/nbuild.jpeg") });
    const mesh = new THREE.Mesh(meshgeo, material);

    scene.add(mesh);

    mesh.position.set(k1, 10.5, k2);
  }

  b2(k1, k2) {
    const mesh = cube.shaderMesh(5, 10, 5, 2);
    scene.add(mesh);
    mesh.position.set(k1, 10.2, k2);
  }

  b3(k1, k2) {
    const cb2geo = new THREE.CylinderGeometry(5, 5, 20, 32);
    const cb2mat = new THREE.MeshBasicMaterial({
      map: loader.load("image/building2.jpg"),
      //color: 0xff00000
    });
    const cb2 = new THREE.Mesh(cb2geo, cb2mat);
    scene.add(cb2); //0,10,8
    cb2.position.set(k1, 10.1, k2);
  }

  b4(k1, k2) {
    const cb4geo = new THREE.CylinderGeometry(5, 5, 20, 32);
    const cb4mat = new THREE.MeshBasicMaterial({
      map: loader.load("image/building4.jpg"),
    });
    const cb4 = new THREE.Mesh(cb4geo, cb4mat);
    scene.add(cb4); //5,10.1,-8
    cb4.position.set(k1, 10.1, k2);
  }
  b5(k1, k2) {
    //const mesh = cube.shaderMesh(5, 10, 5, 1);
    const meshgeo = new THREE.BoxGeometry(10, 20, 10);
    const material = new THREE.MeshBasicMaterial({ map: loader.load("image/building.jpg") });
    const mesh = new THREE.Mesh(meshgeo, material);

    scene.add(mesh);

    mesh.position.set(k1, 10.5, k2);
  }

  tower(k1, k2) {
    const cb3geo = new THREE.ConeGeometry(8, 30, 32);
    const cb3mat = new THREE.MeshBasicMaterial({
      map: loader.load("image/tower.jpg"),
      //color: 0x0000ff,
    });
    const cb3 = new THREE.Mesh(cb3geo, cb3mat);
    scene.add(cb3); //-5,15.1,-5
    cb3.position.set(k1, 15.1, k2);
  }
}
