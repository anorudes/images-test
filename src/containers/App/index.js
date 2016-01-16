import React, { Component } from 'react';
import R from 'ramda';

const images = R.range(1, 20).map(i => `http://lorempixel.com/g/300/${300 + i}/`);

/* application components */
import { Fixed } from 'components/Fixed';
import { Items } from 'components/Items';

export class App extends Component {
  render() {
    return (
      <section>
        <Fixed />
        <Items images={images} />
      </section>
    );
  }
}
