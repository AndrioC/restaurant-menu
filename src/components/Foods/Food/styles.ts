import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-bottom: 30px;

    @media(max-width: 900px){ 
        width: 120px;
    }
`;

export const ImageContent = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color:rgba(0,0,0,0.6);
        a {
            > button {
                visibility: visible;
            } 
        }       
    }

    > img {
        width: 230px;
        height: 333px;
        object-fit: cover;
        border-radius: 3px;

        &:hover{
            background-color:rgba(0,0,0,0.6);
            opacity: 0.5;
        }
    }

    a {
        position: absolute;
        bottom: 40px;
        text-decoration: none;
        > button {
            width: 120px;
            height: 36px;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--green-100);
            border: none;
            color: white;
            font-weight: bold;
            transition: filter .3s;
            visibility: hidden;

            &:hover{
                filter: brightness(.81);
            }        

            > svg {
                width: 18px;
                height: 18px;
                color: white;
                margin-right: 6px;
                margin-bottom: 4px;
            }
        }
    }

    @media(max-width: 900px){ 
        img {
            width: 120px;
            height: 240px;
        }  
    }

`;


export const InfoContent = styled.div`


`;


export const FoodInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 9px;

    h1 {
        color: #000;
        font-size: 18px;
    }

    span {
        color: var(--green-100);
        font-weight: bold;
    }

    @media(max-width: 900px){ 
        h1 {
            font-size: 13px;
        }

        span {
            font-size: 12px;
        }
    }
`;


export const FoodReviewTime = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 3px;
`;

export const FoodReviews = styled.div`
    display: flex;
    align-items: center;

    > svg {
        width: 12px;
        height: 12px;
        margin-bottom: 3px;
    }

    > span {
        margin-left: 6px;
        font-size: 12px;
        font-weight: 600;
        color: var(--gray-500);
    }

    @media(max-width: 900px){

        > svg {
            width: 6px;
            height: 6px;
        }

        > span {
            font-size: 7.2px;
        }
    }
`;


export const FoodTime = styled.div`
    display: flex;
    align-items: center;

    > svg {
        width: 13px;
        height: 13px;
        margin-bottom: 3px;
    }

    > span {
        margin-left: 6px;
        font-size: 13px;
        color: var(--gray-500);
    }

    @media(max-width: 900px){
        > svg {
            width: 7px;
            height: 7px;
        }

        > span {
            margin-left: 3px;
            font-size: 9px;
        }
    }
`;