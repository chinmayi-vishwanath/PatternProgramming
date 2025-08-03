let i;
let j;
let row;
let n=16;

for(j=0;j<n;j++){
 row=" "
 for(i=0;i<n;i++){
    if(i==0||i==n-1||j==0||j==n-1||i==Math.floor(n/2)||j==Math.floor(n/2)||i==j||j+i==n-1||j+i==Math.floor(n/2)||j-i==Math.floor(n/2)||j+i==(n-1)+Math.floor(n/2)||i-j==Math.floor(n/2)){
        row=row+"*"
    }
    else{
      row=row+" "
    }
 }
  console.log(row)

}