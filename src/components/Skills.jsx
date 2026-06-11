import { useScrollAnimation } from '../hooks/useScrollAnimation';

/* ── Skill data ── */
const skills = [
  {
    name: 'HTML',
    color: 'from-orange-500 to-red-500',
    bg: 'bg-orange-50',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M4 2l1.727 18.314L12 22l6.273-1.686L20 2H4z" fill="#E44D26"/>
        <path d="M12 4v16.271l5.063-1.362L18.4 4H12z" fill="#F16529"/>
        <path d="M8.109 8h7.783l-.252 2.632H10.33l.233 2.452h5.09l-.391 4.138L12 18.284v.001l-3.261-.917-.22-2.478h2.194l.114 1.27 1.173.316 1.174-.316.17-1.782H8.382L7.876 8h.233z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'CSS',
    color: 'from-blue-500 to-indigo-500',
    bg: 'bg-blue-50',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M4 2l1.727 18.314L12 22l6.273-1.686L20 2H4z" fill="#1572B6"/>
        <path d="M12 4v16.271l5.063-1.362L18.4 4H12z" fill="#33A9DC"/>
        <path d="M8.109 8h7.783l-.252 2.632h-5.06l.233 2.452h4.607l-.391 4.138L12 18.284v.001l-3.261-.917-.22-2.478h2.194l.114 1.27 1.173.316 1.174-.316.17-1.782H8.382L7.876 8h.233z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    color: 'from-yellow-400 to-amber-500',
    bg: 'bg-yellow-50',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="2" fill="#F7DF1E"/>
        <path d="M13.154 18.436c.36.588.828 1.02 1.656 1.02.696 0 1.14-.348 1.14-.828 0-.576-.456-.78-1.224-1.116l-.42-.18c-1.212-.516-2.016-1.164-2.016-2.532 0-1.26.96-2.22 2.46-2.22 1.068 0 1.836.372 2.388 1.344l-1.308.84c-.288-.516-.6-.72-1.08-.72-.492 0-.804.312-.804.72 0 .504.312.708 1.032 1.02l.42.18c1.428.612 2.232 1.236 2.232 2.64 0 1.512-1.188 2.34-2.784 2.34-1.56 0-2.568-.744-3.06-1.716l1.368-.792zM7.296 18.576c.264.468.504.864 1.08.864.552 0 .9-.216.9-1.056v-5.712h1.68v5.736c0 1.74-1.02 2.532-2.508 2.532-1.344 0-2.124-.696-2.52-1.536l1.368-.828z" fill="#323330"/>
      </svg>
    ),
  },
  {
    name: 'Responsive\nDesign',
    color: 'from-emerald-500 to-teal-500',
    bg: 'bg-emerald-50',
    icon: (
      <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'UI/UX\nBasics',
    color: 'from-violet-500 to-purple-500',
    bg: 'bg-violet-50',
    icon: (
      <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    name: 'Front-End\nDevelopment',
    color: 'from-cyan-500 to-blue-500',
    bg: 'bg-cyan-50',
    icon: (
      <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
];

export default function Skills() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="skills" className="py-24 bg-neutral-50/80">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Header ── */}
        <div className={`mb-14 anim-fade-up ${isVisible ? 'visible' : ''}`}>
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-5">
            <svg className="w-7 h-7 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <p className="text-xs font-bold text-neutral-400 tracking-[0.2em] uppercase mb-3">
            My Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
            What I Do Best
          </h2>
        </div>

        {/* ── Skill cards ── */}
        <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 stagger ${isVisible ? 'visible' : ''}`}>
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`group relative ${skill.bg} rounded-2xl p-6 flex flex-col items-center gap-4
                cursor-default overflow-hidden transition-all duration-300
                hover:-translate-y-2 hover:shadow-lg hover:shadow-neutral-200/60`}
            >
              {/* gradient bar on hover */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.color}
                scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

              {skill.icon}
              <span className="text-sm font-semibold text-neutral-700 text-center whitespace-pre-line leading-snug">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
