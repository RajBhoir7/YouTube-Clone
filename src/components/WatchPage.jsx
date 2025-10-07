import { useSearchParams } from "react-router";

const WatchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    // const id = searchParams.get("v")
    // console.log(id)

    return (
        <div className="px-5"> 

            <iframe width="913" height="514" src={"https://www.youtube.com/embed/"+searchParams.get("v")}
             title="World Champion Gukesh vs Women&#39;s World Cup winner Divya Deshmukh | FIDE Grand Swiss 2025" 
             frameBorder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
             allowFullScreen></iframe>
        </div>
    )
}


export default WatchPage;