export const formatProps = (type, props, ...children) => {
  return { type, props: props || {}, children };
};

const setBooleanProp = (target, name, value) => {
  if (value) {
    target.setAttribute(name, value);
    target[name] = true;
  } else {
    target[name] = false;
  }
};

const setProp = (target, name, value) => {
  if (name === 'className') {
    target.setAttribute('class', value);
  } else if (typeof value === 'boolean') {
    setBooleanProp(target, name, value);
  } else {
    target.setAttribute(name, value);
  }
};

const setProps = (target, props) => {
  Object.keys(props).forEach(name => {
    setProp(target, name, props[name]);
  });
};

export const createElement = (node) => {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }

  const el = document.createElement(node.type);
  setProps(el, node.props);
  node.children.map(createElement).forEach(el.appendChild.bind(el));

  return el;
};