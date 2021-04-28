import { SettingsOptionsItemProps } from '../SettingsOptionsItem.view/SettingsOptionsItem.d';

export interface SettingsOptionsListProps {
  settingOptionsList: SettingsOptionsItemProps[];
  handleOnClick: (path: string) => void;
}
