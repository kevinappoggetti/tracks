import React from 'react';
import {View, Text,Button, StyleSheet} from 'react-native';

const TrackListScreen = ({navigation}) => {
  return (
    <View>
      <Text>Ciao</Text>
      <Button title="TrackDetails" onPress={()=>navigation.navigate('TrackDetail')}/>

    </View>
    );

}

const styles=StyleSheet.create({

});

export default TrackListScreen;
