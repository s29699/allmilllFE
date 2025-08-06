import { createContext, useState } from "react";

export const TweetContext = createContext();

export const TweetProvider = ({children}) => {

    const [tweet, setTweet] = useState(null);


    return (
        <TweetContext.Provider value={{tweet, setTweet}}>
            {children}
        </TweetContext.Provider>
    )
}