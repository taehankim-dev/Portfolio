import { Badge } from '@/components/common/Badge';

const techStacks = {
    'Frontend': ['Next.js', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'Capacitor'],
    'Backend': ['Spring Boot', 'Node.js', 'PostgreSQL'],
    'Data & Infra': ['MQTT', 'Docker', 'Nginx', 'pm2'],
    'Collaboration': ['Git', 'GitHub', 'Notion'],
};

export function TechStack() {
    return (
        <section className="mb-24">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">기술 스택</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(techStacks).map(([category, techs]) => (
                    <div key={category}>
                        <h3 className="text-lg font-semibold mb-3 text-gray-700">
                            {category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {techs.map(tech => (
                                <Badge key={tech}>{tech}</Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
