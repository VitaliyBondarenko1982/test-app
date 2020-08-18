import { Control, Validation } from '../utils/interfaces';

export function createControl(config: Control, validation: Validation): Control {
  return {
    ...config,
    validation,
    valid: !validation,
  };
}
