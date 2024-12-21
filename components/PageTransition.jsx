"use client"

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

const PageTransition = ({ children }) => {
    const pathname = usePathname()
    console.log(pathname)
    return (
    <AnimatePresence>
        <div key={pathname}>
            <motion.div 
                // key={pathname}
                className="h-srceen w-screen fixed bg-primary top-0 pointer-events-none"
                initial={{opacity: 1 }} 
                animate={{
                    opacity: 0, 
                    transition: {delay: 1, duration: 0.2, ease: "easeInOut"}
                }} 
                // exit={{opacity: 0}}
            />
            {children}
        </div>
    </AnimatePresence>
    )


} 

export default PageTransition
