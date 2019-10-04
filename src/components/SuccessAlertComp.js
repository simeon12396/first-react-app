import React from 'react';
import { Alert } from 'react-bootstrap';
import '../css/components/successAlertComp.css';

const SuccessAlertComp = () => {
    const alertMsg = document.querySelector('.alert-message');

    setTimeout(() => {
        alertMsg.classList.add('alert-message-hide');
    }, 2500);

    return(
        <Alert variant="success" className="alert-success">
            <Alert.Heading>Congratulations! You are register successfully!</Alert.Heading>
        </Alert>
    );
};

export default SuccessAlertComp;