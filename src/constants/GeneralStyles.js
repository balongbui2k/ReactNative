import React from 'react';
import {StatusBar, View} from 'react-native';
import Separator from './../components/CustomHomeMenu/Separator';

export const hitSlop = {top: 50, bottom: 50, left: 50, right: 50};
//

export default CustomStatusBar = () => {
  return (
    <View>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Separator height={StatusBar.currentHeight} />
    </View>
  );
};
