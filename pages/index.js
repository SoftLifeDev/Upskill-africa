import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyWeb3 from '@/components/WhyWeb3';
import AboutSection from '@/components/AboutSection';
import MissionSection from '@/components/MissionSection';
import ImpactSection from '@/components/ImpactSection';
import JoinSection from '@/components/JoinSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Upskill Africa | Learn Blockchain & Web3</title>
        <meta name="description" content="Equip yourself with Blockchain and Web3 skills through Upskill Africa. Innovate, build, and lead in the digital economy." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Web3, Blockchain, Africa, Learn, Upskill" />
        <meta name="author" content="Upskill Africa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <WhyWeb3 />
        <AboutSection /> 
        <MissionSection /> 
        <ImpactSection />
        <JoinSection />
      </main>
    </>
  );
    }
