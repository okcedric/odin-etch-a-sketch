let pixelGrid = document.querySelector('#pixel-grid');

let lineLength = 16;
pixelGrid.style.cssText = `grid-template-rows: repeat(${lineLength},1fr); grid-template-columns: repeat(${lineLength},1fr);`;
for(let i = 0; i< (lineLength*lineLength); i++){
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixelGrid.appendChild(pixel);
}

