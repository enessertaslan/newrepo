
function newElement()
{
    
    if(task.value.length)
    {
        const task=document.querySelector("#task")//task idsindeki bilgiyi yani inputu çektim
        const form=document.querySelector("#userForm")
        addItem(task.value)
        //taskToAdd=localStorage.getItem("todo",task)
        toastAlert("Listeye Eklendi",1000)
        console.log(form,task.value)
    }else{
        
        toastAlert("Eksik Bilgi",1000)

    }
   
    //
    document.getElementById("task").value = "";
}

let userListDOM=document.querySelector("#list")
//add item fonksiyonunu etkinleştirdim
const addItem = task=> {
let liDOM=document.createElement('li')
let xSpan=document.createElement('span')
xSpan.className = "close";
xSpan.innerHTML="X"
liDOM.innerHTML=`${task}`
liDOM.id="lib"
userListDOM.append(liDOM)
liDOM.append(xSpan)
event.preventDefault()
}
let i;
let toDoItem=document.querySelector("ul")
toDoItem.addEventListener('click',clickedLi,false)
function clickedLi(ev)
{
    if(ev.target.tagName==='LI')
    {
        ev.target.classList.toggle("checked")
    }else if(ev.target.className==='close')
    {
        const element=ev.target.parentElement;
        element.style.display="none"
    }
}

let close = document.getElementsByClassName("close");

for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function toastAlert(text,duration)
{
    const alert=document.querySelector("#liveToast")
        const alertBody=document.querySelector(".toast-body")
        alertBody.innerHTML=text
        alert.className="toast success show"
        setTimeout(function(){
            alertBody.className="toast success hide"
        },duration)
}
/*let userListDOM=document.querySelector("#userList")
const addItem = (username,score) =>
{
    let liDOM=document.createElement('li')
    liDOM.innerHTML=`${username}
    <span class="badge badge-primary badge-pill">${score}</span>
    `
    liDOM.classList.add('list-group-item', 'd-flex' ,'justify-content-between' ,'align-items-center')
    userListDOM.append(liDOM)
}*/
