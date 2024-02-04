import { ScrollView, StyleSheet, Text, View, Image, onPress, Button, TextInput,TouchableHighlight } from "react-native";
import Data from "../publice/data.json"
import { StackActions } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';


export default function Home({navigation}) {

  
  const pushInCategory = (category) => {
    navigation.dispatch(StackActions.push("Category", { categoryTitle: category, otherProp: Data.products })
    );
  };

  return (
    <View  style={{ backgroundColor: "#0ff", flex:1 }}>     
          <View style={{ width: '100%', height: 70, borderWidth: 2, borderBottomColor: "black", backgroundColor: '#0ff', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
        <TextInput
          style={{
            paddingLeft: 10,
            width: '90%',
            height: 40,
            borderColor: 'gray',
            borderWidth: 2,
            borderRadius: 20,
          }}
          placeholder={"search"}
        />
        <FontAwesome name="search" size={24} color="black" style={{ marginLeft: -30 }} />
      </View>
 
      <View style={{ justifyContent:'space-around' , width:'100%', gap:20 }} >

<View style={styles.list}>

      <Text style={{fontSize:24, fontWeight:800}} > Meat </Text>
      <ScrollView horizontal={true}     >

      {Data.category.meat.map((item) => {
        return (
          <TouchableHighlight
                key={item.id}
                style={styles.itemStyle}
                onPress={() => pushInCategory(item.category , item.id)}
                underlayColor="#DDDDDD"
              >
                <>
                  <Image
                    source={{ uri: item.image }}
                    style={{ width: "100%", height: 100, borderRadius: 20 }}
                  />
                  <Text>{item.category}</Text>
                </>
              </TouchableHighlight>
        );
      })}
      </ScrollView>
      </View>
      <View style={styles.list }> 
<Text style={{fontSize:24, fontWeight:800}} > Vegetarian </Text>
      <ScrollView horizontal={true} >

      {Data.category.vegetarian.map((item) => {
        return (
          <TouchableHighlight
          key={item.id}
          style={styles.itemStyle}
          onPress={() => pushInCategory(item.category , item.id)}
          underlayColor="#DDDDDD"
        >
          <>
            <Image
              source={{ uri: item.image }}
              style={{ width: "100%", height: 100, borderRadius: 20 }}
            />
            <Text>{item.category}</Text>
          </>
        </TouchableHighlight>
        );
      })}
      </ScrollView>
      </View>
      <View style={styles.list }> 
<Text style={{fontSize:24, fontWeight:800}} > Disertss </Text>
      <ScrollView horizontal={true}   >

      {Data.category.Diserts.map((item) => {
        return (
          <TouchableHighlight
                key={item.id}
                style={styles.itemStyle}
                onPress={() => pushInCategory(item.category , item.id)}
                underlayColor="#DDDDDD"
              >
                <>
                  <Image
                    source={{ uri: item.image }}
                    style={{ width: "100%", height: 100, borderRadius: 20 }}
                  />
                  <Text>{item.category}</Text>
                </>
              </TouchableHighlight>
        );
      })}
      </ScrollView>
      </View>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    backgroundColor: "#0f0f0f",
    marginTop: 55,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom:10
  },
  list:{
    padding:10,

  },
  
  itemStyle:{
    width:150,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    borderBlockColor:'#000',
    borderRadius:20,
    marginLeft:5
  },
footer:{
  marginTop:85,
  height:70,
  width:"100%",
  backgroundColor:'#0f0f0f',
  color:"#fff",

}
});
