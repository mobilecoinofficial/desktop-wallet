import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import AccountCard from './AccountCard.component';

export default {
  component: AccountCard,
  title: 'Components/AccountCard',
};

const Template: Story<ComponentProps<typeof AccountCard>> = (args) => <AccountCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  account: {
    b58Code:
      '4kYbUUr4NuqWH1zAd8FbHEg7f51LdRci7uA8SYEMzmrRmAuXxfNpEaqQFKLxL3Q4Wu6oXozuRJy6Rk13xXUoWDnmuqhbZ8ok24qBofpPeYy',
    balance: '0.45',
    mobUrl: '',
    name: 'Storybook',
  },
  className: '',
  isGift: false,
};
