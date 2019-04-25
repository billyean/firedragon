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
