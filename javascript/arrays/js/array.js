
//alıştırma
/*let dizi = [2,5,8,11,15,17];
const ondanBuyuk=dizi.filter(sayi=>sayi>10)
    console.log(ondanBuyuk)
for(let i=0;i<ondanBuyuk.length;i++)
{
    console.log(ondanBuyuk[i]*5)
    
}
let dizi2 = [3,6,9,14,16];
function myFunction(dizi){
    const result=dizi2.some(sayi=>sayi>5)
    if(result==true)
    {
        console.log("5'ten büyük eleman mevcut")
    }else{
        console.log("5'ten büyük eleman mevcut değil")
    }
}
let dizi3=[2,3,4]
let sonuc=1;
for(let i=0;i<dizi3.length;i++)
{
    const eleman=dizi3[i]
    sonuc= sonuc*eleman
}
console.log(sonuc)-*/
/*const LOREM_LIST=['lorem','ipsum','dolor','amet','consectetur','adispiscing','elit']
let counter=0

/*for (;counter<10;counter++){
    console.log(counter)
    if(counter===5){break}

}*/

/*for (;counter<10;counter++){
    
    if(counter===5){continue}
    console.log(counter)

}*/
//const UL_DOM=document.querySelector
const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
  },
  {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
    }
  ];
  const filter=person.filter((user,index)=>user.languages[index]=="JavaScript")
  console.log(filter)