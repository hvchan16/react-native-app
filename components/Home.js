import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import Header from './Header';
import Product from './Product';


const Home = ({ navigation }) => {

  const products = [
    {
      id: 1,
      name: 'Samsung Mobile',
      color: 'Black',
      price: '10,000',
      image: ''
    },
    {
      id: 2,
      name: 'Apple Mobile',
      color: 'Blue',
      price: '20,000',
      image: ''
    },
    {
      id: 3,
      name: 'Nokia Mobile',
      color: 'Green',
      price: '4,000',
      image: ''
    }
  ]

  return (
    <View style={style.container}>
      <Header />
      <Button title='Users List' onPress={() => navigation.navigate('Users List')} />
      <ScrollView>
        {
          products.map((item) => (
            <Product item={item} key={item.id} />
          ))
        }
      </ScrollView>
    </View>
  )
}

export default Home;

const style = StyleSheet.create({
  container: {
    flex: 1
  }
})