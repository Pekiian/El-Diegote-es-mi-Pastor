function Dieguito(body){
    if(body.hasChildNodes()){
        body.childNodes.forEach(Dieguito)
    } else if(body.nodeType === Text.TEXT_NODE){
        body.textContent = body.textContent.replace(/(El\s)?(La\s)?Dios(a)?/gi, "El Diegote");
    }
}
Dieguito(document.body)