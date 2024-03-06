
let url = `https://thesimpsonsquoteapi.glitch.me/quotes`;
const images = ['photo1.jpg ','photo2.jpg','photo3.JPG','photo4.jpg']; 

fetch(url)
    .then(resp => resp.json())
    .then(data => {
        let quote = data[0]; 
        loadQuote(quote);
    });

function loadQuote(quote) {
    let quoteContainer = document.getElementById('quote-container');
    quoteContainer.innerHTML =
        `
    <div class="quote-box">
        <p>${quote.quote}</p>
        <p>- ${quote.character}</p>
    </div>
    `;
}

let currentImageIndex = 0;

function showNextImage() {
    const slideshow = document.getElementById('slideshow');
    slideshow.innerHTML = `<img src="images/${images[currentImageIndex]}" alt="Images">`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(showNextImage, 2500);

// let count = 0;
// const COUNT_INT = 10000;

// function goup(){
//     count ++;
//     console.log(count);

//     document.getElementById("").innerText= count;
// }

// setInterval(goup,COUNT_INT)

// Make an array of the File path
// Loop over each file path
// and go back to start when ehrn
//  src to the images 