import * as Cellular from "expo-cellular";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CellularScreen() {
  const [carrier, setCarrier] = useState<string | null>(null);
  const [gen, setGen] = useState<string>("");

  useEffect(() => {
    (async () => {
      setCarrier(await Cellular.getCarrierNameAsync());
      const g = await Cellular.getCellularGenerationAsync();
      setGen(g.toString());
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Carrier: {carrier || "Unknown"}</Text>
      <Text>Generation: {gen}</Text>
      <View>
        <Text>
          Cellular provides information about the user cellular service provider, such as its unique identifier, cellular connection type, and whether it allows VoIP calls on its network. Using getCarrierNameAsync to got the name of the sim cards. Using getIsoCountryCodeAsync to got the country code of the sim cards. Using getMobileCountryCodeAsync to got the mobile country code of the sim cards. Using getMobileNetworkCodeAsync to got the mobile network code of the sim cards. Using getCellularGenerationAsync to got the cellular generation of the sim cards like 2G, 3G, 4G, 5G, etc.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
