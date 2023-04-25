import styled from 'styled-components';

export const AppGrid = styled.div`
    display: grid;
    grid-template-columns: 0.3fr 1.7fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'sidebar main';
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;
    height: 100vh;
    width: 100vw;
    background-color: #ffffff;
    overflow: hidden;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 4rem 1fr;
        grid-template-areas: 'main' 'sidebar';
    }
`;
