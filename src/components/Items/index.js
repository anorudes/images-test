import React, { Component } from 'react';

export class Items extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize.bind(this));
  }

  resize() {
    const listWidth = this.refs.items.offsetWidth;
    const itemsInRow = Math.floor(listWidth / 300);
    const itemSize = 100 / itemsInRow + '%';
    this.setState({
      itemSize,
    });
  }

  renderItem(item, index) {
    const { itemSize } = this.state;

    const style = {
      display: 'inline-block',
      width: itemSize,
      paddingBottom: itemSize,
      backgroundImage: `url(${item})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };

    return (
      <div style={style} key={index}></div>
    );
  }

  render() {
    const { images } = this.props;

    return (
      <section id="items" ref="items" style={{
        paddingLeft: '150px',
        position: 'relative',
      }}
      >
        {
          this.state && images.map(this.renderItem.bind(this))
        }
      </section>
    );
  }
}

Items.propTypes = {
  images: React.PropTypes.array,
};
