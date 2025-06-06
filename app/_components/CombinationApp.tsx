'use client'
import React from 'react'
import CodeLoader from './@codeLoader/CodeLoader'
import AnimateInView from '@/_components/@ui/AnimateInView'
import EditableText from './@ui/EditableText'
import EditableButton from './@ui/EditableButton'
import EditableImg from './@ui/EditableImg'
import EditableIcon from './@ui/EditableIcon'
import Marquee from './@ui/Marquee'
import Overflow from './@ui/Overflow'
import Carousel from './@ui/Carousel'
import { motion, AnimatePresence } from 'framer-motion';
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
        <div id="combination-app">
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
                        throttle,
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
                                Overflow,
                                EditableIcon,
                                Carousel,
                                EditableImg,
                                Marquee,
                                motion,
                                throttle,
                                AnimatePresence
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
