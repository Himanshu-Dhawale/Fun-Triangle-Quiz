const sides = document.querySelectorAll('.side-input');
const hypotenuseBtn = document.querySelector('#hypotenuse-btn');
const outputEl = document.querySelector('#output')



function calculateSumofSquares(a , b){
   const sumOfSquares = a*a + b*b;

   return sumOfSquares;
}

function calculateHypotenuse(){
    const sumOfSquares = calculateSumofSquares(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputEl.innerText = 'The length of Hypotenuse ' + lengthOfHypotenuse;
}

hypotenuseBtn.addEventListener('click', calculateHypotenuse)