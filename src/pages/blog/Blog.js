import React from 'react';
import posts from '../../data/posts.json';
import { Link } from "react-router-dom";
import './Blog.css';

function Blog() {
    // console.log(posts)
    return (
        <div className="outer-container">
            <div className="inner-container">
            <h1>Blog overzichtspagina</h1>
            <h2>Aantal blog posts {posts.length}</h2>
            <ul className="bloglist">
                {posts.map((item) => {
                    console.log(item.id)
                    return (<li key={item.id}><Link to={`/blogposts/${item.id}`} className="link">{item.title}</Link></li>)
                })}
            </ul>
            </div>
        </div>
    );
}

export default Blog;