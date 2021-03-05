import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';
import { SnackbarProvider } from 'notistack';

import HistoryView from './HistoryView';

export default {
  component: HistoryView,
  title: 'History/View',
};

const Template: Story<ComponentProps<typeof HistoryView>> = (args) => <HistoryView {...args} />;

export const Primary = Template.bind({});

Primary.decorators = [
  (StoryComponent) => (
    <SnackbarProvider>
      <StoryComponent />
    </SnackbarProvider>
  ),
];

Primary.args = {};
