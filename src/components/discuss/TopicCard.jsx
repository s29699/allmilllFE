import { Link } from "react-router-dom";

function TopicCard ({ele, etype}) {
    
    function getDate (d) {
        const y=d.slice(0,3);
        const m = d.slice(5,6);
        const da = d.slice(8,9)
        return (da+m+y);
    }

    const date = new Date(ele.createdAt);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    return (
        <div 
            className={`${etype=="norm"?"bg-white":"bg-gray-500"} p-4 mb-3 rounded-lg shadow hover:shadow-lg transition`}
            // onClick={() => navigate(`/discuss/${ele.writer.username}/${ele.uuid}`)}
        >
            <Link to={`/profile/${ele.writer.username}`} >{ele.writer.username}</Link>
            {/* <p onClick={ () => {navigate(`/profile/${ele.writer.username}`)}}>{ele.writer.username}</p> */}
            <Link to={`/discuss/${ele.writer.username}/${ele.uuid}`} >
                <p className="text-xs ">created on: {formattedDate}</p>
                <h2 className={`${etype=="norm"?"text-gray-800":"text-white"} font-medium text-md`}>{ele.post}</h2>
            </Link>
        </div>
    )
}

export default TopicCard