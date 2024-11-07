import { HashRouter, Route, Routes, Link } from 'react-router-dom';
import CharacterList from "./components/HeroList.jsx";
import NewCharacter from "./components/NewHero.jsx";
import ScrollList from "./components/ScrollList.jsx";
import NewScroll from "./components/NewScroll.jsx";

function App() {

  return (
    <>
        <HashRouter>
                <nav>
                    <Link to="/"> Home </Link>
                    <Link to="/herolist" className="heroListLink"> || Character List </Link>
                    <Link to="/newhero" className="newheroLink"> || New Character </Link>
                    <Link to="/scrolllist" className="scrollListLink"> || Scroll List </Link>
                    <Link to="/newscroll" className="newscrollLink"> || New Scroll </Link>
                </nav>
                <Routes>
                    <Route path="/" element={<div>Home</div>}/>
                    <Route path="/characterlist" element={<CharacterList/>}/>
                    <Route path="/newcharacter" element={<NewCharacter/>}/>
                    <Route path="/scrolllist" element={<ScrollList/>}/>
                    <Route path="/newscroll" element={<NewScroll/>}/>
                </Routes>
        </HashRouter>
    </>
  )
}

export default App
