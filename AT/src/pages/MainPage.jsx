import Index from "../Componentes/MainPage/indexmainpage.jsx"
import Cards from "../Componentes/MainPage/cards.jsx"

function Home() {
  return (
    <main>
      <div className="index1">
        <div className="index2">
          <Index/>
        </div>
        <div>
          <img src="/public/img/img1.png" alt="png"/>
        </div>
      </div>
      <div className="cards">
        <Cards/>
      </div>
    </main>
  );
}

export default Home;