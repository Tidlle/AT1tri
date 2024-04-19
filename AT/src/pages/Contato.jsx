import Contato1 from '../Componentes/Contato/Contato1'
import Contato2 from '../Componentes/Contato/Contato2'

const Contato = ()=>{
    return(
        <main>
      <div className="Contato1">
        <div className="Contato1_2">
          <Contato2/>
        </div>
        <div className="Contato2">
        </div>
        <div>
          <Contato1/>
        </div>
      </div>
    </main>
    )
}

export default Contato;