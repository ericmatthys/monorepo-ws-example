import { isDev } from './isDev';

export function assert(condition: boolean, message: string): boolean {
  if (condition) {
    return true;
  }

  if (isDev()) {
    throw new Error(message);
  }

  return false;
}
