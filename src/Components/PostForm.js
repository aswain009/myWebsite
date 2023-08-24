import React, {useState} from "react";

function PostForm(props) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleTitleChanges = (event) => {
        setTitle(event.target.value);
    }

    const handleBodyChanges = (event) => {
        setBody(event.target.value);
    }
    const handleSubmit = (event) => {
    event.preventDefault();
        const newPost = {
            title: title,
            body: body,
            id: Date.now(),
        };
        props.addPost(newPost);
    }
    return (
        <form method='post' action='http://localhost:3030/testAPI'>
        <input type="text" name="title" placeholder="Title" onChange={handleTitleChanges}/>
        <input type="text" name="body" placeholder="Body" onChange={handleBodyChanges} />
        <button onClick={handleSubmit}>Submit</button>
        </form>
    );
}

export default PostForm;