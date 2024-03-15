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
              I am leading the charge in shaping the future of tele-health
              through innovative web applications at
              <a
                className="pl-1 text-tertiary dark:text-darkTertiary"
                href="https://doctime.com.bd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                DocTime
              </a>
              . I leverage cutting-edge technology trends to craft
              next-generation solutions that revolutionize patient care. My
              focus is on orchestrating seamless technology migrations, driving
              continuous innovation, and ensuring the highest quality software
              that empowers both patients and healthcare providers. <br></br>
              <br></br> If you'd like to see my portfolio or work with me,
              please{" "}
              <a
                className="text-tertiary dark:text-darkTertiary"
                href="mailto:sababul37@gmail.com"
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
