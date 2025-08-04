import React from "react";
import { useParams } from "react-router-dom";

function DisplayTopic () {

    const {uuid} = useParams();
    console.log("uuid", uuid);
    return (
        <div>
            Hello World {uuid}
            
        </div>
    )
}

export default DisplayTopic;