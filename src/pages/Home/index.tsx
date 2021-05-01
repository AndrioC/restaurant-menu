import React from 'react'
import Header from '../../components/Header'
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
        </Container>
    )
}

export default Home