/*
Name: Samiya Naseer
Student ID: 965953509
Course: IST 256
Assignment: Live Portfolio Page + DOM Activities
Submission Date: 02/08/26
Repo URL: https://smn5914-rgb.github.io/web-portfolio.github.io/
*/

"use strict";

console.log("main.js loaded ✅");

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".toggle-btn").forEach((btn) => {
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

  // -------- Theme toggle Functionality --------
  const themeToggle = document.getElementById("themeToggle");

  if (themeToggle) {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-theme");
      themeToggle.textContent = "Light Mode";
    } else {
      themeToggle.textContent = "Dark Mode";
    }

    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      const isDark = document.body.classList.contains("dark-theme");

      localStorage.setItem("theme", isDark ? "dark" : "light");
      themeToggle.textContent = isDark ? "Light Mode" : "Dark Mode";
    });
  }
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

  // -------- Character Counter --------
const messageBox = form?.elements["message"];
const charCount = document.getElementById("charCount");

if (messageBox && charCount) {
  const max = messageBox.maxLength || 500;

  const updateCount = () => {
    const current = messageBox.value.length;
    charCount.textContent = `${current}/${max}`;

    if (current >= max - 50) {
      charCount.classList.add("char-warning");
    } else {
      charCount.classList.remove("char-warning");
    }
  };

  updateCount();
  messageBox.addEventListener("input", updateCount);
}

  // --------Bootstrap Validation--------
  (() => {
    'use strict';

    const forms = document.querySelectorAll(".needs-validation");

    Array.from(forms).forEach((form) => {
      form.addEventListener('submit', event => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        }, false);
    });
  })();
  
