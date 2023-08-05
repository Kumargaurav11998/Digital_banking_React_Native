import {Overlay} from '@rneui/themed';
import React, {useState} from 'react';
import {Text} from 'react-native';
import {Dimensions} from 'react-native';
import {
  SafeAreaView,
  Linking,
  TouchableHighlight,
  PermissionsAndroid,
  Platform,
  View,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import TouchComponent from '../../Component/TouchCompoent';
import {Color} from '../../utils/color';
import {styles} from '../home/Homestyle';
function ScanScreen(props) {
  const [opneScanner, setOpneScanner] = useState(true);
  const [visible, setVisible] = useState(false);
  const [upi, setupi] = useState('');
  const toggleOverlay = back => {
    setVisible(!visible);
    if (back) {
      if (back == 'show') {
        setVisible(true);
      } else {
        setVisible(false);
        props.navigation.pop();
      }
    }
  };
  const onSuccess = e => {
    console.log(e.data.slice());
    if (e) {
      setupi(e.data.slice(13, 29));
      setOpneScanner(false);
      toggleOverlay('show');
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      {opneScanner ? (
        <View style={{flex: 1}}>
          <QRCodeScanner
            onRead={onSuccess}
            reactivate={true}
            showMarker={true}
            topContent={
              <Text style={styles.centerText}>
                Please move your camera {'\n'} over the QR Code
              </Text>
            }
          />
        </View>
      ) : (
        <Overlay
          isVisible={visible}
          onBackdropPress={toggleOverlay}
          overlayStyle={styles.overlayL}>
          <View>
            <Text style={styles.welcometxtx}>{upi}</Text>
            <TouchComponent
              title="Pay"
              backgroundColor={Color.purpul}
              paddingHorizontal={'1%'}
              paddingVertical={'3%'}
              borderRadius={10}
              marginTop={'5%'}
              width={Dimensions.get('screen').width / 3}
              press={() => toggleOverlay('back')}
              titlecolor={Color.white}
            />
          </View>
        </Overlay>
      )}
    </SafeAreaView>
  );
}

export default ScanScreen;
