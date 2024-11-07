import { HashRouter, Route, Routes, Link } from 'react-router-dom';
import CharacterList from "./components/CharacterList.jsx";
import NewCharacter from "./components/NewCharacter.jsx";
import ScrollList from "./components/ScrollList.jsx";
import NewScroll from "./components/NewScroll.jsx";

function App() {

  return (
    <>
        <HashRouter>
                <nav>
                    <Link to="/"> Home </Link>
                    <Link to="/characterlist"> || Character List </Link>
                    <Link to="/newcharacter"> || New Character </Link>
                    <Link to="/scrolllist"> || Scroll List </Link>
                    <Link to="/newscroll"> || New Scroll </Link>
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
