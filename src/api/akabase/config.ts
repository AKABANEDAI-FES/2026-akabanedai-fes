import { env } from 'cloudflare:workers'

import type { CreateClientConfig } from './generated/client.gen'

export const createClientConfig: CreateClientConfig = (config) => ({
  ...config,
  baseUrl: 'https://akabase.akabanedai-fes.com/api/v1',
  auth: () => env.AKABASE_API_KEY,
})
