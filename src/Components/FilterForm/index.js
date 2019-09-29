import React, {Component} from 'react';
import {Button, Form, FormControl} from 'react-bootstrap'
export class index extends Component {
  render() {
    return (
      
        <Form inline className='text-center' onSubmit={this.props.onSubmit}>
          <div className='mx-auto'>
            <FormControl
              type="text"
              id='search'
              placeholder="Search By Title"
              className=" mr-sm-2"/>
            <Button type="submit">Search</Button>
          </div>
        </Form>
    );
  }
}

export default index;
