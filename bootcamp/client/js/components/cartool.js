import React from 'react';
import '../../scss/styles.scss';

export class CarTool extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: props.cars.slice(),
            make: '',
            model: '',
            color: '',
            year: '',
            price: ''
        }
        this.onChange = this.onChange.bind(this);
    }

    onClick = () => {
        this.setState({
            cars: this.state.cars.concat({
                id: Math.max(...this.state.cars.map(c => c.id)) + 1,
                make: this.state.make,
                model: this.state.model,
                color: this.state.color,
                year: this.state.year,
                price: this.state.price
            }),
        });
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        return <div>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Color</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {this.state.cars.map(car => {
                    return <tr>
                        <td>{car.id}</td>
                        <td>{car.make}</td>
                        <td>{car.model}</td>
                        <td>{car.color}</td>
                        <td>{car.year}</td>
                        <td>${car.price}</td>
                    </tr>;
                })}
                </tbody>
            </table>
            <form>
                <table>
                    <tbody>
                    <tr>
                        <td><label htmlFor="Make : ">Make : </label></td>
                        <td><input type="text" name="make" value={this.state.make} onChange={this.onChange}/></td>
                        <td><label>{this.state.make == ''  ? this.state.make: 'You input ' + this.state.make}</label></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="Model : ">Model : </label></td>
                        <td><input type="text" name="model" value={this.state.model} onChange={this.onChange}/></td>
                        <td><label>{this.state.model == ''  ? this.state.model: 'Your car model is ' + this.state.model}</label></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="Color : ">Color : </label></td>
                        <td><input type="text" name="color" value={this.state.color} onChange={this.onChange}/></td>
                        <td><label>{this.state.color == ''  ? this.state.color: 'You car color is ' + this.state.color}</label></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="Year : ">Year : </label></td>
                        <td><input type="text" name="year" value={this.state.year} onChange={this.onChange}/></td>
                        <td><label>{this.state.year == ''  ? this.state.year: 'Year od your car is ' + this.state.year}</label></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="Price : ">Price : </label></td>
                        <td><input type="text" name="price" value={this.state.price} onChange={this.onChange}/></td>
                        <td><label>{this.state.price == ''  ? this.state.price: 'Your price is ' + this.state.price}</label></td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="td_center"><button type="button" onClick={this.onClick}>New Car</button></td>
                    </tr>
                    </tbody>
                </table>
                {/*<div>*/}
                {/*<label htmlFor="Make : ">Make : </label>*/}
                {/*<input type="text" name="make" value={this.state.make} onChange={this.onChange} />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*<label htmlFor="Make : ">Model: </label>*/}
                {/*<input type="text" name="model" value={this.state.model} onChange={this.onChange} />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*<label htmlFor="Make : ">Color: </label>*/}
                {/*<input type="text" name="color" value={this.state.color} onChange={this.onChange} />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*<label htmlFor="Make : ">Year : </label>*/}
                {/*<input type="text" name="year" value={this.state.year} onChange={this.onChange} />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*<label htmlFor="Make : ">Price: </label>*/}
                {/*<input type="text" name="price" value={this.state.price} onChange={this.onChange} />*/}
                {/*</div>*/}
            </form>
        </div>;
    }

    //render() {
    // const propsList = this.props;

    // Object.seal(this.props.cars);
    // this.props.cars = [];
    // this.props.cars.push({id: 3, make: 'Chevy', model: 'Equinox', year: 2017, color: 'black', price: 30000});
    // return <table>
    //     <thead>
    //         <tr>
    //             <th>ID</th>
    //             <th>Make</th>
    //             <th>Model</th>
    //             <th>Year</th>
    //             <th>Color</th>
    //             <th>Price</th>
    //             <th>Weight</th>
    //         </tr>
    //     </thead>
    //     <tbody>
    //     {this.state.cars.map(car => {
    //         return <tr>
    //             <td>{car.id}</td>
    //             <td>{car.make}</td>
    //             <td>{car.model}</td>
    //             <td>{car.color}</td>
    //             <td>{car.year}</td>
    //             <td>${car.price}</td>
    //             <td>${car.weight}</td>
    //         </tr>;
    //     })}
    //     </tbody>
    //
    // </table>;
    // }
}