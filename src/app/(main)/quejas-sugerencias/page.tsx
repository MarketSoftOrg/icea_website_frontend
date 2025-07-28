import ComplaintsSuggestionsPage from '@/components/ui/legal/ComplaintSuggestionsPage';
import { getIceaCompanyInfo } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quejas y Sugerencias',
};

const companyInfo = getIceaCompanyInfo();

export default function QuejasPage() {
  return <ComplaintsSuggestionsPage company={companyInfo} />;
}
