import { useState, } from 'react'
import { ChatInput } from './components/ChatInput'
import  ChatMessages from './components/ChatMessages';
import './App.css'
// import { ChatMessage } from './components/ChatMessage'


function App(){
       const [chatMessages , setChatMessages] = useState([{


        message: 'Hello Chatbot',
        sender: 'user',
        id: 'id1'
    },{
      message:'Hello!How can i help you?',
      sender:'Oi',
      id: 'id2'
    },{
      message:'Can you get me todays date?',
      sender: 'user',
      id: 'id3'
    },{
      message: 'Today is June 26',
      sender: 'Oi',
      id: 'id4'
    }]);

    // const [chatMessages , setChatMessages] = array; //Shortcut of below two lines:Array destructing
    
    // const chatMessages = array[0];
    //  const setChatMessages = array[1]; // Updater function

     return(
       <div className = "app-container">
         <ChatMessages
           chatMessages={chatMessages}
         />
          <ChatInput 
           chatMessages={chatMessages}
           setChatMessages={setChatMessages} 
       />
    </div>
  );
}

export default App
