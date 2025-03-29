import { JSX } from "react"
import { layoutProps } from "./layout-props"
import { Footer, Navbar } from "components"
// import { Box } from "@mui/material"

const Layout = ({children}:layoutProps): JSX.Element => {
  return (
    <div>
      <Navbar/>
      {/* <Box minHeight={'20vh'}> */}
      <div>
        {children}
      </div>
      {/* </Box> */}
      <Footer/>
    </div>
  )
}

export default Layout
