import { Link } from 'react-router-dom';
import { projectsConfig } from '@/lib/config';

const Projects = () => {
  return (
    <div className="min-h-screen px-6 py-12 flex items-center justify-center">
      <div className="max-w-[1200px] w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsConfig.projects.map((project) => (
            <Link
              key={project.id}
              to={project.link}
              className="group relative overflow-hidden"
            >
              <div className={`aspect-video bg-gradient-to-br ${project.gradient} relative`}>
                <div className="absolute inset-0 bg-gray-500/0 group-hover:bg-gray-500/20 transition-colors duration-300" />
              </div>
              <p className="text-sm font-light mt-2">{project.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
