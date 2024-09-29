const posts = [
    {
        id: 1,
        title: 'Creating device-agnostic solutions.',
        description:
            'We deliver functional, convenient, and visually compelling HTML5/JavaScript applications that offer end users invariably perfect experience across desktops, smartphones, and tablets.',
    },
    {
        id: 2,
        title: 'Reworking outdated apps.',
        description:
            'We can modernize or completely redesign unfriendly and old-fashioned web interfaces in order to align them with the evolving needs of end users and current technologies.',
    },
    {
        id: 3,
        title: 'Large-Scale Distributed Systems',
        description:
            'We leverage modern tools, best practices, and the know-how of technology giants to design, launch, and manage flawless, flexible web applications. Our skillsets range from in-demand social networks and content delivery platforms to complex AR/VR and AI-powered solutions.',
    },
]

export function WebDevService() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">CUSTOM WEB APPLICATION DEVELOPMENT                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        High-performing, intuitive and secure web solutions that support business processes and serve users globally.
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">

                            <div className="group relative">
                                

                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <div>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </div>
                                </h3>
                                <p className="mt-5 text-sm leading-6 text-gray-600">{post.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}



export default WebDevService