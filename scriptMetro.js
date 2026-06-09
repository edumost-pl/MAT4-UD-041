// scriptMetro.js

const backBtn = document.getElementById("backToCity");

backBtn.addEventListener("click", () => {
    window.location.href = "index.html";
});

// 
document.querySelector('[data-class="4"]')
.addEventListener('click', () => {

    window.location.href = 'indexEkran3.html';

});

// mobile
const steps =
document.querySelectorAll('.mobile-step');

const buttons =
document.querySelectorAll('.next-btn');

let current = 0;

buttons.forEach(button => {

    button.addEventListener('click', () => {

        steps[current]
        .classList.remove('active');

        current++;

        if(current < steps.length){

            steps[current]
            .classList.add('active');

        }

    });

});