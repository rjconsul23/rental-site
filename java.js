const header = document.querySelector( "header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY >0);
})
/*Para sa responsive*/
let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}
/*Para sa date*/

const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add('show')
    } else{
        entry.target.classList.remove('show')
    }

    });
});

const hiddenElements = document.querySelectorAll('.row') ; 
hiddenElements.forEach((el) => observer.observe(el));

/*Para sa date*/

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("reservationForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Reservation submitted successfully!");
        form.reset();
    });
});
ject. Additional







