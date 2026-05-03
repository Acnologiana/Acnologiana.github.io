export interface ProjectDetail {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  longDescription: string[];
  stack: string[];
  color: string;
  glowColor: string;
  isSAE?: boolean;
  saeDetails?: string;
  isProfessional?: boolean;
  features: string[];
  challenges: string[];
  results: string[];
  links?: {
    github?: string;
    demo?: string;
    website?: string;
  };
  team?: string;
  duration?: string;
  date?: string;
  mascotteUrl?: string;
  media: {
    type: 'image' | 'video';
    url: string;
    title?: string;
    thumbnail?: string;
    description?: string;
  }[];
}

export const projectsData: ProjectDetail[] = [
  {
    id: 1,
    title: 'GymBro Survivor',
    shortDescription: 'Jeu de survie 3D inspiré de Survivors avec thème fitness',
    fullDescription: 'Un jeu de survie roguelike en 3D où le joueur incarne un athlète de salle de sport combattant des vagues d\'ennemis progressives pour améliorer son score.',
    longDescription: [
      'GymBro Survivor est un jeu d\'action-survie développé en Godot 4.5 s\'inspirant d\'autre jeu de type Survivors (Vampire Survivors, Megabonk). Le joueur contrôle un personnage évoluant dans un environnement de salle de sport, affrontant des vagues d\'ennemis avec une difficulté croissante. Le concept fusionne le gameplay arcade avec la thématique fitness unique et humoristique.',
      'L\'architecture du projet repose sur un système de managers spécialisés (GameManager, EnemySpawner, PlayerStatManager, GameDifficulty, UiManager) gérant chacun un aspect clé du gameplay. Le moteur Godot 4.5 en mode OpenGL permet une gestion performante des entités 3D avec CharacterBody3D pour les déplacements et collisions. Le système de progression combine spawning dynamique d\'ennemis, upgrade de stats et mécaniques de bonus.',
      'Les fonctionnalités principales incluent un système de combat à trois modes (melee, range, area), trois types d\'ennemis avec IA distincte (Melee, Range, Boss), un système de bonus évolutif (heal, speed boost, damage boost, attack speed, nuke), une courbe de difficulté adaptative par niveau, et une gestion complète du scoring/progression. L\'interface utilisateur affiche le score, timer, barre de vie et menu de pause en temps réel.',
      'Le projet nous a permis de mieux comprendre les patterns de game design, l\'architecture logicielle en GDScript et la gestion de performance avec de nombreuses entités. L\'équilibrage du gameplay, l\'implémentation d\'une IA d\'ennemis crédible et la courbe de difficulté progressive constituent les principaux accomplissements techniques et créatifs.',
    ],
    stack: ['Godot 4.5', 'GDScript', 'Godot Physics 3D', 'OpenGL Rendering', 'Godot UI System', 'Animation Controller'],
    color: 'from-amber-600 to-red-900',
    glowColor: 'amber',
    isSAE: true,
    
    features: [
      'Système de combat multi-modes (melee, range, area)',
      'Trois types d\'ennemis avec IA adaptée (Melee, Range, Boss)',
      'Système de bonus progressif (5 types: heal, speed, damage, attack speed, nuke)',
      'Progression par niveaux avec difficulté adaptative',
      'Gestion dynamique du spawning d\'ennemis',
      'Système de scoring et de statistiques du joueur',
      'UI complète avec score, timer, health bar',
      'Menu de pause et game over',
      'Animations et feedbacks visuels',
    ],
    challenges: [
      'Conception d\'une courbe de difficulté équilibrée pour maintenir l\'engagement',
      'Gestion de la performance avec un nombre croissant d\'ennemis',
      'Implémentation d\'une IA d\'ennemis crédible avec comportements distincts',
      'Équilibrage du gameplay entre les trois types d\'attaque',
      'Intégration cohérente du système de bonus dans la mécanique',
      'Gestion des collisions et des interactions en 3D',
    ],
    results: [
      'Prototype jouable et équilibré livré dans les délais',
      'Implémentation réussie d\'un système de difficulté progressive',
      'Performance optimale maintenue même avec 50+ ennemis simultanés',
      'Gameplay addictif et récompensant validé par les tests utilisateurs',
      'Architecture modulaire permettant l\'ajout futur de contenu',
      'Documentation complète du codebase GDScript',
      'Expérience utilisateur fluide et responsive',
    ],
    team: 'Luca LINO (UI et Back-end)\nClément LACHIZE (Modèle 3D, animations, SFX, Musique)',
    duration: '1 mois', 
    date: '2025-2026',
    mascotteUrl: '/ScreenProjet/GymBroSurvivor/mascotte_large.png',
    media: [
      { type: 'video', url: '/ScreenProjet/GymBroSurvivor/VideoGamplay.mp4', title: 'Trailer de Gameplay', description: 'Vidéo complète montrant une partie du jeu : spawn d\'ennemis, combat intense, collecte de bonus, progression de niveau et mécaniques de jeu en action.' },
      { type: 'image', url: '/ScreenProjet/GymBroSurvivor/menus.png', title: 'Interface Menu', description: 'Affichage des menus principaux de l\'application avec les éléments UI : score en temps réel, chronomètre de survie, barre de vie du joueur et icônes d\'attaque disponibles.' },
      { type: 'image', url: '/ScreenProjet/GymBroSurvivor/gameplay1.png', title: 'Gameplay Principal', description: 'Le joueur affronte une vague d\'ennemis dans l\'arène principale. Combat intense avec le personnage au centre, entouré d\'ennemis de différents types progressant de toutes les directions.' },
      { type: 'image', url: '/ScreenProjet/GymBroSurvivor/gameplay2.png', title: 'Phase de Combat Avancée', description: 'Combat durant une vague avec plusieurs ennemis activement engagés. Démonstration de la dynamique multi-ennemis et de la gestion du champ de bataille en temps réel.' },
      { type: 'image', url: '/ScreenProjet/GymBroSurvivor/lvlup.png', title: 'Écran de Progression des Niveaux', description: 'Menu d\'amélioration entre les niveaux montrant les upgrades disponibles pour les stats du joueur : santé, vitesse, damage, et vitesse d\'attaque.' },
      { type: 'image', url: '/ScreenProjet/GymBroSurvivor/pause.png', title: 'Menu de Pause', description: 'Écran de pause permettant le contrôle du jeu avec options de reprendre, paramètres et retour au menu principal.' },
    ],
  },
  {
    id: 2,
    title: 'Ropach Mobile',
    shortDescription: 'Adaptation mobile d\'une plateforme de gestion de cantines et garderies pour les écoles et les maisons de retraite.',
    fullDescription: 'Ropach Mobile est une application de gestion de reservations pour établissements de services périscolaires et maisons de retraite. Elle permet aux parents de réserver des repas et créneaux de garderie pour enfants, et aux familles de réserver des repas adaptés aux adultes.',
    longDescription: [
      'Ropach Mobile est une solution mobile développée en alternance chez RPC pour moderniser la gestion administrative des services périscolaires (cantines et garderies). L\'application centralise l\'accès des parents/résidents aux reservations concernant leurs enfants en cantine ou garderie ou leurs repas en maison de retraite. Elle facilite la communication avec l\'établissement et transforme l\'expérience utilisateur avec une interface intuitive adaptée aux deux contextes (enfant et adulte).',
      'Le projet suit une architecture MVVM bien définie, séparant les responsabilités entre les couches data (repositories, modèles métier), domain (logique métier) et ui (interface utilisateur). La gestion d\'état utilise Provider, offrant une réactivité optimale et une maintenance facilitée. La structure organisée en modules (homeView, planningView, familyView) permet une scalabilité aisée et une évolution progressive.',
      'L\'application propose une suite complète de fonctionnalités incluant la gestion des utilisateurs, l\'affichage du planning par enfant/adulte et prestation, la visualisation des présences mensuelles, la réservation de repas adaptés, et la consultation de l\'historique des factures. Les utilisateurs peuvent naviguer intuitivement entre les différentes vues et accéder rapidement aux informations essentielles. L\'authentification sécurisée garantit la confidentialité des données familiales et de santé (régimes, allergies, besoins spécifiques adultes).',
      'Le backend expose une API REST complète avec 20+ endpoints pour gérer utilisateurs, enfants, familles, prestations, planning et facturation. L\'ApiLocator implémente une stratégie intelligente de découverte automatique du serveur, supportant environnements de développement LAN, tests et production. L\'application gère la persistance locale des préférences utilisateur et adapte ses configurations au contexte d\'exécution.',
    ],
    stack: ['Flutter', 'Dart', 'API REST', 'Provider', 'Material Design 3', 'HTTP', 'JSON'],
    color: 'from-gold to-ash',
    glowColor: 'gold',
    isProfessional: true,
    features: [
      'Authentification sécurisée avec session persistence',
      'Tableau de bord personnalisé avec calendrier mensuel et visualisation factures',
      'Gestion du planning - Vue hebdomadaire avec navigation temporelle et jours fériés',
      'Gestion familiale - Consultation détails famille et informations paiement',
      'Profils enfants et résidents - Gestion fiches avec données médicales, allergies, régimes et contacts urgence',
      'Gestion administrative parents - Formulaires mise à jour profils et coordonnées',
      'Consultation des factures - Historique et liens prestations associées',
      'Réservation de repas adaptés - Système pour enfants et adultes avec régimes spécifiques',
      'Gestion multi-contextes - Support enfants et adultes avec adaptations UI/UX spécifiques',
    ],
    challenges: [
      'Détection dynamique serveur API en environnement hétérogène',
      'Gestion complexe états multiples et synchronisation interfaces',
      'Gestion dates et périodes de semaine complexes',
      'Responsive design multi-plateforme (mobile, tablette, desktop)',
      'Persistance sécurisée données utilisateur',
    ],
    results: [
      '20+ endpoints API implémentés et intégrés pour l\'ensemble du domaine métier',
      '4 vues principales fonctionnelles avec navigation fluide',
      'Support multi-plateforme complet - iOS, Android, Web, Linux, macOS, Windows',
      'Architecture MVVM bien appliquée, facile à étendre et maintenir',
      'Système d\'authentification robuste avec login sécurisé et gestion session',
      'Performance optimisée avec chargement asynchrone et caching URL API',
    ],
    team: 'Clément LACHIZE (Flutter et Backend)\nDamien Millot (API)',
    duration: '4-5 mois',
    date: '2025-2026',
    mascotteUrl: '/ScreenProjet/Ropach_mobile/mascotte_large.png',
    media: [
      { type: 'image', url: '/ScreenProjet/Ropach_mobile/login.jpg', title: 'Authentification', description: 'Écran de connexion sécurisée avec option de mémorisation.' },
      { type: 'image', url: '/ScreenProjet/Ropach_mobile/accueil.jpg', title: 'Tableau de bord', description: 'Écran d\'accueil avec calendrier interactif permettant de sélectionner un enfant particulier et un service (cantine ou garderie) pour visualiser les jours où il est pris en charge. Accès aux dernières factures.' },
      { type: 'image', url: '/ScreenProjet/Ropach_mobile/planning.jpg', title: 'Gestion du planning', description: 'Vue hebdomadaire permettant de réserver des prestations pour enfants et adultes. Les grandes cases sont modifiables pour ajuster les réservations, tandis que les petites cases sont verrouillées suite au délai avant le jour en question.' },
      { type: 'image', url: '/ScreenProjet/Ropach_mobile/famille.jpg', title: 'Détails famille', description: 'Gestion complète des données familiales : informations famille (adresse facturation, mode de paiement), gestion des enfants (détails, allergies, régimes, urgences), gestion des parents/responsables et visualisation des présences habituelles par enfant et prestation.' },
      { type: 'image', url: '/ScreenProjet/Ropach_mobile/facture.jpg', title: 'Historique factures', description: 'Consultation complète de toutes les factures : visualisation de l\'historique global, vérification des montants à payer et dates limites de paiement.' },
      { type: 'image', url: '/ScreenProjet/Ropach_mobile/sidemenus.jpg', title: 'Navigation', description: 'Menu latéral avec gestion du profil, contact établissement et options de déconnexion.' },
    ],
  },
  {
    id: 3,
    title: 'HERA',
    shortDescription: 'Plateforme web de création de projets en réalité augmentée et virtuelle sans code, visualisables sur téléphone Android et casques VR.',
    fullDescription: 'HERA est une plateforme web innovante permettant de créer des projets en réalité augmentée et réalité virtuelle sans nécessiter de compétences en programmation. Grâce à son interface web intuitive, les utilisateurs conçoivent des expériences immersives qui sont ensuite visualisables directement sur téléphone Android ou sur casque VR, démocratisant l\'accès à la création AR/RV pour le patrimoine culturel et l\'éducation.',
    longDescription: [
      'HERA est une plateforme web innovante conçue pour démocratiser la création de contenu en réalité augmentée, particulièrement dans le domaine du patrimoine culturel. Dans ce projet, nous avons repris la codebase existante et stable de HERA pour l\'enrichir de fonctionnalités avancées. L\'objectif était de d\'améliorer l\'expérience utilisateur en ajoutant plusieurs capacités essentielles : la traçabilité complète des actions utilisateur permettant un "rerun" ou relecture des interactions, un contrôle granulaire du traçage via popup d\'activation/désactivation par projet, l\'ajout de popups redirigeant vers des formulaires externes, la gestion optimisée des presets multi-utilisateurs, l\'import/export des labels avec images, et l\'enregistrement structuré des données utilisateur par scène. Ces améliorations adressent un besoin croissant d\'interactivité, de flexibilité de configuration, de respect de la vie privée et de compréhension approfondie du comportement utilisateur dans les applications immersives. Cette extension du projet représente une avancée significative, transformant HERA en un système complet de création, exécution, configuration et analyse d\'expériences AR pour institutions culturelles et éducateurs.',
      'HERA repose sur une architecture moderne et scalable composée de trois couches distinctes. Le frontend utilise Vue.js 3 pour l\'interface utilisateur, compilé avec Vite pour optimiser les performances. La visualisation 3D et le rendu augmenté font appel à Three.js et aux standards WebXR, garantissant une compatibilité cross-platform. Le backend est construit sur Express.js, un framework Node.js éprouvé, avec Sequelize comme ORM pour gérer les interactions avec la base de données. La solution supporte plusieurs moteurs de bases de données (SQLite pour le développement et MariaDB pour la production). L\'authentification est sécurisée par JWT (JSON Web Tokens), et l\'infrastructure intègre CORS pour permettre une communication sécurisée entre les différents services. Le système de fichiers gère dynamiquement l\'upload et le stockage des assets 3D, avec des mécanismes de validation robustes.',
      'L\'équipe a déployé un effort coordonné pour enrichir HERA de multiples fonctionnalités. Ma contribution se concentre sur trois améliorations majeures : premièrement, l\'implémentation de la fonctionnalité Rerun permettant de rejouer fidèlement les sessions utilisateur enregistrées avec synchronisation temporelle et interface de contrôle (play/pause/accélération), deuxièmement, un système de Popup de Contrôle du Traçage permettant d\'activer/désactiver l\'enregistrement des données utilisateur par projet, et troisièmement, un système de Popup de Lien vers Formulaire Externe permettant aux administrateurs de configurer des popups redirigeant vers des formulaires externes. En parallèle, l\'équipe a développé : l\'Export des Presets Multi-Utilisateurs pour faciliter le partage en mode présentation, l\'Import/Export des Labels avec Images pour une meilleure gestion des annotations, la création d\'une table DatabaseRecords enregistrant les données utilisateur par scène, et la Refonte des Presets avec nouvelles tables ArPreset et ArAction. L\'approche de développement a privilégié la compatibilité avec l\'architecture existante, en respectant les patterns établis et en étendant l\'ORM Sequelize. Ces fonctionnalités transforment HERA en système complet de création, exécution et analyse d\'expériences immersives.',
      'Les améliorations apportées ont étendu considérablement les capacités de HERA, transformant une plateforme d\'édition AR en système complet de création, configuration et d\'analyse. Le système de traçabilité utilisateur enregistre fidèlement chaque interaction avec capacité de relecture fluide et contrôle granulaire via popup d\'activation/désactivation. Le système de popup redirigeant vers formulaires externes facilite la collecte de données sans complexité ajoutée. L\'export des presets multi-utilisateurs permet le partage efficace des configurations en mode présentation. L\'import/export des labels avec images offre une flexibilité accrue pour la gestion des annotations. La table DatabaseRecords assure une persistence robuste des données utilisateur par scène. La refonte avec tables ArPreset et ArAction améliore l\'architecture interne pour meilleure performance et maintenabilité. Ces additions ont été validées par des tests fonctionnels complets. L\'impact est considérable : la plateforme offre maintenant une solution production-ready combinant création AR, gestion flexible de configurations, collecte de données structurée avec contrôle de traçage et analyse comportementale en une seule plateforme.',
    ],
    stack: ['Vue.js 3', 'Vite', 'Three.js', 'WebXR', 'Express.js', 'Sequelize', 'SQLite/MariaDB', 'JWT','Rerun'],
    color: 'from-crimson-dark to-crimson',
    glowColor: 'crimson',
    isSAE: true,
    saeDetails: 'SAE - Réalité Augmentée & Innovation',
    features: [
      'Traçabilité utilisateur complète avec enregistrement des interactions en AR',
      'Fonctionnalité Rerun - Rejouer les sessions utilisateur enregistrées avec synchronisation temporelle',
      'Popup Activation/Désactivation du traçage utilisateur par projet',
      'Popup de lien vers formulaire externe configurable par administrateur',
      'Collecte de données via redirection sécurisée vers formulaires externes',
      'Export des presets multi-utilisateurs pour mode présentation',
      'Import/Export des labels avec gestion complète des images associées',
      'DatabaseRecords - Enregistrement des données utilisateur par scène',
      'Tables ArPreset et ArAction - Architecture refonte pour performance optimale',
    ],
    challenges: [
      'Synchronisation des traces utilisateur en temps réel sans impacter les performances',
      'Contrôle granulaire du traçage avec gestion des sessions existantes',
      'Utilisation de Rerun pour enregistrer les sessions avec recréation d\'état exact des scènes',
      'Export/Import complexe de configurations et labels avec préservation d\'intégrité',
      'Structuration performante des DatabaseRecords pour données comportementales complexes',
      'Refonte de l\'architecture des presets avec migration sans perte de données',
    ],
    results: [
      'Système de traçabilité utilisateur fonctionnel capturant toutes les interactions avec horodatage',
      'Popup de contrôle du traçage opérationnelle offrant granularité fine du contrôle de collecte de données',
      'Fonctionnalité Rerun validée permettant analyse comportementale détaillée et débuggage',
      'Système de popup de lien externe permettant collecte de données via formulaires externes',
      'Export/Import complet des presets multi-utilisateurs et labels avec gestion d\'images',
      'DatabaseRecords opérationnel enregistrant données utilisateur avec contexte spatial et temporel',
      'Architecture de presets refonte avec tables ArPreset et ArAction structurées pour meilleure maintenabilité',
    ],
    team: 'Clément LACHIZE (Rerun, Récupération traces, Popup formulaire)\nCavalla Marie (Récupération traces, DatabaseRecords)\nLino Luca (Labels, Rerun)\nRobert Benjamin (Import/Export, Refonte presets)',
    duration: '4 mois',
    date: '2025-2026',
    mascotteUrl: '/ScreenProjet/HERA/mascotte_large.png',
    media: [
      { type: 'image', url: '/ScreenProjet/HERA/listeprojet.png', title: 'Gestion des projets', description: 'Vue d\'ensemble des projets AR créés avec affichage de la liste, statut de publication et actions rapides pour créer, modifier ou supprimer des projets.' },
      { type: 'image', url: '/ScreenProjet/HERA/detailprojet.png', title: 'Détails du projet', description: 'Interface de configuration du projet avec métadonnées, paramètres de traçage utilisateur et options de publication pour les expériences AR.' },
      { type: 'image', url: '/ScreenProjet/HERA/detailscene.png', title: 'Détails de la scène', description: 'Panneau de configuration détaillé d\'une scène 3D avec gestion des objets, animations, interactions et éléments interactifs pour l\'expérience augmentée.' },
      { type: 'image', url: '/ScreenProjet/HERA/adminpanel.png', title: 'Panneau d\'administration', description: 'Interface d\'administration complète permettant la gestion des utilisateurs, contrôle du traçage, configuration des popups et activation/désactivation de fonctionnalités.' },
      { type: 'image', url: '/ScreenProjet/HERA/sceneAR.png', title: 'Expérience augmentée mobile', description: 'Rendu WebXR sur appareil mobile montrant la scène 3D intégrée en temps réel dans l\'environnement réel avec interactions utilisateur.' },
    ],
  },
  {
    id: 4,
    title: 'Bon\'App Petit',
    shortDescription: 'Application mobile cross-platform pour consulter et filtrer les menus de cantine avec allergènes et régimes alimentaires.',
    fullDescription: 'Application mobile de gestion des menus de cantine permettant aux utilisateurs de consulter les menus avec filtres alimentaires, gestion des allergènes et export PDF.',
    longDescription: [
      'Bon\'App Petit est une application mobile cross-platform développée pour faciliter l\'accès aux menus des cantines scolaires. Le projet adresse un besoin réel : permettre aux parents et aux enfants de consulter facilement les menus quotidiens, de gérer les régimes alimentaires et les allergènes de manière intuitive, et de disposer d\'une source de vérité centralisée accessible offline. L\'application s\'inscrit dans une démarche de digitalisation des services de cantine en proposant une expérience utilisateur fluide et accessible sur tous les appareils.',
      'Bon\'App Petit utilise une architecture hybrid sophistiquée combinant Flutter en frontend et un backend dual (Laravel + Python) pour une flexibilité maximale. La gestion d\'état s\'appuie sur Provider pour garantir une réactivité optimale et une maintenance facilitée. La structure modulaire séparant les couches de présentation, domaine et données permet une évolution progressive du projet. Le système de cache persistant avec durée de vie de 21 jours garantit une expérience offline fiable sans rechargement inutile des données.',
      'L\'application offre une navigation intuitive débutant par la recherche de cantine via code postal avec suggestions en temps réel. Une fois la cantine sélectionnée, les utilisateurs visualisent les menus sur 4 semaines avec navigation fluide par jour. Le système de filtres alimentaires (classique, sans viande, végétarien, sans porc) s\'applique instantanément sur tous les jours affichés. La gestion des 14 allergènes standardisés se fait simplement en cliquant sur chaque composant du menu pour visualiser les détails et les indicateurs visuels des risques allergéniques. L\'export PDF intègre le branding et la mascotte du projet pour une expérience professionnelle.',
      'Le backend expose une API REST complète gérant la synchronisation intelligente des données de menu depuis source DBF complexe. L\'application a résolu des défis majeurs : TimeoutException pour la récupération volumineuse de données, filtrage intelligent multi-régimes, extraction et transformation de données complexes. La configuration dynamique de l\'IP API permet un déploiement flexible. Le système de cache persistant est contrôlé et stable, offrant une synchronisation progressive et une consultation offline sans latence, ce qui est critique pour l\'adoption par des familles avec accès réseau limité.',
    ],
    stack: ['Flutter', 'Dart', 'Laravel', 'Python', 'SQLite', 'PDF', 'Provider', 'API REST'],
    color: 'from-gold to-ash',
    glowColor: 'gold',
    isProfessional: true,
    features: [
      'Recherche de cantine par code postal avec suggestions en temps réel',
      'Affichage des menus par jour et par semaine (4 semaines)',
      'Filtres alimentaires (classique, sans viande, végétarien, sans porc)',
      'Gestion de 14 allergènes standardisés avec indicateurs visuels',
      'Export PDF des menus hebdomadaires avec branding',
      'Mise en Cache intelligent des menus avec fallback offline',
      'Architecture MVVM avec gestion d\'état Provider',
      'Support cross-platform (iOS, Android, Web, Desktop)',
    ],
    challenges: [
      'Implémenter un filtrage intelligent pour les differents mode d\'affichage (classique, sans viande, végétarien, sans porc)',
      'Extraire et transformer données complexes depuis source DBF unique',
      'Optimiser les performance de l\'application pour une expérience fluide',
      'Gérer configuration dynamique de l\'IP API',
    ],
    results: [
      'Application en production et opérationnelle',
      'Navigation fluide et rapide avec temps de chargement optimisé',
      'Cache contrôlé et stable pour consultation offline',
      'Code centralisé et maintenable pour évolutions futures',
      'Support offline fiable avec synchronisation progressive',
      'Navigation fluide et PDF générables sans lag',
    ],
    team: 'Clément LACHIZE (Flutter)\nClément LACHIZE (Backend)\nDamien Millot (API)',
    duration: '4-5 mois',
    date: '2026',
    mascotteUrl: '/ScreenProjet/BonAppPetit/mascotte_large.png',
    media: [
      { type: 'image', url: '/ScreenProjet/BonAppPetit/Recherchecodepostal.jpg', title: 'Recherche de cantine', description: 'Entrez votre code postal pour accéder aux menus de la cantine près de chez vous. L\'application vous propose des suggestions en fonction du code postal que vous rentrer ainsi que la possibilité de définir une cantine par défaut.' },
      { type: 'image', url: '/ScreenProjet/BonAppPetit/listecantine.jpg', title: 'Liste des cantines', description: 'Selectionnez parmit toutes les cantines disponibles. La recherche par code postal affiche toutes les cantines trouvées avec localisation. La cantine que vous avez definit par defaut aura un marqueur.' },
      { type: 'image', url: '/ScreenProjet/BonAppPetit/chargement.jpg', title: 'Synchronisation des menus', description: 'Téléchargement intelligent des menus en arrière-plan. Cache persistant de 21 jours permettant la consultation offline sans latence.' },
      { type: 'image', url: '/ScreenProjet/BonAppPetit/menus.jpg', title: 'Affichage des menus', description: 'Consultez les menus de la semaine avec navigation fluide. Chaque jour affiche les différents composants (entrée, plat, garniture, laitage, dessert) avec composition détaillée.' },
      { type: 'image', url: '/ScreenProjet/BonAppPetit/allergenes.jpg', title: 'Gestion des allergènes', description: 'Cliquez sur un composant du menu permet de voir les allergènes de chaque aliment. L\'application gère 14 allergènes standardisés avec indicateurs visuels clairs.' },
      { type: 'image', url: '/ScreenProjet/BonAppPetit/modes.jpg', title: 'Modes alimentaires', description: 'Possibilité de filtrer les menus afficher selon votre régime alimentaire : classique, sans viande, végétarien ou sans porc. Les filtres s\'appliquent en temps réel sur les 4 semaines disponibles.' },
    ],
  },
];
