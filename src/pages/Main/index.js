import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Perfil from '../Perfil';
import Principal from '../Principal';

const Tab =  createBottomTabNavigator();

const screenOptions = {
    
}

export default function Main(){
    return(
        //screeOptions is receiving a object
        <Tab.Navigator screenOptions={
            ({ route }) => ({
                tabBarIcon : ( { focused, color, size } ) => {
                        let iconName;

                        if(route.name == 'Principal'){
                            iconName = 'home';
                        }else if(route.name){
                            iconName = 'user';
                        }

                        return <Feather name={iconName} size={size} color={color}/>
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerShown:false              
            })
            }>
            <Tab.Screen name='Inicio' component={ Principal } />
            <Tab.Screen name='Perfil' component={ Perfil } />
        </Tab.Navigator>
    );
}