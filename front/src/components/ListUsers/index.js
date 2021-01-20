import React from 'react';
import { Link } from 'react-router-dom';

import { ContainerUser } from './styles';

function ListUsers(props){
    return(
        <ContainerUser>
            {props.users.map(user => (
                <Link to={`/user/${user.id}`} key={user.id}>
                    <img src={user.picture} alt="imagem usuário"/>
                    <p>{user.name}</p>
                </Link>
            ))}
        </ContainerUser>
    );
}

export default ListUsers;