import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, Alert, ActivityIndicator } from 'react-native';
import {
  SafeAreaView,
  ViewActivity,
  CategoriaView,
  ViewPrincipal,
  ViewCenter,
  ViewRestaurantes,
  TituloRestaurantes,
  ButtonTipoSelect,
  TextTipoSelect,
  SelectTipo,
  View,
  BannerView
} from './style';

import RestauranteItem from '../../components/RestauranteItem';
import BannerItem from '../../components/BannerItem';
import CategoriaItem from '../../components/CategoriaItem';

export default function Principal(){

  const [banners, setBanners] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [restaurantes, setRestaurantes] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [tipo, setTipo] = useState('Entrega');

  useEffect(()=>{
    async function buscaDados(){

        try { 
          const response = await fetch("http://my-json-server.typicode.com/pablohdev/app-ifood-clone/db");

          const data = await response.json();

          //set the useStates
          setBanners(data.banner_principal);
          setCategorias(data.categorias);
          setRestaurantes(data.restaurantes);
          setLoaded(true);

        } catch (error) {
          Alert.alert("Erro ao consultar "+error);
        } 
    }
    buscaDados();
  },[]);

  const ViewHome = () => {
    return(
        <ViewPrincipal>
          <SelectTipo>
            <ButtonTipoSelect onPress={() => setTipo('Entrega')}>
              <TextTipoSelect selected={tipo == 'Entrega'}> 
                Entrega
              </TextTipoSelect>
            </ButtonTipoSelect>
            <ButtonTipoSelect onPress={() => setTipo('Retirada')}>
              <TextTipoSelect selected={tipo == 'Retirada'}> 
                Retirada
              </TextTipoSelect>
            </ButtonTipoSelect>
          </SelectTipo>
          
          <CategoriaView horizontal={true}>
            {categorias.map(categoria =>(
              <CategoriaItem
              key={categoria.id}
              nome={categoria.nome}
              img={categoria.img_url}
              />
            ))}
          </CategoriaView>

          <BannerView horizontal={true}>
            {
              banners.map(banner => (
                <BannerItem 
                  key={banner.id}
                  img={banner.banner_img_url}
                />
              ))
            }
          </BannerView>
          
          <TituloRestaurantes>Restaurantes</TituloRestaurantes>
          
          <ViewRestaurantes>
            {restaurantes.map(restaurante => (  
                <RestauranteItem 
                  key={restaurante.id}
                  img={restaurante.url_img}
                  nome={restaurante.nome}
                  nota={restaurante.nota}
                  categoria={restaurante.categoria}
                  distancia={restaurante.distancia}
                  valor_frete={restaurante.valor_frete}
                  tempo_entrega={restaurante.tempo_entrega}
                />
            ))}
          </ViewRestaurantes>
        </ViewPrincipal>
    );
  }

  return (
    <>
      <StatusBar style = "theme-dark"></StatusBar>
      <SafeAreaView>
        {loaded ? 
        <ViewHome/>
        : 
        <ViewActivity>
          <ActivityIndicator color="red" size="large"/>
        </ViewActivity>
        }
      </SafeAreaView>
    </>
  );
}
