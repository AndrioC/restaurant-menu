import styled from 'styled-components'

export const Container = styled.header`
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) / 2);
    background: #fff;
`;

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;

    ul {
        align-items: center;
        background: red;
        li {
            margin-right: 30px;
            display: inline-block;
        }
    }
`;