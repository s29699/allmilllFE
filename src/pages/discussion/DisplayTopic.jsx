import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TweetContext } from "../../context/discuss/TopicContext";

function DisplayTopic () {

    const {tweet} = useContext(TweetContext);
    const [twt, setTwt] = useState();
    const [reply, setReply] = useState([]);

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

        // const replies = await fetch(
        //     `http://localhost:7000/api/v1/discuss/fetchreply/${uuid}`,
        //     {
        //         method: "GET",
        //     }
        // )

        // const repdata = await replies.json();
        // console.log("repdata", repdata);
        // // setReply(repdata.replies);
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

    console.log("3");
    console.log("useParams in Display topic", useParams())
    console.log("uuid", uuid);
    console.log("username in Display Topic", username);

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
            <div>
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
            </div>
            
            <div>
                {twt && <div>{twt.post}</div>}
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
                    className="border border-green-700">
                        <p> {r.post} </p>
                        <p> {r.writer} </p>
                    </div>
                ))
            }
            </div>
        </>
    )
}

export default DisplayTopic;