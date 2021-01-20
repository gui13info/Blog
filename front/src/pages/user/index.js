import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { ContainerUser } from './styles';

import { AiFillHome } from 'react-icons/ai';
import { MdWork, MdDateRange } from 'react-icons/md';
import api from '../../services/api';
import Header from '../../components/Header';

function User(){
    const [user, setUser] = useState([]);
    const [post, setPost] = useState([]);
    const [category, setCategory] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        api.get(`/users/${id}`).then((res) => {
            
            const docs = res.data;

            setUser(docs);
            
        });
        
    }, []);

    useEffect(() => {
        api.get('/posts').then((res) => {
            
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

    post.sort(function(a, b){
        return Date.parse(b.postedAt) - Date.parse(a.postedAt)
    })

    return(
        <ContainerUser>
            <Header />

            <div className="action">
                <Link to="/"><AiFillHome className='icon' /> Home</Link>
            </div>

            <div className="user">
                <article>
                    <img src={user.picture} alt=""/>
                    <h1>{user.name}</h1>
                </article>

                <div className="container">
                    <div className="apresentacao">
                        <h1>Apresentação</h1>

                        <p><MdWork className="icon"/> Profissão: <strong>{user.job}</strong> </p>
                        <p><MdDateRange className="icon"/> Usuário desde: <strong>{user.joinedAt}</strong> </p>
                    </div>

                    <div className="publicacao">
                        <h1>Publicações</h1>

                        {post.map(item => (
                            user.id === item.postedBy 
                            ? (
                                <main key={item.id}>
                                    <h1>{item.title}</h1>
                                    <p>Postado em: <strong>{item.postedAt}</strong></p>
                                    {category.map(category => (
                                        item.category === category.id ? <p key={category.id}>Categoria: <strong>{category.name}</strong></p> : null
                                    ))}
                                </main>
                            ) : null
                        ))}
                    </div>
                </div>
            </div>
        </ContainerUser>
    )
}

export default User;