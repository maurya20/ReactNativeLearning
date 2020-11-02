import React from 'react';
import { Image, ScrollView, Text } from 'react-native';

const logo = {
  uri: 'https://source.unsplash.com/random',
  width: 364,
  height: 264
};

export default App = () => (
  <ScrollView style={{ paddingTop: 26 }}>
    <Text style={{ fontSize: 26 }}>Your Galllary</Text>
    <Image 
    source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png'}} 
    style={{width: 400, height: 400}} 
/>
    <Image source={logo} />
    <Image 
    source={{uri: 'https://picsum.photos/200/300'}} 
    style={{width: 400, height: 400}} 
/>
<Image 
    source={{uri: 'https://picsum.photos/200/301'}} 
    style={{width: 400, height: 400}} 
/>
<Image 
    source={{uri: 'https://picsum.photos/201/300'}} 
    style={{width: 400, height: 400}} 
/>
    <Text style={{ fontSize: 96 }}>If you like</Text>
    <Image 
    source={{uri: 'https://picsum.photos/200/299'}} 
    style={{width: 400, height: 400}} 
/>
<Image 
    source={{uri: 'https://source.unsplash.com/random'}} 
    style={{width: 400, height: 400}} 
/>
    <Image source={logo} />
    <Text style={{ fontSize: 96 }}>Scrolling down</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 96 }}>What's the best</Text>
    <Image source={logo} />
    <Image 
    source={{uri: 'https://picsum.photos/200/300'}} 
    style={{width: 400, height: 400}} 
/>
<Image 
    source={{uri: 'https://picsum.photos/200/301'}} 
    style={{width: 400, height: 400}} 
/>
<Image 
    source={{uri: 'https://picsum.photos/201/300'}} 
    style={{width: 400, height: 400}} 
/>
    <Text style={{ fontSize: 96 }}>If you like</Text>
    <Image 
    source={{uri: 'https://picsum.photos/200/299'}} 
    style={{width: 400, height: 400}} 
/>
<Image 
    source={{uri: 'https://source.unsplash.com/random'}} 
    style={{width: 400, height: 400}} 
/>
    <Text style={{ fontSize: 96 }}>Framework around?</Text>
    <Image 
    source={{uri: 'https://picsum.photos/200/300'}} 
    style={{width: 400, height: 400}} 
/>
<Image 
    source={{uri: 'https://picsum.photos/200/301'}} 
    style={{width: 400, height: 400}} 
/>
<Image 
    source={{uri: 'https://picsum.photos/201/300'}} 
    style={{width: 400, height: 400}} 
/>
    <Text style={{ fontSize: 96 }}>If you like</Text>
    <Image 
    source={{uri: 'https://picsum.photos/200/299'}} 
    style={{width: 400, height: 400}} 
/>
<Image 
    source={{uri: 'https://source.unsplash.com/random'}} 
    style={{width: 400, height: 400}} 
/>
    <Text style={{ fontSize: 50,paddingBottom:30 }}>React Native</Text>
  </ScrollView>
);