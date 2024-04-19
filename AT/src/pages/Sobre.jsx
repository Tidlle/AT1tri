import Sobre1 from "../Componentes/Sobre/Sobre1";
import Sobre2 from "../Componentes/Sobre/Sobre2";

const Sobre = ()=>{
    return(
        <main>
      <div className="index1">
        <div className="index2">
          <Sobre1/>
        </div>
        <div>
          <img src="/public/img/celular.png" alt="png"/>
        </div>
      </div>
      <div className="sobre1">
        <Sobre2/>
      </div>
    </main>
    )
}

export default Sobre;