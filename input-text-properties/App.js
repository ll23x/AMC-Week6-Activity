import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Button, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 

const HandleInputExample = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    Alert.alert('Submitted Values:', `First Name: ${fname}\nLast Name: ${lname}\nEmail: ${email}\nAge: ${age}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name="person-outline" size={20} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter Fname"
          keyboardType="default"
          autoFocus={true}
          onChangeText={(text) => setFname(text)}
          returnKeyType="done"
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="person-outline" size={20} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter Lname"
          keyboardType="default"
          autoFocus={true}
          onChangeText={(text) => setLname(text)}
          returnKeyType="done"
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="calendar-outline" size={20} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter Age"
          keyboardType="number-pad" 
          autoFocus={true}
          onChangeText={(text) => setAge(text.replace())} 
          returnKeyType="done"
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="mail-outline" size={20} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          keyboardType="email-address"
          autoFocus={true}
          onChangeText={(text) => setEmail(text)}
          returnKeyType="done"
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock-closed-outline" size={20} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
          maxLength={10}
        />
      </View>
      <Text style={styles.displayText}>Password Length: {10 - password.length}</Text>
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginVertical: 10,
    width: '80%',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1, 
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  displayText: {
    marginVertical: 10,
  },
});

export default HandleInputExample;
