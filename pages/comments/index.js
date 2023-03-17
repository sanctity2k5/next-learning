import React, { useState } from 'react';
import Layout from '../../components/Layout';

function CommentsPage() {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    const fetchComments = async () => {
        const response = await fetch('/api/comments');
        const data = await response.json();
        setComments(data);
    }

    const submitComment = async () => {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: {
          'Content-Type': 'application/json'
        } 
      })
      const data = await response.json();
      console.log(data);
    }
    const deleteComment = async commentId => {
      const response = await fetch(`/api/comments/${commentId}`, {
        method: 'DELETE'
      })
      const data = await response.json();
      console.log(data);
      fetchComments();
    }

    
  return (
    <Layout>
    <div>
    <input type="text" value={comment} onChange={(e) => setComment(e.target.value)}/>
    <button onClick={submitComment}>Add Comment</button>
      <button onClick={fetchComments}>Fetch Comments</button>
      {
        comments.map(comment => (
          <div key={comment.id}>
            <p>{comment.id}</p>
            <h3>{comment.name}</h3>
            <h1>{comment.comments}</h1>
            <button onClick={() => deleteComment(comment.id)}>Delete</button>
          </div>
        ))
      }
    </div>
    </Layout>
  );
}

export default CommentsPage;
