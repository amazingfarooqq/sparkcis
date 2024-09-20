const stats = [
    { id: 1, name: 'Completed projects', value: '120+' },
    { id: 2, name: 'Active clients', value: '20+' },
    { id: 3, name: 'On the line', value: '30+' },
    { id: 4, name: 'Developers', value: '25+' },
]

export function NumbersSection() {
    return (
        <div className="bg-primary  py-20 ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-gray-100">{stat.name}</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-100 sm:text-5xl">
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
