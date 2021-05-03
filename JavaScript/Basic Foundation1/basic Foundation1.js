//1-
function array_count() {
    var arr = [];
    for(var i=1; i<256; i++){
        arr.push(i);
        
    }
    console.log(arr)
    return arr; 
}
array_count ();

//2
function even(){
var sum = 0; 
for(var i=1 ; i<=1000 ; i++){
if(i%2 == 0) {
sum = sum+i;
}
}
return sum;
}
z=even();
console.log(z)

//3

function odd(){
var sum = 0 ;
for(var i=0 ; i<=5000 ; i++){
if(i%2 !== 0){
sum= sum+i ; 
}
}
return sum;
}
var z = odd();
console.log(z);
//4

function iteration(arr){
var sum = 0;
for(var i = 0 ;i <arr.length ;i++){
sum+=arr[i] ; 
}
return sum ; 
}
//console.log(iteration([12,5,-5]))

//5

function max(arr){
var max=0;
for(var i=0; i<arr.length ; i++){
if(max<arr[i]){
max=arr[i];

}
}
return max ;
}var arr=[1,2,3,4];
console.log(max(arr));




//6

function find_avg(arr){
var sum =0;
var avg=0;
for(var i =0 ; i<arr.length ; i++){
sum+=arr[i];
}
console.log(sum);
avg=sum/arr.length
return avg ;
}
console.log(find_avg([1,2,3,4]));


///7
function return_odd(){
var arr=[];
for(var i=1 ; i<=50 ;i++){
if(i%2!==0){
arr.push(i);
}
}
return arr;
}
console.log(return_odd());

//8
function greater_than(y,arr){
    var num =0 ;
    for(var i = 0 ; i<arr.length ; i++){
    if(arr[i] > y ) {
    num++ ; 
    }
    }
    return num;
    }
    console.log(greater_than(3,[1,2,5,7]));
    

//9

function square(arr){
    for (var i = 0;i<arr.length;i++){
    arr[i] = arr[i]*arr[i];
    }
    return arr;
    }
    
    console.log(square([1,2,6]))

//10
function no_neg(arr){
for(var i=0 ; i<arr.length;i++){
if(arr[i]<0){
arr[i]=0;
}
}
return arr;
}
console.log(no_neg([1,-2]))
//11

function abc(arr){
    var count=0 ; 
    var max = 0;
    var min=arr[0];
    var avg=0;
    var count=0;
    var new_arr=[]
    var sum =0;
    for(var i=0;i<arr.length;i++){
    if(arr[i]>=max){
    max=arr[i];
    }
    }
    for(var j=0;j<arr.length;j++){
    if(arr[j]<min){
    min=arr[j];
    }
    }
    for(var x=0 ; x< arr.length ; x++){
    sum+=arr[x];
    count++;
    avg = sum/count;
    }
    new_arr.push(max);
    new_arr.push(min);
    new_arr.push(avg);
    return new_arr;
    }
    console.log(abc([1,5,6,7]))
//console.log(abc([arr]))


//12

function swap(arr){
    var x=0;
    
    if(arr.length>2){
    x=arr[arr.length-1];
    arr[arr.length-1]=arr[0];
    arr[0]=x;
    }
    
    return arr;
    }
     console.log(swap([1,2,5,7]))
    
//13
function Numtostr(arr){
for(var i =0 ;i<=arr.length ; i++){
if(arr[i]<0){
arr[i]="Dojo"
}
}
return arr;
}
console.log(Numtostr([1,-1,2,-5]))

