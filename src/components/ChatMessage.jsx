import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import './ChatMessage.css';

    export function ChatMessage({message,sender}){
      // const message = props.message;
      // const sender = props.sender;
      // const {message , sender} = props; // Shortcut of above 2 codes , There is aother shortcut by just replacing props above to message and sender 

     /* if(sender === 'Oi'){
          return(
            <div>
              <img src="robot.png" width ="30px"/>
              {message}
            </div>
      );
      }
      */

      return(
        <div className={
          sender === 'user'
            ? 'chat-message-user'
            : 'chat-message-robot'
        }>
          {sender == 'Oi' && (
            <img src={RobotProfileImage} 
             className="chat-message-profile"
            />
          )}
          <div className="chat-message-text">
            {message}
          </div>
            {sender == 'user' &&  (
              <img src={UserProfileImage}
                className="chat-message-profile"
              />
          )}
        </div>
      );
    }