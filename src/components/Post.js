function Post(props) {
    return <div className="Post">
        <h1>{props.author}</h1>
        <p>{props.msg}</p>
    </div>
}

export default Post;