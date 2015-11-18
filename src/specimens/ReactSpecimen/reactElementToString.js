import React from 'react';

/*

Turns a React element into its JSX string representation.

Probably not complete

Features:

- Uses self-closing tags when no children are set
- Uses a single line for one/none prop
- Uses multiple lines for multiple props
- Sorts props alphabetically
- Removes defaultProps from output

Needs work:

- Don't use JSON.stringify: Nested objects are rendered as JSON (e.g. <div style={{"foo":"bar"}} />)

*/

const formatProp = (k, v) => {
  return v === true ? k :
    typeof v === 'string' ? `${k}='${v}'` :
    `${k}={${JSON.stringify(v) || v.name || typeof v}}`;
};

const reactElementToString = (el, indent = '') => {
  if (el === void 0) {
    return '';
  }

  if (typeof el === 'string') {
    return `${indent}${el}`;
  }

  const {props, type} = el;
  let displayName = '';
  let defaultProps = null;

  if (typeof type === 'string') {
    displayName = type;
  } else {
    displayName = type.displayName;
    defaultProps = type.defaultProps;
  }

  const propKeys = Object.keys(props)
    .sort()
    .filter((k) => k !== 'children')
    .filter((k) => defaultProps ? props[k] !== defaultProps[k] : true);

  const propString = propKeys.map((k) => formatProp(k, props[k])).join(`\n${indent}  `);

  const whitespaceBeforeProps = propKeys.length > 1 ? `\n${indent}  ` :
    propKeys.length === 1 ? ' ' :
    '';
  const whitespaceAfterProps = propKeys.length > 1 ? `\n${indent}` : '';

  return props.children ?
`${indent}<${displayName}${whitespaceBeforeProps}${propString}${whitespaceAfterProps}>
${React.Children.map(props.children, (c) => reactElementToString(c, `${indent}  `)).join('\n')}
${indent}</${displayName}>` :
`${indent}<${displayName}${whitespaceBeforeProps}${propString}${whitespaceAfterProps} />`;
};

export default reactElementToString;
