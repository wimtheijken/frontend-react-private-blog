import React from 'react';
import posts from '../../data/posts.json';
import { useParams } from "react-router-dom";
import './BlogPost.css';

function BlogPost(props) {
    let {blogId} = useParams()
    blogId--
    return (
        <div className="outer-container">
            <div className="inner-container">
                <h1>{posts[blogId].title}</h1>
                <h2>{posts[blogId].date}</h2>
                <p className="blogbody">{posts[blogId].content}</p>
                <em>Blog nummer: {posts[blogId].id}</em>
            </div>
        </div>
    );
}

export default BlogPost;