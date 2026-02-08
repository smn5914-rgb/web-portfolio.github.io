/*
Name: Samiya Naseer
Student ID: 965953509
Course: IST 256
Assignment: Live Portfolio Page + DOM Activities
Submission Date: 02/08/26
Repo URL: https://smn5914-rgb.github.io/web-portfolio.github.io/
*/

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  console.log("main.js loaded ✅");

  // -------- Toggle sections --------
  const buttons = document.querySelectorAll(".toggle-btn");
  console.log("toggle buttons found:", buttons.length);

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.target;
      const section = document.getElementById(targetId);
      if (!section) return;

      const content = section.querySelector(".section-content");
      if (!content) return;

      content.classList.toggle("is-hidden");

      const title = section.querySelector("h2")?.textContent || "Section";
      btn.textContent = content.classList.contains("is-hidden")
        ? `Show ${title}`
        : `Hide ${title}`;
    });
  });

  // -------- Hover effect (project image) --------
  const projectImg = document.querySelector("#projects img");
  if (projectImg) {
    projectImg.addEventListener("mouseenter", () =>
      projectImg.classList.add("is-hovered")
    );
    projectImg.addEventListener("mouseleave", () =>
      projectImg.classList.remove("is-hovered")
    );
  }

  // -------- Contact form feedback --------
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (form && status) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.elements["name"].value.trim();
      const email = form.elements["email"].value.trim();
      const message = form.elements["message"].value.trim();

      if (!name || !email || !message) {
        status.textContent = "Please fill in all fields.";
        status.style.color = "red";
        return;
      }

      status.textContent = `Thanks, ${name}! Your message has been sent.`;
      status.style.color = "green";
      form.reset();
    });
  }
});
