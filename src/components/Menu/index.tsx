import React, { useMemo, useState } from 'react'

import menu from '../../assets/data/menu'

import {
    Container,
    Content
} from './styles'

interface MenuProps{
    id: number;
    title: string;
}

const Menu:React.FC = () => {

    const [menuList, setMenuList] = useState<MenuProps[]>([])
    const [categorySelected, setCategorySelected] = useState(1)

    useMemo(() => {
        setMenuList(menu)
    }, [])

    function renderMenuList(){
        return (
            menuList.map((item) => (
                <span
                    key={item.id}
                    onClick={() => setCategorySelected(item.id)}
                    className={categorySelected === item.id ? 'active-menu' : ''}
                >
                    {item.title}            
                </span>
            ))
        )
    }

    return (
        <Container>
            <Content>
                {renderMenuList()}
            </Content>
        </Container>
    )
}

export default Menu