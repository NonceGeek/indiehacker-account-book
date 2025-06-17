import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { TransitionPortal } from "gatsby-plugin-transition-link"
import {
  ThemeProvider,
  TaskBar,
  GlobalStyle as ThemeGlobalStyle,
  List,
  ProgressBar,
  Tree,
  // TreeProps
} from "@react95/core"
import { Awfext326050 } from "@react95/icons/esm/react/awfext326050"
import { Qfecheck111 } from "@react95/icons/esm/react/Qfecheck111"
import { CurvesAndColors100 } from "@react95/icons/esm/react/CurvesAndColors100"
import { Defrag } from "@react95/icons/esm/react/Defrag"
import { Defrag4 } from "@react95/icons/esm/react/Defrag4"
import { Joy102 } from "@react95/icons/esm/react/Joy102"
import { Ccapi106 } from "@react95/icons/esm/react/ccapi106"

import Loading from "components/Loading"
import TaskList from "components/TaskList"

import * as S from "./styled"
import StyleBase from "../../styles/global"
import ReactMarkdown from 'react-markdown'

const { icons } = Tree;


const treeNodes = {
  data: [
    {
      id: 0,
      label: <ReactMarkdown>Hackathon Prize from The Graph: $800</ReactMarkdown>,
      icon: <Joy102 variant="16x16_4" />,
    },
    {
      id: 1,
      label: <ReactMarkdown>The Income from IndieHackers Accelerator R1: $350</ReactMarkdown>,
      icon: <Defrag variant="16x16_4" />,
    },
    {
      id: 2,
      label: <ReactMarkdown>Scroll Airdrop: $1950</ReactMarkdown>,
      icon: <CurvesAndColors100 variant="16x16_4" />,
    },
    {
      id: 3,
      label: <ReactMarkdown>BeThink Hackathon in Shanghai: $3197</ReactMarkdown>,
      icon: <Defrag4 variant="16x16_4" />,
    },
    {
      id: 4,
      label: <ReactMarkdown>From [@seek_web3](https://x.com/seek_web3): $110</ReactMarkdown>,
      icon: <Ccapi106 variant="16x16_4" />,
    },
    // TODO: change the icons.
    {
      id: 4,
      label: <ReactMarkdown>From SpringX: $2500</ReactMarkdown>,
      // icon: <Ccapi106 variant="16x16_4" />,
    },
    {
      id: 4,
      label: <ReactMarkdown>From PicWe: $1000</ReactMarkdown>,
      // icon: <Ccapi106 variant="16x16_4" />,
    },
    {
      id: 4,
      label: <ReactMarkdown>From DeagentAI: $695</ReactMarkdown>,
      // icon: <Ccapi106 variant="16x16_4" />,
    },
    // {
    //   id: 2,
    //   label: 'Grant 0x02',
    //   // children: [
    //   //   {
    //   //     id: 3,
    //   //     label: 'Indie',
    //   //     children: [
    //   //       {
    //   //         id: 4,
    //   //         label: 'Weezer',
    //   //         icon: <icons.FILE_MEDIA variant="16x16_4" />,
    //   //         onClick: () => alert('nice!'),
    //   //       },
    //   //       {
    //   //         id: 5,
    //   //         label: 'Supergrass',
    //   //         icon: <icons.FILE_MEDIA variant="16x16_4" />,
    //   //       },
    //   //     ],
    //   //   },
    //   // ],
    // },
    // {
    //   id: 3,
    //   label: 'Others...',
    //   // children: [
    //   //   {
    //   //     id: 0,
    //   //     label: 'Fira Code.ttf',
    //   //     icon: <icons.FILE_FONT variant="16x16_4" />,
    //   //   },
    //   //   {
    //   //     id: 1,
    //   //     label: 'Journal.txt',
    //   //     icon: <icons.FILE_TEXT variant="16x16_4" />,
    //   //   },
    //   // ],
    // },
    // {
    //   id: 4,
    //   label: 'config.cfg',
    //   icon: <icons.FILE_SETTINGS variant="16x16_4" />,
    // },
    // {
    //   id: 5,
    //   label: 'random_file',
    //   icon: <icons.FILE_UNKNOWN variant="16x16_4" />,
    // },
  ],
};

const Sidebar = React.lazy(() => import("components/Sidebar"))
const MenuBar = React.lazy(() => import("components/MenuBar"))

const Layout = ({ children }) => {
  const [showModal, setShowModal] = useState(true)
  const [readingMode, setReadingMode] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)

  const closeModal = () => {
    setShowModal(false)
  }

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )

  return (
    <ThemeProvider>
      <ThemeGlobalStyle />
      <StyleBase />
      <S.LayoutWrapper>
        {/* {!isMobile && (
          <TransitionPortal level="top">
            <React.Suspense fallback={<Loading left="7.5%" />}>
              <Sidebar />
            </React.Suspense>
          </TransitionPortal>
        )} */}

        {showModal && (
          <S.LayoutMain
            isMobile={isMobile}
            closeModal={closeModal}
            icon={
              <Awfext326050 variant="16x16_4" alt="Windows Explorer icon" />
            }
            title={isMobile ? "IndieHackers Account Book" : "IndieHackers Account Book"}
            menu={[
            ]}
          >
            <br></br>
            <h1>The account book of leeduckgo. 
              <a href="https://x.com/intent/follow?screen_name=0xleeduckgo" target="_blank"> 👉 View my twitter.</a>
            </h1>
            <br></br>
            <p>The purpose of this account book is to record the income item and its type, so it could be optimized by <b>INTERATION</b>.</p>
            <br></br>
            <p> <b> 😎 Let's BUIDL PUBLIC and seesee👀 wht happens! </b></p>
            <br></br>
            <p>* <b>Time Period:</b> 2024.10.01 - 2024.12.31</p>
            <br></br>
            <p>* <b>Expected Income:</b> $ 10,000</p>
            <br></br>
            {/* TODO: make the process with diff colors. */}
            <ProgressBar width="200px" percent={107.02} />
            {/* (800+350+100+1950+3197+110+2500+1000+695)/10000 */}
            <br></br><br></br>
            <p>
            <Qfecheck111 variant="32x32_4" alt="Income" />
            Where do I get the incomes from?</p>
            <Tree {...treeNodes} />
          </S.LayoutMain>
        )}

        {!isMobile && (
          <TransitionPortal level="top">
            <React.Suspense fallback={<Loading right="2.5%" />}>
              <MenuBar
                setReadingMode={setReadingMode}
                readingMode={readingMode}
              />
            </React.Suspense>
          </TransitionPortal>
        )}
      </S.LayoutWrapper>
      <TransitionPortal level="top">
        <TaskBar
          list={
            <TaskList
              setReadingMode={setReadingMode}
              readingMode={readingMode}
              setShowModal={setShowModal}
            />
          }
        />
      </TransitionPortal>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
