import React from "react"
import styles from "./header.module.scss"

type HeaderProps = {
  title: string
  // TODO remove optional from prop when image serving will be handled
  logoImageSrc?: string
}

export const Header: React.FC<HeaderProps> = ({ title, logoImageSrc }) => (
  <div>
    <div>
      {logoImageSrc && <img src={logoImageSrc} alt="blog logo image" />}
      <h1>{title}</h1>
    </div>
    <ul>
      <li>
        <a>Blog</a>
      </li>
      <li>
        About me
        <a></a>
      </li>
    </ul>
  </div>
)
