'use client'
import React from 'react'
import CodeLoader from './@codeLoader/CodeLoader'
import AnimateInView from './@base/AnimateInView'
import EditableText from './@base/EditableText'
import EditableButton from './@base/EditableButton'
import EditableImg from './@base/EditableImg'
import EditableIcon from './@base/EditableIcon'
import Marquee from './@base/Marquee'
import Overflow from './@base/Overflow'
import Carousel from './@base/Carousel'
import { motion } from 'framer-motion';
import throttle from 'lodash.throttle'


export interface CombinationAppProps {
    blocksMap?: any
    children?: string[]
    navigation?: any
    footer?: any
}

export default function CombinationApp(props: CombinationAppProps) {
    const { blocksMap, children = [], navigation, footer } = props
    return (
        <div>
            {navigation && <CodeLoader
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
            />}
            {children.map((child, index) => (
                <div key={child}>
                    <CodeLoader
                        code={blocksMap[child].code}
                        customComponents={
                            {
                                AnimateInView,
                                EditableText,
                                EditableButton,
                                EditableIcon,
                                Carousel,
                                EditableImg,
                                Marquee,
                                motion,
                                throttle
                            }}
                        props={blocksMap[child].props}
                    />
                </div>
            ))}
            {footer && <CodeLoader
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
            />}
        </div>
    )
}
