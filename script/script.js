let enter = document.querySelector('.enter');
let openEnterButton = document.querySelector('.header_top');
let closeEnterButton = document.querySelector('.close');

openEnterButton.addEventListener('click', function (){
      enter.classList.remove('hidden');
});

closeEnterButton.addEventListener('click', function (){
    enter.classList.add('hidden');
});

document.addEventListener('keydown', function (evt){
   if (evt.keyCode===27) {
       enter.classList.add('hidden');
   }
});
