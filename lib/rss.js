const fs = require("fs")
const RSS = require("rss")
const path = require("path")
const matter = require("gray-matter")
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

const POSTS_PATH = path.join(process.cwd(), "/data/posts")

const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  .filter(path => /\.mdx?$/.test(path))

const posts = postFilePaths.map(filePath => {
  const source = fs.readFileSync(path.join(POSTS_PATH, filePath))

  const { data, content } = matter(source)

  return {
    data,
    filePath,
    content,
  }
})

const feed = new RSS({
  title: "Shababul Alam",
  site_url: "https://shababulalam.com",
  feed_url: "https://shababulalam.com/feed.xml",
  image_url: "https://shababulalam.com/images/meta/og.png",
  language: "en",
})

posts.forEach(post => {
  const url = `https://shababulalam.com/posts/${post.filePath.replace(
    /\.mdx?$/,
    ""
  )}`

  const description = `${post.data.subtitle} <a href="${url}"> <strong>Full post →</strong></a>`

  feed.item({
    title: post.data.title,
    description: description,
    date: new Date(post.data.modified),
    author: "Shababul Alam",
    url: url,
  })
})

const rss = feed.xml({ indent: true })
fs.writeFileSync("./public/feed.xml", rss)
