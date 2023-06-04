function CreatePost(){
    return(
        <div>
            <form className="mx-2 sm:mx-auto sm:oitenta overflow-hidden text-center rounded-full gap-2 flex pr-2 justify-between h-20 bg-white">
                <input 
                    type="text" 
                    placeholder="Digite sua mensagem"
                    className="pl-4 w-full outline-none"/>
                <button className="rounded-full my-2 w-20 bg-blue-300 mx-auto text-center">Enviar</button>
            </form>
        </div>
    )
}

export default CreatePost