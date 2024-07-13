const text1 =document.getElementById("text")
const button =document.getElementById('button')

const change=(str)=>{
    return str.split(' ').reverse().join('')

}

function pala(){
let org=text1.value
let rev= change(text1.value)
if(org==rev){
    alert('Palindrom')
}else{
    alert('Not Palindrom')
}
}
