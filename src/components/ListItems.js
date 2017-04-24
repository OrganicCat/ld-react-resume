import React, {Component} from 'react'
import {Link} from '../router/Link'

class ListItems extends Component {
    render(props) {
        return (
            <div className="menu__listitems">
                {this.props.items.map(item => <Link {...item} key={item.id} name={item.name} /> )}
            </div>
        )
    }
}

export {ListItems}