import Link from "next/link";

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaSnapchat, FaFacebook, FaWhatsapp } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Iamloumie" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/adedamolalawal" },
  { icon: <FaTwitter />, path: "https://x.com/iamloumie?s=21&t=TV1CWqx5f-bQdR0wq3fXLw" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/loumie_grann?igsh=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr" },
  { icon: <FaSnapchat />, path: "https://snapchat.com/t/VaCV8hPr" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/share/1LtP8BjJWm/?mibextid=wwXIfr" },
]

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyles}
          >
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social