'use client'
import React, { useEffect } from 'react'
import Carousel_02 from './Carousel_02'

export default function page() {
    const [carouselItems, setCarouselItems] = React.useState<any>([])
    useEffect(() => {
        const fetchCarouselItems = async () => {
            setTimeout(() => {
                setCarouselItems([
                    {
                        src: 'https://images.pexels.com/photos/6642913/pexels-photo-6642913.jpeg',
                        label: '合作伙伴A11111',
                        description: '与我们共同研发航天新技术。'
                    },
                    {
                        src: 'https://images.pexels.com/photos/6642913/pexels-photo-6642913.jpeg',
                        label: '合作伙伴B2222',
                        description: '助力企业拓展国际市场。'
                    },
                    {
                        src: 'https://images.pexels.com/photos/6642913/pexels-photo-6642913.jpeg',
                        label: '合作伙伴C33333',
                        description: '推动航天产业链协同发展。'
                    },
                ])
                console.log('fetchCarouselItems')
            }, 5000)
        }
        fetchCarouselItems()
    }, [])
    return (
        <div>
            <Carousel_02
                prevSlideIcon="fa-solid fa-chevron-left"
                nextSlideIcon="fa-solid fa-chevron-right"
                buttonPrevious="上一位"
                buttonNext="下一位"
                images={
                    (carouselItems.length > 0)
                        ? carouselItems
                        : [
                            {
                                src: 'https://images.pexels.com/photos/6642913/pexels-photo-6642913.jpeg',
                                label: '合作伙伴',
                                description: '与我们共同研发航天新技术。'
                            },
                            {
                                src: 'https://images.pexels.com/photos/6642913/pexels-photo-6642913.jpeg',
                                label: '合作伙伴B',
                                description: '助力企业拓展国际市场。'
                            },
                            {
                                src: 'https://images.pexels.com/photos/6642913/pexels-photo-6642913.jpeg',
                                label: '合作伙伴C',
                                description: '推动航天产业链协同发展。'
                            }
                        ]
                }
                interval={1000}
            ></Carousel_02>
        </div>
    )
}
