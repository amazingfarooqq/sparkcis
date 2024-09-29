import React from 'react'

import { Zap, Code, Package, GitBranch, Settings, Maximize } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: any) => (
    <div className="flex flex-col items-center text-center p-4">
        <Icon className="w-12 h-12 text-indigo-500 mb-4" />
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);
const features = [
    {
        icon: Code,
        title: "Full Code Control",
        description: "Access and modify all HTML, CSS, and JavaScript. No black boxes or limitations."
    },
    {
        icon: Zap,
        title: "Performance Optimized",
        description: "Generate clean, efficient code that scores high on Lighthouse and other performance metrics."
    },
    {
        icon: Package,
        title: "Custom Component System",
        description: "Build and reuse your own components. Full support for modern front-end frameworks."
    },
    {
        icon: GitBranch,
        title: "Version Control Ready",
        description: "Seamless integration with Git. Track changes, branch, and collaborate effectively."
    },
    {
        icon: Settings,
        title: "Advanced Configuration",
        description: "Fine-tune every aspect of your build process. Support for task runners and build tools."
    },
    {
        icon: Maximize,
        title: "Scalable Architecture",
        description: "Design systems that grow with your project. From simple sites to complex web applications."
    }
];

export const Sectiona = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-center text-indigo-600 text-lg font-semibold mb-4">WHY WEBFLOW</h2>
            <h1 className="text-center text-4xl md:text-5xl font-bold mb-12">The future of<br />development</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>
        </div>
    )
}