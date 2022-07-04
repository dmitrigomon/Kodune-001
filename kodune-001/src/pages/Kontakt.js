import { useState } from "react";

function Kontakt() {

  const [aadressiMuutuja, funktsioonMisMuudabMuutujat1] = useState("Tallinn");
  const [telefonMuutuja, funktsioonMisMuudabMuutujat2] = useState("55555555");
  const [emailMuutuja, funktsioonMisMuudabMuutujat3] = useState("email@email.com");
  const [OnIngliseKeel, keeleMuutujaFunktsioon] = useState("ei");
  
  const muudakoik = () => {
  funktsioonMisMuudabMuutujat1("Uus linn");
  funktsioonMisMuudabMuutujat2("Uus telefon");
  funktsioonMisMuudabMuutujat3("Uus email");
  keeleMuutujaFunktsioon("jah");
  
  }
  

  return (
    
    
<div>
      <button onClick={() => muudakoik ()}> Inglise keeleks</button>
      {OnIngliseKeel === "jah" && <div>Leht on Inglise keeles</div>}
      

<div>{ aadressiMuutuja }</div>
<div>{ telefonMuutuja }</div>
<div>{ emailMuutuja }</div>
</div>
 );
}

export default Kontakt;