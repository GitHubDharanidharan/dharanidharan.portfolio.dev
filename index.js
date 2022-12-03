document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:"smooth"
        })
    })
})


const navbarUl = document.querySelector(".navbar ul");

const navbarHamMenu = document.querySelector(".navbar span i");

function hamMenu(){
    if(navbarUl.classList.contains("hidden")){
        navbarUl.classList.remove("hidden");
    }else{
        navbarUl.classList.add("hidden");
    }
}

console.log(navbarUl);


navbarHamMenu.addEventListener('click',hamMenu);

