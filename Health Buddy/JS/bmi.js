
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

function calculateBMI() {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  let result = document.getElementById("result");

  if (height > 0 && weight > 0) {
    let bmi = (weight / ((height / 100) ** 2)).toFixed(2);

    let status = "";
    if (bmi < 18.5) {
      status = "Underweight";
    } else if (bmi < 24.9) {
      status = "Normal";
    } else if (bmi < 29.9) {
      status = "Overweight";
    } else {
      status = "Obese";
    }

    result.innerHTML = `Your BMI is <span style="color:red">${bmi}</span> (${status})`;
  } else {
    result.innerHTML = `<span style="color:orange">Please enter valid height and weight</span>`;
  }
}
