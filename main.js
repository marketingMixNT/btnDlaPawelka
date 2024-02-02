window.addEventListener("scroll", function() {
    const button = document.querySelector(".btn");
    const buttonSecond = document.querySelector(".btn--second");
    
    if (window.scrollY > 100) { 
        button.style.display = "none";
        buttonSecond.style.display = "flex";
    } else {
        button.style.display = "flex";
        buttonSecond.style.display = "none";
    }
});
