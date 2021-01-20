import styled from 'styled-components';

export const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    
    margin-bottom: 3rem;

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        padding: 1.5rem 2.5rem;

        background-color: var(--color-primary);
        
        color: var(--color-white);
        font-weight: bold;
        font-size: 1.2rem;
        text-transform: uppercase;

        p{
            display: flex;
            align-items: center;
            font-size: 3rem;
            margin-right: 8rem;

            cursor: pointer;
            transition: all 0.2s;

            :hover{
                opacity: 0.5;
            }
        }
    }
`;