class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      
      //add handle
      
    }
    
    // add handleChange here
    handleChange = (e)=>{
      this.setState({value: e.target.value})
    }
    // add handleSubmit here
    handleSubmit = (e)=>{
      alert('A name was submitted: ' + this.state.value);
      e.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
  );