import { Component } from "react";


class ClassCompo extends Component {
  state = {
    name: "",
    dept: "",
    rate: "",
    data: [],
  };


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const ObjData = {
      name: this.state.name,
      dept: this.state.dept,
      rate: this.state.rate,
    };
    if (!ObjData.name || !ObjData.dept || !ObjData.rate) {
      alert("Please Fill up the Information in All Fields....!");
    }
    else {
      const arr = this.state.data;

      arr.push(ObjData);

      console.log(arr);

      this.setState({ [this.state.data]: arr });

      console.log(this.state.name);

      console.log(this.state.data);
    }

  };

  render() {
    return (
      <>
        <div className='container'>
          <div className="header">
            <h1>EMPLOYEES FEEDBACK FORM</h1>
          </div>
          <div>
            <input
              type="text"
              required
              placeholder="Enter Your Name"
              name="name"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              required
              placeholder="Enter Your Department"
              name="dept"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="number"
              min={1} max={5} required
              placeholder="Enter Your Rating"
              name="rate"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </div>


        <div className="flag">
          <h4>Filled data Information Display Here</h4>
          {
            this.state.data.map((item, index) => {
              return (

                <h2 className='ui-define' key={index}> Name : {item.name} <br /> Department : {item.dept} <br /> Rating : {item.rate}</h2>

              );
            })
          }
        </div>

      </>
    );
  }
}

export default ClassCompo;
