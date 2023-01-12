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
            else if(entry.target.classList == 'firstLetter'){
                entry.target.classList.add("first");
            }
            else if(entry.target.classList == 'secondLetterSection'){
                entry.target.classList.add("slide");
            }
            else if(entry.target.classList == 'secondLetter'){
                entry.target.classList.add("mid");
            }


            
        }
        else{
            entry.target.classList.remove('fadein');
            entry.target.classList.remove("upIn");
            entry.target.classList.remove("contactText");
            entry.target.classList.remove("leftSlideIn");
            entry.target.classList.remove("first");
            entry.target.classList.remove("slide");
            entry.target.classList.remove("mid");
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

    console.log(scrollToTop)
})

const animaElement = document.querySelectorAll(['.container', '.works', '.contacts_animation', '.icons', '.firstLetter', '.secondLetterSection', '.secondLetter']);
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