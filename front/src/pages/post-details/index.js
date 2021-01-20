import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { ContainerDetails } from './styles';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FcLike } from 'react-icons/fc';

import api from '../../services/api';
import Header from '../../components/Header';

function PostDetails(){
    const [post, setPost] = useState([]);
    const [category, setCategory] = useState([]);
    const [comments, setComments] = useState([]);
    const [user, setUser] = useState([]);

    const { id } = useParams();
    var cont = 0;

    useEffect(() => {
        api.get(`/posts/${id}`).then((res) => {
            
            const docs = res.data;

            setPost(docs);            
        });
        
    }, []);

    useEffect(() => {
        api.get('/categories').then((res) => {
            
            const docs = res.data;

            setCategory(docs);
        });

    }, []);

    useEffect(() => {
        api.get('/comments').then((res) => {
            
            const docs = res.data;

            setComments(docs);
        });

    }, []);

    useEffect(() => {
        api.get('/users').then((res) => {
            
            const docs = res.data;

            setUser(docs);
        });

    }, []);

    comments.sort(function(a, b){
        return Date.parse(b.postedAt) - Date.parse(a.postedAt)
    })

    function teste(a, b){
        comments.map(comment => {
            if((comment.post === a) && (post.id === b))
                if(comment.like === true){
                    return cont++                    
                }
        })
    }

    return(
        <ContainerDetails>
            <Header />

            <div className="action">
                <Link to="/"><AiOutlineArrowLeft className='icon' /> Voltar</Link>
            </div>

            <div className="InfoPost">
                <h1>Título: {post.title}</h1>

                <div className="descricao">
                    <p>Descrição:<strong>{post.body}</strong></p>
                </div>

                <div className="author">
                    <p>Autor: 
                        {user.map(item => (
                            post.postedBy === item.id ? <strong key={item.id}>{item.name}</strong> : null
                        ))}
                    </p>
                </div>

                <div className="category">
                    <p>Categoria:
                        {category.map(item => (
                            post.category === item.id ? <strong key={item.id}>{item.name}</strong> : ''
                        ))}    
                     </p>
                </div>

                <div className="like">
                    <p> <FcLike className="icon" />
                        {teste(post.id, post.id)}
                        <strong>{cont}</strong>
                    </p>
                </div>

                <div className="coments">
                    <h1>Comentários</h1>

                    <article>
                        {comments.map(comment => (
                            comment.post === post.id ?
                            (<div className="container" key={comment.id}>
                                <div className="user">
                                    <div className="foto">
                                        {user.map(author => (
                                            comment.author === author.id && comment.post === post.id ? <img key={author.id} src={author.picture} alt=""/> : null
                                        ))}    
                                    </div>

                                    <div className="info">
                                        {user.map(author => (
                                            comment.author === author.id && comment.post === post.id ? <strong key={author.id}>{author.name}</strong> : null
                                        ))}

                                        <p>{comment.postedAt}</p>
                                    </div>
                                </div>

                                <div className="coment">
                                    {comment.post === post.id ? <p>{comment.content}</p> : null}
                                </div>
                            </div>) : null
                        ))}
                    </article>
                </div>

                <div className="AbautAthor">
                    <h1>Detalhes do Autor:</h1>

                    <article>
                        {user.map(author => (
                            post.postedBy === author.id ?
                            (<div key={author.id} className="container">
                                <div className="autor">
                                    <div className="foto">
                                        {post.postedBy === author.id ? <img src={author.picture} alt=""/> : null}
                                        
                                        <div className="info">
                                            <p>Nome: 
                                                {post.postedBy === author.id ? <strong>{author.name}</strong> : null }
                                            </p>

                                            <p>Desde:
                                                { post.postedBy === author.id ? <strong>{author.joinedAt}</strong> : null }
                                            </p>
                                        </div>
                                    </div>

                                    <div className="others">
                                        <p>Profissão: 
                                            { post.postedBy === author.id ? <strong>{author.job}</strong> : null }
                                        </p>

                                        <div className="actions">
                                            { post.postedBy === author.id ? <Link to={`/user/${author.id}`}>Perfil</Link> : null }
                                        </div>
                                    </div>

                                </div>
                            </div>) : null
                        ))}
                    </article>
                </div>
            </div>
        </ContainerDetails>
    )
}

export default PostDetails;