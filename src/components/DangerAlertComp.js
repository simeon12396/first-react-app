import React, {useState, useEffect} from 'react';
import { Alert } from 'react-bootstrap';
import '../css/components/dangerAlertComp.css';

const DangerAlertComp = (props) => {

    const [getShow, setShow] = useState(props.show);


    useEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, 2000);
    }, []);

    console.log(getShow)
    if(getShow) {
        return(
            <Alert variant="danger">
                <Alert.Heading>Something is wrong! You got an error! </Alert.Heading>
            </Alert>
        );
    } else {
        return (null);
    };
};   

export default DangerAlertComp;