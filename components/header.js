import Link from "next/link"
import { useRouter } from "next/router"
import { LogoInverted } from "./svg"
import Canvas from "./canvas"
import { motion } from "framer-motion"

const Header = () => {
  const router = useRouter()

  let justLogo = false
  if (router.pathname !== "/") {
    justLogo = true
  }

  return (
    <div className="flex flex-col items-start">
      <div className="grid items-center mb-4 grid-cols-auto grid-rows-auto justify-items-center ">
        <div className="col-1 row-1">
          <Canvas />
        </div>
        <div className="z-10 rounded-lg col-1 row-1">
          <Link href="/" passhref="true" className="mb-4 ">
            <LogoInverted />
          </Link>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.9,
          repeatType: "loop",
          // repeat: Infinity,
        }}
      >
        <div className={justLogo ? "hidden" : ""}>
          <h1 className="text-base">Shababul Alam</h1>
          <h2 className="text-tertiary dark:text-darkTertiary">
            Web Development Specialist & Javascript Enthuasist
          </h2>
        </div>
      </motion.div>
    </div>
  )
}

export default Header
