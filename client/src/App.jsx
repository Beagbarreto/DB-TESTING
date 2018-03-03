import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Profile from './components/Profile/Profile.jsx';

class App extends React.Component {
    constructor(props){
      super(props);
        this.state = {
          assesments:[],
          data: []
        }
      this.getProfile = this.getProfile.bind(this);
      this.addUser = this.addUser.bind(this);
      }

    addUser(email, name, last_name,nickname, phone, birthdate, gender, nationality, identification, education_level, coding_experience, personal_reference, holacode_discovery, commitment){
      $.ajax({
        url:"/Profile",
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
          email: email,
          name: name,
          last_name: last_name,
          nickname: nickname,
          phone: phone,
          birthdate: birthdate,
          gender: gender,
          nationality: nationality,
          identification: identification,
          education_level: education_level,
          coding_experience: coding_experience,
          personal_reference: personal_reference,
          holacode_discovery: holacode_discovery,
          commitment: commitment
        })
      }).done(() =>{
          this.getProfile();
      });
  }

    getProfile(){
      $.ajax({
        url:"/Profile",
        method:'GET',
        success: (results) =>{
          this.setState({data: results});
        },
        error: (xhr, err) => {
          console.log('err', err)
        }
      })
    }

      componentDidMount(){
        this.getProfile();
      }

    render(){
      return(<div>
      <h1></h1>
      <Profile data={this.state.data}/>
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));;
