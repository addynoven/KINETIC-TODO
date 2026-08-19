import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // task 1 done
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      <View style={{backgroundColor: 'red', width: 100, height: 100, alignSelf: 'flex-start'}}>
      </View>
      <View style={{backgroundColor: 'blue', width: 100, height: 100,alignSelf: 'center'}}>
      </View>
      <View style={{backgroundColor: 'green', width: 100, height: 100, alignSelf: 'flex-end'}}>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
