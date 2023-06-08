// в то время как timePassed идёт от 0 до 2000
// left изменяет значение от 0px до 400px
function draw(timePassed) {
  train.style.left = timePassed / 5 + 'px';
}
// выбираем элемент с изображением отжиманий, жима лежа и кнопки "начать"
let pushupImage = document.getElementById('pushup');
let benchPressImage = document.getElementById('benchPress');
let startButton = document.getElementById('startButton');
let nextButton = document.getElementById('nextButton');

// функция, которая меняет изображение на жим лежа при клике на кнопку "начать"
startButton.addEventListener('click', function() {
	pushupImage.style.display = 'none';
	benchPressImage.style.display = 'block';
});

// функция, которая меняет изображение на отжимания при клике на кнопку "следующее"
nextButton.addEventListener('click', function() {
	pushupImage.style.display = 'block';
	benchPressImage.style.display = 'none';
});

// функция, которая меняет изображение на жим лежа при нажатии на клавишу "1"
document.addEventListener('keydown', function(event) {
	if (event.keyCode === 49) {
		pushupImage.style.display = 'none';
		benchPressImage.style.display = 'block';
	}
});

// функция, которая меняет изображение на отжимания при нажатии на клавишу "2"
document.addEventListener('keydown', function(event) {
	if (event.keyCode === 50) {
		pushupImage.style.display = 'block';
		benchPressImage.style.display = 'none';
	}
});

// функция, которая меняет размер изображения на жим лежа при наведении на него курсора мыши
benchPressImage.addEventListener('mouseover', function() {
	benchPressImage.style.transform = 'scale(1.1)';
});

// функция, которая убирает изменение размера изображения на жим лежа, когда курсор мыши больше не наведен на него
benchPressImage.addEventListener('mouseout', function() {
	benchPressImage.style.transform = 'scale(1)';
});

function animateText(textArea) {
    let text = textArea.value;
    let to = text.length,
      from = 0;

    animate({
      duration: 5000,
      timing: bounce,
      draw: function(progress) {
        let result = (to - from) * progress + from;
        textArea.value = text.slice(0, Math.ceil(result))
      }
    });
  }


  function bounce(timeFraction) {
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
      }
    }
  }


  function animate({timing, draw, duration}) {

    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      // timeFraction изменяется от 0 до 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      // вычисление текущего состояния анимации
      let progress = timing(timeFraction);
  
      draw(progress); // отрисовать её
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
  }
  train.onclick = function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      train.style.left = timePassed / 5 + 'px';

      if (timePassed > 2000) clearInterval(timer);

    }, 20);
  }

  growing.onclick = function() {
    this.style.fontSize = '36px';
    this.style.color = 'red';
  };