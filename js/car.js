export class Car{
    // ----------------------CREATE WHEEL----------------------------
  createWheels() {
    const geometry = new THREE.BoxBufferGeometry(12 / 2, 12 / 2, 33 / 2);
    const material = new THREE.MeshLambertMaterial({ color: 0x333333 });
    const wheel = new THREE.Mesh(geometry, material);
    return wheel;
  }

  // ----------------------CREATE CAR ----------------------------
  createCar(z) {
    const car = new THREE.Group();

    const backWheel = this.createWheels();
    backWheel.position.y = 6 / 2;
    backWheel.position.x = -18 / 2;
    backWheel.position.z = z;
    car.add(backWheel);

    const frontWheel = this.createWheels();
    frontWheel.position.y = 6 / 2;
    frontWheel.position.x = 18 / 2;
    frontWheel.position.z = z;
    car.add(frontWheel);

    const main = new THREE.Mesh(
      new THREE.BoxBufferGeometry(60 / 2, 15 / 2, 30 / 2), // 0x78b14b
      new THREE.MeshLambertMaterial({ color: 0x000ff0 })
    );
    main.position.y = 12 / 2;
    main.position.z = z;
    car.add(main);

    const cabin = new THREE.Mesh(
      new THREE.BoxBufferGeometry(33 / 2, 12 / 2, 24 / 2),
      new THREE.MeshLambertMaterial({ color: 0xffffff })
    );
    cabin.position.x = -6 / 2;
    cabin.position.y = 25.5 / 2;
    cabin.position.z = z;
    car.add(cabin);

    return car;
  }


}