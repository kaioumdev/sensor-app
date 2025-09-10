import { useBatteryLevel } from 'expo-battery';
import { StyleSheet, Text, View } from 'react-native';

export default function BatteryScreen() {
  const batteryLevel = useBatteryLevel();

  return (
    <View style={styles.container}>
      <Text>Current Battery Level: {batteryLevel * 100}%</Text>
      <View>
        <Text>
          Battery means the current battery level of the device. It shows the percentage of battery left in the device. Battery provides information about the battery such as the current level, charging state, and more.Gets the battery level of the device as a number between 0 and 1, inclusive. If the device does not support retrieving the battery level, this method returns -1. On web, this method always returns 1.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
