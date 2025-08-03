let i;
let j;
let row;
let n=11

for(j=1;j<=n;j++){
row=" "
for(i=1;i<=n;i++){
    if(i==1||i==n||j==1||j==n||i==Math.floor(n/2)){
        row=row+"*"

    }
    else{
     row=row+" "
    }
}

console.log(row)

}