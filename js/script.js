$(document).ready(function () {

  $('.works__btns button, .works__btns a').on('focus', function (e) {
    $(this).parents('.works__element').addClass('works__element--active');
  });

  $('.works__btns button, .works__btns a').on('blur', function (e) {
    $(this).parents('.works__element').removeClass('works__element--active');
  });

/*//восстанавливает линию в зависимости от величины в процентах
    //node - класс, где присутствует data атрибут
    //nodeLine - класс блока линии
    //tooltip - класс для подсказки
    //animationLength - скорость анимации
function moveProgressBar(node, nodeLine, tooltip, animationLength = 1500) {
    const progressElement = $(node);
    progressElement.each(function (value, item) { //перебираем каждый элемент при помощи each,
      $(item).find(nodeLine).animate({            //внутри каждого элемента item при помощи функции find ищем класс линии и применяем к ней animate
        width: item.dataset.progressPercent+'%'   //где анимируем величину ширины используя dataset и константу progressElement
      }, animationLength);
      $(item).find(tooltip).show(animationLength); //показываем через 1.5 с подсказку: ищем ee функцией find и использую show показываем
    });
  }

  let animate = true;


  $(window).scroll(function () {

    if($('.skills').offset().top <= $(window).scrollTop() + 150) {
      if(animate) {
          
          //вызываем функцию
        moveProgressBar('.progress__element', '.progress__line', '.progress__tooltip');
      }
      animate = false;
    }

  });*/
 function moveProgressBar(node, nodeLine, tooltip, animationLength = 1500) {
    const progressElement = $(node);
    progressElement.each(function (value, item) {
      $(item).find(nodeLine).animate({
        width: item.dataset.progressPercent+'%'
      }, animationLength);
      $(item).find(tooltip).show(animationLength);
    });
  }

  let animate = true;


  $(window).scroll(function () {

    if($('.skills').offset().top <= $(window).scrollTop() + 150) {
      if(animate) {
        moveProgressBar('.progress__element', '.progress__line', '.progress__tooltip');
      }
      animate = false;
    }

  });
});