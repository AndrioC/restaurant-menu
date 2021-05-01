import React from 'react'
import Header from '../../components/Header'
import Menu from '../../components/Menu'
import Presentation from '../../components/Presentation'

import {
    Container
} from './styles'

const Home:React.FC = () => {
    return (
        <Container>
            <Header />    

            <section>
                <Presentation />
            </section>

            <section>
                <Menu />
            </section>
        </Container>
    )
}

export default Home