import React, {useState} from "react";

function StorePost(props) {
    const [response, setResponse] = useState('')
    function callAPI(){
        fetch("http://localhost:3030/testAPI")
            .then(res => res.text())
            .then(res => setResponse(res))
        console.log(response)
    }
    callAPI();
  return (
    <div>
        <h3>{props.posts.title}</h3>
        <p>{props.posts.body}</p>
        <p>{props.posts.id}</p>
    </div>
  );
}

export default StorePost;