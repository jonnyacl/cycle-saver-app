import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { styles } from "../styles";
import { GoodButton } from "../components/GoodButton";
import auth from "@react-native-firebase/auth";

export default Logout = () => {

    const [userState, dispatch] = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);

    const logout = () => {
        setIsLoading(true);
        auth().signOut().then(() => {
            setIsLoading(false);
            dispatch({ type: "LOGOUT_SUCCESS" });
        }).catch(e => {
            console.log(`Failed to logout properly: ${e}`);
            setIsLoading(false);
            dispatch({ type: "LOGOUT_FAIL" });
        })
    };

    return (
        <GoodButton 
            text={isLoading ? "Logging out..." : "Logout"}
            style={isLoading ? styles.disabledLogoutButton : styles.logoutButton}
            textStyle={{ color: 'white' }} 
            disabled={isLoading}
            onPress={() => {logout()}}
        />
    );
}