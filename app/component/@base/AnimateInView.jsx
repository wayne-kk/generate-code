'use client'
import { motion } from "framer-motion";
import React from "react";
// AnimateInView: 触发进入视图时的动画
export default function AnimateInView({ type, children }) {
    const variants = {
        rise: { opacity: 0, y: 20, transition: { duration: 0.6 } },
        fade: { opacity: 0, transition: { duration: 0.6 } },
    };

    return (
        <motion.div
            initial={variants[type]}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
}





