

const VideoCard = ({info}) =>{
    const {snippet,statistics} = info;
    const {thumbnails,title,channelTitle}= snippet
    const {viewCount} = statistics
    return(
        <div className="p-2 m-2 w-72">
            <img className="rounded-lg" alt="thumbnails" src={thumbnails.medium.url}></img>
            <ul>
                <li className="font-bold py-2 break-words">{title}</li>
                <li>{channelTitle}</li>
                <li>{viewCount} views</li>
            </ul>
        </div>
    )
}

export default VideoCard;