// Data: topics with links for each resource
const data = [
  {
    category: "🌀 Ondes",
    topics: [
      {
        name: "Les ondes mécaniques progressives",
        links: {
          allo: "https://www.alloschool.com/section/5293",
          khan: "https://www.khanacademy.org/science/physics/mechanical-waves-and-sound"
        }
      },
      {
        name: "Les ondes mécaniques progressives périodiques",
        links: {
          allo: "https://www.alloschool.com/section/5293",
          khan: "https://www.khanacademy.org/science/physics/mechanical-waves-and-sound/mechanical-waves/a/mechanical-waves-review"
        }
      },
      {
        name: "La propagation des ondes lumineuses",
        links: {
          allo: "https://www.alloschool.com/section/5293",
          khan: "https://www.khanacademy.org/science/physics/light-waves"
        }
      }
    ]
  },
  {
    category: "☢️ Nucléaire",
    topics: [
      {
        name: "Les transformations nucléaires",
        links: {
          allo: "https://www.alloschool.com/section/5296",
          khan: "https://www.khanacademy.org/science/physics/nuclear-physics"
        }
      },
      {
        name: "Le noyau (masse et énergie)",
        links: {
          allo: "https://www.alloschool.com/section/5296",
          khan: "https://www.khanacademy.org/science/physics/quantum-physics/mass-energy-equivalence/a/mass-energy-equivalence"
        }
      }
    ]
  },
  {
    category: "⚡ Électricité",
    topics: [
      {
        name: "Le dipôle RC",
        links: {
          allo: "https://www.alloschool.com/section/4385",
          khan: "https://www.khanacademy.org/science/physics/circuits-topic/circuits-resistance/a/rc-circuits"
        }
      },
      {
        name: "Le dipôle RL",
        links: {
          allo: "https://www.alloschool.com/course/physique-et-chimie-2eme-bac-sciences-physiques-biof",
          khan: "https://www.khanacademy.org/science/physics/circuits-topic/inductors/a/rl-circuits"
        }
      },
      {
        name: "Les oscillations libres d’un circuit RLC",
        links: {
          allo: "https://www.alloschool.com/course/physique-et-chimie-2eme-bac-sciences-physiques-biof",
          khan: "https://www.khanacademy.org/science/physics/circuits-topic/oscillations-in-lrc-circuits/a/oscillations-in-lrc-circuits"
        }
      }
    ]
  },
  {
    category: "🧪 Chimie 1",
    topics: [
      {
        name: "Transformations lentes et rapides",
        links: {
          allo: "https://www.alloschool.com/section/4391",
          khan: "https://www.khanacademy.org/science/chemistry/chemical-reactions/rate-of-reaction/a/rate-of-reaction"
        }
      },
      {
        name: "Suivi temporel d’une transformation - Vitesse de réaction",
        links: {
          allo: "https://www.alloschool.com/section/4391",
          khan: "https://www.khanacademy.org/science/chemistry/chemical-reactions/rate-of-reaction/a/reaction-rates"
        }
      },
      {
        name: "Transformations chimiques dans les 2 sens",
        links: {
          allo: "https://www.alloschool.com/section/4391",
          khan: "https://www.khanacademy.org/science/chemistry/chemical-equilibrium"
        }
      },
      {
        name: "État d’équilibre d’un système chimique",
        links: {
          allo: "https://www.alloschool.com/section/4391",
          khan: "https://www.khanacademy.org/science/chemistry/chemical-equilibrium"
        }
      },
      {
        name: "Réactions acide-base",
        links: {
          allo: "https://www.alloschool.com/course/physique-et-chimie-2eme-bac-sciences-de-la-vie-et-de-la-terre-biof",
          khan: "https://www.khanacademy.org/science/chemistry/acids-and-bases-topic"
        }
      }
    ]
  },
  {
    category: "🧲 Mécanique Newtonienne",
    topics: [
      {
        name: "Lois de Newton",
        links: {
          allo: "https://www.alloschool.com/section/4538",
          khan: "https://www.khanacademy.org/science/physics/forces-newtons-laws"
        }
      },
      {
        name: "Chute libre verticale",
        links: {
          allo: "https://www.alloschool.com/section/4538",
          khan: "https://www.khanacademy.org/science/physics/forces-newtons-laws/gravity/a/free-fall"
        }
      },
      {
        name: "Mouvement d’un projectile dans un plan",
        links: {
          allo: "https://www.alloschool.com/section/4538",
          khan: "https://www.khanacademy.org/science/physics/two-dimensional-motion/projectile-mot"
        }
      },
      {
        name: "Mouvement de rotation autour d’un axe fixe",
        links: {
          allo: "https://www.alloschool.com/section/4538",
          khan: "https://www.khanacademy.org/science/physics/torque-angular-momentum"
        }
      },
      {
        name: "Systèmes mécaniques oscillants",
        links: {
          allo: "https://www.alloschool.com/section/4538",
          khan: "https://www.khanacademy.org/science/physics/oscillatory-motion"
        }
      },
      {
        name: "Aspects énergétiques des oscillations mécaniques",
        links: {
          allo: "https://www.alloschool.com/section/4538",
          khan: "https://www.khanacademy.org/science/physics/oscillatory-motion/energy-in-simple-harmonic-motion"
        }
      }
    ]
  },
  {
    category: "⚗️ Chimie 2",
    topics: [
      {
        name: "Évolution spontanée d’un système chimique",
        links: {
          allo: "https://www.alloschool.com/section/4564",
          khan: "https://www.khanacademy.org/science/chemistry/thermodynamics-chemistry"
        }
      },
      {
        name: "Transformations spontanées dans les piles et la production d’énergie",
        links: {
          allo: "https://www.alloschool.com/section/4566",
          khan: "https://www.khanacademy.org/science/chemistry/redox-reactions"
        }
      },
      {
        name: "Réactions d’estérification et d’hydrolyse",
        links: {
          allo: null,
          khan: "https://www.khanacademy.org/science/organic-chemistry"
        }
      },
      {
        name: "Chimie organique",
        links: {
          allo: null,
          khan: "https://www.khanacademy.org/science/organic-chemistry"
        }
      }
    ]
  }
];

// Reference to main container and modal
const programDiv = document.getElementById('program');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const resourceButtonsDiv = document.getElementById('resourceButtons');
const closeModalBtn = document.getElementById('closeModalBtn');

// Function to create topic elements
function createTopicElement(topic) {
  const div = document.createElement('div');
  div.className = 'topic';
  div.textContent = topic.name;
  div.tabIndex = 0;
  div.setAttribute('role', 'button');
  div.setAttribute('aria-pressed', 'false');
  div.addEventListener('click', () => openModal(topic));
  div.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(topic);
    }
  });
  return div;
}

// Populate the program container
data.forEach(category => {
  const catDiv = document.createElement('div');
  catDiv.className = 'category';

  const h2 = document.createElement('h2');
  h2.textContent = category.category;
  catDiv.appendChild(h2);

  const topicsDiv = document.createElement('div');
  topicsDiv.className = 'topics';

  category.topics.forEach(topic => {
    const topicEl = createTopicElement(topic);
    topicsDiv.appendChild(topicEl);
  });

  catDiv.appendChild(topicsDiv);
  programDiv.appendChild(catDiv);
});

// Open modal with resource options
function openModal(topic) {
modalTitle.textContent = `Choisissez votre ressource pour: "${topic.name}"`;
resourceButtonsDiv.innerHTML = '';

if (topic.links.allo) {
  const alloBtn = document.createElement('button');
  alloBtn.className = 'btn';
  alloBtn.textContent = 'AlloSchool';
  alloBtn.addEventListener('click', () => {
    window.open(topic.links.allo, '_blank', 'noopener');
    closeModal();
  });
  resourceButtonsDiv.appendChild(alloBtn);
}

if (topic.links.khan) {
  const khanBtn = document.createElement('button');
  khanBtn.className = 'btn';
  khanBtn.textContent = 'Khan Academy';
  khanBtn.addEventListener('click', () => {
    window.open(topic.links.khan, '_blank', 'noopener');
    closeModal();
  });
  resourceButtonsDiv.appendChild(khanBtn);
}

modal.classList.add('active');
closeModalBtn.focus();
}
//<!-- Ajoute cette fonction closeModal dans ton script -->

// Fonction pour fermer la modale
function closeModal() {
  modal.classList.remove('active');
}

// Ajout de l'écouteur sur le bouton Annuler
closeModalBtn.addEventListener('click', closeModal);

// (Optionnel) fermer la modale en appuyant sur Échap
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});
