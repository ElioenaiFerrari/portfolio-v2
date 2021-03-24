import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';

export default function Home() {
  return (
    <Layout
      title='Portfolio'
      children={
        <>
          <HeroSection
            logoSrc='/images/rocket.gif'
            title={['Quality work at a ', 'fair price']}
            description='I am a fullstack software engineer, and I love technology. I
        hope you love my work :D'
            imageSrc='/images/astronaut.gif'
            topics={[
              { name: 'Jobs', path: '/jobs' },
              { name: 'About me', path: '/about-me' },
              { name: 'Contact', path: '/contact' },
            ]}
          />

          <FeatureSection
            title='Hello'
            subtitle='My'
            description='buddy'
            features={[
              {
                image: '/image/astronaut.gif',
                title: 'Fuck',
                description: 'the world',
              },
            ]}
          />
        </>
      }
    />
  );
}
