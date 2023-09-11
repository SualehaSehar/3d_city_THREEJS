
let loader = new THREE.TextureLoader();

export class Skybox{

    addSkBox(scene){
        const skyboxGeo = new THREE.SphereGeometry(
            250,
            32,
            16,
            1.727,
            6.283185307,
            1.26,
            3.6
        );
        const smaterial = new THREE.MeshBasicMaterial({
            map: loader.load("image/sky.jpeg"),
        });
        let skybox = new THREE.Mesh(skyboxGeo, smaterial);
        scene.add(skybox);

        skybox.rotation.x = -1 * Math.PI;
        skybox.position.set(180, -50, -180);
    }

}