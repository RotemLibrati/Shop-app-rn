import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Color from '../constants/Color';
import { Platform } from 'react-native';
import ProductOverviewScreen from '../screens/shop/ProductsOverviewScreen';

const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductOverviewScreen
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'andriod' ? Color.primary : ''
        },
        headerTintColor: Platform.OS === 'andriod' ? 'white' : Color.primary
    }
});

export default createAppContainer(ProductsNavigator);