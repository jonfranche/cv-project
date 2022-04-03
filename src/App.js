import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      schools: [],
      schoolName: '',
      titleOfStudy: '',
      schoolDate: '',
      experiences: [],
      workName: '',
      workTitle: '',
      tasks: '',
      workDate: ''
    }

    this.generalChange = this.generalChange.bind(this);
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

  generalSubmit(event) {
    alert(`Name: ${this.state.name}
          Email: ${this.state.email}
          Phone: ${this.state.phone}`);
    event.preventDefault();
  }

  schoolSubmit(event) {
    alert(`School Name: ${this.state.schoolName}
          Study: ${this.state.titleOfStudy}
          Date: ${this.state.schoolDate}`);
    event.preventDefault();
  }

  experienceSubmit(event) {
    alert(`Company Name: ${this.state.workName}
          Title: ${this.state.workTitle}
          Tasks: ${this.state.tasks}
          Date: ${this.state.workDate}`);
    event.preventDefault();
  }

  render() {
    const { name, email, phone, schools,
      schoolName, schoolDate, titleOfStudy, workName,
      workDate, workTitle, tasks, experiences } = this.state; 

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
            <input name="schoolName" type="text" value={schoolName} onChange={this.generalChange}/>
            <input name="titleOfStudy" type="text" value={titleOfStudy} onChange={this.generalChange}/>
            <input name="schoolDate" type="text" value={schoolDate} onChange={this.generalChange}/>
            <input type="submit" value="Submit"/>
          </form>
        </div>
        <div>
          <form onSubmit={this.experienceSubmit}>
            <input name="workName" type="text" value={workName} onChange={this.generalChange}/>
            <input name="workTitle" type="text" value={workTitle} onChange={this.generalChange}/>
            <textarea name="tasks" value={tasks} onChange={this.generalChange}></textarea>
            <input name="workDate" type="text" value={workDate} onChange={this.generalChange}/>
            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    )
  }
}

export default App;
