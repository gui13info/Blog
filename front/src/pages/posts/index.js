import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FcLike } from 'react-icons/fc';
import { FaRegUserCircle } from 'react-icons/fa';

import { ContainerPost } from './styles';

import api from '../../services/api';
import ListUsers from '../../components/ListUsers';
import Header from '../../components/Header';

function Posts(){
    const [posts, setPost] = useState([]);
    const [users, setUsers] = useState([]);
    const [comments, setComments] = useState([]);
    const [categories, setCategories] = useState([]);
    const [show, setShow] = useState(false);

    // var cont = 0;

    // function teste(a, b){
    //     comments.map(comment => {
    //         posts.map(post => {
    //             if(comment.post === a){
    //                 if(post.id === b){
    //                     if(comment.like === true){
    //                         return cont++                    
    //                     }
    //                 }
    //             }
    //         })
    //     })
    // }

    // teste(0, 0)
    // console.log(cont)

    useEffect(() => {
        api.get('/posts').then((res) => {
            
            const docs = res.data;

            setPost(docs);
            
        });

    }, []);

    useEffect(() => {
        api.get('/users').then((res) => {
            
            const docs = res.data;

            setUsers(docs);
        });

    }, []);
    
    useEffect(() => {
        api.get('/comments').then((res) => {
            
            const docs = res.data;

            setComments(docs);
        });

    }, []);

    useEffect(() => {
        api.get('/categories').then((res) => {
            
            const docs = res.data;

            setCategories(docs);
        });

    }, []);

    posts.sort(function(a, b){
        return Date.parse(b.postedAt) - Date.parse(a.postedAt)
    });
    
    function HandleShow(){
        setShow(!show);
    }

    return(
        <ContainerPost>
            <Header>
                <p onClick={HandleShow}><FaRegUserCircle /></p>
            </Header>

            {
                show &&

                <ListUsers 
                    users = {users}
                />
            }

            {posts.map(post => (
                <article key={post.id}>
                    <div className="picture">
                        {users.map(user => (
                            post.postedBy === user.id ? <img src={user.picture} key={user.id} alt=""/> : ''
                        ))}
                    </div>

                    <div className="like">
                        <p> <FcLike className="icon" />
                            {/* {comments.map(comment => (
                                comment.post === post.id && comment.like === true ?  cont+1 : null
                            ))} */}
                        </p>
                    </div>

                    <div className="category">
                        <p>Categoria: </p> 
                        {categories.map(category => (
                            post.category === category.id ? <strong key={category.id}>{category.name}</strong> : ''
                        ))}

                    </div>

                    <div className="data">
                        <p>Publicado em: <strong>{post.postedAt.split(" ", 1)}</strong></p>
                    </div>

                    <div className="action">
                        <Link to={`/post-details/${post.id}`}>Detalhes</Link>
                    </div>
                </article>
            ))}
        </ContainerPost>
    );
}

export default Posts;