$(document).ready(function(){
    $('.category').slideUp(); //свернули всё содержимое класса и сам класс
    $('.ware').click(function(){ //при клике на класс
        $('.category').slideToggle(); //раскрывается класс
    })
    $('.lehr').slideUp(); //скрыли класс
    $('.wagen').click(function(){ //при клике по классу
        $('.lehr').slideToggle();  //раскрывается-закрывается класс
    })

    var sliden = $('.slide'); //создали переменную-массив, в которой 3 слайда
    for (let i = 1; i < sliden.length; i++) { //циклом перебираем 3 слайда, начиная с 1го
        $(sliden[i]).hide(); //скрыли каждый слайд по очереди, начиная с 1го -> остаётся 0й слайд
    } // i это номер элемента в массиве. каждый раз этот номер меняется  
    //на данный  момент высвечивается 0й слайд
    var jetzigeSlide = 0; //чтобы отсчитывать слайды с нуля. аналог переменной i в цикле
    $('.weiter').click(function(){ //при клике по кнопке дальше
        $(sliden[jetzigeSlide]).hide(); //скрыли 0й слайд в массиве
    //-> никакой слайд не высвечивается 
        jetzigeSlide = (jetzigeSlide + 1) % sliden.length; //перезаписали переменную jetzigeSlide. переменная всегда менятеся при клике
        $(sliden[jetzigeSlide]).show(); //показываем тот слайд в массиве, который = jetzigeSlide
    })

    
    $('.zurueck').click(function(){
        $(sliden[jetzigeSlide]).hide(); //скрыли текущий слайд в массиве
        jetzigeSlide = (jetzigeSlide + sliden.length - 1) % sliden.length; //показываем предыдущий слайд
        $(sliden[jetzigeSlide]).show();
        console.log(jetzigeSlide);
    })    
})