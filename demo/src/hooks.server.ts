import { serverInit } from '@jill64/sentry-sveltekit-cloudflare'

const { onHandle, onError } = serverInit(
  'https://8dfc36ba0b9e8643d4a16bf02132ee75@o4505814639312896.ingest.sentry.io/4506202206109696'
)

export const handle = onHandle()
export const handleError = onError()
