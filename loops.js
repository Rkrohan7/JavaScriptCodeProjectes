let i;
// code iteret to 100.........................................
for(i=0;i<=100;i++){
console.log("<br>"+i+":codekul");
    if(i===70){
    
    break;
    }

    
    
}

let arr=[10,20,30,40];
//add by 5.................................................
for(let item of arr){
    item+=5;
   
    console.log(item);
    //document.write("<br>"+item);
}
//Multiply by 2...........................................
for(let item1 of arr){
    item1*=2;
    console.log(+item1);
}

let string="javascript";
for(let j=0;j<string.length;j++){
    a=string.charAt(j);
    console.log(a);

}