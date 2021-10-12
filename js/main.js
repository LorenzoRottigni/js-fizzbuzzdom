//main squares container
const container = document.getElementById('square-container');

// loop x 100
for (let i = 1; i <= 100; i++) {
    //new square
    let square = document.createElement("div");
    //append square in square-container
    container.appendChild(square);
    //append loop index to square
    square.textContent = i;
    //set default styles of square
    square.setAttribute('class', 'square d-flex justify-content-center align-items-center');
    //number divisible by 3
    if((i%3) === 0){
        square.textContent = "Fizz"
        square.style.backgroundColor = "#0cd6a1";
    }
    //number divisible by 5
    if((i%5) === 0){
        square.textContent = "Buzz"
        square.style.backgroundColor = "#ffd166";
    }
    //number divisible by 3 and 5
    if(((i%3) === 0) && ((i%5) === 0)){
        square.textContent = "FizzBuzz"
        square.style.backgroundColor = "#f0466f";
    }
}