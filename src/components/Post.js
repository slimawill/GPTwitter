function Post(props) {
    return <div className="text-black mx-auto text-center overflow-hidden m-4 rounded-full border-white border-4 oitenta">
        <h1 className="bg-white">{props.author}</h1>
        <p className="resize-both h-min bg-transparent overflow-hidden">{props.msg}</p>
    </div>
}

export default Post;