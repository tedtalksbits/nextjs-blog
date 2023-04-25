import styled from 'styled-components';

export const AppWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr min(120ch, 100%) 1fr;

    & > * {
        grid-column: 2;
    }
    & > .full-bleed {
        width: 100%;
        grid-column: 1 / 4;
    }
`;
