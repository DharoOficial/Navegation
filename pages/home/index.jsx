import React from 'react';
import { StyleSheet, View } from 'react-native';


const Home =() => {
    return(
        <view style={styles.container}>
            <text>Home</text>
        </view>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Home;