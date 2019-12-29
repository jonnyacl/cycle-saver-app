import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { View, Text, TextInput, Button } from "react-native";
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
        <Text style={styles.sectionDescription}>Login</Text>
        <TextInput placeholder="Email"
          onChangeText={value => setEmail(value)}
          style={styles.formText}
        />
        <TextInput placeholder="Password"
          onChangeText={value => setPassword(value)}
          style={styles.formText}
        />
        <Button title="Login" onPress={() => signin()} disabled={!validateLoginForm()}/>
        <Button title="Register" onPress={() => {setSignUp(true)}}/>
        {renderErrors()}
      </View>
    </>
  );
};

export default Login;
