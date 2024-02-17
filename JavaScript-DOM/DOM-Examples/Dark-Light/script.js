// const body = document.querySelector("body"),
//   sidebar = body.querySelector("nav"),
//   toggleBtn = body.querySelector(".toggle"),
//   searchBtn = body.querySelector(".search-box"),
//   modeSwitch = body.querySelector(".toggle-switch"),
//   modeText = body.querySelector(".mode-text");

// toggleBtn.addEventListener("click", () => {
//   sidebar.classList.toggle("close");

// });

// searchBtn.addEventListener("click", () => {
//   sidebar.classList.remove("close");
// });

// modeSwitch.addEventListener("click", () => {
//   body.classList.toggle("dark");

//   if (body.classList.contains("dark")) {
//     modeText.innerText = "Dark Mode";
//   }
//    else {
//     modeText.innerText = "Light Mode";
//   }
// });

const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggleBtn = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

// Local storage'dan kaydedilmiş moda bakarak sayfa yüklenirken modu ayarla
window.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("mode");
  if (savedMode === "dark") {
    body.classList.add("dark");
    modeText.innerText = "Dark Mode";
  }
});

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Dark Mode";
    localStorage.setItem("mode", "dark"); // Dark moda geçiş yapıldığında kaydet
  } else {
    modeText.innerText = "Light Mode";
    localStorage.setItem("mode", "light"); // Light moda geçiş yapıldığında kaydet
  }
});