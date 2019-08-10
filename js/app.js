document.addEventListener('DOMContentLoaded', function () {
  var map = L.map('mapa').setView([-12.003102, -77.113252], 1);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([-12.003102, -77.113252]).addTo(map)
    .bindPopup('Central de Perufire.<br> Siempre a tu disposición.')
    .openPopup();
})


const scroll = new SmoothScroll('.mynav a[href*="#"]', {
  speed: 800
});

const target = document.querySelector(".target");
const links = document.querySelectorAll(".mynav a");
const colors = ["#F74046", "#F74046", "#F74046", "#F74046"];

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", (e) => e.preventDefault());
  links[i].addEventListener("mouseenter", mouseenterFunc);
}

function mouseenterFunc() {
  for (let i = 0; i < links.length; i++) {
    if (links[i].parentNode.classList.contains("active")) {
      links[i].parentNode.classList.remove("active");
    }
    links[i].style.opacity = "0.8";
  }

  this.parentNode.classList.add("active");
  this.style.opacity = "1";

  const width = this.getBoundingClientRect().width;
  const height = this.getBoundingClientRect().height;
  const left = this.getBoundingClientRect().left + window.pageXOffset;
  const top = this.getBoundingClientRect().top + window.pageYOffset;
  const color = colors[Math.floor(Math.random() * colors.length)];

  target.style.width = `${width}px`;
  target.style.height = `${height}px`;
  target.style.left = `${left}px`;
  target.style.top = `${top}px`;
  target.style.borderColor = color;
  target.style.transform = "none";
}

window.addEventListener("resize", resizeFunc);

function resizeFunc() {
  const active = document.querySelector(".mynav li.active");

  if (active) {
    const left = active.getBoundingClientRect().left + window.pageXOffset;
    const top = active.getBoundingClientRect().top + window.pageYOffset;

    target.style.left = `${left}px`;
    target.style.top = `${top}px`;
  }
}

$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $('.navegacion').addClass('color-navegacion')
  } else {
    $('.navegacion').removeClass('color-navegacion')
  }
})