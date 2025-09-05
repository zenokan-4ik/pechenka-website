import styles from './mobile.module.css'

import cookieicon from '../../pictures/icons/cookie_icon2.svg'
import burgericon from '../../pictures/icons/burger_icon.svg'

import { useEffect, useState, useRef } from 'react'

import { navigateToRoute } from '../tools'

const HeaderMobile = () => { 
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef(null);
    

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    if (isOpen) {
      menu.style.height = '0';
      menu.style.overflow = 'hidden';
      
      const naturalHeight = menu.scrollHeight + 'px';
      
      menu.style.transition = 'height 300ms ease-in';
      
      requestAnimationFrame(() => {
        menu.style.height = naturalHeight;
      });
      
      const handleTransitionEnd = () => {
        menu.style.height = 'auto';
        menu.style.overflow = 'visible';
        menu.removeEventListener('transitionend', handleTransitionEnd);
      };
      
      menu.addEventListener('transitionend', handleTransitionEnd);
    } else {
      const currentHeight = menu.scrollHeight + 'px';
      
      menu.style.height = currentHeight;
      menu.style.overflow = 'hidden';
      menu.style.transition = 'height 300ms ease-in';
      
      requestAnimationFrame(() => {
        menu.style.height = '0';
      });
    }}, [isOpen]);

    return (
        <div>
            <header className={styles.wrapper}>
                <img src={cookieicon} alt="Печенька)" className={styles.cookieicon}/>
                <p style={{fontSize: '10vw'}}>Главная</p>
                <img src={burgericon} alt="Меню" style={{marginRight: '4%', width: '15vw'}} onClick={() => {
                    setIsOpen(!isOpen)
                }}/>
            </header>
            <div className={styles.menu} id='menu' ref={menuRef}>
                <p onClick={() => {navigateToRoute('/')}}>Главная</p>
                <div className="linegrad" style={{width: '21vw'}} />
                <p onClick={() => {navigateToRoute('/lore')}}>Лор</p>
                <div className="linegrad" style={{width: '12vw'}} />
                <p onClick={() => {navigateToRoute('/comishki')}}>Коммишки</p>
                <div className="linegrad" style={{width: '28vw'}} />
            </div>
        </div>
    )
}

export default HeaderMobile