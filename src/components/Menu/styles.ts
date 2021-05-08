import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 100%;
    background: var(--white-200);
    margin-top: 30px;
`;

export const Content = styled.div`
    display: flex;

    span {
        font-size: 15px;
        margin-right: 30px;
        font-weight: 600;
        color: var(--gray-500);
        cursor: pointer;
        transition: .3s;

        &:hover{
            color: var(--green-100);
        }
    }

    span.active-menu{
        color: var(--green-100);
        position: relative;

        ::after{
            content: "";
            width: 100%;
            height: 2px;
            background: var(--green-100);
            position: absolute;
            bottom: 0;
            left: 0;
        }
    }
`;