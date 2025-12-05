import React from 'react';
import { View, Text } from 'react-native';
import { common } from '@app_suite/common';

/* eslint-disable-next-line */
export interface MobileCommonProps {
 str : string;
}

export function MobileCommon(props: MobileCommonProps) {
  const message = common();
  return (
    <View>
      <Text>Welcome to mobile_common! Message from App1 Module: {props.str}, Message from common library [{message}]</Text>
    </View>
  );
}

export default MobileCommon;
