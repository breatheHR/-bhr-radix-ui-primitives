import * as React from 'react';
import { AccessibleIcon } from '@breatheHR/react-accessible-icon';

export default function Page() {
  return (
    <button type="button">
      <AccessibleIcon label="Close">
        <span>X</span>
      </AccessibleIcon>
    </button>
  );
}
