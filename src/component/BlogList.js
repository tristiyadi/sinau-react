import React from 'react'

const BlogList = props => {
    return (
        <div style={styles.contentBlog}>
            <h1 style={styles.title}>{props.title}</h1>
            <p style={styles.pBlog}>{props.content}</p>
            <p style={styles.pBlog2}>{props.author} - {props.date}</p>
        </div>
    )
    
}
const styles = {
    contentBlog: {
        margin: 2,
        padding: 5,
        border: "#603 dotted",
        height: "10em",
        position: "relative",
        width: "auto"
    },
    title : {
        background: "rgb(241, 208, 208)"
    },
    pBlog : {
        margin: "0 0 1rem 0",
        padding: "1.2rem",
        background: "-webkit-gradient(linear, left top, right top, from(#eee), to(white))",
        borderLeft: "8px solid #ccc",
        width: "auto",
        background: "#eee",
        position: "absolute",
        top: "20",
        left: "0",
        marginRight: "0%"
    },
    pBlog2 : {
        background: "#efefef",
    }
}
export default BlogList

