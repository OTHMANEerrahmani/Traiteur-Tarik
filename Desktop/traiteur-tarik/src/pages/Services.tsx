import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Services = () => {
  const theme = useTheme();

  const services = [
    {
      title: 'Mariages',
      description: 'Une expérience culinaire inoubliable pour votre grand jour',
      image: '/images/wedding-service.jpg',
      features: [
        'Menu personnalisé',
        'Service à table',
        'Buffet cocktail',
        'Gâteau de mariage',
        'Service de boissons',
      ],
    },
    {
      title: 'Événements d\'entreprise',
      description: 'Des prestations professionnelles pour vos réunions et séminaires',
      image: '/images/corporate-service.jpg',
      features: [
        'Pause café gourmande',
        'Déjeuner d\'affaires',
        'Cocktail networking',
        'Buffet froid',
        'Service traiteur complet',
      ],
    },
    {
      title: 'Cocktails & Apéritifs',
      description: 'Des mises en bouche raffinées pour vos soirées',
      image: '/images/cocktail-service.jpg',
      features: [
        'Mises en bouche variées',
        'Plateaux de charcuterie',
        'Plateaux de fromages',
        'Canapés créatifs',
        'Service de boissons',
      ],
    },
    {
      title: 'Anniversaires & Fêtes',
      description: 'Des moments de convivialité autour d\'une cuisine savoureuse',
      image: '/images/birthday-service.jpg',
      features: [
        'Buffet complet',
        'Service à table',
        'Gâteaux personnalisés',
        'Animation culinaire',
        'Service de boissons',
      ],
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: 'white',
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            align="center"
            sx={{ mb: 2 }}
          >
            Nos Services
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{ maxWidth: '800px', mx: 'auto' }}
          >
            Découvrez notre gamme complète de services traiteur pour tous vos événements
          </Typography>
        </Container>
      </Box>

      {/* Services Grid */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {services.map((service) => (
            <Box sx={{ flex: '1 1 400px' }} key={service.title}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h4" component="h2">
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    paragraph
                  >
                    {service.description}
                  </Typography>
                  <List>
                    {service.features.map((feature) => (
                      <ListItem key={feature}>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                  <Box sx={{ mt: 2, textAlign: 'center' }}>
                    <Button
                      component={RouterLink}
                      to="/contact"
                      variant="contained"
                      color="primary"
                    >
                      Demander un devis
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Call to Action */}
      <Box
        sx={{
          backgroundColor: theme.palette.grey[100],
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{ mb: 4 }}
          >
            Besoin d'un service personnalisé ?
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 4 }}
          >
            Nous créons des menus sur mesure adaptés à vos besoins et à votre budget
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              color="primary"
              size="large"
            >
              Contactez-nous
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Services; 