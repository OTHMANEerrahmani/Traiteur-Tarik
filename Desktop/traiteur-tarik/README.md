# Traiteur Tarik Benkiran - Site Web

Site web professionnel pour le service traiteur Tarik Benkiran, présentant les services, la galerie et permettant aux clients de demander des devis.

## Technologies Utilisées

- React
- TypeScript
- Material-UI
- React Router
- Styled Components

## Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn

## Installation

1. Clonez le dépôt :
```bash
git clone [URL_DU_REPO]
cd traiteur-tarik
```

2. Installez les dépendances :
```bash
npm install
# ou
yarn install
```

3. Lancez le serveur de développement :
```bash
npm start
# ou
yarn start
```

Le site sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

## Structure du Projet

```
traiteur-tarik/
├── public/
│   └── images/
│       └── gallery/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── Gallery.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── styles/
│   ├── utils/
│   ├── App.tsx
│   └── index.tsx
└── package.json
```

## Fonctionnalités

- Design responsive
- Navigation intuitive
- Galerie de photos avec filtres
- Formulaire de contact
- Présentation des services
- Page À propos
- Intégration des réseaux sociaux

## Personnalisation

Pour personnaliser le site :

1. Modifiez les images dans le dossier `public/images/`
2. Ajustez les textes dans les composants
3. Modifiez les couleurs dans le thème Material-UI (src/App.tsx)
4. Ajoutez ou modifiez les services dans les composants correspondants

## Déploiement

Pour construire le site pour la production :

```bash
npm run build
# ou
yarn build
```

Les fichiers de production seront générés dans le dossier `build/`.

## Contribution

1. Fork le projet
2. Créez une branche pour votre fonctionnalité
3. Committez vos changements
4. Poussez vers la branche
5. Ouvrez une Pull Request

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.
