import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      LastName: '',
      Nickname: '',
      phone: '',
      birthdate: '',
      gender: [],
      nationality: '',
      identification: '',
      education_level: [],
      coding_experience: [],
      personal_reference: '',
      holacode_discovery: [],
      commitment: []

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    alert('A' + this.state.value);
    e.preventDefault();
  }
  render() {
    return (<form onSubmit={this.handleSubmit}>
      <label>
        E-mail:
        <input type="text" Email={this.state.Email}/>
      </label>
      <br/>
      <label>
        Name:
        <input type="text" name={this.state.name}/>
      </label>
      <br/>
      <label>
        Last Name:
        <input type="text" LastName={this.state.LastName}/>
      </label>
      <br/>
      <label>
        What would you like to be called by? Nickname:
        <input type="text" Nickname={this.state.Nickname}/>
      </label>
      <br/>
      <label>
        Phone:
        <input type="text" Phone={this.state.Phone}/>
      </label>
      <br/>
      <label>
        Birth date:
        <input type="text" Birthday={this.state.Birthday}/>
      </label>
      <br/>
      <label>
        Gender:
        <input type="text" Gender={this.state.Gender}/>
      </label>
      <br/>
      <label>
        Nationality:
        <input type="text" Nationality={this.state.Nationality}/>
      </label>
      <br/>
      <label>
        How do you identify yourself as? (Binational, Dreamer/DAKA, Foreigner, Refugee, etc):
        <input type="text" Identification={this.state.Identification}/>
      </label>
      <br/>
      <label>
        What is your education level?:
        <input type="text" EducationLevel={this.state.EducationLevel}/>
      </label>
      <br/>
      <label>
        Do you have coding experience?:
        <input type="text" CodingExperience={this.state.CodingExperience}/>
      </label>
      <br/>
      <label>
        Personal Reference:
        <input type="text" PersonalReference={this.state.PersonalReference}/>
      </label>
      <br/>
      <label>
        How did you find out about Hola code?:
        <input type="text" HolacodeDiscovery={this.state.HolacodeDiscovery}/>
      </label>
      <br/>
      <label>
        Would you be able to move to Mexico City on time for the program:
        <input type="text" Commitment={this.state.Commitment}/>
      </label>
      <br/>
      <input type="submit" value="Submit"/>
    </form>);
  }
}
export default Profile;
