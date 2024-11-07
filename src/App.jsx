import { HashRouter, Route, Routes, Link } from 'react-router-dom';
import ScrollList from "./components/ScrollList.jsx";
import NewScroll from "./components/NewScroll.jsx";
import HeroList from "./components/HeroList.jsx";
import NewHero from "./components/NewHero.jsx";

function App() {

  return (
    <>
        <HashRouter>
                <nav>
                    <Link to="/"> Home </Link>
                    <Link to="/herolist" className="heroListLink"> || Character List </Link>
                    <Link to="/newhero" className="newHeroLink"> || New Character </Link>
                    <Link to="/scrolllist" className="scrollListLink"> || Scroll List </Link>
                    <Link to="/newscroll" className="newScrollLink"> || New Scroll </Link>
                </nav>
                <Routes>
                    <Route path="/" element={<div>Home</div>}/>
                    <Route path="/herolist" element={<HeroList/>}/>
                    <Route path="/newhero" element={<NewHero/>}/>
                    <Route path="/scrolllist" element={<ScrollList/>}/>
                    <Route path="/newscroll" element={<NewScroll/>}/>
                </Routes>
        </HashRouter>
    </>
  )
}

export default App
