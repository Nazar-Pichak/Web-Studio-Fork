// This script adds a dark header effect when the user scrolls down the page.
// It changes the styles of various elements to create a consistent dark theme.
// The script listens for the scroll event and toggles classes based on the scroll position.
// This is useful for improving readability and aesthetics on websites with a lot of content.
// DomContentLoaded event ensures the script runs after the DOM is fully loaded.

document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    const darWeb = document.querySelector(".web");
    const currentList = document.querySelector(".current-list");
    const navigationItems = document.querySelectorAll(".navigation-item");
    const contactsItem1 = document.querySelector(".contacts-item1");
    const contactsItem2 = document.querySelector(".contacts-item2");
    const contactsItemMobile1 = document.querySelector(".contacts-item1-mobile");
    const contactsItemMobile2 = document.querySelector(".contacts-item2-mobile");
    const dropBtn = document.querySelector(".dropbtn");
    const dropContent = document.querySelector(".dropdown-content");

    document.addEventListener("scroll", function() {
        if (window.scrollY > 5) {
            header.classList.add("dark-header");
            darWeb.classList.add("dark-web");
            currentList.classList.add("dark-current-list");

            navigationItems.forEach(item => {
                item.classList.add("dark-navigation-item");
            });

            dropBtn.classList.add("dark-dropbtn");
            dropContent.classList.add("dark-dropdown-content");

            contactsItem1.classList.add("dark-contacts-item");
            contactsItem2.classList.add("dark-contacts-item");

            contactsItemMobile1.classList.add("dark-contacts-item-mobile");
            contactsItemMobile2.classList.add("dark-contacts-item-mobile");

        } else {
            darWeb.classList.remove("dark-web");
            header.classList.remove("dark-header");
            currentList.classList.remove("dark-current-list");

            navigationItems.forEach(item => {
                item.classList.remove("dark-navigation-item");
            });

            dropBtn.classList.remove("dark-dropbtn");
            dropContent.classList.remove("dark-dropdown-content");

            contactsItem1.classList.remove("dark-contacts-item");
            contactsItem2.classList.remove("dark-contacts-item");

            contactsItemMobile1.classList.remove("dark-contacts-item-mobile");
            contactsItemMobile2.classList.remove("dark-contacts-item-mobile");
        }
    });

});