import styled from 'styled-components'

export const Container = styled.header`
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
    }
`;