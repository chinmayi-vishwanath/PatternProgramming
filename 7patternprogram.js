let i;
let j;
let row;

for(j=1;j<=5;j++){
row=" "
for(i=1;i<=5;i++){
    
    if(i==1||i==5||j==1||j==5){
       row=row+"*"
    }
    else{
        row=row+" "

    }
}

console.log(row)
}