import type GiftCode from '../../types/GiftCode';
import type { StringHex, StringB58, StringUInt64 } from '../../types/SpecialStrings';
import type TxProposal from '../../types/TxProposal';
import axiosFullService from '../axiosFullService';

const BUILD_GIFT_CODE_METHOD = 'build_gift_code';

export type BuildGiftCodeParams = {
  accountId: StringHex;
  fee?: StringUInt64;
  inputTxoIds?: StringHex[];
  maxSpendableValue?: StringUInt64;
  memo?: string;
  tombstoneBlock?: StringUInt64;
  valuePmob: StringUInt64;
};

export type BuildGiftCodeResult = {
  feeConfirmation: bigint;
  giftCode: GiftCode;
  giftCodeB58: StringB58;
  totalValueConfirmation: bigint;
  txProposal: TxProposal;
};

type AxiosFullServiceResponse = {
  error: any;
  result: {
    giftCode: GiftCode;
    giftCodeB58: StringB58;
    txProposal: TxProposal;
  };
};

const buildGiftCode = async ({
  accountId,
  fee,
  inputTxoIds,
  maxSpendableValue,
  tombstoneBlock,
  valuePmob,
}: BuildGiftCodeParams): Promise<BuildGiftCodeResult> => {
  const { result, error }: AxiosFullServiceResponse = await axiosFullService(
    BUILD_GIFT_CODE_METHOD,
    {
      accountId,
      fee,
      inputTxoIds,
      maxSpendableValue,
      tombstoneBlock,
      valuePmob,
    }
  );
  const { txProposal, giftCode, giftCodeB58 } = result;

  // TODO fix type, right now it just matches what the component is expecting
  const totalValueConfirmation = txProposal.outlayList
    .map((outlay) => {
      return BigInt(outlay.value);
    })
    .reduce((acc, cur) => {
      return acc + cur;
    });

  const feeConfirmation = BigInt(txProposal.fee);

  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return {
      feeConfirmation,
      giftCode,
      giftCodeB58,
      totalValueConfirmation,
      txProposal,
    };
  }
};

export default buildGiftCode;
