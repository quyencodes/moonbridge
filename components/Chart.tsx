import { View, Text, Image, Dimensions } from 'react-native';
import { Sparkline7dType } from '../utils/types/index';
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
} from '@rainbow-me/animated-charts';
import { useSharedValue } from 'react-native-reanimated';
import { useEffect } from 'react';

const screenWidth = Dimensions.get('window').width;

export default function Chart({
  currentPrice,
  symbol,
  logoUrl,
  name,
  priceChangePercentage7d,
  sparkline,
}: Props) {
  useEffect(() => {}, []);

  return (
    <View className="m-8">
      {/* Titles */}
      <View className="mx-4">
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center">
            <Image
              className="w-[24px] h-[24px] mr-2"
              source={{ uri: logoUrl }}
            />
            <Text className="text-[#7d7d7d] text-sm">
              {name} ({symbol.toUpperCase()})
            </Text>
          </View>
          <Text className="">7d</Text>
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="text-lg text-black font-bold">
            ${currentPrice.toLocaleString('en-US', { currency: 'USD' })}
          </Text>
          <Text
            className={
              priceChangePercentage7d > 0
                ? 'text-md text-green-600'
                : 'text-md text-red-600'
            }
          >
            {priceChangePercentage7d?.toFixed(2)}%
          </Text>
        </View>
      </View>
    </View>
  );
}

interface Props {
  currentPrice: number;
  symbol: string;
  logoUrl: string;
  name: string;
  priceChangePercentage7d: number;
  sparkline: {
    price: Array<Sparkline7dType>;
  };
}
