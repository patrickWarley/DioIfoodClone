import { TouchableOpacity, Text} from './styles';

const Button = ({theme, text, ...rest}) => {
    return (
        <TouchableOpacity theme = {theme || ''} {...rest}>
            <Text theme = {theme || ''} {...rest}>{text}</Text>
        </TouchableOpacity>
    );
}

export default Button;