import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams, useRouteLoaderData } from "react-router-dom";
import { TweetContext } from "../../context/discuss/TopicContext";
import { UserContext } from "../../context/UserContext";
import TopicCard from "../../components/discuss/TopicCard";

function Test () {

    const {tweet} = useContext(TweetContext);
    const {user} = useContext(UserContext);
    const [twt, setTwt] = useState();
    const [reply, setReply] = useState([]);
    const [anc, setAnc] = useState([]);
    const replyRef = useRef();
    const focusRef = useRef(null);
    const navigate = useNavigate();

    const {username,uuid} = useParams();
    console.log("1");
    const getTopic = async () => {
        const response = await fetch(
          `http://localhost:7000/api/v1/discuss/${uuid}`,
          {
            method: "GET",
          }
        )

        const data = await response.json();
        console.log("data", data.parent[0]);
        setTwt(data.topic);
        setAnc(data.parent[0].ancestors)
    }

    console.log("2");

    const getReply = async () => {
        const replies = await fetch(
            `http://localhost:7000/api/v1/discuss/fetchreply/${uuid}`,
            {
                method: "GET",
            }
        )

        const repdata = await replies.json();
        console.log("repdata", repdata);
        setReply(repdata.replies);
    }

    const handleReplyCreation = async () => {
        const replyVal = replyRef.current.value ;
        console.log("reply to tweet", replyVal);
        const token = user;
        console.log("TOKEN", token);
        console.log("user from context", user);
        // const response = await axios.get(`http://localhost:7000/api/v1/discuss/${username}/${uuid}`,{
        //     Headers
        // })
        const response = await fetch(
          `http://localhost:7000/api/v1/discuss/addreply/${uuid}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ replyVal }),
          }
        );

        if(response){
            replyRef.current.value='';
            console.log("response", response);
            getReply();
        }
    }

    useEffect(() => {
        getTopic();
        getReply();
    }, [uuid,username])
    console.log("4");
    // useEffect(() => {
    //     getReply();
    // }, [uuid, username])
    console.log("5");

    useEffect(() => {
        focusRef.current?.scrollIntoView({
            block: "start", // aligns it at top of viewport
            behavior: "instant" // or "smooth"
        });
    }, []);

    return (
        <div className="flex flex-col max-w-xl mx-auto">
            
            <div className="border-2 border-slate-700 my-4 flex flex-col max-w-xl mx-auto">
                {Array.isArray(anc) && anc.map((a) => (
                    <TopicCard 
                    key={a._id}
                    // className="border-2 border-green-500"
                    ele={a}
                    etype="norm"
                    />
                ))} 
                {/* {twt && <div>{twt.post}</div>} */}
                {twt &&
                    <TopicCard 
                        ele={twt}
                        etype="main"
                    />
                }
            </div>
            <div ref={focusRef} className="scroll-mt-16 bg-gray-50 border-l-4 border-blue-500" >
                <input placeholder="Write reply..." ref={replyRef} />
                <button 
                    className="border-2 border-red-500"
                    onClick={handleReplyCreation}>
                    Create Reply
                </button>
            </div>
            <div className="border-2 border-slate-700 my-4">
                {
                    Array.isArray(reply) && 
                    reply.map((r)=> (
                        <TopicCard 
                        key={r._id}
                        ele={r}
                        etype="norm" 
                        // onClick={() => getReplyReply(r)}
                        // onClick={() => (navigate(`/discuss/${r.writer.username}/${r.uuid}`))}
                        // className="border border-green-700"
                            // <p> {r.post} </p>
                            // <p> {r.writer.username} </p>
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Test;