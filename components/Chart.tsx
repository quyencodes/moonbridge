import { View, Text, Image } from 'react-native';

export default function Chart({
  currentPrice,
  symbol,
  logoUrl,
  name,
  priceChangePercentage7d,
  sparkline,
}: Props) {
  return (
    <View className="m-8">
      {/* Titles */}
      <View>
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
            {priceChangePercentage7d.toFixed(2)}%
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
    price: [{ x: number; y: number }];
  };
}
