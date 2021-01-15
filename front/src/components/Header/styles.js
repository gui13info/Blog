import styled from 'styled-components';

export const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100vw;
        padding: 1.5rem 2rem;

        background-color: var(--color-primary);
        
        color: var(--color-white);
        font-weight: bold;
        font-size: 1.2rem;
        text-transform: uppercase;
    }
`;