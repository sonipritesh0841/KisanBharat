// progress bar code
window.onscroll = function () {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}



//scroll top button
const scrollToTopButton = document.querySelector(".scroll-to-top");
const scrollThreshold = 500;

// Function to scroll to the top of the page
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

// Function to check if the user has scrolled down enough to show the scroll to top button
const checkScrollPosition = () => {
    if (window.scrollY > scrollThreshold) {
        scrollToTopButton.classList.remove("hidden");
    } else {
        scrollToTopButton.classList.add("hidden");
    }
};

// Set up event listener for scrolling to the top
scrollToTopButton.addEventListener("click", scrollToTop);

// Set up event listener for checking the scroll position
window.addEventListener("scroll", checkScrollPosition);

// Check the scroll position initially
checkScrollPosition();