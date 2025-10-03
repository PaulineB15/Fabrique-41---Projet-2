const form = document.getElementById("contact-form");
const confirmation = document.getElementById("confirmation-message");

if (form && confirmation) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    confirmation.classList.add("show");

    form.reset();
    
    setTimeout(() => {
      confirmation.classList.remove("show");
    }, 4000);
  });
}

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
  menu.classList.toggle('show'); 
});

