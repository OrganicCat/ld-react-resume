import React, { Component } from 'react';
import './App.css';
import {Header, Menu, Banner, MainContent} from './components'

class App extends Component {
  constructor() {
    super()
    this.state = ({
      name: 'Lee Delarm',
      links: []
    })
  }

  static contextTypes = {
    route: React.PropTypes.string
  }

  componentWillMount() {
    this.setState({
      links: [
        {
          id: 1,
          name: "My Work",
          path: '/work'
        },
        {
          id: 2,
          name: "My Interests",
          path: '/interests'
        }
      ]
    }) 
  }

  render() {
    const content = {
      mainContent: "I'm a developer, designer, writer, socialite, reader, gamer, dancer",
    }

    const bodyContent = [
        {
          id: 1,
          cardHeader: 'HTML',
          cardContent: 'Wow, I have worked with SO MUCH HTML. I can tag with the best of them.',
          image: '/imgs/white_magic_card2.jpg',
          power: '9/10',
          color: 'white'
        },
        {
          id: 2,
          cardHeader: 'CSS',
          cardContent: 'Box models, typography, and implementation are what makes the web go round',
          image: '/imgs/black_magic_card2.jpg',
          power: '9/10',
          color: 'black'
        },
        {
          id: 3,
          cardHeader: 'JavaScript',
          cardContent: 'Object oriented programming, now with skills including more type checking and class syntactical sugar',
          image: '/imgs/green_magic_card2.jpg',
          power: '8/10',
          color: 'green'
        },
        {
          id: 4,
          cardHeader: 'AngularJS',
          cardContent: 'A popular flavor of the past few years, I have experience in designing and developing with 1.x',
          image: '/imgs/red_magic_card2.jpg',
          power: '7/10',
          color: 'red'
        },
        {
          id: 5,
          cardHeader: 'React',
          cardContent: 'Guess what this site is built in?',
          image: '/imgs/blue_magic_card2.jpg',
          power: '4/10',
          color: 'blue'
        }
      ]

      const bodyContent2 = [
        {
          id: 1,
          cardHeader: 'HTML',
          cardContent: 'Wow, I have worked with SO MUCH HTML. I can tag with the best of them.',
          color: 'white'
        },
        {
          id: 2,
          cardHeader: 'CSS',
          cardContent: 'Box models, typography, and implementation are what makes the web go round',
          color: 'black'
        },
        {
          id: 3,
          cardHeader: 'JavaScript',
          cardContent: 'Object oriented programming, now with skills including more type checking and class syntactical sugar',
          color: 'green'
        },
        {
          id: 4,
          cardHeader: 'AngularJS',
          cardContent: 'A popular flavor of the past few years, I have experience in designing and developing with 1.x',
          color: 'red'
        },
        {
          id: 5,
          cardHeader: 'React',
          cardContent: 'Guess what this site is built in?',
          color: 'blue'
        }
      ]
    return (
      <div className="App">
        <Header name={this.state.name} />
        <Menu links={this.state.links} />
        <Banner content={content} />
        <MainContent content={bodyContent} />
      </div>
    );
  }
}

export default App;
