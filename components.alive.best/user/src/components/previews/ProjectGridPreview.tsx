export const ProjectGridPreview = () => {
  const projects = [
    { title: 'Project Alpha', color: 'hsl(217, 91%, 60%)' },
    { title: 'Project Beta', color: 'hsl(142, 76%, 36%)' },
    { title: 'Project Gamma', color: 'hsl(24, 95%, 53%)' },
    { title: 'Project Delta', color: 'hsl(271, 76%, 53%)' },
    { title: 'Project Epsilon', color: 'hsl(0, 72%, 51%)' },
    { title: 'Project Zeta', color: 'hsl(45, 93%, 47%)' },
  ]

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 auto-rows-auto gap-4 p-4">
      {projects.map((project, idx) => (
        <a
          key={idx}
          href="#"
          className={`group relative rounded-[--radius] overflow-hidden ${
            idx % 3 === 0 ? 'row-span-2' : ''
          } min-h-[200px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
          style={{ backgroundColor: project.color }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <h3 className="text-white font-medium">{project.title}</h3>
          </div>
        </a>
      ))}
    </div>
  )
}
