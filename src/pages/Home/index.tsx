import React from 'react'
import Foods from '../../components/Foods'
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

            <section>
                <Foods />
            </section>

        </Container>
    )
}

export default Home