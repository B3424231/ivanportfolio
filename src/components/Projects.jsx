import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ProjectModal from './ProjectModal';

const projects = [
  {
    id: 1,
    title: 'Intune Dashboard',
    subtitle: 'Endpoint & Identity Management',
    description:
      'A comprehensive endpoint & identity management dashboard with device monitoring, compliance tracking, and deployment status visualization.',
    image: '/project/project1.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Device platform analytics with interactive charts',
      'Real-time compliance status monitoring',
      'Policy deployment tracking & management',
      'Recent device activity feed',
    ],
  },
  {
    id: 2,
    title: 'Facilio Dashboard',
    subtitle: 'Maintenance & Facilities Management',
    description:
      'An AI-powered maintenance & facilities management platform featuring IoT monitoring, predictive maintenance, and energy consumption analytics.',
    image: '/project/project2.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Work order status visualization',
      'IoT alert system with real-time notifications',
      'Predictive maintenance risk scoring',
      'Energy consumption trend charts',
    ],
  },
  {
    id: 3,
    title: 'MiniOrange MDM',
    subtitle: 'Mobile Device Security & Management',
    description:
      'A mobile device security & management dashboard with platform analytics, compliance monitoring, and security policy management.',
    image: '/project/project3.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Multi-platform device enrollment tracking',
      'Compliance status bar visualization',
      'Security policy toggle management',
      'Recent device activity monitoring',
    ],
  },
  {
    id: 4,
    title: 'Mitratech Perform',
    subtitle: 'HR & Compliance Management',
    description:
      'An HR & compliance management dashboard with performance tracking, absence overview, upcoming reviews, and compliance audit tools.',
    image: '/project/project4.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Employee performance trend charts',
      'Absence overview with category breakdown',
      'Upcoming review scheduling system',
      'Compliance & audit status tracking',
    ],
  },
  {
    id: 5,
    title: 'Zluri Dashboard',
    subtitle: 'SaaS Governance & Access Management',
    description:
      'An identity intelligence & SaaS governance platform with spend analytics, orphaned account detection, and automated offboarding workflows.',
    image: '/project/project5.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Application category distribution analytics',
      'Monthly spend overview trend charts',
      'User access risk assessment',
      'Automated offboarding workflow management',
    ],
  },
];

export default function Projects() {
  const [ref, isVisible] = useScrollAnimation();
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const displayed = showAll ? projects : projects.slice(0, 3);

  return (
    <>
      <section id="projects" className="py-24 bg-white">
        <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* ── Header ── */}
          <div className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14 anim-fade-up ${isVisible ? 'visible' : ''}`}>
            <div>
              <div className="w-14 h-14 bg-neutral-100 rounded-2xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <p className="text-xs font-bold text-neutral-400 tracking-[0.2em] uppercase mb-3">
                Featured Projects
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
                Some Things I've Built
              </h2>
            </div>

            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-neutral-600 transition-colors duration-300 shrink-0"
            >
              {showAll ? 'Show Less' : 'View All Projects'}
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : 'group-hover:translate-x-1'}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                {showAll
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                }
              </svg>
            </button>
          </div>

          {/* ── Project grid ── */}
          <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-7 stagger ${isVisible ? 'visible' : ''}`}>
            {displayed.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group text-left bg-white rounded-2xl overflow-hidden border border-neutral-100
                  transition-all duration-400 hover:-translate-y-2 hover:shadow-xl hover:shadow-neutral-200/50
                  hover:border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
              >
                {/* image */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* hover overlay */}
                  <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/30
                    transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold bg-neutral-900/70 backdrop-blur-sm px-4 py-2 rounded-full
                      opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0
                      transition-all duration-300">
                      View Details →
                    </span>
                  </div>
                </div>

                {/* info */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-neutral-900 mb-1.5 group-hover:text-neutral-700 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full
                          group-hover:bg-neutral-200/60 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ── Modal ── */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
