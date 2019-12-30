import React, { useState } from 'react';
import { GoodButton } from '../components/GoodButton';
import { styles } from '../styles';

export const StravaConnect = () => {

    const [isLoading, setIsLoading] = useState(false);

    const connectStrava = () => {

    }

    return (
       <GoodButton
            style={isLoading ? styles.stravaConnectDisabled : styles.stravaConnect}
            text="Connect Strava"
            textStyle={{ color: 'white' }}
            onPress={() => connectStrava()}
            disabled={isLoading}
        />
    );
};