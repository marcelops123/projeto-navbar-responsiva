import React from "react"
import { Button, useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
export const DarkTheme  = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
        <Button  _focus={{ boxShadow: "none", }} backgroundColor='blackAlpha.100' _hover={{color:'none'}}   onClick={toggleColorMode}>
           {colorMode === 'light' ? <SunIcon/> : <MoonIcon/>}
        </Button>
      </header>
    )
  }