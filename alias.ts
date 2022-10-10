import { resolve } from 'path';

const r = (p: string) => resolve(__dirname, p);

export const alias: Record<string, string> = {
  '@pages': r('src/pages'),
  '@components': r('src/components'),
  '@contexts': r('src/contexts'),
  '@hooks': r('src/hooks'),
  '@utils': r('src/utils'),
  '@styles': r('src/styles'),
  '@assets': r('src/assets'),
  '@interfaces': r('src/interfaces'),
  '@lib': r('src/lib'),
  '@': r('src'),
};
