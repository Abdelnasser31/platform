import React, {Component} from 'react';
class index extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  handleSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h5>Sign In</h5>
          <div>
            email:
            <input type="email" id="email" name="email" onChange={this.handleChange}/>
          </div>
          <div>
            password:
            <input
              type="password"
              id="password"
              name="password"
              onChange={this.handleChange}/>
          </div>
          <button type="submit">Log in</button>
        </form>
      </div>

    );
  }
}

export default index;
