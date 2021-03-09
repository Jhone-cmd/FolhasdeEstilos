function semEstilo() {
    
    document.styleSheets[0].disabled = true;
    document.styleSheets[1].disabled = true;
    document.styleSheets[2].disabled = true;
    document.styleSheets[3].disabled = true;
    document.styleSheets[4].disabled = true;
}

function Estilo(folha) {

    var mudarLayout;

    if (ultimoEstilo != folha) {

    mudarLayout = confirm("Você deseja mudar de Layout?");

    if (mudarLayout) { 
        
    ultimoEstilo = folha;
    semEstilo();
    document.styleSheets[folha].disabled = false;

         }
    }

}

semEstilo();
var ultimoEstilo = 0;
document.styleSheets[ultimoEstilo].disabled = false;

