import { Text, View,Image, FlatList, StatusBar   } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Product } from '@/types/types'
import { fetchProducts } from '@/services/productService';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
    const [products, setProducts] =useState<Product[]>([]);
    const [loading, setLoading] =useState<boolean>(true);

    useEffect(() => {
        const loadProducts = async () => {
            try {
              const productsData = await fetchProducts();
              setProducts(productsData);
            } catch(err) {
                console.log(err);
            }finally{
                setLoading(false);
            }

        }

        loadProducts();

    }
    ,[])

    if (loading) return <Text> Loading ...</Text>

  return (
    <GestureHandlerRootView>
      <SafeAreaView
        className='w-full h-full'>
        <FlatList 
            horizontal={false}
            columnWrapperStyle={{ justifyContent: 'space-between', marginLeft: 15, marginRight: 15 }}
            numColumns={2} 
            keyExtractor={(item, index) => index.toString()}
            data= {products}

        renderItem={({item}) => (
            <View 
            className='w-[48%] mt-2 bg-white rounded-2xl p-2 flex justify-between'>
                
                <TouchableOpacity>
                <Image 
                    source= {{ uri: item.image_url}}
                    className='w-full h-32 rounded-2xl'
                  />
                  <Text
                    className="text-[#242424] text-lg font-[Sora-SemiBold] ml-1 mt-2"
                  >{item.name}
                  </Text>
                  <Text
                    className="text-[#A2A2A2] text-sm font-[Sora-Regular] ml-1 mt-1"
                  >{item.category}
                  </Text>
                </TouchableOpacity>

            </View>



        )}

        />
        <Text>
        Home
        </Text>
    </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default Home