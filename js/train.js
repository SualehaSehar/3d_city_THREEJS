
export class Train {
  createGeometries() {
    const nose = new THREE.CylinderBufferGeometry(
      0.75 * 5,
      0.75 * 5,
      3 * 5,
      12 * 5
    );
    const cabin = new THREE.BoxBufferGeometry(1.5 * 5, 2 * 6, 2 * 5);
    const chimney = new THREE.CylinderBufferGeometry(0.5 * 5, 0.1 * 5, 0.3 * 5);
    const wheel = new THREE.CylinderBufferGeometry(
      0.4 * 4,
      0.4 * 4,
      1.75 * 4,
      16 * 4
    );
    wheel.rotateX(Math.PI / 2);

    return {
      nose,
      cabin,
      chimney,
      wheel,
    };
  }

  createMaterials() {
    const body = new THREE.MeshStandardMaterial({
      color: 0xff3333, // Red
      flatShading: true,
    });
    body.color.convertSRGBToLinear();

    const detail = new THREE.MeshStandardMaterial({
      color: 0x333333, // Gray
      flatShading: true,
    });
    detail.color.convertSRGBToLinear();

    return {
      body,
      detail,
    };
  }
  createMeshes() {
    const Train = new THREE.Group();

    // Train.position.set = (0, 0, 0);
    const materials = this.createMaterials();
    const geometries = this.createGeometries();

    const nose = new THREE.Mesh(geometries.nose, materials.body);
    nose.rotation.z = Math.PI / 2;
    nose.position.x = 10; //-1
    nose.position.y = 6;
    nose.position.z = -20;

    const cabin = new THREE.Mesh(geometries.cabin, materials.body);
    cabin.position.set(1, 8, -20); //1.5,0.4,0

    const chimney = new THREE.Mesh(geometries.chimney, materials.detail);
    chimney.position.set(15, 10, -20); //-2,0.9,0

    const smallWheelRear = new THREE.Mesh(geometries.wheel, materials.detail);
    smallWheelRear.position.set(15, 2, -20); //0,-0.5

    const smallWheelCenter = smallWheelRear.clone();
    smallWheelCenter.position.set(11, 2, -20); //-1,-0.5

    const smallWheelFront = smallWheelRear.clone();
    smallWheelFront.position.set(7, 2, -20); //-2,-0.5

    const bigWheel = smallWheelRear.clone();
    bigWheel.scale.set(2, 2, 1.5);
    bigWheel.position.set(1, 3, -20); //1.5,-0.1

    Train.add(
      nose,
      cabin,
      chimney,
      smallWheelRear,
      smallWheelCenter,
      smallWheelFront,
      bigWheel
    );
    return Train;
  }
}
