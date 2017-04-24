import React, {Component} from 'react';

class Header extends Component {
    

    render(props) {
        return (
            <div>
                <div className="header">
                    <h1 className="header__name">{this.props.name}</h1>
                    <div className="header__icon"></div>
                    <hr />
                </div>
            </div>
        );
    }
}

export {Header}