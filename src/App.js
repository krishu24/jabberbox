import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return (
        <ChatEngine 
        height="100vh"
        projectID="0c657c44-4401-4e4d-8300-fc4c954b24df"
        userName="ReactPractise"
        userSecret="123"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;