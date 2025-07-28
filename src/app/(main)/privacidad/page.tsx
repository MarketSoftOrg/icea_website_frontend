import PrivacyPolicy from '@/components/ui/legal/PrivacyPolicy';
import { getIceaCompanyInfo } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacidad',
};

const CompanyInfo = getIceaCompanyInfo();

export default function PrivacidadPage() {
  return <PrivacyPolicy company={CompanyInfo} />;
}
