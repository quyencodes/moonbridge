import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 bg-white">
      <View className="mt-20 px-8 mb-2">
        <Text className="font-bold text-xl">Markets</Text>
      </View>
      <View className="border-[#d3d3d3] border-b-2 w-[90%] m-4" />
      <StatusBar style="auto" />
    </View>
  );
}
