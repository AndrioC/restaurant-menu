import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    height: 120px;
    width: 100%;
`;

export const Content = styled.div`

    padding: 30px 120px;

    h1 {
        font-size: 21px;
        color: var(--green-100);
        font-weight: normal;
    }

    @media(max-width: 900px){
        padding: 30px 60px;
    }

`;