import React, {Component} from 'react'

export class Banner extends Component {
    

    render(props) {
        return (
            <div className="banner">
                <div className="banner__content">
                    {this.props.content.mainContent}
                </div>
            </div>
        )
    }
}
