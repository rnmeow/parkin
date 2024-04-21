/** @jsx h */
import { h } from 'htm'

export const PageHead = {
  lang: 'en',
  title: "It's Parkin'",
  meta: {
    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    description: 'This website is UNDER DEVELOPMENT.',
  },
  links: [
    { rel: 'preconnect', href: 'https://unpkg.com', crossorigin: '' },
    { rel: 'dns-prefetch', href: 'https://unpkg.com' },
    {
      rel: 'shortcut icon',
      href: 'https://img.rnmeow.com/favicon.svg',
      type: 'image/svg+xml',
    },
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/simpledotcss@2.3.0/simple.min.css',
    },
  ],
}

export const PageBody = (req: Request) => (
  <div>
    <h1>Hello World!</h1>
    <p>
      You're visiting <code>{(new URL(req.url)).hostname}</code>{' '}
      and the domain is owned by <a href='https://nekohuan.cyou'>@rnmeow</a>.
      <br />
      It is currently under development. Feel free to check for updates anytime!
    </p>
    <p>
      The source of this page is available{' '}
      <a href='https://github.com/rnmeow/parkin' title='GitHub repo'>
        here
      </a>.
    </p>
    <footer>
      &copy; {new Date().getFullYear()}, Connor Kuo.
    </footer>
  </div>
)
