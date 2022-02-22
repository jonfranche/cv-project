import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      schools: [],
      school: {
        name: '',
        titleOfStudy: '',
        date: ''
      },
      experiences: [],
      experience: {
        name: '',
        title: '',
        tasks: '',
        date: ''
      }
    }

    this.generalChange = this.generalChange.bind(this);
    this.schoolChange = this.schoolChange.bind(this);
    this.experienceChange = this.experienceChange.bind(this);
    this.generalSubmit = this.generalSubmit.bind(this);
    this.schoolSubmit = this.schoolSubmit.bind(this);
    this.experienceSubmit = this.experienceSubmit.bind(this);
  }

  generalChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  schoolChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      school: {
        [name]: value,
      }
    });
  }

  experienceChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      experience: {
        [name]: value,
      }
    });
  }

  generalSubmit(event) {
    alert(`Name: ${this.state.name}
          Email: ${this.state.email}
          Phone: ${this.state.phone}`);
    event.preventDefault();
  }

  schoolSubmit(event) {
    alert(`School Name: ${this.state.school.name}
          Study: ${this.state.school.titleOfStudy}
          Date: ${this.state.school.date}`);
    event.preventDefault();
  }

  experienceSubmit(event) {
    alert(`Company Name: ${this.state.experience.name}
          Title: ${this.state.experience.title}
          Tasks: ${this.state.experience.tasks}
          Date: ${this.state.experience.date}`);
    event.preventDefault();
  }

  render() {
    const { name, email, phone, schools,
      school, experience, experiences } = this.state; 

    return (
      <div>
        <div>
          <form onSubmit={this.generalSubmit}>
            <input name="name" type="text" value={name} onChange={this.generalChange}/>
            <input name="email" type="text" value={email} onChange={this.generalChange}/>
            <input name="phone" type="text" value={phone} onChange={this.generalChange}/>
            <input type="submit" value="Submit"/>
          </form>
        </div>
        <div>
          <form onSubmit={this.schoolSubmit}>
            <input name="name" type="text" value={school.name} onChange={this.schoolChange}/>
            <input name="titleOfStudy"type="text" value={school.titleOfStudy} onChange={this.schoolChange}/>
            <input type="text" value={school.date} onChange={this.schoolChange}/>
            <input type="submit" value="Submit"/>
          </form>
        </div>
        <div>
          <form onSubmit={this.experienceSubmit}>
            <input type="text" value={experience.name} onChange={this.experienceChange}/>
            <input type="text" value={experience.title} onChange={this.experienceChange}/>
            <textarea value={experience.tasks} onChange={this.experienceChange}></textarea>
            <input type="text" value={experience.date} onChange={this.experienceChange}/>
            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    )
  }
}

export default App;
