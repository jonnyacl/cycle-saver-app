import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { View, Text, TextInput, Button } from "react-native";
import { styles } from "../styles";
import { GoodButton } from "../components/GoodButton";
import auth from "@react-native-firebase/auth";

const Login = ({ setSignUp }) => {
  const [userState, dispatch] = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signin = () => {
    setIsLoading(true);
    auth().signInWithEmailAndPassword(email, password).then(u => {
      setIsLoading(false);
      dispatch({ type: "LOGIN_SUCCESS", user: u });
    }).catch(e => {
      let message = "Incorrect user or password";
      if (e.message && e.message.includes("invalid-email")) {
        message = "Invalid email"
      }
      setIsLoading(false);
      setLoginError(message);
      dispatch({ type: "LOGIN_FAIL" });
    });
    
  };

  const validateLoginForm = () => {
    return email && email.length > 0 && password && password.length > 0;
  };

  const renderErrors = () => {
    if (loginError && loginError.length > 0) {
      return (
        <View className="text-danger">
          <Text>{loginError}</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <>
      <View>
        <TextInput placeholder="Email"
          onChangeText={value => setEmail(value)}
          style={styles.formText}
          keyboardType="email-address"
          keyboardAppearance="dark"
          autoCompleteType="email"
        />
        <TextInput placeholder="Password"
          onChangeText={value => setPassword(value)}
          style={styles.formText}
          keyboardAppearance="dark"
          secureTextEntry={true}
          autoCompleteType="password"
        />
        {
          isLoading ? <GoodButton style={styles.disabledLoginButton} disabled={true} text="Logging in..." />
          : <GoodButton
              style={validateLoginForm() ? styles.loginButton : styles.disabledLoginButton}
              text="Login"
              textStyle={{ color: 'white' }}
              onPress={() => signin()}
              disabled={!validateLoginForm()}
            />
        }
        <Button title="Sign up here" onPress={() => {setSignUp(true)}}/>
        {renderErrors()}
      </View>
    </>
  );
};

export default Login;
