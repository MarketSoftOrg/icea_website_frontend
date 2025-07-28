import TermsConditions from '@/components/ui/legal/TermsConditions';
import { getIceaCompanyInfo } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terminos y Condiciones',
};

const companyInfo = getIceaCompanyInfo();

export default function Termino() {
  return <TermsConditions company={companyInfo} />;
}
