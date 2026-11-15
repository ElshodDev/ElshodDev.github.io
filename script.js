// --- 1. SAHNA, KAMERA VA RENDERER ---
const container = document.querySelector('#room-container') || document.body;
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    60, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000
);
camera.position.set(0, 10, 15);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
container.appendChild(renderer.domElement);

// --- 2. ORBIT CONTROLS ---
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.maxPolarAngle = Math.PI / 2 - 0.02;
controls.minDistance = 3;
controls.maxDistance = 12;

// --- 3. YORITISH VA SOYALAR ---
const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
directionalLight.position.set(5, 10, 7);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 2048;
directionalLight.shadow.mapSize.height = 2048;
directionalLight.shadow.camera.near = 0.5;
directionalLight.shadow.camera.far = 25;
scene.add(directionalLight);

// --- 4. KIRISH ANIMATSIYASI (Intro) ---
function playIntroAnimation() {
    if (typeof gsap !== 'undefined') {
        gsap.to(camera.position, {
            x: 0,
            y: 2.5,
            z: 5,
            duration: 2.5,
            ease: "power2.out",
            onUpdate: () => controls.update()
        });
    } else {
        camera.position.set(0, 2.5, 5);
        controls.update();
    }
}
playIntroAnimation();

// --- 5. 3D MODELNI YUKLASH VA INTERAKTIVLIK ---
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const interactiveObjects = [];

const loader = new THREE.GLTFLoader();
loader.load('room.glb', function (gltf) {
    scene.add(gltf.scene);

    gltf.scene.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });

    const monitor = gltf.scene.getObjectByName("ComputerMonitor"); 
    if (monitor) {
        monitor.userData = { url: "https://github.com/ElshodDev" };
        interactiveObjects.push(monitor);
    }
}, undefined, function (error) {
    console.error('Modelni yuklashda xatolik:', error);
});

// --- 6. BOSISH (CLICK) HODISASI ---
window.addEventListener('click', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(interactiveObjects, true);

    if (intersects.length > 0) {
        let clickedObject = intersects[0].object;
        
        let target = clickedObject;
        while (target && !target.userData?.url) {
            target = target.parent;
        }

        if (target && target.userData && target.userData.url) {
            window.open(target.userData.url, '_blank');
        }
    }
});

// --- 7. RESIZE ---
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// --- 8. ANIMATSIYA TSIKLI ---
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();
