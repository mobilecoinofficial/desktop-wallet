import { UpdatePinService } from '../../../redux/services/updatePin';

export interface OnboardingModalProps {
  confirmEntropyKnown: () => void;
  isEntropyKnown: boolean;
  isPinRequired: boolean;
  updatePin: UpdatePinService;
}
