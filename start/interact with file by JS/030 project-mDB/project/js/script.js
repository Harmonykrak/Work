/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


document.addEventListener("DOMContentLoaded", () => {
    'use strict';

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
            "Абракадабра"
        ]
    };

    const adv = document.querySelector(".promo__adv"),
        poster = document.querySelector(".promo__bg"),
        genre = poster.querySelector(".promo__genre"),
        movieList = document.querySelector(".promo__interactive-list"),
        addForm = document.querySelector(".add"),
        addInput = addForm.querySelector(".adding__input"),
        checkbox = addForm.querySelector("[type='checkbox']");

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let NewFilm = addInput.value;
        const favorite = checkbox.cheked;

        if(NewFilm) {

            if(NewFilm.lenght > 21){
                NewFilm = `${NewFilm.substring(0, 22)}...`;
            }

            movieDB.movies.push(NewFilm);

            newList(movieDB.movies, movieList);            
        }

        e.target.reset();
    });


    const delateAdv = (arr) => {
        arr.remove();
    };

    delateAdv(adv);

    genre.textContent = "Drama";
    poster.style.backgroundImage = 'url("img/bg.jpg")';

    const sortArr = (arr) => {
        arr.sort();
    };

    function newList(films, parent) {
        parent.innerHTML = "";

        sortArr(movieDB.movies);

        films.forEach((film, i) => {
            movieList.innerHTML += `
                <li class="promo__interactive-item">${i+1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                films.splice(i, 1);

                newList(films, parent);
            });
        });
    }
    
    newList(movieDB.movies, movieList);

}); 