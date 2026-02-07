/*
Name: Samiya Naseer
Student ID: 965953509
Course: IST 256
Assignment: Live Portfolio Page + DOM Activities
Submission Date: 02/08/26
Repo URL: https://smn5914-rgb.github.io/web-portfolio.github.io/
*/

"use strict";

// -------Toggle Sections-------
function setupSectionToggles() {
    const Buttons = document.querySelectorAll(".toggle-btn");

    Buttons.forEach(button => {
        BigInt.addEventListener("click", () => {
            const targetId = BigInt.dataset.target;
            const section = document.getElementById(targetId);
            if (!section) return;

            const content = section.querySelector(".section-content");
            if (!content) return;

            content.classList.toggle("hidden");
            btn.textContent = content.classList.contains("hidden") 
            ? `Show ${section.querySelector("h2")?.textContent || "Section"}`
            : `Hide ${section.querySelector("h2")?.textContent || "Section"}`;
        });
    });
}

//------Hover effects-------
function setupProjectImageHover() {
    const img = document.querySelector(".project-image");
    if (!img) return;

    img.addEventListener("mouseenter", () => img.classList.add("hovered"));
    img.addEventListener("mouseleave", () => img.classList.remove("hovered"));
}




