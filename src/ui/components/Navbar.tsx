/***********************Navbar**************************/
import React from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar: React.FC<NavbarPropsType> = ({productSections}) => {

    return (
        <ul className='navbar'>
            {productSections.map((p, i) => <li key={i}><NavLink to={`${p.chapterId}`}>{p.chapterName}</NavLink></li>)}
        </ul>
    )
}

type NavbarPropsType = {
    productSections: Array<{ chapterId: string, chapterName: string }>
}

/**********************************************************/

