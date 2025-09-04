import FooterDesktop from '../components/footer/FooterDesktop'
import HeaderDesktop from '../components/header/HeaderDesktop'
import usePageStore from '../zustand/store'

import LoreDesktop from '../components/lore/LoreDesktop'
import ComDesktop from '../components/com/ComDesktop'
import MainDesktop from '../components/main/MainDesktop'

const Desktop = () => {
    const {page, toPage} = usePageStore()

    return (
        <div>
            <HeaderDesktop />
            {
                page==='main' ? <MainDesktop /> :
                page==='lore' ? <LoreDesktop /> :
                page==='commishki' ? <ComDesktop /> : "empty"
            }
            <FooterDesktop />
        </div>
    )
}

export default Desktop