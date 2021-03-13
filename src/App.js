import './App.css';
import Header from './components/Header';
import { Container, Grid, makeStyles } from '@material-ui/core';
import MainHero from './components/MainHero';
import Main from './components/Main';
import Sidebar from './components/SideBar';
import Footer from './components/Footer';
import consultImage from './menuImages/consult.jpeg';
import hospitalImage from './menuImages/hospital.jpeg';
import petShopImage from './menuImages/pet_shop.jpeg';
import groomingImage from './menuImages/grooming.jpeg';
import guardingImage from './menuImages/guarding.jpeg';
import { Instagram as InstagramIcon, Twitter as TwitterIcon, Facebook as FacebookIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  outerContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  innerContainer: {
    flexGrow: 1
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const siteMeta = {
  title: 'Clinica veterinaria',
  subtitle: 'Cuidamos de tus mascotas',
  about: 'Bienvenido a la Clínica Veterinaria, nuestra clínica veterinaria, convenientemente situada cerca del Somewhere.  Aquí le proporcionamos la mejor calidad de atención sanitaria para su mascota. Nuestra misión es ayudar a su mascota de una manera compasiva y eficiente.',
  social: [
    { name: 'Instagram', icon: InstagramIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
  pages: [
    { title: 'Consulta Clinica', url: '#', image: consultImage },
    { title: 'Hospitalizacion', url: '#', image: hospitalImage },
    { title: 'Tienda', url: '#', image: petShopImage },
    { title: 'Peluqeria', url: '#', image: groomingImage },
    { title: 'Guarderia', url: '#', image: guardingImage },
  ],
  alertMessage: 'En caso de emergenica  se oferta la atención urgente a domicilio los 7 días de la semana de las 22:00 a las 08:30. Contacto: 643 321 321',
  footer: {
    title: 'More information',
    description: 'Contact: 643 321 321'
  }
}

const posts = [
  { title: 'Grumpy Cat', image: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80', description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ad corporis vero quis laboriosam aperiam eveniet voluptatem eum fuga suscipit!' },
  { title: 'Happy dog', image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80', description: 'Impedit ad corporis vero quis laboriosam aperiam eveniet voluptatem eum fuga suscipit!' },
  { title: 'Another happy dog', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ad corporis vero quis laboriosam aperiam eveniet voluptatem eum', image: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' }
];

function App() {
  const classes = useStyles();

  return (
    <div className={classes.outerContainer}>
      <Container className={classes.innerContainer}>
        <Header title="Clinica Vet" pages={siteMeta.pages} alertMessage={siteMeta.alertMessage} />
        <main>
          <MainHero title={siteMeta.title} subtitle={siteMeta.subtitle} />
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main posts={posts} title="Recent happy clients" />
            <Sidebar about={siteMeta.about} social={siteMeta.social} />
          </Grid>
        </main>
      </Container>
      <Footer title={siteMeta.footer.title} description={siteMeta.footer.description} />
    </div>
  );
}

export default App;
