import { createContext, useState, useEffect } from 'react';
import { getRequest, baseUrl } from '../utils/services';

export const ChatContext = createContext();

export const ChatContextProvider = ({ children, user })=>{
    const [userChats, setUserChats] = useState(null);
    const [userChatError, setUserChatError] = useState(null);
    
    useEffect(() => {
        const getUserchats = async()=>{
            if(user){
                console.log(user)
                setUserChatError(null);
                const response = await getRequest(`${baseUrl}/chats/${user}`);
    
                if(response.error){
                    setUserChatError(response);
                }
                setUserChats(response);
            }
        }
       getUserchats();
    },[user])

    return (<ChatContext.Provider
        value={{
            userChats,
            userChatError
        }}
    >{children}</ChatContext.Provider>)
}