let input_value = document.getElementById("input");
function finalcal(){
  let dropdown = document.getElementById("convert").value;
  
  if(dropdown == "Celsius"){
    conv_function_C();
  }
  else if(dropdown == "Fahrenheit"){
    conv_function_F();
  }
  else if(dropdown == "Kelvin"){
    conv_function_K();
  }
  var x = document.getElementById("result");
  if (x.style.display === "none") {
    x.style.display = "block";
    // document.getElementById("btn").innerHTML="Clear";
    document.getElementById("clear").style.display="block";

    
  } else {
    x.style.display = "none";
    // document.getElementById("btn").innerHTML="Convert";
  }
}

function conv_function_C(){
  document.getElementById("result1").value = (input_value.value) + " °C  =  " + ((parseFloat(input_value.value) * 1.8) + 32).toFixed(3) + " °F " ;      
  document.getElementById("result2").value = (input_value.value) + " °C  =  " + (parseFloat(input_value.value) + 273.15 ).toFixed(3) + " K " ;      
}
function conv_function_F(){
  document.getElementById("result1").value = (input_value.value) + " °F  =  " + ((parseFloat(input_value.value) - 32) * 1.8).toFixed(3) + " °C " ;      
  document.getElementById("result2").value = (input_value.value) + " °F  =  " + (((parseFloat(input_value.value) - 32) / 1.8) + 273.15).toFixed(3) + " K " ;      
}
function conv_function_K(){
  document.getElementById("result1").value = (input_value.value) + " K  =  " + (parseFloat(input_value.value) - 273.15).toFixed(3) + " °C " ;      
  document.getElementById("result2").value = (input_value.value) + " K  =  " + (((parseFloat(input_value.value) - 273.15) * 1.8) + 32).toFixed(3) + " °F " ;      
}

function clear1(){
  document.getElementById('input').value='';
  document.getElementById("result").style.display="none";
  document.getElementById("clear").style.display="none";

}
