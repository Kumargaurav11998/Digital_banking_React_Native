import {Avatar, Card} from '@rneui/base';
import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {FlatList} from 'react-native';
import {Pressable} from 'react-native';
import {Text} from 'react-native';
import {SafeAreaView, View} from 'react-native';
import {Color} from '../../utils/color';
import {IndexStyle} from '../Indexstyle';
import {styles} from './Homestyle';

function HomeScreen(props) {
  const data = [
    {
      id: 0,
      name: 'Scan & Pay',
      icon: 'scan1',
      type: 'antdesign',
      routes: 'ScanScreen',
    },
    {
      id: 1,
      name: 'Deposit',
      icon: 'piggy-bank',
      type: 'material-community',
    },
    {
      id: 2,
      name: 'Accont',
      icon: 'user',
      type: 'entypo',
      routes: 'AccountScreen',
    },
    {
      id: 3,
      name: 'Service',
      icon: 'setting',
      type: 'antdesign',
    },
    {
      id: 4,
      name: 'Transfer',
      icon: 'mobile-screen-share',
      type: 'materialicons',
    },
    {
      id: 5,
      name: 'Tool',
      icon: 'tool',
      type: 'antdesign',
    },
    {
      id: 6,
      name: 'Card',
      icon: 'creditcard',
      type: 'antdesign',
    },
    {
      id: 7,
      name: 'Contact',
      icon: 'contacts',
      type: 'antdesign',
    },
    {
      id: 8,
      name: 'Stocks',
      icon: 'areachart',
      type: 'antdesign',
    },
    {
      id: 9,
      name: 'Pay Bill',
      icon: 'send',
      type: 'feather',
    },
    {
      id: 10,
      name: 'Buy AirTime',
      icon: 'air',
      type: 'entypo',
    },
  ];

  const [balance, setbalance] = useState(false);

  const QRScan = () => {};
  return (
    <SafeAreaView style={[IndexStyle.container]}>
      <StatusBar backgroundColor={Color.purpul} />
      <View style={[styles.header, IndexStyle.row_justify]}>
        <Avatar
          onPress={() => props.navigation.openDrawer()}
          icon={{name: 'bars', type: 'antdesign', color: Color.white}}
          containerStyle={{paddingLeft: '5%'}}
        />
        <Text style={styles.headingtxt}>Digital Bank </Text>
        <Avatar
          icon={{name: 'poweroff', type: 'antdesign', color: Color.white}}
        />
      </View>

      <FlatList
        data={data}
        numColumns={2}
        style={styles.flatliststyle}
        ListHeaderComponent={
          <>
            <View style={[IndexStyle.flexrow, IndexStyle.margin5]}>
              <Text style={[styles.welcometxtx]}>Welcome</Text>
              <Text style={[styles.title]}>Mr. Gaurav</Text>
            </View>

            <Card containerStyle={styles.topcard}>
              <Text style={[styles.topcardtxt]}>Available Balance </Text>
              <Text
                onPress={() => setbalance(!balance)}
                style={[
                  styles.topcardtxt,
                  {color: Color.purpul, fontSize: 18, fontWeight: '500'},
                ]}>
                {balance ? 'KSh' + 1500 : 'View Balance'}
              </Text>
              <View style={[IndexStyle.row_justify, IndexStyle.padTop]}>
                <Text style={[styles.txtcard]}>********789</Text>
                <Text style={[styles.txtcard]}>Saving Account</Text>
              </View>
            </Card>
          </>
        }
        renderItem={({item}) => {
          return (
            <Pressable
              style={styles.cardview}
              onPress={() => {
                props.navigation.push(item.routes);
              }}>
              <Card containerStyle={styles.flatlistcard}>
                <Avatar
                  containerStyle={styles.avtarstyle}
                  icon={{
                    name: item.icon,
                    type: item.type,
                    color: Color.purpul,
                    size: 25,
                  }}
                />
                <Text style={styles.txtcard}>{item.name}</Text>
              </Card>
            </Pressable>
          );
        }}
      />
    </SafeAreaView>
  );
}
export default HomeScreen;
