import {Avatar} from '@rneui/base';
import React from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import {DrawerItem} from '../../Helper/CustumDrawerItem';
import {IndexStyle} from '../../screen/Indexstyle';

import {styles} from './customDrawerStyle';
function CustomDrawer({...Props}) {
  const move = async item => {
    // item.route
    //   ? Props.navigation.replace(item.route)
    //   : Props.navigation.navigate(item.route);

    Props.navigation.navigate(item.route);
  };
  return (
    <>
      <View style={[IndexStyle.container, styles.constner]}>
        {/* <View
          style={[
            IndexStyle.FlexWithJustify,
            IndexStyle.spacetop,
            {width: '90%', alignSelf: 'center'},
          ]}>
          <Avatar
            size={40}
            rounded
            source={require('../../../Assets/Photos/user.png')}
          />
          <Text style={[styles.usernametxt]}>Hi, Oliva</Text>
        </View> */}

        <FlatList
          showsVerticalScrollIndicator={false}
          style={{marginTop: '5%'}}
          data={DrawerItem}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => move(item)}>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: '10%',
                  color: '#0f11bc',
                  marginTop: '10%',
                }}>
                <Image source={item.icon} style={[styles.iconimage]}></Image>
                <Text style={[styles.textstyle]}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
          ListFooterComponent={
            <Text style={[styles.versiontextstyle]}>Version : 0.0.1</Text>
          }
          ListFooterComponentStyle={{
            marginTop: '10%',
          }}
        />
      </View>
    </>
  );
}
export default CustomDrawer;
