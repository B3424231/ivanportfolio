import { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  /* lock body scroll while modal is open */
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  /* close on Escape key */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* content */}
      <div
        className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full
            flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:bg-white
            transition-all duration-200 shadow-md hover:shadow-lg hover:scale-110"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* project image */}
        <div className="relative overflow-hidden rounded-t-3xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full object-cover object-top"
          />
          {/* gradient overlay at bottom of image */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </div>

        {/* body */}
        <div className="px-8 pb-8 -mt-8 relative">
          {/* tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-bold text-neutral-600 bg-neutral-100 px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* title + subtitle */}
          <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-1">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-neutral-400 mb-5">
            {project.subtitle}
          </p>

          {/* description */}
          <p className="text-neutral-600 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-8">
              <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-3">
                Key Features
              </h4>
              <ul className="space-y-2.5">
                {project.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-neutral-600">
                    <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* action buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href={project.image}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-xl text-sm font-semibold
                hover:bg-neutral-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View Full Image
            </a>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 bg-neutral-100 text-neutral-700 px-6 py-3 rounded-xl text-sm font-semibold
                hover:bg-neutral-200 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
