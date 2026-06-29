const techCategories = [
    {
        label: 'Frontend',
        techs: ['Next.js', 'React', 'Vue.js (Vue 3)', 'TypeScript', 'Tailwind CSS', 'Pinia', 'Vite', 'Chart.js'],
    },
    {
        label: 'Backend',
        techs: ['Java', 'Spring Boot', 'Spring Data JPA', 'Spring Security', 'MyBatis', 'Python', 'FastAPI'],
    },
    {
        label: 'Data & Infra',
        techs: ['PostgreSQL', 'Docker', 'Nginx', 'Flyway', 'pm2'],
    },
    {
        label: 'Collaboration',
        techs: ['Git', 'GitHub', 'Notion'],
    },
];

export function TechStack() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {techCategories.map(({ label, techs }) => (
                <div
                    key={label}
                    className="bg-white p-5 flex flex-col h-full"
                    style={{ borderRadius: '22px' }}
                >
                    <span className="text-[11px] font-bold tracking-wider text-blue-600 block mb-3 uppercase">
                        {label}
                    </span>
                    <div className="flex flex-col gap-1.5">
                        {techs.map(tech => (
                            <span key={tech} className="text-xs text-slate-600 leading-relaxed font-medium">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
