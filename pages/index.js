import Layout from "@/components/layout"
import SEO from "@/components/seo"
import Section from "@/components/section"
import fs from "fs"
import matter from "gray-matter"
import path from "path"
import { postFilePaths, POSTS_PATH } from "../lib/mdxUtils"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <SEO />
        <div className="grid max-w-full gap-16 auto-rows-auto">
          <div>
            <p className="mt-8 md:mt-4">
              I'm currently shaping the web applications at DocTime and crafting
              next-generation tele-health solutions with latest tech trends. I
              focus on orchestrating technology migrations, driving innovation,
              and ensuring the highest level of software quality. <br></br>
              <br></br> If you'd like to see my portfolio or work with me,
              please{" "}
              <a
                className="text-tertiary dark:text-darkTertiary"
                href="mailto:gavin@shababulalam.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                get in touch
              </a>
              .
            </p>
          </div>
          <Section title="Connect">
            <div className="flex flex-row self-stretch justify-between sm:justify-start ">
              <a
                className="sm:mr-8 text-tertiary dark:text-darkTertiary"
                href="mailto:sababul37@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
              <a
                className="sm:mr-8 text-tertiary dark:text-darkTertiary"
                href="https://twitter.com/shababulalam"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                className="sm:mr-8 text-tertiary dark:text-darkTertiary"
                href="https://www.linkedin.com/in/shababulalam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="sm:mr-8 text-tertiary dark:text-darkTertiary"
                href="https://github.com/ShababulAlam"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {/* <Arena /> */}
            </div>
          </Section>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage

export function getStaticProps() {
  const posts = postFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))

    const { data } = matter(source)

    return {
      data,
      filePath,
    }
  })

  return { props: { posts } }
}
