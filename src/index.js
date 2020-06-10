function Form(props) {
  return(
    <div>
     <form>
      <label>hey</label>
      <input type="text"/>
      <button>Next</button>
     </form>
    </div>  
  );
}

class App extends React.Component {
  constructor(props){
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
    }
    //bind functions here
    this.handleCheckoutClick = this.handleCheckoutClick.bind(this);
  }

  handleCheckoutClick(event){
    console.log('button clicked');
    // this should render new page
    this.setState({
      displayForm: true
    });
  }

  render(){
    let formComponent;
    if(this.state.displayForm){
      formComponent = <Form />
    }
    return(
      <div>
        <h1>HomePage</h1>
        {formComponent}
        <button onClick={this.handleCheckoutClick}>Checkout</button>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));

