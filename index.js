function crea(){
    var persona = extractRandomUser();
    var nomePersona = persona.name.first + '' + persona.name.last;
    var headingNomePersona= document.getElementById('nome');
    headingNomePersona.innerText= nomePersona;

    var inserisci =['email','dataN','indirizzo','numero','immagine'];
    var inserisciValore = [persona.email,persona.dob,persona.location.street,persona.cell,persona.picture.large];
        for( var i=0 ;i<inserisci.length ;i++){
            carica(inserisci[i],inserisciValore[i]);
        }

    var dob=document.getElementById('dataN');
    var born = dob.outerText;
    var data = born.slice(8,10)+'-'+born.slice(5,7)+'-'+born.slice(0,4);
    dob.innerText=data;    

}
function carica(id,valore){
    var pippo = document.getElementById(id);
    pippo.innerText= valore;
    if(id==='immagine'){
        pippo.src=valore;
    }else{pippo.innerText= valore;}
}