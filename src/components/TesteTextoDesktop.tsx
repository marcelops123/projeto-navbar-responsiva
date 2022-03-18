import React from "react"
import Text from "antd/lib/typography/Text"
import { AnimationPage } from "./AnimationPage"
export const TextoDesktop = () => {
    return(
        <AnimationPage>
        <Text style={{fontSize: '30px', color: 'black', backgroundColor: 'aquamarine'}}>
            Você está vistando o site em um desktop!
        </Text>
        </AnimationPage>
    )
   
}