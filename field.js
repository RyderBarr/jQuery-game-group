
        // img varables 
            let apple = `<img src="./images/apple.svg" alt="" class="apple">`

        $(document).ready(function(){  

          size = 10
          $('#section').html(CreateGrid(size))

            function CreateGrid(width){

                // size = the amount of cells used
                    let size = width*width

                // the snake location formula:
                    // equation for the middle row of the grid
                    // x * floor(x/2)
                    // the + at the end is to add the space between the border and snake
                        let tail = width*Math.floor(width/2)+2
                        let body = width*Math.floor(width/2)+3
                        let head = width*Math.floor(width/2)+4


                // creates the space for the grid to go
                // the grid frame
                    $('#section').html
                    (`

                    <div class="cont small">
                        
                    </div>

                    `)




                // the size based on what the user selected
                    if (width == 10)
                    {

                        // sets the size into the grid frame
                            $('.cont').addClass(`small`)

                        // tailwind saved as a varible
                            imgsize = `w-[30px] h-[30px]`

                    }

                // a for loop that moves through the size of the grid
                // the i = 1 is important
                    for(let i = 1; i<=size;i++)
                    {

                        // populates the frame with the cells each with there i num as a class
                            $('.cont').append(`<div class="${i}">  </div>`)

                    }



                // sets the sell found in the spot of the snake location formula
                // into the part of the snake they are
                    $(`.${tail}`).html
                    (`

                        <img src="snake assets/tail_left.svg" >

                    `)

                    $(`.${body}`).html
                    (`

                        <img src="snake assets/body_horizontal.svg" >
                    
                    `)

                    $(`.${head}`).html
                    (`
                    
                        <img src="snake assets/head_right.svg" >
                        
                    `)

                // spawning the food into the 
                    spawn(apple)
                

            }
            


            // function for spawning things
                function spawn(img)
                {
                    let item = (Math.floor(Math.random() * (size*size + 1)))
                    // check that it isn't placing the item over the snake
                        if($(`.${item}`).children().length == 0)
                        {
                            // adds the apple to the sell with the class of the randomly generated num
                                $(`.${item}`).html
                                (`
                                    ${img}
                                
                                `)

                        }
                        else
                        {

                            // if origanal spawn location is full this puts it in a new spot
                            // already tested that it works even when over crowding happens
                            spawn(img)

                        }

                }

                      // Size of grid


                console.log(size)

            // game end variable difinded
                gameEnd = false
                die = false
            
            // if you die the game ends
                if(die){
                    gameEnd = true 
                }

            // if the game has ended
                if(gameEnd)
                {

                    // if end because of dieing
                        if(die)
                        {
                          
                            // end screen
                            // not going to format because to big
                                $('#section').html(`<div class="flex flex-col justify-evenly items-center h-[85vh] bg-zinc-800 w-[100vw]"><p id=".sizeScore" class="bg-green-300 text-red-700 text-3xl p-5">size at death:<br></p><p class="bg-green-300 text-red-700 text-3xl p-5">You lost.</p><p class="timeScore bg-green-300 text-red-700 text-3xl p-5">time</p></div>`)

                        }

                    // if end because of winning
                        else
                        {

                            // end screen
                            // not going to format because to big
                                $('#section').html(`<div class=" flex flex-col justify-evenly items-center h-[85vh] bg-red-300 w-[100vw]"><p class=" bg-green-300 text-red-500 text-5xl p-10 px-50">You win!</p><p class="timeScore bg-green-300 text-red-500 text-3xl p-5">Time:</p></div>`)

                        }

                }

            // puts all the svg files into variables for easy use


var head_right = "snake assets/head_right.svg";    
var head_left = "snake assets/head_left.svg";    
var head_up = "snake assets/head_up.svg";    
var head_down = "snake assets/head_down.svg";  




var bodysrc = "snake assets/body_horizontal.svg";    
var body_vertical = "snake assets/body_vertical.svg";    
var body_topleft = "snake assets/body_topleft.svg";    
var body_topright = "snake assets/body_topright.svg";    
var body_bottomleft = "snake assets/body_bottomleft.svg";    
var body_bottomright = "snake assets/body_bottomright.svg";  




var tail_right = "snake assets/tail_right.svg";    
var tail_left = "snake assets/tail_left.svg";    
var tail_up = "snake assets/tail_up.svg";    
var tail_down = "snake assets/tail_down.svg";  
var eat = new Audio("./audio/food.mp3");
var endsfx = new Audio('./audio/gameover.mp3');
var movesfx = new Audio ('./audio/move.mp3');


var direction = "right";      
var lastDirection = "right";      
var tailDirection = "left";      
var moving = false;

var snake = [54, 53, 52];
    


// finds the direction and the way the snake is gonna trn and puts the right turn property based on last direction

function getCurve(past, direction) {    


  if ((past == "right" && direction == "down")) {      
    return body_bottomleft;      
  }    


  if ( past == "down" && direction == "left") {      
    return body_topleft;      
  }    

  if (past == "right" && direction == "up"){
        return body_topleft
  }

  if (past == "up" && direction == "right") {      
    return body_bottomright;      
  }    


  if ((past == "left" && direction == "up")) {      
    return body_topright;      
  }    
if (past == "up" && direction == "left"){
        return body_bottomleft

}
if (past == "left" && direction == "down"){
        return body_bottomright
}
if (past == "down" && direction == "right"){
        return body_topright
}


}  


// function to be continously called on with set interval to move the snake

function moveSnake() {      
    if($(".apple").parent().attr("class") == headLoc){
      snake.splice(1, 0, (headLoc+1))
      eat.play()
      spawn(apple)
  }

  if (!moving){      
    return;      
  }    

  var headLoc = snake[0];    
  var newHeadLoc = headLoc;    


// sets boundarys by using math to determine if its gonnna be at the edge or not
  if (direction == "right") {      
    newHeadLoc = headLoc + 1;         
  }    
  if (direction == "left") {      
    newHeadLoc = headLoc - 1;        
  }    
  if (direction == "up") {      
    newHeadLoc = headLoc - 10;      
  }    
  if (direction == "down") {      
    newHeadLoc = headLoc + 10;      
  }    

  if(snake.includes(newHeadLoc)){ // Checks if the newHeadLoc is in the snake array and if it is that means the head is in the body
    endsfx.play()
    $('#section').html(`<div class="flex flex-col justify-evenly items-center h-[85vh] bg-zinc-800 w-[100vw]"><p class="bg-green-300 text-red-700 text-3xl p-5">You lose!</p><a href="./field.html"><p class="timeScore bg-green-300 text-red-700 text-3xl p-5">Try Again</p></a></div>`)
  clearInterval(moving)
  return
  }

console.log(size)
  
if(gameEnd == "yes")
  {
      console.log("working")
      if(die == "yes")
      {
          $('#section').html(`<div class="flex flex-col justify-evenly items-center h-[85vh] bg-zinc-800 w-[100vw]"><p id=".sizeScore" class="bg-green-300 text-red-700 text-3xl p-5">size at death:<br></p><p class="bg-green-300 text-red-700 text-3xl p-5">you lose</p><p class="timeScore bg-green-300 text-red-700 text-3xl p-5">time</p></div>`)
      }
      else
      {
          $('#section').html('')
      }
  }

  snake.unshift(newHeadLoc);      
  var oldTail = snake.pop();      




  $("." + oldTail).html("");      




  var bodyImg = "";      


//   makes it so that when you make a change in direction it gets the right body curve 
  if (lastDirection != direction) {      
    bodyImg = getCurve(lastDirection, direction);      
    if (bodyImg == "") {      
      bodyImg = (direction == "right" || direction == "left") ? bodysrc : body_vertical;      
    }      
  } else {      
    bodyImg = (direction == "right" || direction == "left") ? bodysrc : body_vertical;      
  }      



// keeps updating body if there is no change in button 
  $("." + headLoc).html('<img src="' + bodyImg + '" class="body">');      



// changes head based no direction
  if (direction == "right") {      
    $("." + newHeadLoc).html('<img src="' + head_right + '" class="head">');      
  }    
  if (direction == "left") {      
    $("." + newHeadLoc).html('<img src="' + head_left + '" class="head">');      
  }    
  if (direction == "up") {      
    $("." + newHeadLoc).html('<img src="' + head_up + '" class="head">');      
  }    
  if (direction == "down") {      
    $("." + newHeadLoc).html('<img src="' + head_down + '" class="head">');      
  }    




  var newTailLoc = snake[snake.length - 1];      
  var newTailImg = tail_right;      


  if (snake.length > 1) {      
    var beforeTail = snake[snake.length - 2];     
    
      if (beforeTail - newTailLoc == 1) {      
      newTailImg = tail_left;      
    }    


    if (beforeTail - newTailLoc == -1) {      
      newTailImg = tail_right;      
    }    


    if (beforeTail - newTailLoc == 10) {      
      newTailImg = tail_up;   
        
    }    


    if (beforeTail - newTailLoc == -10) {      
      newTailImg = tail_down;      
    }    
}


  $("." + newTailLoc).html('<img src="' + newTailImg + '" class="tail">');      



// sets tail direction and previos direction to determine how the snake moves
  tailDirection = lastDirection;      
  lastDirection = direction;      

function gameOver(head){
      // (head % 10 == 0 represents the first column of the grid)
      if (head % 10 == 0 && direction == "left"){ // If the snake meets the left border   
        clearInterval(moving); // Stop snake
        return true; // Display death
      }  
      if ((head - 1) % 10 == 0 && direction == "right"){ // Without the - 1 the snake dies too early in the right
        clearInterval(moving);  
        return true; 
      }
      // head <= 0 means it's outside the top grid  
      if (head <= 0) {  
        clearInterval(moving);  
        return true;    
      }  
      if (head > 100) {      
        clearInterval(moving);      
        return true;
      }  
}

if(gameOver(newHeadLoc, headLoc)){
    endsfx.play()
    $('#section').html(`<div class="flex flex-col justify-evenly items-center h-[85vh] bg-zinc-800 w-[100vw]"><p class="bg-green-300 text-red-700 text-3xl p-5">You lose!</p><a href="./field.html"<p class="timeScore bg-green-300 text-red-700 text-3xl p-5">Try Again</p></a></div>`)
    }
}  




$(document).keydown(function(event) {    

// Moving snake
if (!moving){
    moving = setInterval(moveSnake, 200);      
  }     

// makes the changes and changes the direction also makes sure you cant keep pressing the same button to go faster
  if (event.keyCode === 39) {
    if (direction != "left") {    
      direction = "right";
      movesfx.play();      
    }             
  }    


  if (event.keyCode === 37) {
    if (direction != "right") {      
      direction = "left";
      movesfx.play();      
    }    
  }    


  if (event.keyCode === 38) {
    if (direction != "down") {      
      direction = "up";
      movesfx.play();      
    }    
  }    


  if (event.keyCode === 40) {
    if (direction != "up") {      
      direction = "down";
      movesfx.play();      
    }    
  }    

     $(".body").animate({transform: 'scale:(1.1)'})
            $(".tail").animate({transform: 'scale:(1.1)'})
            $(".head").animate({transform: 'scale:(1.1)'})
 
});  })
console.log(size)

            