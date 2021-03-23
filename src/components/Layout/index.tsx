import Head from 'next/head';
import HeroSection from '../HeroSection/index';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel='shortcut icon'
          href='https://www.jungnapratica.com.br/wp-content/uploads/2019/05/icon-whatsApp.png'
          type='image/x-icon'
        />
      </Head>

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

      <div className='grid grid-cols-1 md:grid-cols-6 md:gap-2 p-4'>
        {children}
      </div>
    </>
  );
}
