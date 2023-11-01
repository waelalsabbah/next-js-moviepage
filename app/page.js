import BackgroundSection from '../components/BackgroundSection/BackgroundSection';

const Home = () => {
  const backgroundImageUrl =
    'https://images.pexels.com/photos/390089/film-movie-motion-picture-390089.jpeg';

  return (
    <div>
      <BackgroundSection imageUrl={backgroundImageUrl} />
      {/* Other content */}
    </div>
  );
};

export default Home;
