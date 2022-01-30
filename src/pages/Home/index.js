import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { SafeAreaView, Image, View, ButtonContainer } from './style';

import banner from '../../assets/img/banner.png';
import Button from '../../components/Button';

export default function Home() {
  return (
    <>
      <StatusBar style = "theme-dark"></StatusBar>
      <SafeAreaView>
        <View>
          <Text>Pedir comida nunca foi tão fácil</Text>
          <Image source = {banner}/>
          <Text>Permitir localização</Text>
          <Text>Para descobrir restaurantes que entragam em sua região</Text>
        </View>
        <ButtonContainer>
            <Button text="Pular" onPress ={() => { }}/>
            <Button text="Entrar" theme="primary" />
        </ButtonContainer>
      </SafeAreaView>
    </>
  );
}
