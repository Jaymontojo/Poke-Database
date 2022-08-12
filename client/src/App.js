import React, {Component} from 'react'
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      //state variables
    }
  };

  componentDidMount() {
    axios.get('/api/hello')
      .then(res => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

// function App() {
//   const [data, setData] = React.useState(null);

//   React.useEffect(() => {
//     fetch("/api/hello")
//       .then((res) => res.json())
//       .then((data) => setData(data.message));
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//     </div>
//   );
// }

// export default App;