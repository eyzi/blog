// @ts-check
require('./genMetadata').watchPosts()

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'Eyzi\'s Blog',
  description: 'A collection of bad opinions',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  ]
}
