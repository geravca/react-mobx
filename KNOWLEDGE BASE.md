# REACT IMPORTANT PARTS
## Templates

###Stateless or functional component
```react
import React from 'react';
import styles from './FunctionalComponent.scss';

const FunctionalComponent = (props) => {
  return (
    <div className={styles.myStyle}>
    </div>
  );
};

export default FunctionalComponent;
```

###Common react Component
```react
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from './Component.scss';

class Component extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.myClass}>
      </div>
    );
  }
}

Component.defaultProps = {
  data: '',
};

Component.propTypes = {
  data: PropTypes.string,
};

export default Component;
```

###Component with Redux
```react
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {actionCreator} from '../../redux/actions/main';

import styles from './ComponentWithRedux.scss';

class ComponentWithRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.myStyle}>
      </div>
    );
  }
}

ComponentWithRedux.defaultProps = {
  data: '',
};

ComponentWithRedux.propTypes = {
  data: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

const mapDispatchToProps = {
  actionCreator
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentWithRedux);
```

### Higher order Component
```react
import React from 'react';
import PropTypes from 'prop-types';

import Component from '../Component';

const higherOrderComponent = (WrappedComponent) => {
  class Decorator extends React.Component {
    render() {
      if (this.props.isTrue) {
        return <WrappedComponent {...this.props}/>;
      }
      return <Component {...this.props}/>;
    }
  }

  Decorator.propTypes = {
    data: PropTypes.string
  };

  return Decorator;
};

export default higherOrderComponent;

```
###Component with all life cycle
```react
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Component extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {}
  shouldComponentUpdate(nextProps, nextState) {}
  componentWillUpdate(nextProps, nextState) {}
  componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {}

  render() {
    return (<div></div>);
  }
}

Component.propTypes = {};

export default Component;

```
###Prop types
```react
Component.propTypes = {
  options: PropTypes.shape({
    boolOption: PropTypes.bool,
    optionList: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        clickHandler: PropTypes.func,
        content: PropTypes.any
      })
    )
  })
};
```
# Important Tips
### Insert html content
```react
<div dangerouslySetInnerHTML={{__html: '{html string}'}}> </div>
```

### HTML and Component references
Useful when need to execute methods from a child component or from a HTML element object
```react
...
/** Inside render method **/

// html element reference
<input type="text" ref={(input) => { this.textInput = input; }} />

// Component reference
<Child ref="child">

...
/** Using the references **/

// the element reference
this.textInput.focus();

// the component reference
this.refs.child.doSomething();
```
#Things to remember
1. For performance, avoid making deep copies of states
2. [Isomorphic React apps](https://reactjs.org/docs/react-dom-server.html):
    - This means that react can be rendered from the server side
    - componentDidMount not working here
3. Chrome react extensions:
    - React Developer Tools
    - Redux DevTools
    - Redux Saga Dev Tools
    - react-addons-perf (this is from code)
4. React components should act like pure functions respect to their props
5. The method `shouldComponentUpdate()` can be helpful to avoid re-rendering and bad performance issues
6. [Functional, Pure and Higher Order (HOC) Components](https://logrocket.com/blog/pure-functional-components/#pure-functional-components) features:
7. For React animations, it is recommended using [react-transition-group](https://reactcommunity.org/react-transition-group/)
8. [React context](https://reactjs.org/docs/context.html), useful to pass data to children component instead of props

- [React HOCS api](https://reactjs.org/docs/hooks-state.html)
