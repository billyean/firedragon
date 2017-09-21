import React from 'react';
import '../../scss/styles.scss';
import {Car, Cars} from '../model/car';
import colorNamer from 'color-namer';
import {CarForm} from "./car-form";

export class CarTool extends React.Component {
    constructor(props) {
        super(props);
        this.cars = new Cars(props.cars.slice());
        this.state = {
            cars: this.cars,
        }
        // this.onChange = this.onChange.bind(this);
        // this.form = new CarForm(this);
    }


    onNew = (car) => {
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
        car.setID(this.cars.nextID());
        this.cars.append(car);
        this.setState({
            cars: this.cars,
        });
    }

    getNextID = () => {
        return this.state.cars.nextID();
    }


    sort = (col) => {
        this.cars.setSortBy(col);
        this.setState({
            cars: this.cars,
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
                {this.state.cars.cars.map(car => {
                    return <tr>
                        <td style={{color : car.colorHexCode}}>{car.id}</td>
                        <td style={{color : car.colorHexCode}}>{car.make}</td>
                        <td style={{color : car.colorHexCode}}>{car.model}</td>
                        <td style={{color : car.colorHexCode}}>{car.year}</td>
                        <td style={{color : car.colorHexCode}}>{car.getColorName()}</td>
                        <td style={{color : car.colorHexCode}}>{car.getFormattedPrice()}</td>
                    </tr>;
                })}
                <tr>
                    <td colSpan='6'><button onClick={() => this.sort('id')}>Sort by ID</button><button onClick={() => this.sort('price')}>Sort by Price</button><button onClick={() => this.sort('year')}>Sort by Year</button></td>
                </tr>
                </tbody>
            </table>
            <CarForm onSubmit={this.onNew}/>
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