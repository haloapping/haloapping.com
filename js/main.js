const toggle = document.querySelector(".nav-toggle");
const navList = document.querySelector("#site-nav-list");

if (toggle && navList && Object.hasOwn(HTMLElement.prototype, "popover")) {
  const narrow = window.matchMedia("(max-width: 760px)");

  const sync = () => {
    if (narrow.matches) {
      navList.setAttribute("popover", "auto");
    } else {
      navList.removeAttribute("popover");
    }
  };

  navList.addEventListener("toggle", (event) => {
    toggle.setAttribute("aria-expanded", String(event.newState === "open"));
  });

  sync();
  narrow.addEventListener("change", sync);
}
