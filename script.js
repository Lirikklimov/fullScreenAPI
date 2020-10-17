// document.querySelector('.btn-2').addEventListener('click', check);
document.querySelector('.btn-1').addEventListener('click', toggleScreen);

function check(){
    console.log('fullscreenEnabled: ' + document.fullscreenEnabled); //браузер может переходить в полноэкранный режим
    console.dir(document.fullscreenElement); //есть ли элементы в полноэкранном режиме. null означает таких элементов нет
}

function toggleScreen(){
    if (!document.fullscreenElement) {
       document.documentElement.requestFullscreen();
    }
    else {
        if(document.fullscreenEnabled){
            document.exitFullscreen();
        }
    } 
}

document.documentElement.addEventListener('fullscreenchange', function(){
    console.log('изменение произошло');
})