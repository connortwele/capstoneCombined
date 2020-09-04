import React, { Component } from 'react';
import axios from "axios";
import './style/singleAttraction.css'
export default class EditAttraction extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      description: "",
      website: "",
      imageURL:"",
      location: {
        address: "",
        city: "",
        state:"",
        zipcode:""
      },
      indoors: false,
      kidFriendly: false,
    }
  }
  componentDidMount() {
    axios.get("http://localhost:5000/attractions/" + this.props.match.params.id)
    .then((response) => {
      this.setState({
        name: response.data.name,
        description: response.data.description,
        website: response.data.website,
        imageURL:response.data.imageURL,
        location: {
          address: response.data.location.address,
          city: response.data.location.city,
          state:response.data.location.state,
          zipcode: response.data.location.zipcode
        },
        indoors: response.data.indoors.toString(),
        kidFriendly: response.data.kidFriendly.toString(),
        likes: response.data.likes
      })
    })
    .catch((error)=>{
      console.log(error)
    })
    console.log(this.state.name)
  }

  render() {
    return (
      <div className="singleContainer">
          <div className="singleName text-center">
            {this.state.name}
          </div>
          <img className="singleImage"src={this.state.imageURL} alt=""/>
          <div className="singleAddress">
            <p>Address:</p>
            {this.state.location.address}
            <br/>
            {this.state.location.city}
            <br/>
            {this.state.location.state}
            <br/>
            {this.state.location.zipcode}
          </div>
          <div className="descriptionContainer">
            <div className="singleDescWeb">

            {this.state.description}
            </div>
            <div className="singleBooleans">
              <p>Indoors?</p>
              {this.state.indoors}
              <p>Family Friendly?</p>
              {this.state.kidFriendly}
              <br/>
              <br/>
              <a href={this.state.website}>Website</a>

            </div>
          </div>
      </div>
    )
  }
}





