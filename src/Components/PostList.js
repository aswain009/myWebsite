import React from 'react';

function PostList(props) {
    const posts = props.posts.map((post) => {
        return (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
        );
    });

    return <div>{posts}</div>;
}

export default PostList;