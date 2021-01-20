import styled from 'styled-components';

export const ContainerDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

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
    }

    .InfoPost{        
        width: 50rem;

        margin: 1rem auto 1.5rem;
        padding: 2rem;
        
        background: #196EAB;
        color: #E5E5EA;
        border-radius: 5px;
        border: 1px solid #DDD;
        
        h1{
            display: flex;
            justify-content: center;

            margin-bottom: 2rem;
        }

        .descricao{
                font-size: 1.5rem;
            p{
                width: 40rem;

                strong{
                    margin-left: 0.8rem;
                } 
            }
        }

        .author{
            margin-top: 2rem;
            font-size: 1.4rem;

            p{
                strong{
                    margin-left: 0.8rem;
                }
            }
        }

        .category{
            margin-top: 2rem;
            font-size: 1.4rem;

            p{
                strong{
                    margin-left: 0.8rem;
                }
            }
        }

        .like{
            margin-top: 2rem;

            p{
                display:flex;
                font-size: 1.8rem;

                strong{
                    font-size: 1.4rem;
                    margin-left: 0.8rem;
                }
            }
        }

        .coments{
            margin-top: 2rem;

            article{
                padding: 1rem;
                border: 1px solid var(--color-primary);
                border-radius: 0.8rem;

                .container{
                    margin-bottom: 1rem;
                    padding: 1rem;
                    border: 1px solid #ec4223;
                    border-radius: 0.8rem;

                    .user{
                        display: flex;

                        .foto{
                            img{
                                width: 6rem;
                                height: 6rem;
                                margin-right: 1rem;
                                border-radius: 0.8rem;
                            }
                        }

                        .info{
                            display: flex;
                            justify-content: space-between;
                            
                            width: 100%;
                            padding: 0.8rem;

                            strong{
                                font-size: 1.3rem;
                            }

                            p{
                                font-size: 1.2rem;
                            }
                            
                        }
                    } //user

                    .coment{
                        margin-top: 0.8rem;
                        padding: 0.4rem 0.8rem;
                        
                        background: #ec4223;
                        border-radius: 0.8rem;
                        opacity: 0.8;
                        p{
                            font-size: 1.4rem;
                            font-weight: bold;
                        }
                    }
                }

            }
        } //comments

        .AbautAthor{
            margin-top: 2rem;

            article{
                padding: 1rem;
                border: 1px solid var(--color-primary);
                border-radius: 0.8rem;

                .container{
                    margin-bottom: 1rem;
                    padding: 1rem;
                    border: 1px solid #ec4223;
                    border-radius: 0.8rem;

                    .autor{
                        display: flex;
                        flex-direction: column;

                        .foto{
                            display: flex;
                            margin-bottom: 2rem;

                            img{
                                width: 8rem;
                                height: 8rem;
                                margin-right: 1rem;
                                border-radius: 0.8rem;
                            }
                        }

                        .info{
                            display: flex;
                            justify-content: space-between;
                            width: 100%;

                            padding: 0.8rem;

                            strong{
                                font-size: 1.3rem;
                                margin-left: 0.5rem;
                            }

                            p{
                                font-size: 1.2rem;
                            }

                        } //info

                        .others{
                            display: flex;
                            align-items: center;
                            justify-content: space-between;                            
                            padding: 0.8rem;

                            strong{
                                font-size: 1.3rem;
                                margin-left: 0.5rem;
                            }

                            p{
                                font-size: 1.2rem;
                            }  

                            .actions{
                                display: flex;
                                justify-content: center;
                                align-items: center;

                                a{
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;

                                    width: 10rem;
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
                            }
                        } //others
                    } //autor
                }
            }
        }

    }
`;