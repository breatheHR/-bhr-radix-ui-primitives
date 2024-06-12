'use client';

import * as React from 'react';
import { Portal } from '@breatheHR/react-portal';

export const CustomPortalContainer = () => {
  const [container, setContainer] = React.useState<Element | null>(null);
  return (
    <div>
      <em ref={setContainer} />
      <Portal container={container}>
        <span>This content is rendered in a custom container</span>
      </Portal>
    </div>
  );
};
