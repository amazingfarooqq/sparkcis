'use client'

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"

export default function PageTransitionLoader() {
    const pathname = usePathname()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const handleStart = () => setIsLoading(true)
        const handleComplete = () => setIsLoading(false)

        handleStart()
        
        // Simulate a delay to show the loading state
        const timeout = setTimeout(() => {
            handleComplete()
        }, 500) // Adjust this value based on your needs

        return () => clearTimeout(timeout)
    }, [pathname])

    if (!isLoading) return null

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-4 flex items-center space-x-2">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
                {/* <span className="text-primary font-medium">Loading...</span> */}
            </div>
        </div>
    )
}