import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Left heading ── */}
          <div className={`anim-fade-left ${isVisible ? 'visible' : ''}`}>
            <div className="w-14 h-14 bg-neutral-100 rounded-2xl flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <p className="text-xs font-bold text-neutral-400 tracking-[0.2em] uppercase mb-3">
              About Me
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
              Who I Am
            </h2>
          </div>

          {/* ── Right content ── */}
          <div className={`space-y-6 anim-fade-right ${isVisible ? 'visible' : ''}`}>
            <p className="text-neutral-600 leading-[1.8] text-[15px]">
              I am Ivan Manguilimotan. I am a student at Davao del Norte
              State College. I am passionate about web development and
              enjoy creating user-friendly, responsive, and modern digital
              experiences.
            </p>
            <p className="text-neutral-600 leading-[1.8] text-[15px]">
              I love turning ideas into functional and engaging websites.
              I'm always eager to learn new technologies and improve
              my skills to build better solutions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
