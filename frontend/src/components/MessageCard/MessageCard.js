import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import imageNotAvailable from '../../assets/images/image_not_available.jpg';
import {apiURL} from "../../constants";

const MessageCard = (props) => {
     let image;
     if (props.image === '') {
         image = imageNotAvailable;
     } else {
         image = props.image;
     }

    if (props.image) {
        image = apiURL + '/uploads/' + props.image;
    }
    return (
        <div>
            <Card>
                <img src={image} style={{width: "150px", height: "150px"}} alt="#" />
                <CardBody>
                    <CardTitle>Author:{props.user}</CardTitle>
                    <CardText>Messages:{props.message}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default MessageCard;