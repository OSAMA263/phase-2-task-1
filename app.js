document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar-links a");
  const sections = document.querySelectorAll("section[id]");
  const accordionToggler = document.querySelectorAll(".toggle-accordion");
  const form = document.querySelector("#subscribe-form");
  const menuBtn = document.querySelector("#menu-btn");

  // active navlink onclick
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((link) => link.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // active link when section inview port
  function spyActiveLink() {
    let scrollPosition = window.scrollY + 200;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  // handle accordion functionality
  accordionToggler.forEach((toggler) => {
    toggler.addEventListener("click", () => {
      const content = toggler.nextElementSibling;
      toggler.classList.toggle("active");
      if (toggler.classList.contains("active")) {
        content.style.height = content.scrollHeight + "px";
      } else {
        content.style.height = 0;
      }
    });
  });

  // swiper slides review
  new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 40,
    breakpoints: {
      1630: {
        slidesPerView: 2,
      },
    },
    navigation: {
      nextEl: "#next-slide",
      prevEl: "#prev-slide",
    },
  });

  // handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.querySelector("input[type='email']").value;
    const popup = document.querySelector("#popup");
    popup.innerHTML = `
      <h2>Thank you for joining us</h2>
      <p>${email}</p>
    `;
    popup.style.transform = "translate(-50%,50%)";

    setTimeout(() => {
      popup.style.transform = "translate(-50%,-200%)";
    }, 3000);

    form.reset();
  });

  // navlinks menu toggle handler on small screens
  menuBtn.addEventListener("click", () => {
    const mobileNavMenu = document.querySelector("#mobile-menu");
    mobileNavMenu.classList.toggle("active");

    if (mobileNavMenu.classList.contains("active")) {
      mobileNavMenu.style.height = mobileNavMenu.scrollHeight +"px";
    } else {
      mobileNavMenu.style.height = 0;
    }
  });

  window.addEventListener("scroll", spyActiveLink);
});
