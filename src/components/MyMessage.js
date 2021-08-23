const MyMessage = ({message}) => {
    if(message?.attachments?.legnth > 0){
        return(
            <img src={message.attachments[0].file} 
                 alt="message-attachment"
                 className="message-image"
                 style={{ float: 'right'}}
            />
        )
    }
    return(
        <div className="message" style={{ float: 'right',
        margin: '18px', color:'white', backgroundColor:'#3b2a50'}}>
            {message.text}
        </div>
    );

}

export default MyMessage;