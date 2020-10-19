$( document ).ready(function() {
    const typed = new Typed('.element', {
    strings: ["Soy Karen Gonzalez"," Soy Programador de Paginas"],
        loop: true,
        typeSpeed: 90,
        backSpeed: 40,
        backDelay: 1500,
    });
    const appearOptions = {
        threshold: 1,
        rootMargin: "0px 0px -80px 0px"
    };
    const faders = document.querySelectorAll('.fade-in');
    const appearOnScroll = new IntersectionObserver (function(entries,appearOnScroll 
    ) {
        entries.forEach(entry => {
            console.log(entry)
            if (!entry.isIntersecting){
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
    appearOptions);
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    })
    
});