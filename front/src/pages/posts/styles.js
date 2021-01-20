import styled from 'styled-components';

export const ContainerPost = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    article{
        width: 50rem;

        background: #196EAB;
        border: 1px solid #196EAB;
        box-shadow: 0.2rem 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.2), 
                    0.4rem 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2);
        
        border-radius: 0.5rem;
        padding: 2rem;
        margin-bottom: 2rem;
        color: #E5E5EA;

        .picture{
            img{
                width: 10rem;
                height: 10rem;
                border-radius: 50%;
            }
        }

        .like{
            margin-top: 2rem;

            p{
                display: flex;
                align-items: center;

                font-size: 1.3rem;
            }

            .icon{
                font-size: 2rem;
                margin-right: 1rem;
            }
        }

        .category{
            display: flex;
            align-items: center;

            margin-top: 2rem;
            font-size: 1.4rem;

            p{
                margin-right: 1rem;
                
            }
        }

        .data{
            margin-top: 2rem;

            font-size: 1.4rem;

            strong{
                font-size: 1.2rem;
            }
        }

        .action{
            display: flex;
            justify-content: center;
            align-items: center;
            
            margin-top: 2rem;

            a{
                display: flex;
                justify-content: center;
                align-items: center;

                width: 100%;
                height: 4rem;

                border-radius: 0.5rem;
                border: 2px solid #E5E5EA;

                font-size: 1.5rem;
                font-weight: bold;
                color: #F3570F;
                transition: all 0.2s;

                :hover{
                    background: #F3570F;
                    color: #E5E5EA;
                } 
            }
        } //action
    }



`;