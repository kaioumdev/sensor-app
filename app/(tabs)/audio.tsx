import { useAudioPlayer } from 'expo-audio';
import { Button, StyleSheet, Text, View } from 'react-native';

const audioSource = require("../../assets/Hello.mp3");

export default function AudioScreen() {
  const player = useAudioPlayer(audioSource);

  return (
    <View style={styles.container}>
      <Button title="Play Sound" onPress={() => player.play()} />
      <Button
        title="Replay Sound"
        onPress={() => {
          player.seekTo(0);
          player.play();
        }}
      />
      <View>
        <Text>Audio means playing a mp3 sound from providing the files. Audio files have a two buttons one play button that when click to play the sound and another button is replay that go back to the start and play again.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
});
