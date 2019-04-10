import React from 'react'

const styles={
    borderBottom:"2px solid #eee",
    background:"#fafafa",
    margin:'0.75rem auto',
    padding:'0.6rem 1rem',
    maxWidth:'800px',
    borderRadius:'7px'
}

export default ({post:{ title,body,id},OnDelete}) => {
    return(
        <div styles = {styles}>
        <h2>{title}</h2>
        <p>{body}</p>
        <button className="btn btn-danger" type="button" onClick={()=>OnDelete(id)} >Remove</button>
        </div>
    );

};