import React, { useState } from 'react';
import { GoodButton } from '../components/GoodButton';
import { styles } from '../styles';
import axios from 'axios';

export const StravaConnect = ({ user }) => {

    const [isLoading, setIsLoading] = useState(false);
    if (__DEV__) {
        axios.defaults.baseURL = "http://localhost:5000/cycle-saver/us-central1/app/";
    } else {
        axios.defaults.baseURL = "https://us-central1-cycle-saver.cloudfunctions.net/app/";
    }
    axios.defaults.headers["Authorization"] = `Bearer ${user.idToken}`;
    
    const connectStrava = () => {
        setIsLoading(true);
        console.log("Connecting to Strava...");
        axios.get("strava/login").then(resp => {
            console.log(`Connecting to strava: ${JSON.stringify(resp.data)}`);
            setIsLoading(false);
        }).catch(e => {
            console.log(`Error connecting to strava: ${e.message}`);
            setIsLoading(false);
        });
    }

    return (
       <GoodButton
            style={isLoading ? styles.stravaConnectDisabled : styles.stravaConnect}
            text="Connect Strava"
            textStyle={{ color: 'white' }}
            onPress={() => connectStrava()}
            disabled={isLoading}
            isLoading={isLoading}
            loadingText="Connecting to Strava..."
        />
    );
};