var submit=document.getElementById('submit');
submit.onclick = function()
    {
      var saisie1=document.getElementById("firstNumber").value;
      var saisie2=document.getElementById("secondNumber").value;
      result= Math.trunc(saisie1)*Math.trunc(saisie2)
      alert("Résultat:" +result);
    }
//l'evenement declenche la fonction
//document.getElementById = recuperer l'element de ce document par son ID/name ou class*
//querySelector= permet de ne pas rajouter d'attribut suplementaire dans le HTML
//camelCase= ex: add"E"ventListener / les mots sont collé et et les majiscules 
//[suite]sont obligatoire dés le second mots.
//
