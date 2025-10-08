

const Comment = ({data}) =>{
    const {name,text,replies} = data;
    // console.log(data)
    return(
        <div className="flex shadow-sm bg-gray-200 p-1 rounded-lg m-2 border border-black">
            <img className="w-10 h-10" src="https://freesvg.org/img/abstract-user-flat-4.png" alt="user" />
        
        <div className="px-3">
            <p className="font-bold">{name}</p>
            <p>{text}</p>
        </div>

        </div>
    )
}

export default Comment;