import React, {Component} from 'react';
import './Form.css';
import {postMessage, switchModalState} from "../../store/actions/chatActions";
import {connect} from "react-redux";

class Form extends Component {

    state = {
        author: '',
        message: '',
        image: '',
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        })
    };

    submitFormHandler = event => {
        event.preventDefault();

        const formData = new FormData();

        Object.keys(this.state).forEach(key => {
            formData.append(key, this.state[key]);
        });

        this.props.postMessage(formData);
    };
    render() {
        return (
            <form onSubmit={this.submitFormHandler} className="Form">
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input type="text"
                           autoComplete="off"
                           className="form-control"
                           id="author"
                           name="author"
                           onChange={this.inputChangeHandler}/>
                        <small className="form-text text-muted">You do not have to fill it.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <input type="text"
                           autoComplete="off"
                           required
                           className="form-control"
                           id="message"
                           name="message"
                           onChange={this.inputChangeHandler}/>
                    <small className="form-text text-muted">You have to fill it.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input type="file"
                           autoComplete="off"
                           className="form-control"
                           id="image"
                           name="image"
                           onChange={this.fileChangeHandler}/>
                    <small className="form-text text-muted">You do not have to fill it.</small>
                </div>
                <button type="submit" onClick={this.props.modalSwitcherhom  } className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    postMessage: message => dispatch(postMessage(message)),
    modalSwitcher: () => dispatch(switchModalState())
});

export default connect(null, mapDispatchToProps)(Form);