
function Calcular(event){
  event.preventDefault();
  
  let alcoolInput = document.getElementById("alcool").value;
  let gasolinaInput = document.getElementById("gasolina").value;
  let contentResult = document.getElementById("content-result");
  let textResult = document.getElementById("text-result");
  
  let gasolinaSpan = document.getElementById("gasolina-result");
  let alcoolSpan = document.getElementById("alcool-result");

  /* 
  Calculo: álcool / gasolina
  E se o resultado for menor que 0.7 compensa usar álcool
  */

  let calculo = (alcoolInput / gasolinaInput);
  
  if(calculo < 0.7){
    //Aqui compensa usar álcool
    textResult.innerHTML ="Compensa usar Álcool";
}else{ 
    //Aqui compensa usar gasolina
    textResult.innerHTML ="Compensa usar Gasolina";
    }
    gasolinaSpan.innerHTML = "Gasolina R$ " + gasolinaInput
    alcoolSpan.innerHTML = "Álcool R$ " + alcoolInput

    contentResult.classList.remove("hide")
}
