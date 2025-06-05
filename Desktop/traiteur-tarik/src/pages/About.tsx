import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PeopleIcon from '@mui/icons-material/People';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

const About = () => {
  const theme = useTheme();

  const values = [
    {
      icon: <RestaurantIcon sx={{ fontSize: 60 }} />,
      title: 'Excellence Culinaire',
      description: 'Nous nous engageons à offrir une cuisine d\'exception en utilisant les meilleurs ingrédients et en respectant les traditions culinaires.',
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 60 }} />,
      title: 'Innovation',
      description: 'Nous créons constamment de nouvelles recettes et concepts pour surprendre et ravir nos clients.',
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 60 }} />,
      title: 'Service Personnalisé',
      description: 'Chaque événement est unique. Nous travaillons en étroite collaboration avec nos clients pour créer une expérience sur mesure.',
    },
    {
      icon: <LocalDiningIcon sx={{ fontSize: 60 }} />,
      title: 'Qualité',
      description: 'Nous sélectionnons avec soin nos fournisseurs et contrôlons chaque étape de la préparation pour garantir une qualité irréprochable.',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/about-hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: 12,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            align="center"
            sx={{ mb: 2 }}
          >
            Notre Histoire
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{ maxWidth: '800px', mx: 'auto' }}
          >
            Une passion pour la gastronomie depuis plus de 15 ans
          </Typography>
        </Container>
      </Box>

      {/* Story Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          <Box sx={{ flex: '1 1 400px' }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Notre Passion
            </Typography>
            <Typography paragraph>
              Fondé par Tarik Benkiran, notre service traiteur est né d'une passion pour la gastronomie et le service. Avec plus de 15 ans d'expérience dans le domaine de la restauration, nous avons développé une expertise unique dans l'art de la cuisine événementielle.
            </Typography>
            <Typography paragraph>
              Notre équipe de chefs passionnés et de professionnels du service s'engage à créer des moments inoubliables pour vos événements. Nous combinons tradition et innovation pour offrir une expérience culinaire exceptionnelle.
            </Typography>
          </Box>
          <Box sx={{ flex: '1 1 400px' }}>
            <Box
              component="img"
              src="/images/chef.jpg"
              alt="Notre équipe"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* Values Section */}
      <Box sx={{ backgroundColor: theme.palette.grey[100], py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{ mb: 6 }}
          >
            Nos Valeurs
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {values.map((value) => (
              <Box key={value.title} sx={{ flex: '1 1 250px' }}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 3,
                  }}
                >
                  <Box sx={{ color: theme.palette.primary.main, mb: 2 }}>
                    {value.icon}
                  </Box>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {value.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Team Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{ mb: 6 }}
        >
          Notre Équipe
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ maxWidth: '800px', mx: 'auto', mb: 6 }}
        >
          Une équipe de professionnels passionnés, dédiés à l'excellence et au service client. Chaque membre de notre équipe apporte son expertise et sa créativité pour faire de vos événements des moments inoubliables.
        </Typography>
      </Container>
    </Box>
  );
};

export default About; 