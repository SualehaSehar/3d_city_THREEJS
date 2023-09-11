
let loader = new THREE.TextureLoader();

export class Roads {

  roadf(s, l, scene) {


    const road_geo = new THREE.PlaneGeometry(100, 10);
    const road1_geo = new THREE.PlaneGeometry(10, 100);
    const road2_geo = new THREE.PlaneGeometry(10, 70);


    //----------------------- ROAD 1 -----------------------------------

    const road_mat = new THREE.MeshBasicMaterial({
      map: loader.load("image/road.jpg"),

      side: THREE.DoubleSide,
    });


    const road = new THREE.Mesh(road_geo, road_mat);


    road.rotation.x = -0.5 * Math.PI;
    scene.add(road); //0,0.5,-20

    road.position.set(s + 0, 0.5, l - 20);


    //----------------------- ROAD 2 -----------------------------------

    const road1_mat = new THREE.MeshBasicMaterial({
      map: loader.load("image/road1.jpg"),

      side: THREE.DoubleSide,
    });


    const road1 = new THREE.Mesh(road1_geo, road1_mat);


    road1.rotation.x = -0.5 * Math.PI;
    scene.add(road1); //30,0.3,0

    road1.position.set(s + 30, 0.3, l + 0);


    //----------------------- ROAD 3 -----------------------------------

    const road2 = new THREE.Mesh(road2_geo, road1_mat);


    road2.rotation.x = -0.5 * Math.PI;
    scene.add(road2);

    road2.position.set(s - 30, 0.3, 15);
  }
}