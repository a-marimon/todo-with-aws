import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import { Auth, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import * as mutations from './graphql/mutations'
import * as queries from './graphql/queries'

Auth.configure(awsconfig);
API.configure(awsconfig)

const App = () => {
  const [ currentUser, setCurrentUser ] = useState();
  const [ userTodos, setUserTodos ] = useState();

  // AUTHENTICATION
  const authenticateUser = async () => {
    let user = await Auth.currentAuthenticatedUser();
    await setCurrentUser(user['username']);
  }

  useEffect(() => {
    authenticateUser();
  }, [])  

  return (
    <div className="App">
      {
        currentUser
      }

      <AmplifySignOut/>
    </div>
  );
}

export default withAuthenticator(App);
