import styled from 'styled-components';

export const ContainerUser = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100vw;

    .action{
        width: 95%;

        a{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 7rem;

            font-size: 1.5rem;
            font-weight: bold;
            color: #ec4223;
            transition: all 0.2s;

            .icon{
                margin-right: 0.5rem;
            }

            :hover{
                opacity: 0.6;
            }
        }
    } //action

    .user{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        
        width: 100vw;
        color: #E5E5EA; 

        article{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            
            padding: 1.5rem;
            background: #196EAB;
            border: 1px solid var(--color-primary);
            border-radius: 1rem;
            width: 80%;

            img{
                width: 20rem;
                height: 20rem;
                border-radius: 50%;
            }

            h1{
                margin-top: 0.8rem;
                font-size: 1.8rem;
            } //h1
        } //article

        .container{
            display: flex;
            align-items: center;
            justify-content: space-between;

            margin-top: 2rem;
            margin-bottom: 2rem;
            width: 80%;

            .apresentacao{
                padding: 1.5rem;
                margin-bottom: auto;
                width: 49%;
                background: #196EAB;
                border: 1px solid var(--color-primary);
                border-radius: 1rem;

                h1{
                    display: flex;
                    justify-content: center;
                    margin-bottom: 2rem;
                }

                p{
                    font-size: 1.6rem;
                }
            }

            .publicacao{
                padding: 1.5rem;
                width: 49%;
                background: #196EAB;
                border: 1px solid var(--color-primary);
                border-radius: 1rem;

                h1{
                    display: flex;
                    justify-content: center;
                    margin-bottom: 2rem;
                }

                main{
                    padding: 1rem;
                    margin-bottom: 1.5rem;
                    border: 1px solid var(--color-primary);
                    border-radius: 0.8rem;

                    h1{
                        margin-bottom: 1.5rem;
                        font-size: 1.7rem;
                    }

                    p{
                        font-size: 1.5rem;
                    }
                }                
            } //publicacao
        }
    } //user
`;