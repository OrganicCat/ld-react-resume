import React, {Component} from 'react'

export class Link extends Component {
    static contextTypes = {
        route: React.PropTypes.string,
        linkHandler: React.PropTypes.func
    }

    handleClick = (event) => {
        event.preventDefault();
        this.context.linkHandler(this.props.path)
    }

    render() {
        const activeClass = this.context.route === this.props.to ? 'active' : '';
        return (
            <a className={activeClass} href='#' onClick={this.handleClick}>{this.props.name}</a>
        )
    }
}

Link.propTypes = {
    path: React.PropTypes.string.isRequired
}