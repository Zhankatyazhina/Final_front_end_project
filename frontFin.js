function popup(){
    document.querySelector(".popup").style.display="flex";
    $(".popup").animate({opacity:"1"},"slow"); 

    document.body.style.overflow="hidden";
}

function close_popup(){
    document.querySelector(".popup").style.display="none";
}


const scrollButton = document.querySelector(".scroll-top"); 
scrollButton.addEventListener("click", () => { 
  window.scrollTo(0, 0); 
});