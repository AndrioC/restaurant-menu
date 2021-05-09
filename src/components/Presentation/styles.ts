import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
`;

export const Content = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    justify-content: center;
    h1 {
        font-size: 42px;
        color: var(--green-100);
        font-weight: bold;
    }

    h3 {
        font-size: 24px;
        margin-top: 12px;
    }

    p {
        font-size: 13px;
        margin-top: 12px;
        width: 340px;
        line-height: 33px;
        color: var(--brown-100);
    }

    button {
        margin-top: 18px;
        background: var(--green-100);
        border: none;
        color: var(--white);
        font-weight: bold;
        height: 40px;
        width: 120px;
        border-radius: 30px;
        transition: filter .3s;

        &:hover{
            filter: brightness(.81);
        }
    }

    @media(max-width: 900px){
       height: 200px;
       width: 100%;
       align-items: center;
       justify-content: center;
       h1 {
           font-size: 21px;
       }

       h3 {
           font-size: 15px;
       }

       p {
           font-size: 9px;
           width: 100px;
           line-height: 13px;
       }
    }

`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 81px;
    position: relative;

    &::after{
        content: "";
        position: absolute;
        top: -30px;
        left: -20px;
        background: var(--green-100);
        height: 160px;
        width: 6px;
    }

    @media(max-width: 900px){
        margin-right: 0;
    }
`;

export const ImagesBackground = styled.div`
    display: flex;

    @media(max-width: 900px){
        img {
            width: 150px;
            height: 109px;
        }
    }
`;