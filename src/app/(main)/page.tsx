import type { Metadata } from 'next';
import ValuesCard from './components/ui/ValuesCard';
import { SucursalCardContainer } from './components/ui/SucursalCard/SucursalCardContainer';
import MainPageContentContainer from './components/ui/MainPageContentContainer';
import AboutICEA from './components/ui/AboutUs';
import ContactSection from './components/ui/Contact';
import BackToTopButton from './components/ui/BackToTopBtn';
import { getCompanies, getIceaStats, getValuesIcea } from '@/lib/data';
import Header from './components/ui/Header';

export const metadata: Metadata = {
  title: 'Inicio',
};

export default async function HomePage() {
  const valuesicea = await getValuesIcea();
  const companies = await getCompanies();
  const iceastats = await getIceaStats();

  return (
    <section className="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center text-center bg-gradient-to-b from-[#F8D8B5]/10 via-[#F8D8B5]/50 to-[#F8D8B5]">
      <Header />

      <MainPageContentContainer>
        <ValuesCard
          title="Nuestros Valores"
          subtitle="Los principios que guían cada una de nuestras acciones"
          values={valuesicea}
        />
      </MainPageContentContainer>

      <AboutICEA
        title="Sobre Grupo ICEA"
        description={`Grupo ICEA es una corporación mexicana fundada con el propósito de revolucionar la industria alimentaria a través de la innovación, calidad y excelencia operativa.\n\nNuestro portafolio incluye empresas líderes en diferentes segmentos del sector alimentario, desde carnicerías especializadas hasta distribución de alimentos frescos, siempre manteniendo nuestro compromiso con la calidad y la satisfacción del cliente.`}
        stats={iceastats}
        companies={companies}
      />

      <MainPageContentContainer id="sucursales">
        <SucursalCardContainer />
      </MainPageContentContainer>

      <MainPageContentContainer id="contacto">
        <ContactSection />
      </MainPageContentContainer>

      <BackToTopButton />
    </section>
  );
}
