import React, {Component} from 'react';
import s from "./Profile.module.css";

class ProfileStatus extends Component {
    state = {
        isEdit: false
    }

    toggleEgitStatus = () => {
        this.setState({
            isEdit: !this.state.isEdit
        })
    }

    render() {
        return (
            <div className={s.status}>
                { 
                    this.state.isEdit ? 
                        <div className={s.editForm}>
                            <input value={this.props.status} onBlur={this.toggleEgitStatus} />
                        </div>
                    :
                        <div className={s.title}>
                            <span onDoubleClick={this.toggleEgitStatus}>{this.props.status}</span>
                        </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;