import React, {Component} from 'react'

class ListItem extends Component {
    static contextTypes = {
        route: React.PropTypes.string,
        linkHandler: React.PropTypes.func
    }

    handleClick = (event) => {
        event.preventDefault()
        this.context.linkHandler(this.props.path)
    }

    render(props) {
        return (
            <li><a href='#' onClick={this.handleClick}>{this.props.name}</a></li>
        )
    }
}

export {ListItem}