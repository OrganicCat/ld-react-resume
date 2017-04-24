import React, {Component} from 'react'
import {Card} from './Card'

export class MainContent extends Component {
    

    render(props) {
        return (
            <div className="maincontent">
                {this.props.content.map(cardContents => <Card {...cardContents} key={cardContents.id} cardData={cardContents} cardHeader={cardContents.cardHeader} cardContent={cardContents.cardContent} color={cardContents.color} /> )}
            </div>
        )
    }
}
