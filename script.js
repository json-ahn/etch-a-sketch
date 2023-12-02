const total_squares = document.querySelector('#squares');



for(let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.setAttribute('id', 'square');
    total_squares.appendChild(square);
}

let clickEvent = () => {
    document.body.style.backgroundColor = "red";
}

let square_test = document.querySelectorAll('#square');

square_test.forEach(function(button) {
    button.addEventListener('mouseover', function() {
        button.style.backgroundColor = 'red';
    })
})
