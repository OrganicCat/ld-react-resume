import React, {Component} from 'react'

export class Card extends Component {
    constructor(props) {
        super(props)
        //this.color = "card--" + this.props.color
        this.color = this.props.color ? 'card--'+this.props.color : 'card'
    }

    render(props) {
        return (
            <div className={this.color}>
                <div className="card__header">{this.props.cardHeader}</div>
                <img className="card__image" src={this.props.cardData.image} alt="Skill Sekelton"/>
                <div className="card__type">{this.props.cardData.type}</div>
                <div className="card__content">
                    <div className="card__content__text">{this.props.cardContent}</div>
                </div>
                <div className="card__power">{this.props.cardData.power}</div>
            </div>
        )
    }
}
