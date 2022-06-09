let result = document.getElementById("output")
function display(num){
  result.value += num;
}
function Calculate(){
  try{
    result.value = eval(result.value)
  }
  catch(err){
    alert("invalid")
  }
}
function Clear(){
  result.value = "";
}
function del(){
  result.value = result.value.slice(0,-1)
}