import React from 'react';
import { Button, Modal, ModalBody} from 'reactstrap';

import Form from "../../components/Form/Form";

const ModalExample = (props) => {
    const {
        className
    } = props;

    return (
        <div>
            <Button color="danger" onClick={props.toggle} style={{cssFloat: 'right'}}>New Message</Button>
            <Modal isOpen={props.modal} toggle={props.toggle} className={className}>
                <ModalBody>
                    <Form/>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default ModalExample;