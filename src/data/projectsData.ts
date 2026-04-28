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
    title: 'MindVault',
    shortDescription: 'Application d\'aide-mémoire pour personnes atteintes de troubles mnésiques.',
    fullDescription: 'Application d\'aide-mémoire complète pour personnes atteintes de troubles mnésiques. Propose une gestion intégrée d\'agenda, notes et listes de cours.',
    longDescription: [
      'MindVault est une application mobile conçue pour aider les personnes atteintes de troubles mnésiques à gérer leur quotidien.',
      'L\'application offre une interface intuitive permettant de gérer facilement un agenda personnel, de prendre des notes organisées et de maintenir des listes de cours.',
      'Développée avec Flutter pour assurer la compatibilité cross-platform et une excellente expérience utilisateur.',
      'La base de données MySQL permet une synchronisation fiable et une gestion sécurisée des données sensibles.',
    ],
    stack: ['Flutter', 'Dart', 'MySQL', 'Provider'],
    color: 'from-crimson to-gold',
    glowColor: 'gold',
    isSAE: true,
    saeDetails: 'SAE - Projet d\'Application Mobile',
    features: [
      'Gestion d\'agenda intuitive',
      'Système de prise de notes organisé',
      'Listes de cours intégrées',
      'Interface accessible',
      'Synchronisation cloud',
    ],
    challenges: [
      'Concevoir une UX simple pour les utilisateurs avec troubles mnésiques',
      'Intégrer efficacement les données multiples',
      'Assurer la stabilité et la rapidité de l\'application',
    ],
    results: [
      'Application fonctionnelle et testée',
      'Retours positifs des utilisateurs cibles',
      'Base stable pour évolutions futures',
    ],
    team: 'Équipe universitaire de 3 développeurs',
    duration: '6 mois',
    date: '2024',
    media: [
      { type: 'image', url: '/projects/mindvault-1.jpg', title: 'Interface principale' },
      { type: 'image', url: '/projects/mindvault-2.jpg', title: 'Gestion d\'agenda' },
      { type: 'image', url: '/projects/mindvault-3.jpg', title: 'Système de notes' },
      { type: 'image', url: '/projects/mindvault-4.jpg', title: 'Listes de cours' },
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
    team: 'Clément LACHIZE (Flutter et Backend), Damien Millot (API)',
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
    shortDescription: 'Plateforme web innovante de création et analyse de contenu en Réalité Augmentée pour le patrimoine culturel.',
    fullDescription: 'HERA est une plateforme complète de création, configuration et analyse d\'expériences immersives en AR. Nous avons enrichi cette codebase établie de sept fonctionnalités majeures incluant traçabilité utilisateur, rejeu de sessions, popups configurables, export/import de presets et labels, et enregistrement structuré des données comportementales.',
    longDescription: [
      'HERA est une plateforme web innovante conçue pour démocratiser la création de contenu en réalité augmentée, particulièrement dans le domaine du patrimoine culturel. Dans ce projet, nous avons repris la codebase existante et stable de HERA pour l\'enrichir de fonctionnalités avancées. L\'objectif était de transformer l\'expérience utilisateur en ajoutant plusieurs capacités essentielles : la traçabilité complète des actions utilisateur permettant un "rerun" ou rejeu des interactions, un contrôle granulaire du traçage via popup d\'activation/désactivation par projet, l\'ajout de popups redirigeant vers des formulaires externes, la gestion optimisée des presets multi-utilisateurs, l\'import/export des labels avec images, et l\'enregistrement structuré des données utilisateur par scène. Ces améliorations adressent un besoin croissant d\'interactivité, de flexibilité de configuration, de respect de la vie privée et de compréhension approfondie du comportement utilisateur dans les applications immersives. Cette extension du projet représente une avancée significative, transformant HERA en un système complet de création, exécution, configuration et analyse d\'expériences AR pour institutions culturelles et éducateurs.',
      'HERA repose sur une architecture moderne et scalable composée de trois couches distinctes. Le frontend utilise Vue.js 3 pour l\'interface utilisateur, compilé avec Vite pour optimiser les performances. La visualisation 3D et le rendu augmenté font appel à Three.js et aux standards WebXR, garantissant une compatibilité cross-platform. Le backend est construit sur Express.js, un framework Node.js éprouvé, avec Sequelize comme ORM pour gérer les interactions avec la base de données. La solution supporte plusieurs moteurs de bases de données (SQLite pour le développement et MariaDB pour la production). L\'authentification est sécurisée par JWT (JSON Web Tokens), et l\'infrastructure intègre CORS pour permettre une communication sécurisée entre les différents services. Le système de fichiers gère dynamiquement l\'upload et le stockage des assets 3D, avec des mécanismes de validation robustes.',
      'L\'équipe a déployé un effort coordonné pour enrichir HERA de multiples fonctionnalités. Ma contribution se concentre sur trois améliorations majeures : premièrement, l\'implémentation de la fonctionnalité Rerun permettant de rejouer fidèlement les sessions utilisateur enregistrées avec synchronisation temporelle et interface de contrôle (play/pause/accélération), deuxièmement, un système de Popup de Contrôle du Traçage permettant d\'activer/désactiver l\'enregistrement des données utilisateur par projet, et troisièmement, un système de Popup de Lien vers Formulaire Externe permettant aux administrateurs de configurer des popups redirigeant vers des formulaires externes. En parallèle, l\'équipe a développé : l\'Export des Presets Multi-Utilisateurs pour faciliter le partage en mode présentation, l\'Import/Export des Labels avec Images pour une meilleure gestion des annotations, la création d\'une table DatabaseRecords enregistrant les données utilisateur par scène, et la Refonte des Presets avec nouvelles tables ArPreset et ArAction. L\'approche de développement a privilégié la compatibilité avec l\'architecture existante, en respectant les patterns établis et en étendant l\'ORM Sequelize. Ces fonctionnalités transforment HERA en système complet de création, exécution et analyse d\'expériences immersives.',
      'Les améliorations apportées ont étendu considérablement les capacités de HERA, transformant une plateforme d\'édition AR en système complet de création, configuration et d\'analyse. Le système de traçabilité utilisateur enregistre fidèlement chaque interaction avec capacité de rejeu fluide et contrôle granulaire via popup d\'activation/désactivation. Le système de popup redirigeant vers formulaires externes facilite la collecte de données sans complexité ajoutée. L\'export des presets multi-utilisateurs permet le partage efficace des configurations en mode présentation. L\'import/export des labels avec images offre une flexibilité accrue pour la gestion des annotations. La table DatabaseRecords assure une persistence robuste des données utilisateur par scène. La refonte avec tables ArPreset et ArAction améliore l\'architecture interne pour meilleure performance et maintenabilité. Ces additions ont été validées par des tests fonctionnels complets. L\'impact est considérable : la plateforme offre maintenant une solution production-ready combinant création AR, gestion flexible de configurations, collecte de données structurée avec contrôle de traçage et analyse comportementale en une seule plateforme.',
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
      { type: 'image', url: '/projects/hera-login.jpg', title: 'Authentification', description: 'Interface de connexion sécurisée avec email/mot de passe pour accès à l\'éditeur admin.' },
      { type: 'image', url: '/projects/hera-projects.jpg', title: 'Gestion des projets', description: 'Vue d\'ensemble des projets AR créés avec aperçu, statut de publication et actions rapides.' },
      { type: 'image', url: '/projects/hera-editor.jpg', title: 'Environnement d\'édition', description: 'Interface d\'édition 3D avec scène centrale, arborescence des objets et panneau d\'outils.' },
      { type: 'image', url: '/projects/hera-tools.jpg', title: 'Panneau de contrôle 3D', description: 'Contrôles de position, rotation et échelle permettant manipulation précise des éléments en scène.' },
      { type: 'image', url: '/projects/hera-assets.jpg', title: 'Bibliothèque de ressources', description: 'Interface de gestion des fichiers 3D avec upload, organisation et aperçu des assets disponibles.' },
      { type: 'image', url: '/projects/hera-mobile.jpg', title: 'Expérience augmentée', description: 'Rendu WebXR sur appareil mobile affichant la scène 3D intégrée dans l\'environnement réel.' },
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
    team: 'Clément LACHIZE (Flutter), Clément LACHIZE (Backend), Damien Millot (API)',
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
