import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { View, Text, TextInput, Button } from "react-native";
import { styles } from "../styles";

const Signup = ({ setSignUp }) => {

  const [userState, dispatch] = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signupError, setSignupError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const register = () => {
    setIsLoading(true);
    setIsLoading(false);
  };

  const validateSignupForm = () => {
    return email && email.length > 0 && password && password.length > 0 && confirmPassword && confirmPassword == password;
  };

  const renderSignupErrors = () => {
    if (signupError && signupError.length > 0) {
      return (
        <View className="text-danger">
          <Text>{signupError}</Text>
        </View>
      );
    }
    return null;
  };

  const renderFormErrors = () => {
    let formError = null;
    if (password !== confirmPassword) {
        formError = "Passwords do not match";
    }
    if (!!formError) {
      return (
        <View className="text-danger">
          <Text>{formError}</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <View>
      <Text style={styles.sectionDescription}>Sign up here</Text>
      <TextInput placeholder="Email"
        onChangeText={value => setEmail(value)}
        style={styles.formText}
      />
      <TextInput placeholder="Password"
        onChangeText={value => setPassword(value)}
        style={styles.formText}
      />
      <TextInput placeholder="Confirm Password"
        onChangeText={value => setConfirmPassword(value)}
        style={styles.formText}
      />
      <Button title="Register" onPress={() => register()} disabled={!validateSignupForm()}/>
      <Button title="Login" onPress={() => {setSignUp(false)}}/>
      {renderFormErrors()}
      {renderSignupErrors()}
    </View>
  );
}

export default Signup;