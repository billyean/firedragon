import React from 'react';
import '../../scss/styles.scss';
import {Car, Cars} from '../model/car';
import colorNamer from 'color-namer';

export class CarTool extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: new Cars(props.cars.slice()),
            id: '',
            make: '',
            model: '',
            colorHexCode: '',
            year: 2000,
            price: 0
        }
        this.onChange = this.onChange.bind(this);
    }


    onNew = () => {
        // this.state.cars.append(new Car({
        //     id: this.state.cars.nextID(),
        //     make: this.state.make,
        //     model: this.state.model,
        //     colorHexCode: this.state.colorHexCode,
        //     year: this.state.year,
        //     price: this.state.price
        // }));
        // this.state.cars.append(new Car({
        //     id: this.state.cars.nextID(),
        //     make: this.state.make,
        //     model: this.state.model,
        //     colorHexCode: this.state.colorHexCode,
        //     year: this.state.year,
        //     price: this.state.price
        // }))
        //
        this.setState({
            cars: this.state.cars.append(new Car({
                id: this.state.cars.nextID(),
                make: this.state.make,
                model: this.state.model,
                colorHexCode: this.state.colorHexCode,
                year: this.state.year,
                price: this.state.price
            })),
        });
        // console.log(this.state.cars.getCars().length);
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.type === 'number' ?  Number(e.target.value) : e.target.value,
        });
    }

    render() {
        return <div>
            {/*<BootstrapTable data={this.state.cars}>*/}
                {/*<TableHeaderColumn dataField="id" dataAlign="center">ID</TableHeaderColumn>*/}
                {/*<TableHeaderColumn dataField="make">Make</TableHeaderColumn>*/}
                {/*<TableHeaderColumn dataField="model">Model</TableHeaderColumn>*/}
                {/*<TableHeaderColumn dataField="year">Year</TableHeaderColumn>*/}
                {/*<TableHeaderColumn dataField="color">Color</TableHeaderColumn>*/}
                {/*<TableHeaderColumn dataField="price">Price</TableHeaderColumn>*/}
            {/*</BootstrapTable>*/}
            {/*<button onClick={this.sort('id')}>Sort by ID</button><button onClick={this.sort('price')}>Sort by Price</button><button onClick={this.sort('year')}>Sort by Year</button>*/}
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
                {this.state.cars.getCars().map(car => {
                    return <tr>
                        <td>{car.id}</td>
                        <td>{car.make}</td>
                        <td>{car.model}</td>
                        <td>{car.year}</td>
                        <td  style={{color : car.colorHexCode}}>{car.getColorName()}</td>
                        <td>{car.getFormattedPrice()}</td>
                    </tr>;
                })}
                {/*<tr>*/}
                    {/*<td colSpan='6'><button onClick={this.sort('id')}>Sort by ID</button><button onClick={this.sort('price')}>Sort by Price</button><button onClick={this.sort('year')}>Sort by Year</button></td>*/}
                {/*</tr>*/}
                </tbody>
            </table>
            <form>
                <table>
                    <tbody>
                    <tr>
                        <td><label htmlFor="Make : ">Make : </label></td>
                        <td><input type="text" name="make" value={this.state.make} onChange={this.onChange}/></td>
                        <td><label>{this.state.make == ''  ? this.state.make: 'Your input is ' + this.state.make}</label></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="Model : ">Model : </label></td>
                        <td><input type="text" name="model" value={this.state.model} onChange={this.onChange}/></td>
                        <td><label>{this.state.model == ''  ? this.state.model: 'Your car model is ' + this.state.model}</label></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="Color : ">Color Hex Code: </label></td>
                        <td><input type="color" name="colorHexCode" value={this.state.colorHexCode} onChange={this.onChange}/></td>
                        <td><label>{this.state.colorHexCode == ''  ? this.state.colorHexCode: 'You chose color ' + colorNamer(this.state.colorHexCode).html[0].name }</label></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="Year : ">Year : </label></td>
                        <td><input type="number" name="year" value={this.state.year} onChange={this.onChange}/></td>
                        <td><label>{this.state.year == ''  ? this.state.year: 'Year of your car is ' + this.state.year}</label></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="Price : ">Price : </label></td>
                        <td><input type="number" name="price" value={this.state.price} onChange={this.onChange}/></td>
                        <td><label>{this.state.price == 0  ? '' : 'Your price is ' + this.state.price}</label></td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="td_center"><button type="button" onClick={this.onNew}>New Car</button></td>
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