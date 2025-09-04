import FooterDesktop from '../components/footer/FooterDesktop'
import HeaderDesktop from '../components/header/HeaderDesktop'
import usePageStore from '../zustand/store'

import LoreDesktop from '../components/lore/LoreDesktop'
import ComDesktop from '../components/com/ComDesktop'
import MainDesktop from '../components/main/MainDesktop'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Desktop = () => {
    const {page, toPage} = usePageStore()

    return (
        <Router>
            <HeaderDesktop />
            <Routes>
                <Route path='/' element={<MainDesktop />} />
                <Route path='/lore' element={<LoreDesktop />} />
                <Route path='/commishki' element={<ComDesktop />} />
            </Routes>
            <FooterDesktop />
        </Router>
    )
}

export default Desktop