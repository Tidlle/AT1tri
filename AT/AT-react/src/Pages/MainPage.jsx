import MainPage1 from '../Componentes/MainPage/index'
import MainPage2 from '../Componentes/Cards/index'

function MainPage() {
    return (
      <main>
        <div className="MainPage1">
          <div className="MainPage1_2">
            <MainPage1/>
          </div>
          <div>
            <img src="/public/img/img1.png" alt="png"/>
          </div>
        </div>
        <div className="MainPage2">
          <MainPage2/>
        </div>
      </main>
    );
  }

  export default MainPage;