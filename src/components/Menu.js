import React, {Component} from 'react'
import {ListItems} from './ListItems'

class Menu extends Component {
    

    render(props) {
        return (
            <div className="menu">
                <ListItems items={this.props.links} />
            </div>
        )
    }
}

export {Menu}