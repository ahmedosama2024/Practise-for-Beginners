const Quotes=[
    "It takes courage to grow up and become who you really are.",
    "Your self-worth is determined by you.",
    "Nothing is impossible.",
    "Keep your face always toward the sunshine, and shadows will fall behind you." ,
    "You have brains in your head.",
    "Attitude is a little thing that makes a big difference." 

]
const topic =document.getElementById('Quotes')
function Random(){
    topic.innerHTML=Quotes[Math.round(Math.random()*5)]
}
