import React, {Component} from 'react'
import {Card} from './Card'

export class MainContent extends Component {
    
    constructor(props) {
        super(props)
        this.content = this.getBodyContent(this.props.displayPage)
    }

    getBodyContent = (displayPage) => {
        const bodyContent = [
        {
          id: 1,
          cardHeader: 'HTML + Sites',
          cardContent: 'Create custom select boxes, construct templates and layout, design flow underneath the artwork. Created 12+ production sites throughout career',
          image: '/imgs/white_magic_card2.jpg',
          type: 'Create - Skeleton',
          power: '9/10',
          color: 'white'
        },
        {
          id: 2,
          cardHeader: 'SCSS/CSS',
          cardContent: 'Can design intricate layouts and implement them with responsive design (desktop to mobile). Experienced in UX for keeping customers interested and decluttering interfaces',
          image: '/imgs/black_magic_card2.jpg',
          type: 'Sorcery - Black Magic',
          power: '9/10',
          color: 'black'
        },
        {
          id: 3,
          cardHeader: 'JavaScript',
          cardContent: 'Worked with JS creating dynamic sites and single page applications. ES6 ready, but ES5 backwards compatible',
          image: '/imgs/green_magic_card2.jpg',
          type: 'Summon - Wall',
          power: '8/10',
          color: 'green'
        },
        {
          id: 4,
          cardHeader: 'AngularJS',
          cardContent: 'A popular flavor of the past few years, I have experience in designing and developing 3+ websites with 1.x and one with 2+',
          image: '/imgs/red_magic_card2.jpg',
          type: 'Instant - Lighting',
          power: '6/10',
          color: 'red'
        },
        {
          id: 5,
          cardHeader: 'React',
          cardContent: 'ReactJS is working well for me, I love the ease of use implementing it on the front end, and have dabbled in backend usage',
          image: '/imgs/blue_magic_card2.jpg',
          type: 'Sorcery - Counterspell',
          power: '3/10',
          color: 'blue'
        }
      ]

      const bodyContent2 = [
        {
          id: 1,
          cardHeader: 'HTML + Sites',
          cardContent: 'Create custom select boxes, construct templates and layout, design flow underneath the artwork. Created 12+ production sites throughout career',
          image: '/imgs/white_magic_card2.jpg',
          type: 'Create - Skeleton',
          power: '9/10',
          color: 'white'
        },
        {
          id: 2,
          cardHeader: 'SCSS/CSS',
          cardContent: 'Can design intricate layouts and implement them with responsive design (desktop to mobile). Experienced in UX for keeping customers interested and decluttering interfaces',
          image: '/imgs/black_magic_card2.jpg',
          type: 'Sorcery - Black Magic',
          power: '9/10',
          color: 'black'
        },
        {
          id: 3,
          cardHeader: 'JavaScript',
          cardContent: 'Worked with JS creating dynamic sites and single page applications. ES6 ready, but ES5 backwards compatible',
          image: '/imgs/green_magic_card2.jpg',
          type: 'Summon - Wall',
          power: '8/10',
          color: 'green'
        },
        {
          id: 4,
          cardHeader: 'AngularJS',
          cardContent: 'A popular flavor of the past few years, I have experience in designing and developing 3+ websites with 1.x and one with 2+',
          image: '/imgs/red_magic_card2.jpg',
          type: 'Instant - Lighting',
          power: '6/10',
          color: 'red'
        },
        {
          id: 5,
          cardHeader: 'React',
          cardContent: 'ReactJS is working well for me, I love the ease of use implementing it on the front end, and have dabbled in backend usage',
          image: '/imgs/blue_magic_card2.jpg',
          type: 'Sorcery - Counterspell',
          power: '3/10',
          color: 'blue'
        }
      ]

      if (displayPage == "/work") {
        return bodyContent
      } else if (displayPage == "/interests") {
        return bodyContent2
      }
    }

    render(props) {
        return (
            <div className="maincontent">
                {this.getBodyContent(this.props.displayPage).map(cardContents => <Card {...cardContents} key={cardContents.id} cardData={cardContents} cardHeader={cardContents.cardHeader} cardContent={cardContents.cardContent} color={cardContents.color} /> )}
            </div>
        )
    }
}
