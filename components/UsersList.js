import { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { getUserList } from '../redux/action';

const UsersList = () => {
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.cartReducer);

    // commented as raising error, using redux saga
    // useEffect(() => {
    //     dispatch(getUserList());
    // }, []);
    console.log(userList);
    return (
        <View style={style.container}>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default UsersList