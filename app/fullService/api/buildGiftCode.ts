import type { GiftCode } from '../../types/GiftCode.d';
import type { StringHex, StringB58, StringUInt64 } from '../../types/SpecialStrings.d';
import type { TxProposal, OutputTxo } from '../../types/TxProposal';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

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

type BuildGiftCodeResponse = {
  giftCode: GiftCode;
  giftCodeB58: StringB58;
  txProposal: TxProposal;
};

const buildGiftCode = async ({
  accountId,
  fee,
  inputTxoIds,
  maxSpendableValue,
  tombstoneBlock,
  valuePmob,
}: BuildGiftCodeParams): Promise<BuildGiftCodeResult> => {
  const { result, error }: AxiosFullServiceResponse<BuildGiftCodeResponse> = await axiosFullService(
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

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  }

  const { txProposal, giftCode, giftCodeB58 } = result;

  // TODO fix type, right now it just matches what the component is expecting
  // const totalValueConfirmation = txProposal.outlayList
  //   .map((outlay) => BigInt(outlay.value))
  //   .reduce((acc, cur) => acc + cur, BigInt(0));
  const totalValueConfirmation = [...txProposal.changeTxos, ...txProposal.payloadTxos]
    .map((txo: OutputTxo) => BigInt(txo.amount.value))
    .reduce((acc: bigint, cur: bigint) => acc + cur, BigInt(0));

  // const feeConfirmation = BigInt(txProposal.fee);
  const feeConfirmation = BigInt(txProposal.feeAmount.value);

  return {
    feeConfirmation,
    giftCode,
    giftCodeB58,
    totalValueConfirmation,
    txProposal,
  };
};

export default buildGiftCode;
