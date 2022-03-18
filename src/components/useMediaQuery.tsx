import React from 'react';
import { Stack, useMediaQuery } from '@chakra-ui/react';
import Text from 'antd/lib/typography/Text';
import { Main } from './Pages/FirstPage';
import { NavBarMobile } from './NavBarMobile';
import { TextoDesktop } from './TesteTextoDesktop';
import { TextoMobile } from './TesteTextoMobile';
import { NavBarDesktop } from './NavbarDesktop';

export const UseMediaNavBar = () => {


  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')

  return (
    
      <Stack>
        {isLargerThan1280 ? <NavBarDesktop /> : <NavBarMobile />}
      </Stack>


  )
}


export const UseMediaText = () => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')
  return (
    <Text>
      {isLargerThan1280 ? <TextoDesktop /> : <TextoMobile />}
    </Text>

  )

}




