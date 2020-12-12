document.getElementById("menu").style.display = "none"; 
document.getElementById("Pizza").style.display = "none"; 


function Make_Pizza() 
{
document.getElementById("Pizza").style.display="none";
  document.getElementById("menu").style.display = "block"; 
}



function back(){
  document.getElementById("Pizza").style.display = "none";
  document.getElementById("menu-page").style.display = "block";
}


function menu()
{
    document.getElementById("Pizza").style.display="block";
  document.getElementById("menu-page").style.display="none";
}


function recomend() 
{
  document.getElementById("menu").style.display = "block"; 
    document.getElementById("menu-page").style.display = "none"; 
}
function submit() {
   document.getElementById("menu").style.display = "none"; 
    document.getElementById("menu-page").style.display = "block"; 
   var name_1 = document.getElementById("input").value;
  name_of_pizza.push(name_1);
  var step_1 = document.getElementById("A").value;
    var step_2 = document.getElementById("B").value;
    var step_3 = document.getElementById("C").value;
    var step_4 = document.getElementById("D").value;
    var step_5 = document.getElementById("E").value;
  steps.push(step_1);
    steps.push(step_2);
    steps.push(step_3);
    steps.push(step_4);
    steps.push(step_5);
  console.log(name_of_pizza)
  console.log(steps);
}
var name_of_pizza= [];
var steps= [];