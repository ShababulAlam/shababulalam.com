import Layout from "@/components/layout"
import SEO from "@/components/seo"
import Section from "@/components/section"
import fs from "fs"
import matter from "gray-matter"
import path from "path"
import { postFilePaths, POSTS_PATH } from "../lib/mdxUtils"
import { motion } from "framer-motion"

function shareContent(){
  // let url = document.getElementById("content-url").value;
  // let title = document.getElementById("content-title").value;
  // let text = document.getElementById("content-text").value;
  let url = "http://shababulalam.com";
  let title = "Shababul Alams Portfolio";
  let text = "Share Portfolio";
  let data = {url: url, text: text, title: title};
  console.log(data);
  
  if (!navigator.share){
    alert("Your device does not support the Web Share API. Try on an iPhone or Android phone!");
  }
  else {
    navigator.share(data);
  }
} 

const IndexPage = () => {
  return (
    <>
      <Layout>
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            transition: {
              repeatType: "loop",
              repeat: Infinity
            }
          }}
        >
          <SEO />
        </motion.div>

        <div className="grid max-w-full gap-16 auto-rows-auto">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                repeatType: "loop",
              }}
            >
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
                focus is on orchestrating seamless technology migrations,
                driving continuous innovation, and ensuring the highest quality
                software that empowers both patients and healthcare providers.{" "}
                <br></br>
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
            </motion.div>
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

          <Section>
            <h2>Tech Stack</h2>
            <div className="flex text-sm font-bold gap-x-1.5 pt-1">
              <p className="px-1 border rounded border-emerald-600 text-emerald-600 bg-emerald-200">
                Vue
              </p>
              <p className="px-1 border rounded text-emerald-700 bg-emerald-200">
                Nuxt
              </p>
              <p className="px-1 text-blue-500 bg-blue-200 border rounded">
                React
              </p>
              <p className="px-1 text-blue-700 bg-blue-200 border rounded">
                Next.js
              </p>

              <p className="px-1 text-blue-700 bg-blue-200 border rounded">
                Tailwind
              </p>
              <p className="px-1 border rounded text-violet-700 bg-violet-200">
                Bootstrap
              </p>
              <p className="px-1 text-orange-600 bg-orange-200 border rounded">
                Laravel
              </p>
              <p className="px-1 text-blue-700 bg-blue-200 border rounded">
                Express.js
              </p>
            </div>
          </Section>

          <section className="flex p-2 text-sm border rounded" onClick={shareContent} >
            Share this page
          </section>
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
