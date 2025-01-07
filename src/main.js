const footerElement = document.querySelector("#footer-fixed");
const teslaCopyrightYear = document.querySelector(
  ".footer-wrapper-two ul li:nth-child(1)"
);

const currentYear = new Date().getFullYear();

teslaCopyrightYear.innerHTML = `<a href="https://www.tesla.com/about">Tesla &copy; ${currentYear}</a> `;

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
