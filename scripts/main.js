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

//------Contact Form Submission Feedback-------
function setupContactForm() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
    if (!form || !status) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = form.elements["name"]?.value.trim();
        const email = form.elements["email"]?.value.trim();
        const message = form.elements["message"]?.value.trim();

        if (!name || !email || !message) {
            status.textContent = "Please fill in all fields.";
            status.style.color = "red";
            return;
        }

        status.textContent = `Thanks, $(name)! Your message has been sent.`;
        status.style.color = "green";
        form.reset();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setupSectionToggles();
    setupProjectImageHover();
    setupContactForm();
});




