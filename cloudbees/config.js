import { RoxString } from 'rox-ssr'

export const flags = {
  // So, here is basically what the configuration looks like on the dashboard.
  //   1. `purple-wtf` is the default value defined in the code. It's never used on the dashboard.
  //   2. `red-browser` is set when the `platform` property is `Browser`.
  //   3. `blue-ssr` is set when the `platform` property is `SSR`.
  //   4. `green-default` is set when the `platform` property is `default`.
  testSSR: new RoxString('purple-wtf', ['purple-wtf', 'red-browser', 'blue-ssr', 'green-default']),
}
