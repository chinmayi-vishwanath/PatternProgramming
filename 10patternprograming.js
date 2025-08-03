// console.log("*")


let i;
let row;
let n=7


for(j=1;j<=n;j++){
row=" "
for(i=1;i<=n;i++){
    if(i==1||i==n||j==1||j==n||j==Math.floor(n/2)){

        row=row+"*"

    }
    else{
        row=row+" "
    }


}
console.log(row)

}


//n/2 not work so we want to put the math.floor then it will work because it is 3.5 so 

// floor means 3.5=3