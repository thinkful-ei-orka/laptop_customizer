import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes

import './App.css';
import  Header from './components/Header'
import Customize from './components/Customize';
import YourCart from './components/YourCart'
import Total from './components/Total'
import YourCartHeader from './components/YourCartHeader';
import CustomizeHeader from './components/CustomizeHeader';
import Features from './components/Features'
import Summaries from './components/Summary'

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    FEATURES: {
      Processor: [
        {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        {
          name: 'Professor X AMD Fire Breather with sidewinder technology',
          cost: 1200
        }
      ],
      "Operating System": [
        {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        {
          name: 'Bodhi Linux',
          cost: 300
        }
      ],
      "Video Card": [
        {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        {
          name: 'Mind mild breeze 2000',
          cost: 1345
        }
      ],
      Display: [
        {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        },
        {
          name: '15.3" HGTV (3840 x 2160) Home makeover edition',
          cost: 1400
        },
      ]
    },

    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {

    return (
      <div className="App">
        <Header />
        <main>
          <CustomizeHeader />
          <Features features={this.state.FEATURES} selected={this.state.selected} 
              updateFeature={this.updateFeature()}/>
           {/* <Customize Features={features} /> */}
          <section className="main__summary">
            <YourCartHeader />
            <Summaries selected={this.state.selected}/>
            <Total selected={this.state.selected} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
