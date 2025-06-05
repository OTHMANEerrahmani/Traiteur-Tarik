import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Button,
  useTheme,
  Tabs,
  Tab,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const ImageCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const Gallery = () => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Tous' },
    { id: 'weddings', label: 'Mariages' },
    { id: 'corporate', label: 'Entreprises' },
    { id: 'cocktails', label: 'Cocktails' },
    { id: 'birthdays', label: 'Anniversaires' },
  ];

  const images = [
    {
      id: 1,
      category: 'weddings',
      src: '/images/gallery/wedding-1.jpg',
      title: 'Mariage - Buffet de mariage',
    },
    {
      id: 2,
      category: 'corporate',
      src: '/images/gallery/corporate-1.jpg',
      title: 'Événement d\'entreprise',
    },
    {
      id: 3,
      category: 'cocktails',
      src: '/images/gallery/cocktail-1.jpg',
      title: 'Cocktail dînatoire',
    },
    {
      id: 4,
      category: 'birthdays',
      src: '/images/gallery/birthday-1.jpg',
      title: 'Anniversaire',
    },
    // Ajoutez plus d'images ici
  ];

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(image => image.category === selectedCategory);

  const handleCategoryChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedCategory(newValue);
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
            Notre Galerie
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{ maxWidth: '800px', mx: 'auto' }}
          >
            Découvrez nos plus belles réalisations
          </Typography>
        </Container>
      </Box>

      {/* Gallery Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Category Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs
            value={selectedCategory}
            onChange={handleCategoryChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
          >
            {categories.map((category) => (
              <Tab
                key={category.id}
                value={category.id}
                label={category.label}
              />
            ))}
          </Tabs>
        </Box>

        {/* Image Grid */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {filteredImages.map((image) => (
            <Box sx={{ flex: '1 1 300px' }} key={image.id}>
              <ImageCard>
                <CardMedia
                  component="img"
                  height="300"
                  image={image.src}
                  alt={image.title}
                />
              </ImageCard>
            </Box>
          ))}
        </Box>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Vous avez un projet en tête ?
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/contact"
          >
            Contactez-nous
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Gallery; 