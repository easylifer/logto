import { MessageTypes } from '@logto/connector-kit';
import { InteractionEvent } from '@logto/schemas';
import { createMockUtils } from '@logto/shared/esm';

import { createMockLogContext } from '#src/test-utils/koa-audit-log.js';

import type { SendPasscodePayload } from '../types/index.js';

const { jest } = import.meta;
const { mockEsmWithActual } = createMockUtils(jest);

const passcode = {
  createPasscode: jest.fn(() => ({})),
  sendPasscode: jest.fn().mockResolvedValue({ dbEntry: { id: 'foo' } }),
};

await mockEsmWithActual('#src/libraries/passcode.js', () => passcode);

const { sendPasscodeToIdentifier } = await import('./passcode-validation.js');

const sendPasscodeTestCase = [
  {
    payload: { email: 'email', event: InteractionEvent.SignIn },
    createPasscodeParams: [MessageTypes.SignIn, { email: 'email' }],
  },
  {
    payload: { email: 'email', event: InteractionEvent.Register },
    createPasscodeParams: [MessageTypes.Register, { email: 'email' }],
  },
  {
    payload: { email: 'email', event: InteractionEvent.ForgotPassword },
    createPasscodeParams: [MessageTypes.ForgotPassword, { email: 'email' }],
  },
  {
    payload: { phone: 'phone', event: InteractionEvent.SignIn },
    createPasscodeParams: [MessageTypes.SignIn, { phone: 'phone' }],
  },
  {
    payload: { phone: 'phone', event: InteractionEvent.Register },
    createPasscodeParams: [MessageTypes.Register, { phone: 'phone' }],
  },
  {
    payload: { phone: 'phone', event: InteractionEvent.ForgotPassword },
    createPasscodeParams: [MessageTypes.ForgotPassword, { phone: 'phone' }],
  },
];

describe('passcode-validation utils', () => {
  const log = createMockLogContext();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it.each(sendPasscodeTestCase)(
    'send passcode successfully',
    async ({ payload, createPasscodeParams }) => {
      await sendPasscodeToIdentifier(payload as SendPasscodePayload, 'jti', log.createLog);
      expect(passcode.createPasscode).toBeCalledWith('jti', ...createPasscodeParams);
      expect(passcode.sendPasscode).toBeCalled();
    }
  );
});
