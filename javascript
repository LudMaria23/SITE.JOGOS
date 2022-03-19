// Carrousel //
        var slideindex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            var i;
            var Slide = document.getElementByClassName("mySlides");

                IF (n > slides.length) (slideIndex = 1)
                IF (n < 1) (slideIndex = slides.length);

                    FOR (i = 0; i < slides.length; i++ ) {
                        slides[i].style.display = "none";
                    }
            slides[slidesIndex-1].style.display = "block";            
        }
