
//1
function Biggie_Size(arr){
for(var i=0 ; i<arr.length;i++){
if(arr[i]>0){
arr[i]="big";
}
}
return arr;
}
console.log(Biggie_Size([1,-2]))

2//

function PrintLowReturnHighc(arr){
 var count=0 ; 
var max = arr[0];
var min=arr[0];
var new_arr=[]
for(var i=0;i<arr.length;i++){
if(arr[i]>=max){
max=arr[i];
}
for(var i=0;i<arr.length;i++){
if(arr[i]<min){
min=arr[i];
}
}
console.log(min);
return max

}
 console.log(PrintLowReturnHighc([1,5,6,7]))


//3

function P_OneReturn_a(arr){
console.log(arr[arr.length-2]);

for(var i =0 ;i<arr.length;i++){
if(arr[i] < 0){
break;
}
}

return arr[i];
}
console.log(P_OneReturn_a([5,-6,5,8]))

//4

function square(arr){
 for (var i = 0;i<arr.length;i++){
arr[i] = arr[i]*2;
}
return arr;
}

 console.log(square([1,2,6]))

 //5
  function countpositive(arr){
    var sum =0 ;
  for(var i =0 ;i<arr.length-1 ;i++){
  if(arr[i]>0){
  sum+=arr[i];
  }
 }
 arr[arr.length-1]=sum;

 return arr ;
    }
  console.log(countpositive([-1,2,3,2]))

  6//

  
function abc(arr){
 for( var i=0 ; i<arr.length-3;i++){
  if(arr[i]%2==0&& arr[i+1]%2==0&& arr[i+2]%2==0){
 console.log("Even more so!");
   }
 if(arr[i]%2!=0&&arr[i+1]%2!=0&&arr[i+2]%2!=0){
 console.log("That's odd!");
}}}
  var arr =[1,2,3,3,3,3,5,4,84,4,4,4,4];
 abc(arr); 

  

 7//
 function add(arr){
 for(var i =1;i< arr.length ;i=i+2){
 arr[i]=arr[i]+1;
 }
  for(var i =0 ;i< arr.length ;i++){
 console.log(arr[i]);
 }
}
var app=[1,2,3,4,5];
 add(app);

 8//
 function replace(arr){

 
 for(var i = arr.length-1 ;i>0 ;i--){
 arr[i]=arr[i-1].length;
}
console.log(arr);
   return arr;    
 }

  replace(["hgikh","nudll","fyghuj"]);
  
 
9//

 function add7(arr){
  var newarr = [];
 for (var i = 0 ; i< arr.length ; i++){
 newarr.push(arr[i]+7);
 }
  return newarr;
   
 }
   var arr = [1,2,3,5,9]
    console.log(add7(arr))


 10//


  function reverse(arr){
  var j = arr.length-1
  for(var i =0 ;i< arr.length ;i++){
  arr.swap()
 }

 11// 

   function negativ(arr){
  for(var i =0 ;i< arr.length ;i++){
  if(arr[i]>0){
    arr[i]=arr[i]*-1;
  }
 }
return arr ; 
 

 }
 
 console.log(negativ([-1,-2,2,5,4,]))


  12//
  function hungry(arr){
  var count=0;
 for(var i =0 ;i< arr.length ;i++){

   if(arr[i]=="food"){
     console.log("yammy");
     count++;
  }}
  if(count==0){
      console.log("im humgry");
    }

 }
   hungry(["hgfdh","gfdg"])

   13//
    function swap(arr){
 var temp=0;
   for(var i =0 ;i< arr.length/2 ;i++){
    temp = arr[i];
 arr[i] = arr[arr.length-(i+1)];
arr[arr.length-(i+1)]=temp;
 
  return arr ;       
 }

     console.log(swap([1,2,5,6,8,7,5]))

  14//

 function scale(arr,num){
 for(var i =0 ;i< arr.length ;i++){
arr[i]=arr[i]*num;
}
return arr;
}
console.log(scale([1,2,5,6,8,7,5],2))
