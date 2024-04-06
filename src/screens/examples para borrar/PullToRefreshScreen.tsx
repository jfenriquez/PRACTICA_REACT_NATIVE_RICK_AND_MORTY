import React, {useState} from 'react';
import {FlatList, ScrollView, View, RefreshControl} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';

const PullToRefreshScreen = () => {
  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState('');
  const onRefresh = () => {
    setRefresh(true);
    setTimeout(() => {
      console.log('terminamos');
      setRefresh(false);
      setData('hols');
    }, 1500);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refresh}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor="#1a2f2e"
          colors={['white', 'red', 'orange']}
          title="refreshing"
        />
      }>
      <View>
        <HeaderTitle title="pull to refresh" />
        <HeaderTitle title={data} />
      </View>
    </ScrollView>
  );
};

export default PullToRefreshScreen;
