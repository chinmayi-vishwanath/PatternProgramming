let i;
let j
let row;
let n=11;


for(j=0;j<n;j++){
row=" ";
for(i=0;i<n;i++){
    if(i==0||i==n-1||j==0||j==n-1||j == Math.floor(n/2)){
         row=row+"*"
    }
    else{
     row=row+" "
    }
}

console.log(row)
}