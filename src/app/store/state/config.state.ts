import { Config } from 'src/app/models/config.model';

export interface ConfigState {
  config: Config | null;
}

export const initialConfigState: ConfigState = {
  config: null
};
