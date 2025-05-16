'use client'
import { motion, useAnimation } from "framer-motion";
import React, { ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";

type AnimationType = "rise" | "fade";

interface AnimateInViewProps {
    type?: AnimationType;
    children?: ReactNode;
    className?: string;
}

const AnimateInView: React.FC<AnimateInViewProps> = ({ type = 'rise', children, className }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView, controls]);

    const variants = {
        rise: {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        },
        fade: {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.6 } },
        },
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={controls}
            variants={variants[type]}
        >
            {children}
        </motion.div>
    );
};

export default AnimateInView;
