
function getRandom(min, max){
  return Math.ceil(Math.random() * (max - min) + min)
}

const generateRandomColor = () => `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;

export default generateRandomColor;