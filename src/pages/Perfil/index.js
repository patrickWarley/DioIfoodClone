import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { SafeAreaView } from './style';

export default function Perfil(){
  return (
    <>
      <StatusBar style = "theme-dark"></StatusBar>
      <SafeAreaView>
        <Text>Perfil do usuario!</Text>
      </SafeAreaView>
    </>
  );
}
