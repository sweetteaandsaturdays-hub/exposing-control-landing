(function () {
  var year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    };

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });
  }

  var briefForm = document.getElementById("brief-form");
  var briefStatus = document.getElementById("brief-form-status");
  if (briefForm) {
    briefForm.addEventListener("submit", function (event) {
      event.preventDefault();
      if (briefStatus) {
        briefStatus.textContent =
          "The Brief is not taking signups yet. This form is a preview only and does not send or store your email.";
      }
    });
  }
})();
