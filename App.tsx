import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList, SafeAreaView } from 'react-native';

import ListItem from './components/ListItem';

import { SAMPLE_DATA } from './assets/data/sampleData';

const ListHeader = () => {
  return (
    <>
      <View className="mt-20 px-8 mb-2">
        <Text className="font-bold text-xl">Markets</Text>
      </View>
      <View className="border-[#d3d3d3] border-b-2 w-[90%] m-4" />
    </>
  );
};

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={SAMPLE_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            name={item.name}
            symbol={item.symbol}
            currentPrice={item.current_price}
            priceChangePercentage7d={
              item.price_change_percentage_7d_in_currency
            }
            logoUrl={item.image}
          />
        )}
        ListHeaderComponent={<ListHeader />}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
