import React from 'react';


import './Post.css';

const post = (props) => (
    <article className="Post">
        <div className="Title" >
            <h3>{props.title}</h3>
        </div>
        <div className="Info">
            <img className="Images" src={props.link} alt="" />
            <h3>{props.price} ₺</h3>
        </div>
    </article>
);

export default post;

// Urun cagirma
{/* <Post key={data._id}
                    title={data.name}
                    link={data.productPhoto}
                    price={data.price}
                /> */}