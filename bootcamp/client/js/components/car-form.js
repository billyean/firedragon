import * as React from 'react';
import {Car} from '../model/car';
import colorNamer from 'color-namer';

export class CarForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            make: '',
            model: '',
            colorHexCode: '#ffffff',
            year: 2000,
            price: 0
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.type === 'number' ?  Number(e.target.value) : e.target.value,
        });
    }

    carSubmit = () => {
        this.props.onSubmit(new Car({
            make: this.state.make,
            model: this.state.model,
            colorHexCode: this.state.colorHexCode,
            year: this.state.year,
            price: this.state.price
        }));
        // this.props.onSubmit(new Car(...this.state));
    }

    render() {
        return <form>
            <table>
                <tbody>
                <tr>
                    <td><label htmlFor="iMake">Make : </label></td>
                    <td><input id="iMake" type="text" name="make" value={this.state.make} onChange={this.onChange}/></td>
                    <td><label>{this.state.make === '' ? this.state.make : 'Your input is ' + this.state.make}</label>
                    </td>
                </tr>
                <tr>
                    <td><label htmlFor="iModel">Model : </label></td>
                    <td><input id="iModel" type="text" name="model" value={this.state.model} onChange={this.onChange}/></td>
                    <td>
                        <label>{this.state.model === '' ? this.state.model : 'Your car model is ' + this.state.model}</label>
                    </td>
                </tr>
                <tr>
                    <td><label htmlFor="cHexCode">Color Hex Code: </label></td>
                    <td><input id="cHexCode" type="color" name="colorHexCode" value={this.state.colorHexCode}
                               onChange={this.onChange}/></td>
                    <td>
                        <label>{this.state.colorHexCode === '' ? '' : 'You chose color ' + colorNamer(this.state.colorHexCode).html[0].name}</label>
                    </td>
                </tr>
                <tr>
                    <td><label htmlFor="nYear">Year : </label></td>
                    <td><input id="nYear" type="number" name="year" value={this.state.year} onChange={this.onChange}/></td>
                    <td>
                        <label>{this.state.year === '' ? this.state.year : 'Year of your car is ' + this.state.year}</label>
                    </td>
                </tr>
                <tr>
                    <td><label htmlFor="nPrice">Price : </label></td>
                    <td><input id="nPrice" type="number" name="price" value={this.state.price} onChange={this.onChange}/></td>
                    <td><label>{this.state.price === 0 ? '' : 'Your price is ' + this.state.price}</label></td>
                </tr>
                <tr>
                    <td colSpan="2" className="td_center">
                        <button type="button" onClick={this.carSubmit}>Save Car</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </form>;
    }
}