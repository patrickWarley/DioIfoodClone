import { CategoriaImg, CategoriaText, CategoriaView } from "./style"

const CategoriaItem = ({nome, img}) =>{
  return(
    <CategoriaView>
      <CategoriaImg
        source={{
          uri:img.trim()
        }}
        style={{
          width:98,
          height:58,
          resizeMode:"contain"
        }}
      />
      <CategoriaText>{nome}</CategoriaText>
    </CategoriaView>
  );
}

export default CategoriaItem;