"use strict";

const section = document.getElementById("abc");
const box = document.getElementById("box");
const eye1 = document.querySelector(".eye1");
const eye2 = document.querySelector(".eye2");
const mouth = document.querySelector(".mouth");
const butt = document.getElementById("butt");

section.addEventListener("mousemove", (e) => {
	let x = e.pageX;
	let y = e.pageY;
	let posX = x / innerWidth;
	let posY = y / innerHeight;
	eye1.style.transform = `translate(${posX * 70}px,${posY * 70}px)`;
	eye2.style.transform = `translate(${posX * 70}px,${posY * 70}px)`;
});

box.addEventListener("mouseenter", () => {
	mouth.classList.add("active");
});
box.addEventListener("mouseleave", () => {
	mouth.classList.remove("active");
});
