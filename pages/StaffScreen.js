import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
  ImageBackground,Dimensions
} from 'react-native';
import { SearchBar } from 'react-native-elements';
const { width } = Dimensions.get('window')
// import { StaffPhoto } from '../img/StaffsPhoto';
// import Gallery from 'react-native-image-gallery';
export default class StaffScreen extends Component {
  state = {
    search: '',
  };
  updateSearch = (search) => {
    this.setState({ search });
  };
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }
  componentDidMount() {
    return fetch('http://172.16.156.101/Tour/database/staff_api.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({data: responseJson});
      })
      .catch((error) => {
        console.error(error);
      });
  }
  clickEventListener() {
    Alert.alert('Success');
  }
  render() {
    const { search } = this.state;
    return (
        <View>
          <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
          <ScrollView>
            <View>
            <Text style={{fontSize: 25, marginTop: 30, marginLeft: 120}}>
                      View All Staff
                    </Text>
              <FlatList
                data={this.state.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <View
                    style={{
                      backgroundColor: '#9df2c4',
                      textAlign: 'center',
                      borderRadius: 5,
                      fontSize: 18,
                      marginTop: 15,
                      marginLeft: 10,
                      marginRight: 10,
                    }}>
                    <Text style={{fontSize: 16, marginLeft: 20}}>
                      SID : {item.SID}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 5, marginLeft: 50}}>
                      SName : {item.Sname}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 5, marginLeft: 50}}>
                      STelephone: {item.STelephone}
                    </Text>
                    <Image  
                      resizeMode="stretch"
                      style={styles.image}
                      
                      source={require('../img/StaffsPhoto/'+(7501)+'.jpg')} />
                  </View>
                  
                )}
              />
            </View>
          </ScrollView>
        </View>
    );
    }
  }
  const styles = {
    container: {
      flex: 1
    },
  
    wrapper: {},
  
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    },
  
    image: {
      width : 150,
      height : 300,
      flex: 1
    }
  
  
}