import {Avatar, Card} from '@rneui/base';
import React from 'react';
import {Pressable} from 'react-native';
import {Text} from 'react-native';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native';
import {Color} from '../../utils/color';
import {IndexStyle} from '../Indexstyle';
import {styles} from './AccountStyle';

function AccountScreen() {
  const data = [
    {
      id: 1,
      name: 'My Profile',
      icon: 'piggy-bank',
      type: 'material-community',
    },
    {
      id: 2,
      name: 'Change Transaction Pin',
      icon: 'user',
      type: 'entypo',
      routes: 'AccountScreen',
    },
    {
      id: 3,
      name: 'Change Security Question',
      icon: 'setting',
      type: 'antdesign',
    },
    {
      id: 4,
      name: 'Set Daily Limit',
      icon: 'mobile-screen-share',
      type: 'materialicons',
    },
    {
      id: 5,
      name: 'Transaction Details',
      icon: 'tool',
      type: 'antdesign',
    },
  ];
  return (
    <SafeAreaView style={[IndexStyle.container]}>
      <FlatList
        style={styles.flatliststyle}
        data={data}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <Pressable style={styles.cardview}>
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

export default AccountScreen;
