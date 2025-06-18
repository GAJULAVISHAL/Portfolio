

const projects = [
    {
        id: 1,
        title: "Delish",
        description:
            "A full-stack Restaurent Order Management Application built using MERN stack.",
        image: "https://res.cloudinary.com/duqbf6np3/image/upload/v1742626101/delish_djyyf3.png",
        tags: ["React", "Cloudflare Workers", "Postgres" ],
        liveUrl: "https://fronted-restaurent-vishals-projects-c1135766.vercel.app/",
        githubUrl: "https://github.com/GAJULAVISHAL/Resturent-portal-project",
    },
    {
        id: 2,
        title: "QR PASS",
        description:
            "A QR Code Generator Application built using React and Cloudflare Workers.",
        image: "https://res.cloudinary.com/duqbf6np3/image/upload/v1750268184/430affa3-45db-4835-946b-ec33dd111e77_zbuudx.jpg",
        tags: ["React", "Cloudflare Workers", "Postgres","Vercel" ],
        liveUrl: "https://qr-app-silk.vercel.app/",
        githubUrl: "https://github.com/GAJULAVISHAL/QR_CODE_APP",
    },
    {
        id: 3,
        title: "Digital Diner",
        description:
            "A Full stack ordering placing Application built using React and Express ",
        image: "https://res.cloudinary.com/duqbf6np3/image/upload/v1750269941/order_kai0jl.jpg",
        tags: ["React", "Express","Prisma", "Postgres","Vercel" ],
        liveUrl: "https://foodiiee.vercel.app/",
        githubUrl: "https://github.com/GAJULAVISHAL/foodie",
    }
]
export default function Projects() {
    return (
        <div className="rounded-2xl backdrop-blur-xl bg-white/1">
            <div className="text-center mb-8 flex flex-col gap-2 ">
                <h2 className="text-4xl md:text-4xl font-bold text-gray-100">My Projects</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-white">
                    Here are some of my recent projects that showcase my skills and expertise in web development.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center p-8">
                {projects.map((project) => (
                    <div className="bg-black-600 rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-gray-600 transition-colors duration-300 group w-full max-w-sm shadow-gray-500">
                        { /* Top Image (fixed aspect ratio) */}
                        <div className="relative overflow-hidden aspect-video ">
                            <img
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                className="text-white w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Main Content */}
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                            <p className="text-white text-sm mt-2">{project.description}</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-3">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-block rounded-full border border-gray-600 bg-gray-700 text-gray-300 px-2 py-1 text-xs font-semibold"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Footer / Buttons */}
                        <div className="flex items-center justify-between p-4 border-t border-gray-700">
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center rounded-md text-sm font-medium transition-colors 
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 
                            focus-visible:ring-offset-2 border border-gray-600 bg-gray-700 hover:bg-gray-600 
                            text-white px-3 py-1"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="mr-2 h-4 w-4"
                                >
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 
                             0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 
                             5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 
                             1.23-.15 1.85v4"></path>
                                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                </svg>
                                Code
                            </a>

                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center rounded-md text-sm font-medium transition-colors 
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 
                            focus-visible:ring-offset-2 bg-purple-600 hover:bg-purple-500 text-white px-3 py-1"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="mr-2 h-4 w-4"
                                >
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                                Live Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}