import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link, NativeRouter, Route, Routes } from 'react-router-native';
import Doctors from './Doctors';
import Home from './Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello from my React Native</Text>
      <StatusBar style="auto" />
      {/* set up react native router */}
      <NativeRouter>
        <View style={styles.nav}>
          <Link to="/" >
            <Text>Home</Text>
          </Link>
          <Link to="/doctors" >
            <Text>Doctors</Text>
          </Link>
        </View>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
        </Routes>
      </NativeRouter>
    </View>

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
