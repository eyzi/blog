const fs = require('fs')
const path = require('path')
const { Feed } = require('feed')
const { getPosts } = require('./genMetadata')
const url = `https://blog.eyzi.dev`

const feed = new Feed({
  title: 'Eyzi\'s Blog',
  description: 'A collection of bad opinion',
  id: url,
  link: url,
  language: 'en',
  image: 'https://cdn.eyzi.dev/logo.png',
  favicon: `${url}/favicon.ico`,
  copyright:
    'Copyright &copy; 2015-present, Eyzi'
})

getPosts(true).forEach((post) => {
  const file = path.resolve(__dirname, `dist${post.href}`)
  const rendered = fs.readFileSync(file, 'utf-8')
  const content = rendered.match(
    /<div [^<>]+?class="prose[^<>]+?>([\s\S]*)<\/div><\/div><footer/
  )

  feed.addItem({
    title: post.title,
    id: `${url}${post.href}`,
    link: `${url}${post.href}`,
    description: post.excerpt,
    content: content[1],
    author: [
      {
        name: post.data.author,
        link: post.data.twitter
          ? `https://twitter.com/${post.data.twitter}`
          : undefined
      }
    ],
    date: post.data.date
  })
})

fs.writeFileSync(path.resolve(__dirname, 'dist/feed.rss'), feed.rss2())
