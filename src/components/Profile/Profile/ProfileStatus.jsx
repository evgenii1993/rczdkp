import React, {Component} from 'react';
import s from "./Profile.module.css";

class ProfileStatus extends Component {

    state = {
        isEdit: false,
        status: this.props.status
    };

    componentDidMount() {
        this.inputStatus = React.createRef();
        this.props.getStatus(this.props.id);
    }

/*
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status && !this.state.isEdit) {
            this.setState({
                status: this.props.status
            })
        }
    }
*/
    activeEditStatus = (e) => {
        this.setState({
            isEdit: true
        })
    };

    disableEditStatus = (e) => {
        this.setState({
            isEdit: false
        });
        this.props.updateStatus(this.state.status);
    };

    handleChange = (e) => {
        this.setState({
            status: e.target.value
        })
    };

    render() {
        return (
            <div className={s.status}>
                { 
                    this.state.isEdit ? 
                        <div className={s.editForm}>
                            <input value={this.state.status}
                                   ref={this.inputStatus}
                                   onBlur={this.disableEditStatus}
                                   onChange={this.handleChange}
                                   autoFocus={true}
                            />
                        </div>
                    :
                        <div className={s.title}>
                            <span onDoubleClick={this.activeEditStatus}>{this.state.status || "default status"}</span>
                        </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;