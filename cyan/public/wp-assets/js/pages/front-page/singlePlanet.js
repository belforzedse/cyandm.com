import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { getCookie } from '../../modules/cookie-handler';
import gsap from 'gsap';

var singlePlanetThreeTL = undefined;
var singlePlanetThreeEclipseTL = undefined;

const SinglePlanet = () => {
	const loader = new THREE.TextureLoader();
	const textureURL = getCookie('textureURL');
	const singlePlanetThreeTL = gsap.timeline();
	const singlePlanetThreeEclipseTL = gsap.timeline();
	const lightPlanet = document.querySelector('.light-planet');

	loader.load(
		textureURL,
		(texture) => {
			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera(
				75,
				window.innerWidth / window.innerHeight,
				0.1,
				1000
			);

			const section = document.querySelector('.webGL');
			const renderer = new THREE.WebGLRenderer({ alpha: true });

			renderer.setSize(window.innerWidth, window.innerHeight, false);
			section.appendChild(renderer.domElement);

			const material = new THREE.MeshStandardMaterial({
				color: 0x00f0ff,
				transparent: true,
				opacity: 0,
				normalMap: texture,
			});

			const geometry = new THREE.SphereGeometry(2.25, 32, 16);
			material.roughness = 1;

			const sphere = new THREE.Mesh(geometry, material);
			scene.add(sphere);

			const ambientLight = new THREE.AmbientLight(0xffffff, 0.02);
			ambientLight.position.set(10, 10, 10);
			scene.add(ambientLight);

			const pointLight = new THREE.PointLight(0xffffff, 5, 15);
			pointLight.position.set(2, 5, 4);
			scene.add(pointLight);

			camera.position.z = 5;

			const controls = new OrbitControls(camera, renderer.domElement);
			controls.enabled = false;

			singlePlanetThreeTL.to(material, { opacity: 1 });
			singlePlanetThreeTL.from(sphere.scale, {
				z: 2,
				x: 2,
				y: 2,
				duration: 2,
			});

			singlePlanetThreeEclipseTL.to(pointLight, { intensity: 0 });
			singlePlanetThreeEclipseTL.fromTo(
				lightPlanet,
				{ opacity: 0 },
				{ opacity: 1 }
			);

			const animate = () => {
				controls.update();
				renderer.render(scene, camera);
				sphere.rotation.y += 0.005;

				requestAnimationFrame(animate);
			};

			animate();
		},
		undefined,
		(err) => {
			console.log('onLoadTexture', err);
		}
	);
};

export { singlePlanetThreeTL, singlePlanetThreeEclipseTL };
