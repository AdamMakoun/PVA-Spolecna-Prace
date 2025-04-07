import { getUserMessages } from "@/lib/messages";
import SendMessage from "./SendMessage";

const Page = () => {
    const userId = 1;
    const messages = getUserMessages(userId);
    return ( 
        <div>
            {messages.map((msg, index) => (
                <h1>{msg}</h1>
            ))
            }
            <SendMessage/>
        </div>
     );
}
 
export default Page;