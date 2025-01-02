const footerElement = document.querySelector("#footer-fixed");
const teslaCopyrightYear = document.querySelector(
  ".footer-wrapper-two ul li:nth-child(1)"
);
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".overlay");
const body = document.querySelector("body");

const currentYear = new Date().getFullYear();

teslaCopyrightYear.innerHTML = `<a href="https://www.tesla.com/about">Tesla &copy; ${currentYear}</a> `;

document.querySelector(".modal-close-button").addEventListener("click", () => {
  body.classList.replace("popup-active", "popup-inactive");
  modal.classList.replace("active", "inactive");
  modalOverlay.classList.replace("active", "inactive");
});

document.querySelector(".learn-more").addEventListener("click", () => {
  body.classList.replace("popup-inactive", "popup-active");
  modal.classList.replace("inactive", "active");
  modalOverlay.classList.replace("inactive", "active");
});

window.onload = () => {
  if (window.scrollY >= 200) {
    footerElement.classList.add("footer-fixed-active");
  } else {
    footerElement.classList.remove("footer-fixed-active");
  }
};

window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    footerElement.classList.add("footer-fixed-active");
  } else {
    footerElement.classList.remove("footer-fixed-active");
  }
});
