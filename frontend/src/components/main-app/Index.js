import { useContext } from "react";
import { ChatContextProvider, ChatContext } from "../../context/ChatContext";

function Index (){
    const {  userChats, userChatError } = useContext(ChatContext);
    console.log("chats ",userChats);
    return <>
    chat
    </>
}
export default Index;