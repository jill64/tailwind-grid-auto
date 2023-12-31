import { hooks } from '@jill64/npm-demo-layout'
import { init } from '@jill64/sentry-sveltekit-cloudflare/server'

const { onHandle, onError } = init(
  'https://8dfc36ba0b9e8643d4a16bf02132ee75@o4505814639312896.ingest.sentry.io/4506202206109696'
)

export const handle = onHandle(hooks)
export const handleError = onError()
