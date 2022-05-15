import { PublicKey } from '@solana/web3.js';

export * from './gem-bank';
export * from './gem-farm';
export * from './gem-common';

export const GEM_BANK_PROG_ID = new PublicKey(
  'bankjA5WgfjnMAavUgKAuj9ZAV6Xtbu1XiawYNdxwZo'
);
export const GEM_FARM_PROG_ID = new PublicKey(
  'farmfeCevbPq6aYrAB3p6m48Pm8to8XPyxPcfRRqaPq'
);
