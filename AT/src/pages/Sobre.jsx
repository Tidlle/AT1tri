import Index1 from "../Componentes/Sobre/index1";
import Index2 from "../Componentes/Sobre/index2";

const Sobre = ()=>{
    return(
        <main>
      <div className="index1">
        <div className="index1_2">
          <Index1/>
        </div>
        <div>
          <img src="/public/img/celular.png" alt="png"/>
        </div>
      </div>
      <div className="index3">
        <Index2/>
      </div>
    </main>
    )
}

export default Sobre;