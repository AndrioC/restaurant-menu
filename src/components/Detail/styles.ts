import styled from 'styled-components'

export const Container = styled.div`
    display: flex;

    @media(max-width: 600px){
        flex-direction: column;
    }
`;

export const ProductImage = styled.div`
    height: 100vh;
    width: 500px;

    img {
        height: 100vh;
        width: 500px;
        object-fit: cover;
    }

    @media(max-width: 600px){
        width: 100%;
        height: 270px;
        img {
            height: 270px;
            width: 100%;
            object-fit: cover;
        }
    }
`;


export const ProductInfo = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 0 90px;

    @media(max-width: 600px){
        margin-top: 30px;
        padding: 0 30px;
    }
`;


export const Info = styled.div`

    h1 {
        color: var(--green-100);
    }

    h3 {
        color: var(--gray-500);
        margin-top: 30px;
        font-weight: 600;
    }

    p {
        display: flex;
        margin-top: 30px;
        color: var(--gray-300);

        > svg {
            margin-right: 6px;
        }
    }

    @media(max-width: 600px){
        h1 {
            font-size: 24px;
        }

        h3 {
            font-size: 13px;
            font-weight: 500;
        }
    }
`;

