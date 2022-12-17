var weight = [35,38,42,45,43,34,36,41,48,32];
var sum = 0
var average;

function setup() {
  createCanvas(400,400);

}

function draw() 
{
  background(30);
}

 for(var i=0;i<weight.length;i++){
  sum = sum + weight[i]
  if(weight[i]>42){
    console.log(weight[i])
  }
 }

console.log(sum);
 
average=sum/weight.length;
console.log(average);