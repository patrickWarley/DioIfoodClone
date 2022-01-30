import { BannerImg, BannerItemView } from './style';
import { Dimensions } from 'react-native';

const BannerItem = ({id, img}) => {
  return(
    <BannerItemView>
      <BannerImg 
        source={{ uri: img.trim()}}
        style ={{
          width: (Dimensions.get('window').width)-50,
          height: 180,
          resizeMode: 'stretch'
        }}
      />
    </BannerItemView>
  );
}

export default BannerItem;