import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import ListItem from './components/ListItem';

import { SAMPLE_DATA } from './assets/data/sampleData';

export default function App() {
  return (
    <View className="flex-1 bg-white">
      <View className="mt-20 px-8 mb-2">
        <Text className="font-bold text-xl">Markets</Text>
      </View>
      <View className="border-[#d3d3d3] border-b-2 w-[90%] m-4" />
      <ListItem
        name={SAMPLE_DATA[0].name}
        symbol={SAMPLE_DATA[0].symbol}
        currentPrice={SAMPLE_DATA[0].current_price}
        priceChangePercentage7d={
          SAMPLE_DATA[0].price_change_percentage_7d_in_currency
        }
        logoUrl={SAMPLE_DATA[0].image}
      />
      <StatusBar style="auto" />
    </View>
  );
}
