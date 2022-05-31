import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import {avPlane, avlogopng} from '../../assets/index';
import React from 'react';
import Header from '../../common/header';
import {colors} from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';
const Signup = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{flex: 1}}>
      <Header />
      <ImageBackground
        source={avPlane}
        resizeMode="cover"
        style={{
          height: 220,
          // backgroundColor: '#e6e6e6',
          // // flex: 1,
          // // backgroundColor: 'black',
          // height: '100%',
          justifyContent: 'center',
        }}></ImageBackground>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={{marginTop: 50}}>
          <Text style={{color: colors.offWhite, fontSize: 30}}>Join Us</Text>

          <TextInput
            placeholder="Add email"
            placeholderTextColor={colors.avBlue}
            style={styles.input}
          />
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor={colors.avBlue}
            style={styles.input}
          />
          <TextInput
            placeholder="Re enter Password"
            placeholderTextColor={colors.avBlue}
            style={styles.input}
          />
          <TouchableOpacity
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 2,
              borderColor: colors.avTealGreen,
              borderRadius: 10,
              paddingVertical: 5,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 27,
                fontWeight: '700',
                // textAlign: 'center',
              }}>
              Join
            </Text>
            <Image
              source={avlogopng}
              style={{width: 100, height: 25, marginLeft: 10}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginTop: 10}}
            onPress={() => navigation.navigate('Login')}>
            <Text style={{color: colors.offWhite, fontSize: 15}}>
              Already a member?
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    height: 490,
    backgroundColor: colors.avBlue,
    // justifyContent: 'center',
    paddingHorizontal: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  input: {
    borderRadius: 10,
    marginTop: 5,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: colors.offWhite,
    padding: 10,
  },
});