import React, {Component} from "react";
import PropTypes from "prop-types";


export default class ContactInfo extends Component {
    render() {

        return (
            <div className={"details"}>
                <h1>{this.props.contactName}</h1>
                <p>
                    <div>Gender: {this.props.gender}</div>
                    <div>DOB: {this.props.dob}</div>
                </p>
                <hr></hr>
                <address>
                    {this.props.street}
                    <br></br>
                    {this.props.city}, {this.props.state}
                    <br></br>
                    {this.props.postcode}
                </address>
                <hr></hr>
                <p>
                     <div>
                     Email: <a href={this.props.email}>{this.props.email}</a>
                </div>
                    <div>
                    Phone: {this.props.phone}
                </div>
                </p>
                <img src={this.props.image} />
                </div>
    );
  }
}

ContactInfo.propTypes = {
    
    contactName: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    postcode: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired

};
