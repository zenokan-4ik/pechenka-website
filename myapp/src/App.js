import './App.css';

import usePageStore from './zustand/store';
import useIsMobile from './hooks/isMobile'
import HeaderMobile from './components/header/HeaderMobile';
import HeaderDesktop from './components/header/HeaderDesktop';
import FooterDesktop from './components/footer/FooterDesktop';
import Desktop from './apps/Desktop';
import Mobile from './apps/Mobile';

function App() {
  const {page, toPage} = usePageStore()
  const isMobile = useIsMobile();
  return (
    <div className="App">
      {
        isMobile ? <Mobile /> : <Desktop />
      }
    </div>
  );
}

export default App;
