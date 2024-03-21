import React from 'react'
import "./sidebar.css"
function Sidebar() {
    return (
        <div className="sidebar">
            <div className='sidebar__top'>
                <div className='top__profile'></div>
                <h1 className='top__username'>Profile</h1>
            </div>
            <div className='sidebar__main'>
                <i class="main__search fa-solid fa-magnifying-glass"></i>
                <input className='main__input' type="search" />
            </div>
            <ul className='sidebar__bottom'>
                <li className='bottom__item'>All Tasks</li>
                <li className='bottom__item'>My Tasks</li>
                <li className='bottom__item'>Trash</li>
                <li className='bottom__item'>Projects</li>
            </ul>
        </div>
    )
}

export default Sidebar