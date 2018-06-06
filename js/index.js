$(document).ready(function(){
  var array=[];
  var string;
  var check_1=["*","/","+","-"];
  var check_2=["*","/","+"];
  var numbers=[1,2,3,4,5,6,7,8,9,0];
  var clicked=0;
  
  function check(select){
    for(var i=0;i<check_1.length;i++){
      if(select===check_1[i]){
        return true;
      }
    }
    return false;
  }
  
  
  function check2(int){
    for(var i=int.length-1;i<int.length;i--){  if(int[i]==="."){
     return true;
      break;    
   }                                            else if(check_1.includes(int[i])){
     break;
                                             } 
  else if(i===0){
    break;
  }                                         
    }
    return false;
  }
  
  
  
  function input(put,count){
     if(check_2.includes(put)===false&&array.length===0){
       
      array.push(put);
    }
    else if(check(put)&&check(array[array.length-1])===false&&array.length>0){
      array.push(put);
    }
    else if(numbers.includes(Number(put))){
      array.push(put);
    }
    else if(put==="."&&check2(array)===false){
      array.push(put);
    }
    output();
  }
  
  
  function output(){
    string=array.join("")
    $(".output_2").html(string);
    
  }
  
  
  function total(){
    string=array.join("");
    $(".output_2").html(eval(string));
  }
  
  
  
  $("#delete").on("click",function(){
    array=[];
    $(".output_2").html("0");
    clicked=0;
  });
  $("#deleteOne").on("click",function(){
    array.pop();
    
    $(".output_2").html(array);
    
  });
  $(".btn-primary").on("click",function(){
   
    clicked=clicked+1;
    input(this.id,clicked);
    
 });
  $(".equal").on("click",function(){
    total();
  })
  
});