import React from 'react';
import { Breadcrumb, Menu } from 'antd';
import { Header, Content, Footer } from 'antd/lib/layout/layout';
import 'antd/dist/antd.css';
import { Divider, HStack, VStack } from '@chakra-ui/react';
import { DarkTheme } from '../DarkTheme';
import { UseMediaNavBar, UseMediaText } from '../useMediaQuery';
import '../../Styles/NavBarMobile.css';
import Text from 'antd/lib/typography/Text';
import { AnimationPage } from '../AnimationPage';

export const SecondPage = () => {
  return (


      <>
        <AnimationPage>
          
        <UseMediaNavBar />
        

    <Content style={{ padding: '5 30px' }}>
        <Breadcrumb style={{ margin: '2 6px 0' }}>
          <UseMediaText />
          <Text style={{fontSize: '20px', color: 'black', backgroundColor: 'aliceblue'}}>
        <br />
          Segunda página
          </Text>
        </Breadcrumb>
        <div className="site-layout-content">
          <HStack padding={5}>


          </HStack>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer><div>

      </div>
      </AnimationPage>
    </>



  )

}