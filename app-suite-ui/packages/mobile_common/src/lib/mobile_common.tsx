import React from 'react';
import { View, Text } from 'react-native';
import { common } from '@app_suite/common';

/* eslint-disable-next-line */
export interface MobileCommonProps {}

export function MobileCommon(props: MobileCommonProps) {
  const str = common();
  return (
    <View>
      <Text>Welcome to mobile_common! Message from common library [{str}]</Text>
    </View>
  );
}

export default MobileCommon;
