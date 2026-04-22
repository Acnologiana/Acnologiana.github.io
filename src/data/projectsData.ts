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
  media: {
    type: 'image' | 'video';
    url: string;
    title?: string;
    thumbnail?: string;
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
    shortDescription: 'Plateforme mobile de gestion de cantine/périscolaire.',
    fullDescription: 'Adaptation mobile d\'une plateforme complète de gestion de cantine et services périscolaires.',
    longDescription: [
      'Ropach Mobile est l\'adaptation mobile de la plateforme Ropach, conçue pour gérer les services de cantine et périscolaire.',
      'Implémentation d\'une architecture MVVM robuste garantissant une séparation claire des préoccupations.',
      'Utilisation du pattern Provider pour une gestion d\'état efficace et réactive.',
      'Intégration complète avec les APIs REST existantes pour une synchronisation en temps réel.',
    ],
    stack: ['Flutter', 'Dart', 'API REST', 'Provider', 'HTTP/JSON'],
    color: 'from-gold to-ash',
    glowColor: 'gold',
    isProfessional: true,
    features: [
      'Architecture MVVM complète',
      'Gestion d\'état avec Provider',
      'Intégration API REST',
      'Interface responsive',
      'Gestion des utilisateurs',
    ],
    challenges: [
      'Adapter le design desktop au mobile',
      'Implémenter une architecture scalable',
      'Gérer l\'offline-first efficacement',
    ],
    results: [
      'Application en production',
      'Meilleure accessibilité pour les utilisateurs',
      'Maintenance facilitée',
    ],
    team: 'Équipe alternance RPC',
    duration: '6 mois',
    date: '2024',
    media: [
      { type: 'image', url: '/projects/ropach-1.jpg', title: 'Dashboard' },
      { type: 'image', url: '/projects/ropach-2.jpg', title: 'Gestion de cantine' },
      { type: 'image', url: '/projects/ropach-3.jpg', title: 'Services périscolaires' },
    ],
  },
  {
    id: 3,
    title: 'HERA',
    shortDescription: 'Plateforme de Réalité Augmentée améliorée.',
    fullDescription: 'Amélioration et extension d\'une plateforme de Réalité Augmentée existante avec nouvelles fonctionnalités et optimisations.',
    longDescription: [
      'HERA est une plateforme de Réalité Augmentée qui a bénéficié d\'améliorations significatives.',
      'Ajout de fonctionnalités nouvelles comme les pop-ups interactives et les animations fluides.',
      'Refactorisation du code pour améliorer la stabilité globale de l\'application.',
      'Correction de bugs critiques affectant l\'expérience utilisateur en AR.',
      'Tests approfondis pour garantir une qualité maximale.',
    ],
    stack: ['JavaScript', 'SQL', 'Rerun', 'WebGL'],
    color: 'from-crimson-dark to-crimson',
    glowColor: 'crimson',
    isSAE: true,
    saeDetails: 'SAE - Réalité Augmentée & Innovation',
    features: [
      'Rendu 3D optimisé',
      'Système de pop-ups interactifs',
      'Gestion de base de données intégrée',
      'Expérience AR fluide',
      'Documentation complète',
    ],
    challenges: [
      'Optimiser les performances 3D',
      'Déboguer les problèmes complexes d\'AR',
      'Maintenir la compatibilité cross-navigateur',
    ],
    results: [
      'Plateforme stable et performante',
      'Utilisateurs satisfaits',
      'Base pour nouveaux projets AR',
    ],
    team: 'Équipe universitaire spécialisée en AR',
    duration: '4 mois',
    date: '2023',
    media: [
      { type: 'image', url: '/projects/hera-1.jpg', title: 'Interface AR' },
      { type: 'image', url: '/projects/hera-2.jpg', title: 'Rendu 3D' },
      { type: 'image', url: '/projects/hera-3.jpg', title: 'Pop-ups interactifs' },
      { type: 'image', url: '/projects/hera-4.jpg', title: 'Environnement AR' },
    ],
  },
];
