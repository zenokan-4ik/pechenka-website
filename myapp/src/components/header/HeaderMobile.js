import styles from './mobile.module.css'

import cookieicon from '../../pictures/icons/cookie_icon2.svg'
import burgericon from '../../pictures/icons/burger_icon.svg'

import { useEffect, useState, useRef } from 'react'

import { navigateToRoute } from '../tools'

const HeaderMobile = () => { 
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef(null);
    const [render, setRender] = useState(true)
    

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
                <p style={{fontSize: '5vw', minWidth: '29vw'}}>
                {
                  window.location.href.split('/')[window.location.href.split('/').length-1]==='lore' ? 'Лор' :
                  window.location.href.split('/')[window.location.href.split('/').length-1]==='' ? 'Главная' :
                  window.location.href.split('/')[window.location.href.split('/').length-1]==='commishki' ? 'Коммишки':''
                }
                </p>
                <img src={burgericon} alt="Меню" style={{marginRight: '4%', width: '15vw'}} onClick={() => {
                    setIsOpen(!isOpen)
                }}/>
            </header>
            <div className={styles.menu} id='menu' ref={menuRef}>
                <p onClick={() => {navigateToRoute('/'); setRender(!render)}}>Главная</p>
                <div className="linegrad" style={{width: '21vw'}} />
                <p onClick={() => {navigateToRoute('/lore'); setRender(!render)}}>Лор</p>
                <div className="linegrad" style={{width: '12vw'}} />
                <p onClick={() => {navigateToRoute('/commishki'); setRender(!render)}}>Коммишки</p>
                <div className="linegrad" style={{width: '28vw'}} />
            </div>
        </div>
    )
}

export default HeaderMobile