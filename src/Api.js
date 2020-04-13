import React, { Component } from 'react';

class API extends Component
{
    state = {
                data: [],
            };

    // Code is invoked after component is mounted/inserted into DOM tree
    componentDidMount()
    {
        const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'; 

        fetch(url)
            .then(result => result.json())
            .then(result => {
                                this.setState({ data: result })
                });
        

    }// end componentDidMount()

    render()
    {
        const { data } = this.state; 

        const result = data.map((entry, index)=> 
        {
            return <li key={index}>{ entry }</li>
        }); 

        return <ul>{result}</ul>
    }// end render()

}// end class App

export default API; 