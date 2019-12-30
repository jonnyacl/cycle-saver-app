import React, { useReducer, useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { UserReducer } from "./reducers/UserReducer";
import { UserContext } from "./context/UserContext";
import Auth from './screens/Auth';
import auth from "@react-native-firebase/auth";
import Logout from './screens/Logout';
import { StravaConnect } from './screens/StravaConnect';

const App = () => {
  const initialUserState = {
    user: null,
  };
  const [userChecked, setUserChecked] = useState(false);

  const userReducer = (state, action) => UserReducer(state, action);
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);

  if (!userChecked) {
    // check for logged in user with firebase once
    const signedInUser = auth().currentUser;
    console.log(`USER: ${JSON.stringify(signedInUser)}`);
    if (signedInUser) {
      userDispatch({ type: "CHECK_LOGIN_SUCCESS", user: signedInUser });
    } else {
      userDispatch({ type: "CHECK_LOGIN_FAIL" });
    }
    setUserChecked(true);
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
        <>
          <Logout />
          <View style={styles.container}>
            <Text style={styles.welcome}>Cycle Saver</Text>
            <Text style={styles.instructions}>See how much you save by running, walking or cycling to work. (N+1)</Text>
            <StravaConnect />
          </View>
        </>
        :
        <>
          {renderAuth()}
        </>
      }
    </UserContext.Provider>
  );
}

export default App;