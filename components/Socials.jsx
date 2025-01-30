import Link from "next/link"
import {FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"

const socials = [
  {icon: <FaGithub />, path: "https://github.com/abtargus7"},
  {icon:  <FaLinkedin />, path: "https://www.linkedin.com/in/abhishek-pawara/"},
  {icon: <FaTwitter />, path: "https://x.com/PawaraAbhijeet"},
  {icon: <FaYoutube />, path: ""},
]

const Socials = ({containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
       {socials.map((item, index) => {
            return <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
       })}
    </div>
  )
}

export default Socials
