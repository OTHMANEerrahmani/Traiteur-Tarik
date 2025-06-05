import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  useTheme,
  Snackbar,
  Alert,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour envoyer le formulaire
    setSnackbar({
      open: true,
      message: 'Votre message a été envoyé avec succès !',
      severity: 'success',
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      guestCount: '',
      message: '',
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

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
            Contactez-nous
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{ maxWidth: '800px', mx: 'auto' }}
          >
            Nous sommes à votre écoute pour tous vos projets
          </Typography>
        </Container>
      </Box>

      {/* Contact Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {/* Contact Form */}
          <Box sx={{ flex: '1 1 600px' }}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h4" component="h2" gutterBottom>
                Demande de devis
              </Typography>
              <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                  <Box sx={{ flex: '1 1 250px' }}>
                    <TextField
                      required
                      fullWidth
                      label="Nom"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Box>
                  <Box sx={{ flex: '1 1 250px' }}>
                    <TextField
                      required
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Box>
                  <Box sx={{ flex: '1 1 250px' }}>
                    <TextField
                      fullWidth
                      label="Téléphone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Box>
                  <Box sx={{ flex: '1 1 250px' }}>
                    <TextField
                      required
                      fullWidth
                      label="Type d'événement"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                    />
                  </Box>
                  <Box sx={{ flex: '1 1 250px' }}>
                    <TextField
                      fullWidth
                      label="Date de l'événement"
                      name="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={handleChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Box>
                  <Box sx={{ flex: '1 1 250px' }}>
                    <TextField
                      fullWidth
                      label="Nombre d'invités"
                      name="guestCount"
                      type="number"
                      value={formData.guestCount}
                      onChange={handleChange}
                    />
                  </Box>
                  <Box sx={{ flex: '1 1 100%' }}>
                    <TextField
                      required
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Box>
                  <Box sx={{ flex: '1 1 100%' }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                    >
                      Envoyer
                    </Button>
                  </Box>
                </Box>
              </form>
            </Paper>
          </Box>

          {/* Contact Information */}
          <Box sx={{ flex: '1 1 300px' }}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h4" component="h2" gutterBottom>
                Informations
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <LocationOnIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
                  <Typography>
                    123 Rue de la Gastronomie
                    <br />
                    75000 Paris, France
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <PhoneIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
                  <Typography>+33 1 23 45 67 89</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <EmailIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
                  <Typography>contact@traiteur-tarik.com</Typography>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 