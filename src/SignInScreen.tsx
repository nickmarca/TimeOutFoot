import React from 'react';
import {SafeAreaView, Text, TextInput} from 'react-native';

const SignInScreen = () => {
  const [form, setForm] = React.useState({ name: '', email: ''});

  const update = (field: string, value: string) => {
      setForm({...form, [field]: value});
  };
    
  return (
    <SafeAreaView>
      <Text>Sign IN</Text>
      <Text>Email</Text>   
      <TextInput onChangeText={(value: string) => update('email', value)} value={form.email} />
      <Text>Name</Text>
      <TextInput onChangeText={(value: string) => update('name', value)} value={form.name} />
    </SafeAreaView>
  );
};

export default SignInScreen;
