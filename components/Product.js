import { View, Text, StyleSheet, Button } from 'react-native'
import { addToCart, removeToCart } from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react';

const Product = ({ item }) => {

    const dispatch = useDispatch();
    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    }

    const handleRemoveToCart = (item) => {
        dispatch(removeToCart(item.name));
    }
    const cartItems = useSelector((state) => state.cartReducer);
    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        let result = cartItems.filter((element) => {
            return element.name === item.name
        });
        if (result.length) {
            setIsAdded(true)
        } else {
            setIsAdded(false)
        }
    })

    return (
        <View key={item.id}>
            <Text style={{ fontSize: 24 }}>{item.name}</Text>
            <Text style={{ fontSize: 24 }}>{item.price}</Text>
            <Text style={{ fontSize: 24 }}>{item.color}</Text>
            {
                isAdded
                    ?
                    <Button title='Remove to Cart' onPress={() => handleRemoveToCart(item)} />
                    :
                    <Button title='Add to Cart' onPress={() => handleAddToCart(item)} />
            }
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Product