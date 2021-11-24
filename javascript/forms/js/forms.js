let formDOM=document.querySelector("#userForm")
formDOM.addEventListener('submit',formSubmit)
let score=document.querySelector("#score")
function formSubmit(event){
    event.preventDefault()
    let sumScore=Number(score.value)
    console.log(sumScore+sumScore)
}