import { Rox } from 'rox-ssr'
import { flags } from './config'

// This module is loaded once by Nuxt when the server starts.
// See https://nuxtjs.org/docs/2.x/directory-structure/modules
export default async function CloudbeesModule() {
  Rox.register(flags)

  await Rox.setup(process.env.CLOUDBEES_KEY, {
    // This `console.log` shows that the configuration is properly fetched, and contains our rules.
    // It does not include any error, and it's requested regularly (as expected).
    configurationFetchedHandler: console.log,

    // The first time this `console.log` is called (when the server starts), it outputs correct data.
    // `{ name: 'testSSR', value: 'blue-ssr', targeting: true } { server: true }`
    //
    // However, the second times it's called (because of `index.vue`), it logs unexpected stuff.
    // `{ name: undefined, value: 'purple-wtf', targeting: false } undefined`.
    //
    // 💡 This `name: undefined` is super weird to me. Why would the flag name disapear?
    impressionHandler: console.log,
  })

  // This `console.log` shows that the testSSR flag is properly set when the server starts. We get
  // `{ testSSR: 'blue-ssr' }` in the terminal, which is normal since the platform is `SSR`.
  console.log({ testSSR: flags.testSSR.getValue() })
}
