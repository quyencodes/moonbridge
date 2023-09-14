import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { useState, useEffect, useRef, useMemo } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { getMarketData } from './services/cryptoService';

import ListItem from './components/ListItem';
import Chart from './components/Chart';

import { SAMPLE_DATA } from './assets/data/sampleData';
import { SampleDataType } from './utils/types';

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
  const [data, setData] = useState<SampleDataType[]>([]);
  const [selectedCoinData, setSelectedCoinData] = useState<SampleDataType>({});

  useEffect(() => {
    const fetchMarketData = async () => {
      let marketData: SampleDataType[] | undefined = await getMarketData();
      // console.log('this is the market data:', marketData);
      setData(marketData);
    };
    fetchMarketData();
  }, []);

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['50%'], []);

  const openModal = (item: SampleDataType): void => {
    setSelectedCoinData(item);
    bottomSheetModalRef.current?.present();
  };

  return (
    <GestureHandlerRootView className="flex-1">
      <BottomSheetModalProvider style={styles.modalProvider}>
        <SafeAreaView className="flex-1 bg-white">
          {data && (
            <FlatList
              data={data}
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
                  onPress={() => openModal(item)}
                />
              )}
              ListHeaderComponent={<ListHeader />}
            />
          )}
          <StatusBar style="auto" />
        </SafeAreaView>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          style={styles.bottomSheet}
        >
          {selectedCoinData && (
            <Chart
              currentPrice={selectedCoinData.current_price}
              symbol={selectedCoinData.symbol}
              logoUrl={selectedCoinData.image}
              name={selectedCoinData.name}
              priceChangePercentage7d={
                selectedCoinData.price_change_percentage_7d_in_currency
              }
              sparkline={selectedCoinData.sparkline_in_7d}
            />
          )}
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  modalProvider: {
    backgroundColor: '#ffffff',
  },
  bottomSheet: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
