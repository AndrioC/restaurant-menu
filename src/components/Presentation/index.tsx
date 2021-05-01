import React from 'react'

import {
    Container,
    Content,
    Info,
    ImagesBackground,
} from './styles'

import imgBackground from '../../assets/images/background.png'

const Presentation:React.FC = () => {
    return (
        <Container>
            <Content>
                <Info>
                    <h1>Lorem ipsum.</h1>
                    <h3>The quick...</h3>
                    <p>
                        The quick, brown fox jumps over a lazy dog. DJs flock by
                        when MTV ax quiz prog. Junk...
                    </p>

                    <button>
                        View Menu
                    </button>
                </Info>
                <ImagesBackground>
                    <img src={imgBackground} alt=""/>
                </ImagesBackground>
            </Content>
        </Container>
    )
}

export default Presentation