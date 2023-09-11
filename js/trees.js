export class Trees{
    trees(scene) {
        var leaveDarkMaterial = new THREE.MeshLambertMaterial({ color: 0x91e56e });
        var leaveLightMaterial = new THREE.MeshLambertMaterial({ color: 0xa2ff7a });
        var stemMaterial = new THREE.MeshLambertMaterial({ color: 0x7d5a4f });
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var stem = new THREE.Mesh(geometry, stemMaterial);
        stem.position.set(-0.5, 0, 0);
        stem.scale.set(0.5, 2, 0.5);
        var squareLeave01 = new THREE.Mesh(geometry, leaveDarkMaterial);
        squareLeave01.position.set(-1, 1.6, 0.5);
        squareLeave01.scale.set(0.8, 1.3, 0.8);
        const tree = new THREE.Group();
        tree.add(squareLeave01);
        tree.add(stem);
        scene.add(tree);
        tree.position.set(0, 0, 0);
        tree.rotation.y = 1;
        tree.rotation.x = 0.75;
      }
}