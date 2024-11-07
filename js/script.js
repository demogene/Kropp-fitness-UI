// let slideIndex = 1;

// function currentSlide(n) {
//     slideIndex = n;
//     showSlide(slideIndex);
// }

// function nextSlide() {
//     slideIndex = (slideIndex % document.querySelectorAll('.mySlide').length) + 1;
//     showSlide(slideIndex);
// }

// function prevSlide() {
//     slideIndex = (slideIndex - 2 + document.querySelectorAll('.mySlide').length) % document.querySelectorAll('.mySlide').length + 1;
//     showSlide(slideIndex);
// }

// function showSlide(n) {
//     const dots = document.querySelectorAll('.dot');
//     const slides = document.querySelectorAll('.mySlide');

//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }

//     for (let i = 0; i < dots.length; i++) {
//         dots[i].classList.remove('active');
//     }

//     slides[n - 1].style.display = 'block';
//     dots[n - 1].classList.add('active');
// }

// document.querySelector('.prev').addEventListener('click', prevSlide);
// document.querySelector('.next').addEventListener('click', nextSlide);

// const dots = document.querySelectorAll('.dot');
// dots.forEach(function (dot, index) {
//     dot.addEventListener('click', function () {
//         currentSlide(index + 1);
//     });
// });

// showSlide(slideIndex);

var slideIndex = 1

function currentSlide(n) {
    showSlide(slideIndex = n)
}

function nextSlide(n) {
    showSlide(slideIndex += n)
}

function showSlide(n) {
    const dots = document.querySelectorAll('.dot');
    const slides = document.querySelectorAll('.mySlide');

    if (n < 1) {
        slideIndex = slides.length;
    }

    if (n > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Скрываем все слайды
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active"); // Убираем класс active с точек
    }

    slides[slideIndex - 1].style.display = 'block'; // Отображаем текущий слайд
    slides[slideIndex - 1].classList.add("fade"); // Добавляем эффект плавного перехода
    dots[slideIndex - 1].classList.add('active'); // Выделяем текущую точку

}


document.querySelector('.prev').addEventListener('click', function() {
    nextSlide(-1);
})

document.querySelector('.next').addEventListener('click', function() {
    nextSlide(1);
})


const dots = document.querySelectorAll('.dot');
dots.forEach(function(dot,index) {
    dot.addEventListener('click', function() {
        currentSlide(index + 1);
    });
})

showSlide(slideIndex);


