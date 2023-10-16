import { useState } from "react"
import { Link } from "react-router-dom"

import "./styles.scss"

import HeroKeyboard from "../../components/HeroKeyboard/HeroKeyboard"

const MainPage = () => {
  const [activeKeys, setActiveKeys] = useState<string[]>([])

  const handleOnLearnButtonHover = () => {
    setActiveKeys(["l", "e", "a", "r", "n"])
  }
  const handleOnPlayButtonHover = () => {
    setActiveKeys(["p", "l", "a", "y", "o", "n", "e"])
  }
  const handleOnSandboxButtonHover = () => {
    setActiveKeys(["s", "a", "n", "d", "b", "o", "x"])
  }
  const handleOnMouseLeave = () => {
    setActiveKeys([])
  }

  return (
    <div className="main-page">
      <div className="hero">
        <HeroKeyboard activeKeys={activeKeys} />
        <div className="options">
          <Link
            className="main-button"
            to="learn"
            onMouseEnter={handleOnLearnButtonHover}
            onMouseLeave={handleOnMouseLeave}
          >
            <p>Learn</p>
            <span>learn typing by completing tasks</span>
          </Link>
          <Link
            to="play"
            onMouseEnter={handleOnPlayButtonHover}
            onMouseLeave={handleOnMouseLeave}
          >
            <p>Play Online</p>
            <span>challenge other people</span>
          </Link>
          <Link
            to="sandbox"
            onMouseEnter={handleOnSandboxButtonHover}
            onMouseLeave={handleOnMouseLeave}
          >
            <p>SandBox</p>
            <span>type your own text</span>
          </Link>
        </div>
      </div>
      <div className="page"></div>
    </div>
  )
}
export default MainPage
