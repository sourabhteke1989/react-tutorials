import React from 'react';
import { render } from '@testing-library/react-native';
import MobileCommon from './mobile_common';

describe('MobileCommon', () => {
  it('should render successfully', () => {
    const { root } = render(<MobileCommon />);
    expect(root).toBeTruthy();
  });
});
