import React, { Component } from 'react';
import './App.css';

import Table from './Table';
import Form from './Form';

import API from './Api';

class App extends Component
{
    /*
        ## State

        Right now, we're storing our character data in an array in a variable, 
        and passing it through as props. This is good to start, but imagine 
        if we want to be able to delete an item from the array. With props, 
        we have a one way data flow, but with state we can update private 
        data from a component.

        You can think of state as any data that should be saved and modified 
        without necessarily being added to a database - for example, adding 
        and removing items from a shopping cart before confirming 
        your purchase.

        To start, we're going to create a state object.
    */
    state = {
                // characters: [
                //                 {
                //                     name: 'Charlie',
                //                     job: 'Janitor',
                //                 },
                //                 {
                //                     name: 'Mac',
                //                     job: 'Bouncer',
                //                 },
                //                 {
                //                     name: 'Dee',
                //                     job: 'Aspring actress',
                //                 },
                //                 {
                //                     name: 'Dennis',
                //                     job: 'Bartender',
                //                 },
                //             ], 

                characters: []
            };


    removeCharacter = (index) => 
    {
        const { characters } = this.state; 

        this.setState({
                        characters: characters.filter((character, i) => 
                        {
                            return i !== index; 
                        }),
                    });

    }// end removeCharacter()

    handleSubmit = character => 
    {
        this.setState({ characters: [ ...this.state.characters, character ]}); 
    }// end handleSubmit()

    render()
    {
        // const characters = [
        //                     {
        //                         name: 'Charlie',
        //                         job: 'Janitor',
        //                     },
        //                     {
        //                         name: 'Mac',
        //                         job: 'Bouncer',
        //                     },
        //                     {
        //                         name: 'Dee',
        //                         job: 'Aspring actress',
        //                     },
        //                     {
        //                         name: 'Dennis',
        //                         job: 'Bartender',
        //                     },
        //                 ];

        const { characters } = this.state;

        return (
            <div className="container">
              {/* <Table /> */}
              {/* <Table characterData={characters} /> */}
              <Table characterData={characters} removeCharacter={ this.removeCharacter } />
              <Form handleSubmit={ this.handleSubmit } />

              <h1>API Data from Wikipedia </h1> 
              <API />
              
            </div>
        );
    }// end render()

    

}// end class App

export default App; 
