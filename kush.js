const buttons = document.querySelectorAll('.button'); // Select all elements with class 'button'
const body = document.querySelector('body'); // Select the body of the document

buttons.forEach(function(button) {
    console.log(button); // Log each button element (for debugging)

    // Example: Add an event listener to each button
    button.addEventListener('click', function(e) {
        console.log(e)
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }
    });
});

