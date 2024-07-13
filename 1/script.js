let body =document.getElementsByClassName("body")[0]
function setColor(name){
    body.style.backgroundColor= name;
}
function randomColor(){
    let red =Math.round(Math.random()*255)
    let green =Math.round(Math.random()*255)
    let blue =Math.round(Math.random()*255)
    body.style.backgroundColor=`rgb(${red},${green},${blue})`
}
