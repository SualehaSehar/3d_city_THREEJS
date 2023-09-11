export class Lights {

    addL(scene) {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
        directionalLight.position.set(200, 500, 300);
        scene.add(directionalLight);

        const spotLight = new THREE.SpotLight(0xffffff);
        scene.add(spotLight);
        spotLight.position.set(-100, 100, 0);
        spotLight.castShadow = true;
        spotLight.angle = 0.2;
    }
}