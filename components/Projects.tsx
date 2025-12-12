import React, { useEffect, useState } from "react";
import type { Project } from "../types";
import { SparklesIcon } from "./icons/SparklesIcon";
import { CodeIcon } from "./icons/CodeIcon";

const VideoIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 text-brand-primary"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9A2.25 2.25 0 0 0 4.5 18.75Z"
    />
  </svg>
);

const ImageIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 text-brand-primary"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
    />
  </svg>
);

const SearchIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 text-brand-primary"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const projectsData: Project[] = [
  {
    title: "SaaS WeScanGift",
    description:
      "Une solution SaaS qui réinvente le marketing par QR code. Elle permet de lancer des campagnes interactives, de capturer des données précieuses et d'augmenter l'engagement client de manière ludique et intelligente.",
    videoUrl: "/videos/WeScanGift.mp4",
    thumbnailUrl: "/thumbnails/wescan-gift-banner.png",
    tags: ["SaaS", "MarTech", "QR Code"],
    icon: <VideoIcon />,
  },
  {
    title: "Plateforme Personnelle AGENTK",
    description:
      "Une plateforme de marque personnelle pour un architecte de produits digitaux. Conçue pour mettre en valeur son expertise, ses projets et son leadership, attirant ainsi des collaborations de haut niveau.",
    videoUrl: "/videos/AGENTK.mp4",
    thumbnailUrl: "/thumbnails/agentk-banner.png",
    tags: ["Personal Brand", "Portfolio", "Leadership"],
    icon: <ImageIcon />,
  },
  {
    title: "E-commerce Bénin Luxe Cajou",
    description:
      "Transformation d'une entreprise familiale en une marque e-commerce premium. Nous avons bâti une plateforme qui raconte leur histoire, valorise l'excellence du terroir et ouvre les portes des marchés mondiaux.",
    videoUrl: "/videos/Bénin Luxe Cajou.mp4",
    thumbnailUrl: "/thumbnails/cajou-banner.png",
    tags: ["E-commerce", "Fedapay", "API Integration"],
    icon: <SearchIcon />,
  },
  {
    title: "Plateforme de Billetterie PyCket",
    description:
      "Modernisation du secteur de l'événementiel avec une solution 100% digitale. PyCket simplifie l'achat, la gestion et la validation des tickets via QR codes, éliminant les billets physiques et fluidifiant l'expérience.",
    videoUrl: null,
    thumbnailUrl: "/thumbnails/PyCket.png",
    tags: ["E-tickets", "QR Code", "Événementiel"],
    icon: <VideoIcon />,
  },
  {
    title: "Paycash",
    description: "Application de récompense mobile pour les particuliers",
    videoUrl: null,
    thumbnailUrl: "/thumbnails/bfclogo.png",
    tags: ["Paiement", "Mobile", "FinTech"],
    icon: <SearchIcon />,
  },
  {
    title: "ReportCo",
    description: "Le système de reporting tout en un, clé en main pour suivre toute vos performances en temps réel.",
    videoUrl: null,
    thumbnailUrl: "/thumbnails/reportco.png",
    tags: ["Reporting", "Performance", "Suivi"],
    icon: <SearchIcon />,
  }
];

const ProjectCard: React.FC<{
  project: Project;
  onOpenVideo: (url: string) => void;
}> = ({ project, onOpenVideo }) => {
  const [imageError, setImageError] = useState(false);

  // Utiliser la bannière si disponible, sinon utiliser un placeholder
  const thumbnailSrc = project.thumbnailUrl;

  // Couleurs de placeholder par projet
  const placeholderColors: Record<string, string> = {
    "SaaS WeScanGift": "from-blue-600 to-blue-400",
    "Plateforme Personnelle AGENTK": "from-purple-600 to-purple-400",
    "E-commerce Bénin Luxe Cajou": "from-amber-600 to-amber-400",
    "Plateforme de Billetterie PyCket": "from-indigo-600 to-indigo-400",
  };

  const bgGradient =
    placeholderColors[project.title] || "from-gray-600 to-gray-400";

  return (
    <div className="bg-dark-card rounded-xl overflow-hidden shadow-lg group">
      <div className="relative overflow-hidden">
        <button
          type="button"
          onClick={() => project.videoUrl && onOpenVideo(project.videoUrl)}
          aria-label={`Ouvrir la démo vidéo de ${project.title}`}
          className="block w-full text-left"
          disabled={!project.videoUrl}
        >
          {!imageError && thumbnailSrc ? (
            <img
              src={thumbnailSrc}
              alt={`${project.title} demo`}
              className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
              onError={() => setImageError(true)}
            />
          ) : (
            <div
              className={`w-full h-56 bg-gradient-to-br ${bgGradient} flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110`}
            >
              <div className="text-center text-white">
                <p className="text-sm font-semibold opacity-80">Bannière</p>
              </div>
            </div>
          )}
        </button>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.videoUrl ? (
            <button
              type="button"
              onClick={() => onOpenVideo(project.videoUrl!)}
              className="text-white text-lg font-bold bg-brand-primary/80 backdrop-blur-sm py-3 px-6 rounded-full flex items-center"
              aria-label={`Voir la démo de ${project.title}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>
              Voir la Démo
            </button>
          ) : (
            <div className="text-white text-lg font-bold bg-brand-primary/80 backdrop-blur-sm py-3 px-6 rounded-full">
              Projet en cours...
            </div>
          )}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start mb-3">
          <div className="bg-brand-primary/20 p-3 rounded-full mr-4">
            {project.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold bg-gray-700 text-gray-300 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <p className="text-dark-subtle">{project.description}</p>
      </div>
    </div>
  );
};

const VideoModal: React.FC<{ url: string | null; onClose: () => void }> = ({
  url,
  onClose,
}) => {
  if (!url) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-4xl mx-4">
        <button
          onClick={onClose}
          aria-label="Fermer la vidéo"
          className="absolute -top-4 -right-4 bg-gray-800 text-white rounded-full p-2 shadow-lg"
        >
          ✕
        </button>
        <video
          src={url}
          controls
          autoPlay
          playsInline
          className="w-full h-auto rounded-lg bg-black"
        />
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Lock body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const openVideo = (url: string) => {
    setSelectedVideo(url);
    setIsOpen(true);
  };

  const closeVideo = () => {
    setIsOpen(false);
    // small timeout to allow modal to unmount before clearing src (optional)
    setTimeout(() => setSelectedVideo(null), 200);
  };

  return (
    <section id="projects" className="py-20 bg-dark-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Nos Réalisations
          </h2>
          <p className="mt-4 text-lg text-dark-subtle max-w-3xl mx-auto">
            Voici des exemples de solutions IA que nous concevons, transformant
            une logique métier unique en de puissants actifs numériques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onOpenVideo={openVideo}
            />
          ))}
        </div>

        {isOpen && <VideoModal url={selectedVideo} onClose={closeVideo} />}
      </div>
    </section>
  );
};

export default Projects;
