
let examGrade=prompt("Puani Giriniz:")
let textInfo
if(examGrade>=0 && examGrade<=100){
if(examGrade>=90){textInfo="AA"}
else if(examGrade>=85){textInfo="AA"}
else if(examGrade>=80){textInfo="BA"}
else if(examGrade>=75){textInfo="BB"}
else if(examGrade>=70){textInfo="CB"}
else if(examGrade>=65){textInfo="CC"}
else if(examGrade>=60){textInfo="DC"}
else if(examGrade>=50){textInfo="DD :)"}
else if(examGrade>=0){textInfo="FF :("}
}else{textInfo="Geçersiz Değer"}10
alert(textInfo)
10
/*let firstChild=document.querySelector("ul#list>li:first-child")
firstChild.innerHTML="ilk öge değişti"
let lastChild=document.querySelector("ul#list>li:last-child")
lastChild.innerHTML="son öge değişti"
let ulDOM=document.querySelector("ul#list")
let liDOM=document.createElement('li')

liDOM.innerHTML="kendii"
ulDOM.append(liDOM)

*/



/*function changeContent()
{
    let x=prompt("Hangi satırı değiştirmek istiyorsun : (0,1,2)","0");
    let y=prompt("Hangi sütunu değiştirmek istiyorsun : (0,1)");
    let content=prompt("Yeni içeriğin ne olmasını istiyorsun:");
    let table=document.getElementById('myTable').rows[x].cells[y];
    table.innerHTML=content;
}*/
/*
function insert_Row()
{
    let table=document.querySelector("table#sampleTable");
    table.innerHTML+="<tr><td>Bla bla bla</td><td>Bla bla bla</td></tr>"
}*/





/*function getAttributes(){
    let link=document.getElementById('w3r');
    link.hreflang="tr/tur";
    link.rel="follow";
    link.target="_blank";
    link.type="link"
    console.log(link.rel);
}*/









/*function start()
{let bgChange=document.getElementById("bgchange");
bgChange.style.backgroundColor="aqua";}*/

/*function getFormvalue(){
    let first=document.querySelector("#fname");
    let last=document.querySelector("#lname");
    let print=document.querySelector("#print");
    let result=first.value+' '+last.value;
    print.innerHTML=result;
    
}
function getFormvalue()
{
  var x=document.getElementById("form1");
  for (var i=0;i<x.length;i++)
  {
   if (x.elements[i].value!='Submit')
    {  
      console.log(x.elements[i].value);
     }  
   }
}*/
