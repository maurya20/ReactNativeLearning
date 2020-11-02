import React,{ useEffect, useState }  from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';



const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


  return (
    <View style={styles.container}>
      <Text style={{color:"red",textAlign:"center",fontSize:60,backgroundColor:"yellow"}}>Posts App</Text>
      <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={({item}) => (
        <View>
        <Text style={styles.item}>❝ {item.title} ❞</Text>
        <Text style={styles.postBody}>{item.body}</Text>
        </View>
        )}
      />
    </View>
  );
  }
  
  const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 38,
      color:"blue"
    },
  postBody:{
    padding:10,
    fontSize:20,
    color:'#1B3D6C'
  }
  });
  


export default App