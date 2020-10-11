import React, { Component } from 'react'
import { Text, View, Image, Dimensions ,Button ,TouchableOpacity,ScrollView} from 'react-native'
import Swiper from 'react-native-swiper'
import { SearchBar } from 'react-native-elements';
const { width } = Dimensions.get('window')
const styles = {
  container: {
    flex: 1
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width,
    flex: 1
  }
}

export default class extends Component {

  render() {
   
    return (
      
      <View style={styles.container}>
        <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('../img/logo.png')}
            />
        <Swiper
        
          style={styles.wrapper}  horizontal ={true} autoplay
          height={50}
          onMomentumScrollEnd={(e, state, context) =>
            console.log('index:', state.index)
          }
          dot={
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,.2)',
                width: 5,
                height: 5,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: '#000',
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
          paginationStyle={{
            bottom: -23,
            left: null,
            right: 10
          }}
          loop
        >
          <View
            style={styles.slide}
            title={
              <Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
            }
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('../img/Product/BTour.jpg')}
            />
          </View>
          <View
            style={styles.slide}
            title={
              <Text numberOfLines={1}>Big lie behind Nine’s new show</Text>
            }
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('../img/Product/GTour.jpg')}
            />
          </View>
          <View
            style={styles.slide}
            title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('../img/Product/Dinner.jpg')}
            />
          </View>
          <View
            style={styles.slide}
            title={
              <Text numberOfLines={1}>Learn from Kim K to land that job</Text>
            }
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('../img/Product/Lunch.jpg')}
            />
          </View>
        </Swiper>
       
        
      </View>

    
    )
  }
}
