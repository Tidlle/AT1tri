import Direita from '../Componentes/Contato/Direita'
import Esquerda from '../Componentes/Contato/Esquerda'

const Contato = ()=>{
    return(
        <main>
      <div className="direita">
        <div className="direita2">
          <Esquerda/>
        </div>
        <div className="esquerda">
        </div>
        <div>
          <Direita/>
        </div>
      </div>
    </main>
    )
}

export default Contato;