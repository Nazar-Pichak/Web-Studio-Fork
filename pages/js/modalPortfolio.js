
(() => {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");

  const setAriaExpanded = (element, state) => {
    element.setAttribute("aria-expanded", state);
  };

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute("aria-expanded") === "true";
    setAriaExpanded(openMenuBtn, !isMenuOpen);
    mobileMenu.classList.toggle("is-open");

    const scrollLockMethod = isMenuOpen ? "enableBodyScroll" : "disableBodyScroll";
    if (scrollLockMethod === "disableBodyScroll") {
      const darkHeader = document.querySelector(".dark-header");
      const mobileSocialIcons = document.querySelectorAll(".mobile-icon");

      // Check if the header is dark, if so, add dark styles to the mobile menu and icons 
      if (darkHeader) {
        mobileMenu.classList.add("dark-menu-container");
        mobileSocialIcons.forEach(icon => {
          icon.classList.add("dark-icon-social-team");
        });

      } else {
        // If the header is not dark, remove dark styles from the mobile menu and icons
        mobileMenu.classList.remove("dark-menu-container");
        mobileSocialIcons.forEach(icon => {
          icon.classList.remove("dark-icon-social-team");
        });
      } 

      // Disable body scroll when the menu is open via css 
      document.body.style.overflow = "hidden";

    } else {
      // Enable body scroll when the menu is closed
      document.body.style.overflow = "auto";
    }
  };

  const closeMenuOnResize = (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    setAriaExpanded(openMenuBtn, false);
    document.body.style.overflow = "auto"; // Enable body scroll when the menu is closed
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);
  window.matchMedia("(min-width: 768px)").addEventListener("change", closeMenuOnResize);
})();


