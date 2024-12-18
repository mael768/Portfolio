 // Fonction pour changer l'onglet actif

  /*Cette ligne déclare une fonction nommée openTab avec deux paramètres : evt (événement) et tabName (nom de l'onglet). */
  function openTab(evt, tabName) {

    /*Cette ligne déclare une fonction nommée openTab avec deux paramètres : evt (événement) et tabName (nom de l'onglet). */
    var i, tabcontent, tablinks; 
    
    /*Cette ligne déclare trois variables (i, tabcontent, et tablinks) sans leur attribuer de valeur pour le moment. */
    tabcontent = document.getElementsByClassName("tabcontent"); 

    /*Cette boucle parcourt tous les éléments récupérés avec la classe "tabcontent" et les masque en réglant leur propriété display à "none". Cela signifie que tous les contenus d'onglet sont initialement cachés.*/
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    /*La variable tablinks est assignée à la liste des éléments HTML qui ont la classe CSS "tablinks". Ces éléments sont probablement les liens ou boutons qui représentent les onglets.*/
    tablinks = document.getElementsByClassName("tablinks");

    /* Cette boucle parcourt tous les éléments récupérés avec la classe "tablinks" et supprime la classe "active" de chacun d'eux. La classe "active" est souvent utilisée pour indiquer visuellement quel onglet est actuellement sélectionné.*/
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    /*Cela affiche l'élément dont l'ID correspond à la valeur de tabName en réglant sa propriété display à "block". Cela signifie que l'onglet sélectionné est maintenant visible. */
    document.getElementById(tabName).style.display = "block";
    
    /*Cette ligne ajoute la classe "active" à l'élément qui a déclenché l'événement (evt). Cela met en évidence visuellement l'onglet actif.*/
    evt.currentTarget.className += " active";
    } 