
  (() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

(() => {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");

    const scrollLockMethod = !isMenuOpen
      ? "disableBodyScroll"
      : "enableBodyScroll";
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();


// () => {
//   const mobileMenu2 = document.querySelector(".js-menu-container2");
//   const openMenuBtn2 = document.querySelector(".js-open-menu2");
//   const closeMenuBtn2 = document.querySelector(".js-close-menu2");

//   const toggleMenu2 = () => {
//     const isMenuOpen2 =
//       openMenuBtn2.getAttribute("aria-expanded") === "true" || false;
//     openMenuBtn2.setAttribute("aria-expanded", !isMenuOpen2);
//     mobileMenu2.classList.toggle("is-open2");

//     const scrollLockMethod2 = !isMenuOpen2
//       ? "disableBodyScroll2"
//       : "enableBodyScroll2";
//     bodyScrollLock2[scrollLockMethod2](document.body);
//   };

//   openMenuBtn2.addEventListener("click", toggleMenu2);
//   closeMenuBtn2.addEventListener("click", toggleMenu2);

//   // Close the mobile menu on wider screens if the device orientation changes
//   window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
//     if (!e.matches) return;
//     mobileMenu2.classList.remove("is-open2");
//     openMenuBtn2.setAttribute("aria-expanded", false);
//     bodyScrollLock2.enableBodyScroll2(document.body);
//   });
// };