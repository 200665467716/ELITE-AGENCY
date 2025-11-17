import React from "react";

const emmersonImageUrl = "/images/emmerson.jpeg";
const amosImageUrl = "/images/amos.jpeg";

const TeamMemberCard: React.FC<{
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}> = ({ name, role, description, imageUrl }) => {
  return (
    <div className="bg-dark-card rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand-primary/20">
      <img
        className="w-full h-80 object-cover object-top"
        src={imageUrl}
        alt={name}
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">{name}</h3>
        <p className="text-brand-primary font-semibold mb-3">{role}</p>
        <p className="text-dark-subtle">{description}</p>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Le Duo Fondateur
          </h2>
          <p className="mt-4 text-lg text-dark-subtle max-w-3xl mx-auto">
            La vision rencontre l'exécution. Un partenariat forgé pour
            construire l'avenir de la tech africaine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <TeamMemberCard
            name="Emmerson da MATHA"
            role="L'Architecte & Visionnaire"
            description="À 19 ans, Emmerson est étudiant en génie logiciel et entrepreneur avec un don inné pour voir 'le prochain niveau'. Ancien copywriter et chef de projet aguerri, il élabore la stratégie et l'architecture de la transformation de chaque client."
            imageUrl={emmersonImageUrl}
          />
          <TeamMemberCard
            name="Amos K. Sivitra"
            role="Le Bâtisseur & Développeur Senior"
            description="Avec plus de 7 ans d'expérience passionnée en tant qu'autodidacte et universitaire, Amos est un expert full-stack. Il traduit les visions complexes en code robuste, évolutif et élégant, dirigeant l'exécution technique de tous nos projets."
            imageUrl={amosImageUrl}
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
