import { Link } from "react-router-dom";
import mk2 from '../../assets/mk2.jpg';
import amca from '../../assets/1.jpg';
import windtunnel from '../../assets/windtunnel.jpg';

function TopicCard ({ele, etype, onAction}) {
    
    function getDate (d) {
        const y=d.slice(0,3);
        const m = d.slice(5,6);
        const da = d.slice(8,9)
        return (da+m+y);
    }

    const date = new Date(ele.createdAt);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    const handleLike = () => {
        if(onAction) onAction("like");
    }

    return (
        // <div 
        //     className={`${etype=="norm"?"bg-white":"bg-gray-500"} p-4 mb-3 rounded-lg shadow hover:shadow-lg transition`}
        //     // onClick={() => navigate(`/discuss/${ele.writer.username}/${ele.uuid}`)}
        // >
        //     <div className={`${etype=="norm"?"text-gray-800":"text-white"} flex gap-2 h-[8%]`}>
        //         <Link 
        //             to={`/profile/${ele.writer.username}`}
        //             className={`flex gap-1`} 
        //         >
        //             <img src={mk2} alt="profile picture" className="h-8 w-8 rounded-full"/>
        //             <span className={`text-lg`}>
        //                 {ele.writer.fullName}
        //             </span>
        //         </Link>
        //         <span className="text-xs pt-2 ">{formattedDate}</span>
        //     </div>
        //     {/* <p onClick={ () => {navigate(`/profile/${ele.writer.username}`)}}>{ele.writer.username}</p> */}
        //     <Link 
        //         className="h-[92%]"
        //         to={`/discuss/${ele.writer.username}/${ele.uuid}`}
        //     >
        //         <h2 className={`${etype=="norm"?"text-gray-800":"text-white"} max-h-[40%] font-medium text-md`}>{ele.post}</h2>
        //         <img src={windtunnel} alt="profile picture" className=""/>
        //     </Link>
        //     {/* w-[80%] h-[80%] m-auto */}
        // </div>
        <div 
        className={`
            ${etype === "norm" ? "bg-white" : "bg-gray-700"} 
            p-5 mb-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow
        `}
        >
        {/* Header */}
            <div className="flex items-center justify-between mb-3">
                <Link to={`/profile/${ele.writer.username}`} className="flex items-center gap-2">
                <img 
                    src={mk2} 
                    alt="profile picture" 
                    className="h-9 w-9 rounded-full border border-gray-300" 
                />
                <div className="flex flex-col">
                    <span className={`${etype === "norm" ? "text-gray-900" : "text-white"} font-semibold text-sm`}>
                    {ele.writer.fullName}
                    </span>
                    <span className="text-xs text-gray-400">@{ele.writer.username}</span>
                </div>
                </Link>
                <span className="text-xs text-gray-400">{formattedDate}</span>
            </div>

        {/* Body */}
            <Link to={`/discuss/${ele.writer.username}/${ele.uuid}`} className="block">
                <h2 
                className={`
                    ${etype === "norm" ? "text-gray-800" : "text-gray-100"} 
                    font-medium text-base leading-snug mb-2
                    line-clamp-3
                `}
                >
                {ele.post}
                </h2>
                <div className="flex justify-center">
                {amca && (
                    <img 
                    src={windtunnel} 
                    alt="post media" 
                    className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-lg mt-2" 
                    />
                )}
                </div>
            </Link>

           {/* <button onClick={handleLike}>👍 {ele.likedBy.length !==0 ? ele.likedBy.length : "" }</button> */}
        </div>

    )
}

export default TopicCard