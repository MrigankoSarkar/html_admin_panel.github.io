const chart = document.querySelector("#chart").getContext("2d");

// Create a new chart instance
new Chart(chart, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
    ],

    datasets: [
      {
        label: "BTC",
        data: [
          29374, 54522, 94546, 34167, 54839, 78481, 48484, 97518, 78744, 18755,
          61004,
        ],
        borderColor: "red",
        borderWidth: 2,
      },
      {
        label: "ETH",
        data: [
          48464, 88772, 10651, 74489, 53648, 10687, 64188, 26594, 87454, 24832,
          36844,
        ],
        borderColor: "blue",
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
  },
});

// Show or Hide Sidebar
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("aside");

menuBtn.addEventListener("click", () => {
  sidebar.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sidebar.style.display = "none";
});

// Change Theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  themeBtn.querySelector("span:first-child").classList.toggle("active");
  themeBtn.querySelector("span:last-child").classList.toggle("active");

  // Call a function to update the button color based on the theme
  logoutButtonColor();

  // Call a function to update the button color based on the theme
  updateButtonColor();
});

// ------------ Function to change UPDATE button color -------------

// Function to update button color based on the theme
function updateButtonColor() {
  const updateBtn = document.querySelector(".update-btn");
  const isDarkTheme = document.body.classList.contains("dark-theme");

  // Update the button color based on the theme
  if (isDarkTheme) {
    updateBtn.style.color = "#ffffff"; // White color for dark theme
  } else {
    updateBtn.style.color = ""; // Use the default color for light theme (black)
  }
}

// Initial call to set the button color based on the initial theme
updateButtonColor();

// Change Theme
const updateBtn = document.querySelector(".update-btn");

updateBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  updateBtn.querySelector("span:first-child").classList.toggle("active");
  updateBtn.querySelector("span:last-child").classList.toggle("active");

  // Call the updateButtonColor function when the theme changes
  updateButtonColor();
});

// ------------ Function to change LOGOUT button color -------------

// Function to update button color based on the theme
function logoutButtonColor() {
  const logoutBtn = document.querySelector(".logout-btn");
  const isDarkTheme = document.body.classList.contains("dark-theme");

  // Update logout button color based on the theme
  if (isDarkTheme) {
    logoutBtn.style.color = "#ffffff"; // White color for dark theme
  } else {
    logoutBtn.style.color = ""; // Use the default color for light theme (black)
  }
}

// Initial call to set the button color based on the initial theme
logoutButtonColor();

// Change Theme
const logoutBtn = document.querySelector(".logout-btn");

logoutBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default behavior of the anchor tag

  // Toggle the active class on the button
  logoutBtn.querySelector("span:first-child").classList.toggle("active");
  logoutBtn.querySelector("span:last-child").classList.toggle("active");

  // Call the logoutButtonColor function to update the button color based on the theme
  logoutButtonColor();
});
