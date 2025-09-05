import './App.css';

import useIsMobile from './hooks/isMobile'
import MainMobile from './components/main/MainMobile';
import LoreMobile from './components/lore/LoreMobile';
import ComMobile from './components/com/ComMobile';
import MainDesktop from './components/main/MainDesktop';
import LoreDesktop from './components/lore/LoreDesktop';
import ComDesktop from './components/com/ComDesktop';
import FooterMobile from './components/footer/FooterMobile';
import HeaderDesktop from './components/header/HeaderDesktop';
import HeaderMobile from './components/header/HeaderMobile';
import FooterDesktop from './components/footer/FooterDesktop';

import { HashRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Test from './components/test/test';

function App() {
  const isMobile = useIsMobile();
  return (
    <div className="App">
      <HashRouter>
            {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
            <Routes>
                <Route path='/' element={isMobile ? <MainMobile /> : <MainDesktop />} />
                <Route path='/lore' element={isMobile ? <LoreMobile /> : <LoreDesktop />} />
                <Route path='/commishki' element={isMobile ? <ComMobile /> : <ComDesktop />} />
            </Routes>
            {isMobile ? <FooterMobile /> : <FooterDesktop />}
        </HashRouter>
    </div>
  );
}

export default App;
