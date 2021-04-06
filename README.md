# reproduction-cloudbees-issue

Here is a very basic reproduction of the issue with `rox-ssr`.

## Repository setup

```bash
# Install dependencies.
$ yarn install

# Create a `.env` file, at the root.
$ cp .env.example .env

# Remember to update the `.env` file with the propery key.
```

## Running the application

```bash
$ yarn dev
```

## Steps to reproduce

```bash
# Run the application.
$ yarn dev

# Look for the terminal outputs. You should see three logs:
#   1. The one from `configurationFetchedHandler`.
#   2. The one from `impressionHandler`.
#   3. And finally, the one from `console.log` in `cloudbees/nuxt.js`.

# Now, open http://localhost:3000.
# The page visually renders `Hello purple-wtf`.
$ open localhost:3000

# Open the page source code (to read what the server rendered).
# The page also includes `Hello purple-wtf`.
$ open view-source:http://localhost:3000

# Now, go back to the terminal. You should see another log from `impressionHandler`.
```

## Expected result

Because of our configuration on the dashboard, and because the `rox-ssr` library sets the `platform`
property to `SSR`, we expect `Hello blue-ssr` to be returned by the server.

So, when browsing the page source code (`view-source:http://localhost:3000`), we should _not_ read
`Hello purple-wtf`, but `Hello blue-ssr` instead.

Note that I'm _not_ talking about what's _visually_ rendered here. To keep this reproduction as
simple as possible, I've not included any client side code.
