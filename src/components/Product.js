// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
    render () {
        return (
            <div>
                <ul>
                    <li>{this.props.name}</li>
                    <li>{this.props.producer}</li>
                    <li>{this.props.hasWatermark}</li>
                    <li>{this.props.color}</li>
                    <li>{this.props.weight}</li>
                </ul>
            </div>
        );
    }
}

Product.defaultProps = {
    hasWatermark: false
};

Product.propTypes = {
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    hasWatermark: PropTypes.bool,
    color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
    weight: function (props, propName) {
        const weight = props[propName];
        if (weight === undefined) {
            return new Error("There's no weight!");
        }
        else if (typeof weight !== 'number') {
            return new Error("The weight is not a number!");
        }
        else if (weight < 80 || weight > 300) {
            return new Error("The weight is out of range!")
        }
    }
};

export default Product;