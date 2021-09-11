import React from 'react';
import type { FC } from 'react';

import type { SendMobConfirmationProps } from './SendMobConfirmation.d';

const SendMobConfirmation: FC<SendMobConfirmationProps> = ({
  something,
}: SendMobConfirmationProps) => <div>{something}</div>;

export default SendMobConfirmation;
export { SendMobConfirmation };
