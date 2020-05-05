import React, {Component}from 'react';
import './App.css';


// creating the Application class
class Body extends Component {
  state = {
    tweets:[]
  };

  componentDidMount(){
    this.getTweets();
};
  // creating a fetch api whihc fecth data from the data
  getTweets = _ =>{
      fetch('http://localhost:3003/tweets')
      .then(response => response.json())
      .then(response => this.setState({tweets: response.data}))
      .catch(err => console.error(err))
  }

 
  renderTweet = ({id,first_name,last_name,message}) => 
    <div className="result"  key={id}>
        <h1>{first_name} {last_name}</h1>
        <p>{message}</p>
    </div>

  // the rendering on the frontend
  render() {
      const {tweets} =this.state
    return (
      <div className="App">
        
        <br />
                  
            {/* returning value from the server and the fucntion above */}
            <div >
                {tweets.map(this.renderTweet)} 
            </div>
    </div>
      
   
    );
  }
}
export default Body;