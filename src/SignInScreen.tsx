import React from 'react';
import {SafeAreaView, Text, TextInput, TouchableOpacity} from 'react-native';
import {useStateValue} from './useStateValue';

const SignInScreen = () => {
  const [, dispatch] = useStateValue();
  const [form, setForm] = React.useState({name: '', email: ''});

  const update = (field: string, value: string) => {
    setForm({...form, [field]: value});
  };

  const onLogin = () => {
    dispatch({
      type: 'login',
      payload: {
        user: {
          name: 'Nicholas',
          email: 'nicholas@gmail.com',
        },
      },
    });
  };

  return (
    <SafeAreaView>
      <Text>Sign IN</Text>
      <Text>Email</Text>
      <TextInput
        onChangeText={(value: string) => update('email', value)}
        value={form.email}
      />
      <Text>Name</Text>
      <TextInput
        onChangeText={(value: string) => update('name', value)}
        value={form.name}
      />

      <TouchableOpacity onPress={onLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignInScreen;
