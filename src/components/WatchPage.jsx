import { useSearchParams } from "react-router";
import Comment from "./Comment";



const commentData = [
    {
        name:"Raj Bhoir",
        text : "This is the first comment.",
        replies:[
             {
        name:"Atharv Bhoir",
        text : "This is a reply to the first comment",
        replies:[
             {
        name:"Raj Bhoir",
        text : "This is a reply to the second comment",
        replies:[],
    },
        ],
    },
        ],
    },
    {
        name:"Atharv Bhoir",
        text : "Python tutorial",
        replies:[ {
        name:"Raj Bhoir",
        text : "React tutorial",
        replies:[
             {
        name:"Atharv Bhoir",
        text : "Python tutorial",
        replies:[
             {
        name:"Raj Bhoir",
        text : "React tutorial",
        replies:[],
    },
        ],
    },
        ],
    }],
    },
    {
        name:"Jayesh Bhoir",
        text : "Django tutorial",
        replies:[
             {
        name:"Jayesh Bhoir",
        text : "Django tutorial",
        replies:[
            
        ],
    }, {
        name:"Jayesh Bhoir",
        text : "Django tutorial",
        replies:[
            
        ],
    },
        ],
    },
]


const CommentList = ({comments}) =>{
    return comments.map((comment,index)=>(
        // Not to use Index as a key
        <div key={index} >
        <Comment data={comment}/>
        <div className="pl-5 border border-l-black ml-5">
            <CommentList comments={comment.replies}/>
        </div>
        </div>
    ))
}


const WatchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    // const id = searchParams.get("v")
    // console.log(id)

    return (
        <div className="px-5"> 

            <iframe width="800" height="450" src={"https://www.youtube.com/embed/"+searchParams.get("v")}
             title="World Champion Gukesh vs Women&#39;s World Cup winner Divya Deshmukh | FIDE Grand Swiss 2025" 
             frameBorder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
             allowFullScreen></iframe>

            <div className="m-5 p-2 ">
                <h1 className="text-2xl font-bold">comments:</h1>
                
                <CommentList comments={commentData}/>
            </div>

            
        </div>
    )
}


export default WatchPage;