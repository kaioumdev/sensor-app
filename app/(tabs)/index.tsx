import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Link push href='/accelerometer'>
          <Text>Accelerometer</Text>
        </Link>
      </TouchableOpacity>
       <TouchableOpacity>
        <Link push href='/audio'>
          <Text>Audio</Text>
        </Link>
      </TouchableOpacity>
       <TouchableOpacity>
        <Link push href='/battery'>
          <Text>Battery</Text>
        </Link>
      </TouchableOpacity>
       <TouchableOpacity>
        <Link push href='/brightness'>
          <Text>Brightness</Text>
        </Link>
      </TouchableOpacity>
       <TouchableOpacity>
        <Link push href='/calendar'>
          <Text>Calendar</Text>
        </Link>
      </TouchableOpacity>
       <TouchableOpacity>
        <Link push href='/camera'>
          <Text>Camera</Text>
        </Link>
      </TouchableOpacity>
       <TouchableOpacity>
        <Link push href='/cellular'>
          <Text>Cellular</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    borderColor: 'red', 
    borderWidth: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    padding: 20,
    gap: 12,
  },
});
