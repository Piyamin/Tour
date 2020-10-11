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
  ImageBackground,
} from 'react-native';
// import Gallery from 'react-native-image-gallery';
export default class StaffScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }
  componentDidMount() {
    return fetch('http://172.16.156.101/Tour/database/customer_api.php')
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
    return (
        <View>
          <ScrollView>
            <View>
            <Text style={{fontSize: 25, marginTop: 30, marginLeft: 100}}>
                      View All Customer
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
                      CID : {item.CID}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 5, marginLeft: 50}}>
                      CName : {item.Cname}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 5, marginLeft: 50}}>
                      CTelephone: {item.CTelephone}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 5, marginLeft: 50}}>
                      CSex: {item.CSex}
                    </Text>
                  </View>
                  
                )}
              />
            </View>
          </ScrollView>
        </View>
    );
  }
}