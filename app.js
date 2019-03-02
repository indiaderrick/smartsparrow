const minVal = Math.log(1);
const maxVal = Math.log(1000);

function getInputFromSlide() {
  const slider = document.getElementById('decayTimeSlider');
  const input = document.getElementById('decayTimeInput');
  const sliderPosition = slider.value;
  const minPosition = slider.min;
  const maxPosition = slider.max;
  const scale = (maxVal-minVal) / (maxPosition-minPosition);

  const value = Math.exp(minVal + scale * (sliderPosition-minPosition));

  input.value = Math.round(value);
}

function getSlideFromInput() {
  const slider = document.getElementById('decayTimeSlider');
  const input = document.getElementById('decayTimeInput');
  const inputValue = input.value;
  const minPosition = slider.min;
  const maxPosition = slider.max;
  const scale = (maxVal-minVal) / (maxPosition-minPosition);

  slider.value = minPosition + (Math.log(inputValue) - minVal) / scale;
}

function calculateRemainingSample(){
  const initialSample = document.getElementById('initialSample');
  const decayTimeInput = document.getElementById('decayTimeInput');
  const halfLife = document.getElementById('halfLife');
  const output = document.getElementById('output');

  const answer = (initialSample.value * Math.exp(-Math.log(2) * decayTimeInput.value / halfLife.value)).toFixed(2);
  output.textContent = answer;
  updateAtomAnalogy();
}

function clearAtoms(){
  const atomArea = document.getElementById('atomsGoHere');
  while (atomArea.hasChildNodes()) {
    atomArea.removeChild(atomArea.firstChild);
  }
}

function updateAtomAnalogy(){
  clearAtoms();
  const atomArea = document.getElementById('atomsGoHere');
  const atoms = Math.floor(initialSample.value / 5);
  const atomsLeft = Math.floor(output.innerHTML/ 5);

  for(let i = 0; i < atoms; i++){
    const atomOrangeImage = document.createElement('img');
    atomOrangeImage.setAttribute('src', 'atom-orange.png');
    atomOrangeImage.setAttribute('height', '80');
    atomOrangeImage.style.marginLeft = '25px';
    atomArea.appendChild(atomOrangeImage);
  }
  for(let i = 0; i < atomsLeft; i++){
    const atomImage = document.createElement('img');
    atomImage.setAttribute('src', 'atom.png');
    atomImage.setAttribute('height', '80');
    atomImage.style.marginLeft = '25px';
    atomArea.appendChild(atomImage);
    atomArea.removeChild(atomArea.childNodes[0]);
  }
}

function reset(){
  clearAtoms();
  const initialSample = document.getElementById('initialSample');
  const decayTimeInput = document.getElementById('decayTimeInput');
  const decayTimeSlider = document.getElementById('decayTimeSlider');
  const halfLife = document.getElementById('halfLife');
  const output = document.getElementById('output');

  initialSample.value = initialSample.min;
  decayTimeInput.value = decayTimeInput.min;
  decayTimeSlider.value = decayTimeSlider.min;
  halfLife.value = halfLife.min;
  output.innerHTML = '';
}

// window.onload = () => {
//   const slider = document.getElementById('slider');
//   const input = document.getElementById('inputValue');
//
//   const minVal = Math.log(1);
//   const maxVal = Math.log(1000);
//
//   let sliderPosition = slider.value;
//   let inputValue = input.value;
//
//   const minSliderPosition = slider.min;
//   const maxSliderPosition = slider.max;
//
//   const scale = (maxVal - minVal) / (maxSliderPosition - minSliderPosition);
//
//   function slide(){
//     inputValue = Math.round(Math.exp(minVal + scale * (sliderPosition - minSliderPosition)));
//   }
//
//   function enterValue(){
//     sliderPosition = minSliderPosition + (Math.log(inputValue) - minVal)/ scale;
//   }
// };
