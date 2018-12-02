import Component from '../component.js';

class Button extends Component {

  constructor(text, onClick) {
    super();
    this.text = text;
    this.onClick = onClick;
  }

  render() {
    return this.createElement(
      this.formatProps('button',
        { className: 'button', onclick: this.onClick },
        this.text
      )
    );
  }

}

export default Button;