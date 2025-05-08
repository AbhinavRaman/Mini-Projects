$(document).ready(function() {
    let currentIndex = 0;
    const slides = $(".slide");
    const totalSlides = slides.length;

    // Show the current slide
    function showSlide(index) {
        slides.removeClass("active").eq(index).addClass("active");
    }

    // Next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    // Previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    // Automatic sliding
    setInterval(nextSlide, 3000);

    // Manual navigation
    $(".next").click(nextSlide);
    $(".prev").click(prevSlide);
});
