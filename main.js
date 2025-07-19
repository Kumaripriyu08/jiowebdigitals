// active navber
let anv = document.querySelector(".navigation-wrap");
window.onscroll = function (){
    if(document.documentElement.scrollTop >20){
        nav.classList.add("scroll-on");
    } else {
        nav.classList.add("scroll-on");
            }
}


// nav hide

let navBar  = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

//counter design



//Section Testimonial

const items = document.querySelectorAll('.item');
  let index = 0;

  setInterval(() => {
    items[index].classList.remove('active');
    index = (index + 1) % items.length;
    items[index].classList.add('active');
  }, 1500); // Show next every 1.5 seconds


