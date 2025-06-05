import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  useTheme,
} from '@mui/material';

const Home = () => {
  const theme = useTheme();

  const services = [
    {
      title: 'Mariages',
      description: 'Des moments inoubliables avec une cuisine d\'exception',
      image: '/images/wedding.jpg',
    },
    {
      title: 'Événements d\'entreprise',
      description: 'Des prestations professionnelles pour vos réunions et séminaires',
      image: '/images/corporate.jpg',
    },
    {
      title: 'Buffet',
      description: 'Des buffets raffinés pour vos événements',
      image: '/images/buffet.jpg',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("/images/hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          // tous le contenu est centré verticalement et horizontalement
          textAlign: 'center',
          padding: '20px',
          // tous le contenu est centré verticalement et horizontalement
          // le "Une expérience culinaire exceptionnelle pour vos événements" doit etre en dessous du titre 
          flexDirection: 'column',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Traiteur Tarik Benkiran
          </Typography>
          {/* <Typography
            variant="h4"
            sx={{
              mb: 4,
              maxWidth: '600px',
              fontWeight: 400,
              fontSize: { xs: '1.5rem', md: '2rem' },
            }}
          >
            Une expérience culinaire exceptionnelle pour vos événements
          </Typography> */}
           <Typography
            variant="h4"
            component="h4"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 500,
              mb: 2,
            }}
          >
            Une expérience culinaire exceptionnelle pour vos événements
          </Typography>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mr: 2 }}
          >
            Demander un devis
          </Button>
          <Button
            component={RouterLink}
            to="/services"
            variant="outlined"
            color="inherit"
            size="large"
          >
            Découvrir nos services
          </Button>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{ mb: 6 }}
        >
          Nos Services
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {services.map((service) => (
            <Box sx={{ flex: '1 1 300px' }} key={service.title}>
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
                  height="200"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {service.title}
                  </Typography>
                  <Typography>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Call to Action Section */}
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: 'white',
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
            Prêt à créer un événement mémorable ?
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              color="secondary"
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

export default Home; 