class Button {

  constructor(text, onClick) {
    this.text = text;
    this.onClick = onClick;
  }

  render() {
    const button = document.createElement('button');
    button.className = 'button';
    button.onclick = this.onClick;
    button.textContent = this.text;

    return button;
  }
}

export default Button;