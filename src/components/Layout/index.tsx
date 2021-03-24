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

      <div className='bg-background'>{children}</div>
    </>
  );
}
