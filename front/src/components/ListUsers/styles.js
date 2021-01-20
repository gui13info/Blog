import styled from 'styled-components';

export const ContainerUser = styled.div`
    display: flex;
    align-self: flex-end;
    justify-self: center;
    flex-direction: column;

    background-color: var(--color-primary);
    position: absolute;
    padding: 1.5rem;
    margin-top: -161rem;
    margin-right: 2rem;
    border-radius: 0 0 1rem 1rem;
    width: 20rem;
    
    a{
        display: flex;
        align-items: center;
        color: #E5E5EA;
        margin-bottom: 2rem;
        padding: 0.8rem; 

        border: 1px solid #F3570F;
        border-radius: 8rem;
        transition: all 0.2rem;

        :hover{
            opacity: 0.5;
        }

        :last-child{
            margin-bottom: 0;
        }
        
        img{
            width: 5rem;
            height: 5rem;
            border-radius: 50%;
            margin-right: 1rem;
        } 
    } // a

`;