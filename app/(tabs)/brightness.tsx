import * as Brightness from 'expo-brightness';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function BrightnessScreen() {
   const [brightness, setBrightness] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      if (status === 'granted') {
             const value = await Brightness.getBrightnessAsync();
             setBrightness(value);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Brightness: {brightness.toFixed(2)}</Text>
      <Button title="+" onPress={() => Brightness.setBrightnessAsync(1)} />
      <Button title="-" onPress={() => Brightness.setBrightnessAsync(0.5)} />
        <View>
        <Text>
          Brightness means the current brightness level of the device. Each app has its own brightness setting that can optionally override the global system-wide brightness setting.You have a two buttons to increase and decrease the brightness of the device. 
        </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 12,
    borderColor: 'red',
    borderWidth: 1,
  },
});
