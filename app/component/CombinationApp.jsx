'use client'
import React from 'react'
import CodeLoader from './@codeLoader/CodeLoader'
import AnimateInView from './@base/AnimateInView'
import EditableText from './@base/EditableText'
import EditableButton from './@base/EditableButton'
import EditableImg from './@base/EditableImg'
import EditableIcon from './@base/EditableIcon'
import Overflow from './@base/Overflow'
import Carousel from './@base/Carousel'
import { navigation } from './@mock/mockNavigation'
import { footer } from './@mock/mockFooter'
import { motion } from 'framer-motion';
import throttle from 'lodash.throttle'

import { blockChildren, blockMaps } from './mockData-1'



export default function CombinationApp() {

    return (
        <div>
            <CodeLoader
                code={navigation.code}
                customComponents={
                    {
                        AnimateInView,
                        EditableText,
                        EditableButton,
                        EditableIcon,
                        Carousel,
                        EditableImg,
                        Overflow,
                        motion,
                        throttle
                    }}
                props={navigation.props}
            />
            {blockChildren.map((child, index) => (
                <div key={child}>
                    <CodeLoader
                        code={blockMaps[child].code}
                        customComponents={
                            {
                                AnimateInView,
                                EditableText,
                                EditableButton,
                                EditableIcon,
                                Carousel,
                                EditableImg,
                                motion,
                                throttle
                            }}
                        props={blockMaps[child].props}
                    />
                </div>
            ))}
            <CodeLoader
                code={footer.code}
                customComponents={
                    {
                        AnimateInView,
                        EditableText,
                        EditableButton,
                        EditableIcon,
                        Carousel,
                        EditableImg,
                        motion,
                        throttle
                    }}
                props={footer.props}
            />
        </div>
    )
}
