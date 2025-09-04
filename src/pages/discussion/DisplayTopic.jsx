import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams, useRouteLoaderData } from "react-router-dom";
import { TweetContext } from "../../context/discuss/TopicContext";
import { UserContext } from "../../context/UserContext";

function DisplayTopic () {

    const {tweet} = useContext(TweetContext);
    const {user} = useContext(UserContext);
    const [twt, setTwt] = useState();
    const [reply, setReply] = useState([]);
    const replyRef = useRef();
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
        console.log("data", data);
        setTwt(data.topic);

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

    const getReplyReply = async (clickedtwt) => {
        console.log("clickedtwt", clickedtwt);
        const replies = await fetch(
            `http://localhost:7000/api/v1/discuss/fetchreply/${clickedtwt.uuid}`,
            {
                method: "GET",
            }
        )

        const repdata = await replies.json();
        console.log("repdata", repdata);
        setReply(repdata.replies);
    }



    console.log("3");
    console.log("useParams in Display topic", useParams())
    console.log("uuid", uuid);
    console.log("username in Display Topic", username);

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
        // getReply();
    }, [uuid,username])
    console.log("4");
    useEffect(() => {
        getReply();
    }, [uuid, username])
    console.log("5");

    return (
        <>
            {/* <div>
            {   tweet && !twt &&
                <div className="border-2 border-red-500">
                    Hello World {username} with {uuid}
                    <p>
                        {tweet._id}
                    </p>
                    <p>
                        {tweet.post}
                    </p>
                    <p>
                        {tweet.writer.email}
                    </p>
                    {
                        
                    }
                </div>
            }
            </div> */}
            
            <div>
                {twt && <div>{twt.post}</div>}
            </div>

            <div className="my-4" >
                <input placeholder="Write reply..." ref={replyRef} />
                <button 
                    className="border-2 border-red-500"
                    onClick={handleReplyCreation}>
                    Create Reply
                </button>
            </div>
            <div>

            {/* {!reply.length ? (
                <p>Loading replies...</p>
                ) : (
                Array.isArray(reply) && 
                reply.map((r)=> (
                    <div 
                    key={r._id}
                    className="border border-green-700">
                        <p> {r.post} </p>
                        <p> {r.writer} </p>
                    </div>
                ))
            )} */}

            {
                Array.isArray(reply) && 
                reply.map((r)=> (
                    <div 
                    key={r._id} 
                    // onClick={() => getReplyReply(r)}
                    onClick={() => (navigate(`/discuss/${r.writer.username}/${r.uuid}`))}
                    className="border border-green-700">
                        <p> {r.post} </p>
                        <p> {r.writer.username} </p>
                    </div>
                ))
            }
            </div>
        </>
    )
}

export default DisplayTopic;