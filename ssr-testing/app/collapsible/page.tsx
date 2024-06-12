import * as React from 'react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@breatheHR/react-collapsible';

export default function Page() {
  return (
    <Collapsible>
      <CollapsibleTrigger>Trigger</CollapsibleTrigger>
      <CollapsibleContent>Content</CollapsibleContent>
    </Collapsible>
  );
}
