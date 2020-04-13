import React, { Component } from 'react'; 

const TableHeader = () => 
{
    return(
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Remove</th>
                </tr>
            </thead>
        ); 

}// end TableHeader()

// const TableBody = () => 
// {
    // // Hard coded data *** working
    // return(
    //         <tbody>
    //             <tr>
    //                 <td>Charlie</td>
    //                 <td>Janitor</td>
    //             </tr>
    //             <tr>
    //                 <td>Mac</td>
    //                 <td>Bouncer</td>
    //             </tr>
    //             <tr>
    //                 <td>Dee</td>
    //                 <td>Aspiring actress</td>
    //             </tr>
    //             <tr>
    //                 <td>Dennis</td>
    //                 <td>Bartender</td>
    //             </tr>   
    //         </tbody>
    //     );

//}// end TableBody()

const TableBody = (props) => 
{
    const rows = props.characterData.map((row, index) => 
    {
        return(
                <tr key={ index }>
                    <td>{ row.name }</td>
                    <td>{ row.job }</td>
                    <td>
                        <button onClick={() => props.removeCharacter(index)}>Delete</button>
                    </td>
                </tr>  
        );
    });


return <tbody>{ rows }</tbody>

}

// class Table extends Component
// {
    

//     render()
//     {
//         const { characterData, removeCharacter } = this.props; 

//         return (
//             <table>
//                 <TableHeader />
//                 <TableBody characterData={ characterData } removeCharacter={ removeCharacter } />
//             </table>
//         ); 

//     }// end render()

// }// end class Table

// export default Table; 

/*
    Simple component 
*/
const Table = (props) => 
{
    

    const { characterData, removeCharacter } = props; 

    return (
        <table>
            <TableHeader />
            <TableBody characterData={ characterData } removeCharacter={ removeCharacter } />
        </table>
    ); 


}// end Table

export default Table; 