gsap.to(".image_can", {
	ease: Expo.easeInOut,
	width: "100%",
	duration: 2,
	stagger: 2,
});

gsap.to(".text h1", {
	ease: Expo.easeInOut,

	stagger: 2,
	top: 0,
});

gsap.to(".text h1", {
	ease: Expo.easeInOut,
	delay: 2,
	stagger: 2,
	top: "-100%",
});
