const stars = document.querySelectorAll('.icon-stars');
const starsValues = document.querySelector('#starsValues');

let currentValue = 0;

stars.forEach( star => {
    star.addEventListener('mouseover', () => {
        const value = star.getAttribute('data-star');
        addValue(value);
    });

    star.addEventListener('mouseout', () => {
        removeValue(); 
    });

    star.addEventListener('click', () => {
        const value = star.getAttribute('data-star');
        currentValue = value;
        starsValues.textContent = currentValue;
    })
});

const addValue = (value) => {
    for( let i = 0; i < stars.length; i++ ){
        i < value ? `${stars[i].classList.add('active')}` : `${stars[i].classList.remove('active')}`;
    }
}

const removeValue = () => {
    stars.forEach( star => {
        star.classList.remove('active');
    });
    addValue(currentValue)
}