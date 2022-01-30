import { RestauranteView, RestauranteFoto, RestauranteInfo } from './styles';
import { Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const RestauranteItem = ({ id, nome, nota, categoria, distancia, valor_frete, tempo_entrega, img }) => {
    return (
        <RestauranteView>
            <RestauranteFoto
                source={{
                    uri: img.trim(),
                    width: 50,
                    height: 50,
                    resizeMode: 'cover'
            }}/>
            <RestauranteInfo>
                <Text>{nome}</Text>
                <Text><AntDesign name="star" size={12} color="#F9A825"/>{nota} - {categoria} - {distancia}</Text>
                <Text>{tempo_entrega} • R$ {valor_frete}</Text>
            </RestauranteInfo>
        </RestauranteView>
    );
}

export default RestauranteItem;