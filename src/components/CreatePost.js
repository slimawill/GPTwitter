
function CreatePost(props){

    function create(event){
        event.preventDefault();
        const PostData = {author: "William", message: event.target[0].value};
        event.target[0].value = '';
        props.onAddPost(PostData);
    }

    return(
        <div>
            <form 
                onSubmit={create}
                className="mx-2 sm:mx-auto sm:oitenta overflow-hidden text-center rounded-full gap-2 flex pr-2 justify-between h-20 bg-white">
                <input 
                    type="text"
                    placeholder="Digite sua mensagem"
                    className="pl-4 w-full outline-none"/>
                <button className="rounded-full my-2 w-20 bg-blue-300 mx-auto text-center">Enviar</button>
            </form>  
        </div>
    )
}

export default CreatePost;