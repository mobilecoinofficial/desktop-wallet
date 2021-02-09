import { Empty } from 'google-protobuf/google/protobuf/empty_pb';

import type { MobilecoindClient } from '../client';

const generateEntropy = async (client: MobilecoindClient) => {
  const GenerateEntropyRequestInstance = new Empty();

  const GenerateEntropyResponse = await client.generateEntropy(GenerateEntropyRequestInstance);
  return GenerateEntropyResponse;
};

export default generateEntropy;
