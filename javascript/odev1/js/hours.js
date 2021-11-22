setInterval(time, 1000);
let myName=prompt("İsminizi Giriniz:")
let nameAfterChange=document.getElementById("myName")
myName=myName.charAt(0).toUpperCase()+myName.slice(1)
nameAfterChange.innerHTML=myName
function time(){
    let today=new Date()
    const days=["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]
    let day=days[today.getDay()-1]
    let time=today.getHours()+':'+today.getMinutes()+':'+today.getSeconds()+"  "+day
    let myTime=document.querySelector("#myTime")
    myTime.innerHTML=time
    
}




