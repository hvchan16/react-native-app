import { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

const Header = () => {

    const cartData = useSelector((state) => state.cartReducer);
    const [cartItems, setCartItems] = useState(0);

    useEffect(() => {
        setCartItems(cartData.length)
    }, [cartData])

    return (
        <View style={style.container}>
            <Text style={{ fontSize: 30 }}>{cartData && cartData.length || 0}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Header