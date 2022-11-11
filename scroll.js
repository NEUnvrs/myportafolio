const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fadein')
        }
    });
});


const animation = document.querySelectorAll('#aboutanime');