var camWidth = window.innerWidth / 4
var camHeight = window.innerHeight /4
var as = camWidth / camHeight;
var scene = new THREE.Scene();

// Camera 1:

var camera1 = new THREE.PerspectiveCamera(
    75,camWidth / camHeight,
    0.5, 1000
    );

camera1.position.set(-3,0,3);



// Camera 2

var camera2 = new THREE.OrthographicCamera(-3.2, 3.2, 2.4,-2.4,0.5,1000); 
camera2.position.set(2,2,2);
camera2.lookAt(0,0,0)
scene.add(camera2)

// Camera 3

var camera3 = new THREE.OrthographicCamera(-3.2, 3.2, 2.4,-2.4,0.5,1000); 
camera3.position.set(-2,0,2);
camera3.lookAt(0,0,0)
scene.add(camera3)

// Camera 4


var camera4 = new THREE.PerspectiveCamera(
    75, camWidth / camHeight,
    0.5, 1000
    );

camera4.position.set(0,-2,3);



var renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
});

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

//Cube
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshNormalMaterial({ color: 0xffffff });

var cube = new THREE.Mesh(geometry, material);


scene.add(cube);


function animate() {

    window.requestAnimationFrame(animate);
    cube.rotation.x += 0.01;

    // FOR CAMERA 1
    // First View Port
    renderer.setViewport(200,0,camWidth,camHeight);

    renderer.render(scene, camera1);
    

    //renderer.clearDepth();

    // Cutting For Second View Port
    renderer.setScissorTest(true);
    renderer.setScissor(
        200, 
        500, 
        camWidth,
        camHeight
    );
   

    // FOR CAMERA 2
    renderer.setViewport
    (
        200,
        500,
        camWidth,
        camHeight
        );

    renderer.render(scene, camera2);

   // renderer.setScissorTest(false);

   // Cutting For Third View Port

    renderer.setScissorTest(true);
    renderer.setScissor(
        700, 
        0, 
        camWidth,
        camHeight
    );
    
    // FOR CAMERA 3

    renderer.setViewport
    (
        700,
        0,
        camWidth,
        camHeight
        );

    renderer.render(scene, camera3);
    //renderer.setScissorTest(false);

    
   // Cutting For Forth View Port

   renderer.setScissorTest(true);
   renderer.setScissor(
       700, 
       500, 
       camWidth,
       camHeight
   );
   
   // FOR CAMERA 4

   renderer.setViewport
   (
       700,
       500,
       camWidth,
       camHeight
       );

   renderer.render(scene, camera4);
   renderer.setScissorTest(false);
}

animate();