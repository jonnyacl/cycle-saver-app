import React, { useReducer, useState } from 'react';
import { Text, View } from 'react-native';
import firebase from '@react-native-firebase/app';
import { styles } from './styles';
import { UserReducer } from "./reducers/UserReducer";
import { UserContext } from "./context/UserContext";
import Auth from './screens/Auth';

const App = () => {
  const initialUserState = {
    user: null,
    newUser: null,
  };
  const [userChecked, setUserChecked] = useState(false);

  const userReducer = (state, action) => UserReducer(state, action);
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);

  if (!userChecked) {
    // check for logged in user with firebase once

    setUserChecked(true);
  }

  if (firebase.apps.length) {
    firebase.apps.forEach(a => {
      console.log(`FIREBASE APP INFO: ${JSON.stringify(a)}`);
    });
  } else {
    console.error("Failed to find any firebase apps.");
  }

  renderAuth = () => {
    return (
      <View style={styles.login}>
        <Text style={styles.welcome}>Cycle Saver</Text>
        <Auth />
      </View>
    );
  }

  return (
    <UserContext.Provider value={[userState, userDispatch]}>
      {userState.user ? 
        <View style={styles.container}>
          <Text style={styles.welcome}>Cycle Saver</Text>
          <Text style={styles.instructions}>See how much you save by running, walking or cycling to work. (N+1)</Text>
        </View>
        :
        <>
          {renderAuth()}
        </>
      }
    </UserContext.Provider>
  );
}

export default App;