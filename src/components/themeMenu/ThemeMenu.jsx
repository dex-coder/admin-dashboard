import React, { useRef } from 'react';
import './themmenu.css';


const mode_settings = [
    {
        id: 'light',
        name: 'Light',
        background: 'light-background',
        class: 'theme-mode-light'
    },
    {
        id: 'dark',
        name: 'Dark',
        background: 'dark-background',
        class: 'theme-mode-dark'
    }
]

const color_settings = [
    {
        id: 'blue',
        name: 'Blue',
        background: 'blue-color',
        class: 'theme-color-blue'
    },
    {
        id: 'red',
        name: 'Red',
        background: 'red-color',
        class: 'theme-color-red'
    },
    {
        id: 'cyan',
        name: 'Cyan',
        background: 'cyan-color',
        class: 'theme-color-cyan'
    },
    {
        id: 'green',
        name: 'Green',
        background: 'green-color',
        class: 'theme-color-green'
    },
    {
        id: 'orange',
        name: 'Orange',
        background: 'orange-color',
        class: 'theme-color-orange'
    },
]


const clickOutsideRef = (content_ref, toggle_ref) => {
    document.addEventListener('mousedown', (e) => {
        // user click toggle
        if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
            content_ref.current.classList.toggle('active')
        } else {
            // user click outside toggle and content
            if (content_ref.current && !content_ref.current.contains(e.target)) {
                content_ref.current.classList.remove('active')
            }
        }
    })
}


const ThemeMenu = () => {
    const menu_ref = useRef(null)
    const menu_toggle_ref = useRef(null)

    clickOutsideRef(menu_ref, menu_toggle_ref)

    const setActiveMenu = () => menu_ref.current.classList.add('active')

    const closeMenu = () => menu_ref.current.classList.remove('active')
    return (
        <div>
            <button ref={menu_toggle_ref} className="dropdown__toggle" onClick={() => setActiveMenu()}>
                <i className="bx bx-palette"></i>
            </button>

            <div className="theme__menu" ref={menu_ref} onClick={() => closeMenu()}>
                <h4>Theme settings</h4>
                <button className="theme__menu-close">
                    <i className="bx bx-x"></i>
                </button>
                <div className="theme__menu-select">
                    <span>Choose mode</span>
                    <ul className="mode__list">
                        {
                             mode_settings.map((item, index) => (
                                <li key={index}>
                                    <div className={`mode__list-color ${item.background}`}>
                                        <i className="bx bx-check"></i>
                                    </div>
                                    <span>{item.name}</span>
                                </li>
                             ))
                        }
                    </ul>
                </div>

                <div className="theme__menu-select">
                    <span>Choose Color</span>
                    <ul className="mode__list">
                        {
                             color_settings.map((item, index) => (
                                <li key={index}>
                                    <div className={`mode__list-color ${item.background}`}>
                                        <i className="bx bx-check"></i>
                                    </div>
                                    <span>{item.name}</span>
                                </li>
                             ))
                        }
                    </ul>
                </div>

            </div>
            
        </div>
    )
}

export default ThemeMenu