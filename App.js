import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 30}}>
      <TextInput
        style={{marginTop: 40,fontSize:30,borderBottomEndRadius:5}}
        placeholder="Type here to translate!"
        onChangeText={(e) => setText(e)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text}
      </Text>
    </View>
  );
}

export default PizzaTranslator;