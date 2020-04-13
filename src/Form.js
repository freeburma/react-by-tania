import React, { Component } from 'react'; 

class Form extends Component
{
    initialState = {
                        name: '', 
                        job: '',
                   };

    state = this.initialState; 

    handleChange = event => 
    {
        const { name, value } = event.target; 

        this.setState({
                        [name] : value
                     }); 
    }// end handleChange()

    /*
        submitForm() that will call that function, and pass the Form state 
        through as the character parameter we defined earlier. It will 
        also reset the state to the initial state, to clear the 
        form after submit.
    */
    submitForm = () => 
    {
        this.props.handleSubmit(this.state); 
        this.setState(this.initialState); 

    }// end submitForm()

    render()
    {
        const { name, job } = this.state; 

        return(
            <form>
                <label htmlFor="name"> Name </label>
                <input type="text" name="name" id="name" value={name} onChange={this.handleChange} />

                <label htmlFor="job">Job</label>
                <input type="text" name="job" id="job" value={job} onChange={this.handleChange} />

                
                <input type="button" value="Submit" onClick={this.submitForm} />

            </form>
        ); 

    }// end render()

}// end class Form

export default Form; 