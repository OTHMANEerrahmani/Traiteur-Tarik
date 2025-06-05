import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  useTheme,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          <Box sx={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" gutterBottom>
              Traiteur Tarik Benkiran
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Votre partenaire pour des événements mémorables
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton color="inherit" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Box>

          <Box sx={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Téléphone: +33 1 23 45 67 89
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Email: contact@traiteur-tarik.com
            </Typography>
            <Typography variant="body2">
              Adresse: 123 Rue de la Gastronomie, 75000 Paris
            </Typography>
          </Box>

          <Box sx={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" gutterBottom>
              Liens Rapides
            </Typography>
            <Link
              component={RouterLink}
              to="/services"
              color="inherit"
              display="block"
              sx={{ mb: 1 }}
            >
              Nos Services
            </Link>
            <Link
              component={RouterLink}
              to="/gallery"
              color="inherit"
              display="block"
              sx={{ mb: 1 }}
            >
              Galerie
            </Link>
            <Link
              component={RouterLink}
              to="/contact"
              color="inherit"
              display="block"
            >
              Contact
            </Link>
          </Box>
        </Box>

        <Box
          sx={{
            mt: 4,
            pt: 2,
            borderTop: 1,
            borderColor: 'rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Traiteur Tarik Benkiran. Tous droits réservés.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 