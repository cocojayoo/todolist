const images = [
    "01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg","07.jpg","08.jpg","09.jpg","10.jpg","11.jpg"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];


const bgImage = document.createElement("img");
//createElement << 원하는 html 태그를 추가할 수 있다!! 무궁무진~!
bgImage.src = `img/${chosenImage}`;

console.log(bgImage);

document.body.appendChild(bgImage);