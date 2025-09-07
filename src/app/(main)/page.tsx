import type { Metadata } from 'next';
import ValuesCard from './components/ui/ValuesCard';
import MisionVisionCard from './components/ui/MisionVisionCard';
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
        <MisionVisionCard />
      </MainPageContentContainer>
      <MainPageContentContainer>
        <ValuesCard
          title="Nuestros Valores"
          subtitle="Los principios que guían cada una de nuestras acciones"
          values={valuesicea}
        />
      </MainPageContentContainer>

      <AboutICEA
        title="¿QUIÉNES SOMOS?"
        description={`Somos Carnes Selectas ICEA, una empresa originaria de Jalisco, México, dedicada a la comercialización de productos cárnicos de la más alta calidad. Nos destacamos por ofrecer una amplia diversidad de cortes selectos, siempre frescos y con los más altos estándares de inocuidad. Nuestro compromiso va más allá del producto: brindamos un servicio excepcional. Fusionamos tradición, sabor y excelencia para llevar a tu mesa lo mejor.`}
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
