import React, { Component } from 'react';
import Button from '@mui/material/Button';

class TextArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 'Please write an essay about your favorite DOM element.'
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} sx={{width: '100%', height: '100%',}}>
                <textarea value={this.state.value} onChange={this.handleChange} />
                <Button type="submit" value="Submit">Save</Button>
            </form>
        )
    }
};

export default TextArea;