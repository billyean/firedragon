import React, {Component} from 'react'
import '../App.css'
import Radium from 'radium'

class Books extends Component {
    // constructor(props) {
    //     super(props);
    // }



    render() {
        const style = {
            ':hover': {
                backgroundColor: 'orange',
                color: 'red',
                cursor: 'pointer'
            },
            '@media (min-width: 500px)': {
                backgroundColor: 'grey',
                color: 'white'
            }
        };

        return (
            <div className="paddingDiv" style={style}>
                This is just some books selection.
            </div>
        );
    }
}

export default Radium(Books);
