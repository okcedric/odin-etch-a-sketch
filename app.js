let main = document.querySelector('main');


function createGrid(lineLength){
    let h3= document.createElement('h3');
    h3.textContent = `${lineLength}x ${lineLength}`;
    main.appendChild(h3);
    let pixelGrid = document.createElement('div');
    pixelGrid.classList.add('pixel-grid');
    pixelGrid.style.cssText = `grid-template-rows: repeat(${lineLength},1fr); grid-template-columns: repeat(${lineLength},1fr);`;
    for(let i = 0; i< (lineLength*lineLength); i++){
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixelGrid.appendChild(pixel);
    }
    main.appendChild(pixelGrid);

    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        console.log('hey');
        pixel.addEventListener('mouseover', () => {
            pixel.style.cssText = " background-color: #333;"
        })
    })

}

createGrid(16);


let resetButton = document.querySelector("#reset");

resetButton.addEventListener('click',()=>{
    let pixelGrid = document.querySelector('.pixel-grid');
    let h3 = document.querySelector('h3');
    h3.remove();
    pixelGrid.remove();
    let lineLength = false;
    while(!lineLength || lineLength > 100 || lineLength < 0 || !(Number.isInteger(lineLength))) {
        lineLength = parseInt(prompt('How many squares per slide ? ( Max: 100)'));
    }
    createGrid(lineLength);
})