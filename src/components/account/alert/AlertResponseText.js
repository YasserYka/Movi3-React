import React from 'react';

const AlertResponseText = (props) => {

    if(props.responseMessage)
        return  (              
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>{props.responseMessage}</strong>
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );
    return (null);
}

export default AlertResponseText;