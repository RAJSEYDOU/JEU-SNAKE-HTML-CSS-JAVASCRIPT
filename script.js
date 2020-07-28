const canvas= document.querySelector('#cnvas')
const background=document.querySelector('#background')
const food=document.querySelector('#food')
const ctx=canvas.getContext('2d')
const scoreContainer=document.querySelector('.scoreContainer')
const height=400;
const width=500

const carreau=35
let d;
let score=0
let FOOD={
	x: Math.floor(Math.random() +10)*carreau,
 	y: Math.floor(Math.random() +8)*carreau
}

let snake=[];

snake[0]={x:2*carreau,y:3*carreau}


	





//draw snake
function draw (){
	ctx.drawImage(background,0,0,width,height)

ctx.drawImage(food,FOOD.x,FOOD.y,carreau,carreau)
console.log(FOOD.x,FOOD.y)
	
  for( var i=0;i<snake.length;i++){

       ctx.fillStyle=(i==0)?"red":"blue"
      ctx.fillRect(snake[i].x,snake[i].y,carreau,carreau)

	
    }
    // snake Head

let  NewX=snake[0].x
let NewY=snake[0].y

// game over 
if(NewX <=carreau || NewX>=12*carreau  || NewY<=carreau || NewY >=height-(3*carreau ) ){
	clearInterval(timer)
}
// Eat fOOD
if(NewX==FOOD.x && NewY==FOOD.y){
	score++
	
	FOOD={
	x: Math.floor(Math.random() *10)*carreau,
 	y: Math.floor(Math.random() *8)*carreau
	}
	scoreContainer.innerHTML+=score;


}else{
	snake.pop()

}





    if(d=="right") {
       console.log('inside droite for')
    	NewX+=carreau	
           }    
    if(d=="up"){
   	console.log('inside up for')
	 NewY-=carreau
} 
    if (d=="bas") {
    	console.log('inside bas for')
    	NewY+=carreau
    }
    if(d=="back"){
    	console.log('inside BACK for')
    	NewX-=carreau
    } 


    let NewH={
    	x:NewX,
    	y:NewY
    }

   
   snake.unshift(NewH)
  



}





// touche de manipulation du serpent 
document.addEventListener('keyup',moveSnake)
function moveSnake(event){

	if(event.keyCode==39 && d !="back"){
			d="right"
			console.log("droite")
	}
	else if(event.keyCode==38 && d !="bas" ){
	 	d="up"
	}
	else if(event.keyCode==37  && d !="right"){
	 	d="back"
	}
	else if(event.keyCode==40 &&  d !="up"  ){
	 	d="bas"
	}





}


let timer=setInterval(draw,1000)
