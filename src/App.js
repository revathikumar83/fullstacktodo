//import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

Amplify.configure(config);

function App() {
  return (
    <div className="App">
      <h1>hello todo1</h1>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
