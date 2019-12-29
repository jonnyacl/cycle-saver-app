import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { styles } from "../styles";

const Login = ({ setSignUp }) => {
  const [userState, dispatch] = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signin = () => {
    setIsLoading(true);
    console.log(`Signing in with ${email}`);
    setIsLoading(false);
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
        />
        <TextInput placeholder="Password"
          onChangeText={value => setPassword(value)}
          style={styles.formText}
          keyboardAppearance="dark"
        />
        {
          isLoading ? <TouchableOpacity style={styles.disabledLoginButton} disabled={true}><Text>Logging in...</Text></TouchableOpacity>
          : <TouchableOpacity style={validateLoginForm() ? styles.loginButton : styles.disabledLoginButton} title="Login" onPress={() => signin()} disabled={!validateLoginForm()}><Text style={{ color: 'white' }}>Login</Text></TouchableOpacity>
        }
        <Button title="Sign up here" onPress={() => {setSignUp(true)}}/>
        {renderErrors()}
      </View>
    </>
  );
};

export default Login;
