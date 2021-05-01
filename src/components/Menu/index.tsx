import React, { useMemo, useState } from 'react'

import menu from '../../assets//data/menu'

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

    useMemo(() => {
        setMenuList(menu)
    }, [])

    function renderMenuList(){
        return (
            menuList.map((item) => (
                <span key={item.id}>{item.title}</span>
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