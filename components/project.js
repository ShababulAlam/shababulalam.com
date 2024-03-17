import Link from "next/link"

const Project = props => (
  <div className="flex flex-col items-start">
    <Link href={props.link} passhref="true">
      {props.title}
    </Link>
    <p className="text-tertiary dark:text-darkTertiary">{props.description}</p>
  </div>
)

export default Project

export const ExternalProject = props => (
  <div className="flex flex-col items-start">
    <a href={props.link}>{props.title}</a>
    <p className="text-tertiary dark:text-darkTertiary">{props.description}</p>
  </div>
)

export const MultiProject = props => (
  <div className="flex flex-col items-start">
    <div>
      {/*       this could be a map function instead */}
      <Link href={props.link1} passhref="true" className="inline">
        {props.title1}
      </Link>
      <p className="inline mx-3"> · </p>
      <Link href={props.link2} passhref="true" className="inline">
        {props.title2}
      </Link>
      <p className="inline mx-3"> · </p>
      <Link href={props.link3} passhref="true" className="inline">
        {props.title3}
      </Link>
    </div>
    <p className="text-tertiary dark:text-darkTertiary">{props.description}</p>
  </div>
)
