// Still working on audio and making it work for other web pages

$(document).ready(function(){
    var chomp = new Audio('food.mp3')
    var gameOver = new Audio('gameover.mp3')
    var move = new Audio('move.mp3')

    // Store settings values    
    if(localStorage.getItem("theme") == "default"){
        $("body").css({'background-color': 'rgb(240, 194, 194)'})
    }
    if(localStorage.getItem("theme") == "blue"){
        $("body").css({'background-color': 'rgb(51, 153, 255)'})
    }
    if(localStorage.getItem("theme") == "orange"){
        $("body").css({'background-color': 'rgb(255, 153, 51)'})
    }
    if(localStorage.getItem("song") == "on"){
        $('#music')[0].play();
    }
    
    // Settings
    $("#colorsel1").on('click', function(){
        $("body").css({'background-color': 'rgb(240, 194, 194)'})
        localStorage.setItem("theme", "default")
    })
    $("#colorsel2").on('click', function(){
        $("body").css({'background-color': 'rgb(51, 153, 255)'})
        localStorage.setItem("theme", "blue")
    })
    $("#colorsel3").on('click', function(){
        $("body").css({'background-color': 'rgb(255, 153, 51)'})
        localStorage.setItem("theme", "orange")
    })

    $('#musicon').on('click', function(){
        $('#music')[0].play(); // [0] is used to access the wbole DOM element
        localStorage.setItem("song", "on")
    });
    $('#musicoff').on('click', function(){
        $('#music')[0].pause();
        $('#music')[0].currentTime = 0;
        localStorage.setItem("song", "off")
    });
});
    
    $("#soundon").on('click', function(){
        localStorage.setItem('music', 'on')
    })
    $("#soundoff").on('click', function(){
        localStorage.setItem('music', 'off')
    })
