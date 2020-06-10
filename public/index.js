function Form(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("label", null, "hey"), /*#__PURE__*/React.createElement("input", {
    type: "text"
  }), /*#__PURE__*/React.createElement("button", null, "Next")));
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForm: false,
      name: '',
      email: '',
      password: '',
      addressLine: '',
      addressLine2: '',
      city: '',
      zipCode: 0
    }; //bind functions here

    this.handleCheckoutClick = this.handleCheckoutClick.bind(this);
  }

  handleCheckoutClick(event) {
    console.log('button clicked'); // this should render new page

    this.setState({
      displayForm: true
    });
  }

  render() {
    let formComponent;

    if (this.state.displayForm) {
      formComponent = /*#__PURE__*/React.createElement(Form, null);
    }

    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "HomePage"), formComponent, /*#__PURE__*/React.createElement("button", {
      onClick: this.handleCheckoutClick
    }, "Checkout"));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));