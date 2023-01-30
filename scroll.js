const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting ) {
            if(entry.target.classList == 'container') {
                entry.target.classList.add("fadein");
            }
            else if(entry.target.classList == 'works'){
                entry.target.classList.add("upIn");
            }
            else if(entry.target.classList == 'contacts_animation'){
                entry.target.classList.add("contactText");
            }
            else if(entry.target.classList == 'icons'){
                entry.target.classList.add("leftSlideIn");
            }


            
        }
        else{
            entry.target.classList.remove('fadein');
            entry.target.classList.remove("upIn");
            entry.target.classList.remove("contactText");
            entry.target.classList.remove("leftSlideIn");
            entry.target.classList.remove("slide");
        }

    });
});

window.addEventListener("scroll", (e) =>{
    let scrollToTop = window.pageYOffset

    if (scrollToTop > 800){
        last.classList.add("showIt");
    }
    else{
        last.classList.remove("showIt");
    }

})

const animaElement = document.querySelectorAll(['.container', '.works', '.contacts_animation', '.icons', '.first', '.secondLetter']);
const last = document.querySelector(".lastPage")
animaElement.forEach((obs) => observer.observe(obs));

// jquery smooth scrolling

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });