"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

//components
import Stairs from "./Stairs";


const StairTransition = () => {
    const pathname = usePathname();
    
    return (
        <>
            <AnimatePresence mode="wait">
                <div key={pathname}>
                    <div className="h-screen w-screen fixed top-0 left-0
                    right-0 z-40 pointer-events-none flex"
                    >
                        <Stairs />
                    </div>

                    <motion.div
                        className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
                        initial={{ opacity: 1 }}
                        animate={{
                            opacity: 0,
                            transition: {
                                duration: 0.4,
                                ease: "easeInOut",
                                delay: 0.4, // delay to match the stairs animation
                            }
                        }}
                    />
                </div>
            </AnimatePresence>
        </>
    )
}

export default StairTransition