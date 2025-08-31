document.addEventListener("DOMContentLoaded", function() {
  const menuBtn = document.getElementById("menuBtn");
  const dropdown = document.getElementById("dropdownMenu");

  // Toggle menu on click
  menuBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    dropdown.classList.toggle("show");
    // Accessibility toggle
    menuBtn.setAttribute("aria-expanded", dropdown.classList.contains("show"));
  });

  // Close menu when clicking outside
  window.addEventListener("click", function() {
    dropdown.classList.remove("show");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});
