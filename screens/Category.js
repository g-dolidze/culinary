import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

function Category({ route, navigation }) {
  const { categoryTitle, otherProp } = route.params;

  const handleItemPress = ({itemId}) => {
    // Navigate to the "Resept" screen with the item ID as a prop
    navigation.navigate('Resept', { itemId });
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 15, justifyContent: 'space-evenly' }}>
        {otherProp.map((product) => (
          product.category === categoryTitle ? (
            <TouchableOpacity
            style={{ width: '40%', borderWidth: 1, borderColor: 'grey', padding: 8 }} 
            onPress={() => handleItemPress(product.id)}
              key={product.id} 
            >
              <View style={{ marginBottom: 8 }}>
                <Image
                  source={{ uri: product.image }}
                  style={{ width: '100%', height: 80, borderRadius: 20 }}
                />
              </View>
              <View>
                <Text>{product.category}</Text>
                <Text>{product.id}</Text>
              </View>
            </TouchableOpacity>
          ) : null
        ))}
      </View>
    </View>
  );
}

export default Category;
