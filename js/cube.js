
var color;
var indices;

let loader = new THREE.TextureLoader();

export class Cube {

    constructor(color1) {
        color = color1;
        this.setVertices();
    }

    setVertices() {
        var vertices = [
            -1, -1, 1,    //0
            1, -1, 1,    //1
            -1, 1, 1,     //2
            1, 1, 1,      //3
            -1, -1, -1,   //4
            1, -1, -1,   //5
            -1, 1, -1,    //6
            1, 1, -1,     //7
        ];

        var geometry = new THREE.BufferGeometry();
        const vertice = Float32Array.from(vertices);

        geometry.addAttribute('position', new THREE.BufferAttribute(vertice, 3))
        console.log(geometry.getAttribute('position'));

        this.drawCube(geometry);

    }
    drawCube(geometry) {
        indices = [
            0, 3, 2,    //front 0
            0, 1, 3,

            1, 7, 3,    //right 6
            1, 5, 7,

            5, 6, 7,    //back 12
            5, 4, 6,

            4, 2, 6,    //left 18
            4, 0, 2,

            2, 7, 6,    //top 24
            2, 3, 7,

            4, 1, 0,    //bottom 30
            4, 5, 1,

        ];

        geometry.setIndex(indices);

        geometry.clearGroups();
        // start, count, material index
        geometry.addGroup(0, 6, 0);
        geometry.addGroup(6, 6, 1);
        geometry.addGroup(12, 6, 2);
        geometry.addGroup(18, 6, 3);
        geometry.addGroup(24, 6, 4);
        geometry.addGroup(30, 6, 5);

        var materials = [
            new THREE.MeshBasicMaterial({ color: "red" }),
            new THREE.MeshBasicMaterial({ color: "green" }),
            new THREE.MeshBasicMaterial({ color: "blue" }),
            new THREE.MeshBasicMaterial({ color: "cyan" }),
            new THREE.MeshBasicMaterial({ color: "magenta" }),
            new THREE.MeshBasicMaterial({ color: "yellow" })
        ];

        //const material = new THREE.MeshBasicMaterial({ vertexColors: THREE.FaceColors });
        const cube = new THREE.Mesh(geometry, materials);

        return cube;
    }


    shaderMesh(x, y, z, s) {
        var geometry = new THREE.BufferGeometry();
    
        var vertices = new Float32Array([
            -x, -y, z,    //0
            x, -y, z,    //1
            -x, y, z,     //2
            x, y, z,      //3
            -x, -y, -z,   //4
            x, -y, -z,   //5
            -x, y, -z,    //6
            x, y, -z    //7
        ]);
    
        geometry.setIndex([indices]);


        let material;
        geometry.addAttribute("position", new THREE.BufferAttribute(vertices, 3));
        
        if (s == 1) {
          material = new THREE.MeshBasicMaterial({
            side: THREE.DoubleSide,
          });
        } else {
          material = new THREE.MeshBasicMaterial({
            side: THREE.DoubleSide,
          });
        }
        const mesh = new THREE.Mesh(geometry, material);
        
        //scene.add(mesh);
        //mesh.position.set(k1, 10.2, k2);

        return mesh;
      }

}