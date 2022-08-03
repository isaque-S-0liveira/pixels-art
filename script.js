const colorPalette = document.querySelector('#color-palette');
const color = document.getElementsByClassName('color');
const pixelBoard = document.getElementById('pixel-board');


function geraDiv() {
  for (let i = 0; i < 4; i += 1) {
    const divPalette = document.createElement('div');
    divPalette.className = 'color';
    colorPalette.appendChild(divPalette);
  }
  console.log(colorPalette);
}geraDiv();

function adcCorPreta() {
  const divBlack = document.querySelector('div');
  divBlack.style.backgroundColor = 'black';
  divBlack.classList.add('selected')
} adcCorPreta();

function geraCorAleatoria() {
  // 'r' 'g' 'b' fora do for, faz com que todas as divs recebam a mesma cor, dentro cada giro gera um num aleatorio;
  for (let i = 1; i < color.length; i += 1) {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    color[i].style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`;
  }
}geraCorAleatoria();

function quadroDePixels() {
    for (let i = 0; i < 25; i += 1) {
        const pixels = document.createElement('div');
        pixels.className = 'pixel';
        pixels.style.backgroundColor = 'wite';
        pixelBoard.appendChild(pixels);
    }
}quadroDePixels()

function selecionaCor () {
    //selected só funciona se estiver dentro da função ;-;

     for (let i = 0; i < color.length; i += 1) {
        color[i].addEventListener('click', function(event){
            const selected = document.querySelector('.selected');
           selected.classList.remove('selected');
            event.target.classList.add('selected');
            console.log(colorPalette);
        });       
    }
}selecionaCor();

function colorirPixels() {
   
    const pixels = document.querySelectorAll('.pixel');

    for (let i = 0; i < pixels.length; i += 1) {
       pixels[i].addEventListener('click', function(event){
         const selected = document.querySelector('.selected');
        const objCss = window.getComputedStyle(selected,null);
        const propriedadeCss = objCss.getPropertyValue('background-color');
        event.target.style.backgroundColor = propriedadeCss;
        console.log(selected);
       });
        
    }
}
colorirPixels();
/* Segunda opç para colorir o quadro de pixels;
const colorirPixel = (evento) => {
  if (evento.target.classList.contains('pixel')) {
    const selected = document.querySelector('.selected');
    const objCssSelected = window.getComputedStyle(selected, null);
    const bgCor = objCssSelected.getPropertyValue('background-color')
    evento.target.style.backgroundColor = bgCor; 
  }
}

document.addEventListener('click', colorirPixel);
*/
function buttoLimpar() {
    const button = document.querySelector('#clear-board')
    const pixels = document.getElementsByClassName('pixel');
    for (let i = 0; i < pixels.length; i += 1) {
         button.addEventListener('click', function(){
            if (pixels[i].style.backgroundColor !== 'white') {
                pixels[i].style.backgroundColor = 'white'
            }
      });
    }
}buttoLimpar();