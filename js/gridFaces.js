
var gwidth, gdepth, Dwx, Dwz, color, geometry,scene;

export class GridF {

    constructor(gw, gd, Dx, Dz, color1,sc) {
        gwidth = gw;
        gdepth = gd;
        Dwx = Dx;
        Dwz = Dz;
        color = new THREE.Color(color1);
        scene=sc;
        geometry = new THREE.BufferGeometry();

    }

    drawGrid() {
        var vertices = [];

        for (var z = 0; z < Dwz + 1; z++) {

            for (var x = 0; x < Dwx + 1; x++) {
                var xx = -(gwidth / 2) + (x * (gwidth / Dwx));
                var y = 0.0;
                var zz = -(gdepth / 2) + (z * (gdepth / Dwz));
                vertices.push(xx,y,zz);
            }
        }

        const vertice = Float32Array.from(vertices);
        
        geometry.addAttribute('position', new THREE.BufferAttribute(vertice, 3))
        console.log(geometry.getAttribute('position'));

        this.applyFaces();
        const material = new THREE.MeshBasicMaterial({ color: color });
        const grid = new THREE.Mesh(geometry, material);
        console.log(grid);
        return grid;
    }

    applyFaces() {
        var indices = [];
        for (var z = 0; z < Dwz; z++) {
            for (var x = 0; x < Dwx; x++) {
                //triangle 1 
                var tx1 = (x + z * (Dwx + 1));
                var ty1 = (x + (z + 1) * (Dwx + 1));
                var tz1 = ((x + 1) + z * (Dwx + 1));

                indices.push(tx1, ty1, tz1 );

                //T2
                var tx2 = tz1;
                var ty2 = ty1;
                var tz2 = ((x + 1) + (z + 1) * (Dwx + 1));
                indices.push(tx2, ty2 , tz2 );

            }
        }
        geometry.setIndex(indices);
        console.log(indices, z);

    }


}