const alertDOM=document.querySelector("#alert")
const alertFunction=(title,message,className="warning")=>`<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>`

let formDOM=document.querySelector("#userForm")
formDOM.addEventListener('submit',formSubmit)
formDOM.addEventListener('reset',formSubmit)
function formSubmit(event)
{
    console.log(event.type)
    const username=document.querySelector("#username") 
    const score=document.querySelector("#score")
    if(event.type=='submit')
    {
    if(username.value&&score.value)
    {
        addItem(username.value,score.value)
    }else{
       alertDOM.innerHTML=alertFunction("Hopppp","Eksik bilgi girdiniz")
    }
}else if(event.type=='reset'){
    alertDOM.innerHTML=alertFunction("Resetlendi","Tüm veriler sıfırlandı","success")
    
}
   
    event.preventDefault()
}

let userListDOM=document.querySelector("#userList")
const addItem = (username,score) =>
{
    let liDOM=document.createElement('li')
    liDOM.innerHTML=`${username}
    <span class="badge badge-primary badge-pill">${score}</span>
    `
    liDOM.classList.add('list-group-item', 'd-flex' ,'justify-content-between' ,'align-items-center')
    userListDOM.append(liDOM)
}
