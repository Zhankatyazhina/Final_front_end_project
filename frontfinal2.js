

function popup(){
    document.querySelector(".popup").style.display="flex";
    $(".popup").animate({opacity:"1"},"slow"); 
    document.body.style.overflow="hidden";
}

function close_popup(){
    document.querySelector(".popup").style.display="none";
    document.body.style.overflow="scroll";
}

// More 

let moreBtn = document.querySelector('.more__btn');
let more = document.querySelector('.more');
let linkformore = document.querySelector('.linkformore');

moreBtn.addEventListener('click', function() {
    more.style.display = "block";
    linkformore.style.display = "none";
});


const konec=document.querySelector(".konec");
const twosides = document.querySelector(".twosides");
const from =  document.getElementById("from");
const change =  document.getElementById("change");
const dateform = document.getElementById("dateFrom");
konec.addEventListener('click' , oneside);    
twosides.addEventListener('click', twoside);



function oneside(){
    console.log("hello");

        from.classList.add("remove");
        change.classList.add("remove");
        dateform.classList.add("remove");
        twosides.style.borderBottom = "none";
        konec.style.borderBottom = "solid 2px red";
        konec.style.borderBottomHeight ="7px";
}

function twoside() {
    console.log("helloooooo");
    from.classList.remove("remove");
    change.classList.remove("remove");
    konec.style.borderBottom = "none";

    twosides.style.borderBottom = "solid 2px red";
    twosides.style.borderBottomHeight ="7px";
}
    



const scrollButton = document.querySelector(".scroll-top"); 
scrollButton.addEventListener("click", () => { 
  window.scrollTo(0, 0); 
});


document.querySelector('.user__link').addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector('.user').classList.toggle('user__show');
});

document.querySelector('.user').addEventListener('click', function(e) {
    e.stopPropagation();
});