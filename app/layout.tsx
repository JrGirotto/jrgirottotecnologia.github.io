import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'JR GIROTTO TECNOLOGIA — Engenharia, Automação e Software',
  description: 'Serviços de TI para empresas, Automação Residencial e Projetos de Sonorização, e Programação Full Stack. Marília-SP e região.',
  metadataBase: new URL('https://www.jrgirotto.com.br'),
  keywords: ['Engenharia de Computação','CREA','Automação Residencial','TI Marília','Sonorização','Full Stack','NestJS','Flutter'],
  openGraph: {
    title: 'JR GIROTTO TECNOLOGIA',
    description: 'Engenharia e Tecnologia que Conectam o Futuro.',
    url: 'https://www.jrgirotto.com.br',
    siteName: 'JR GIROTTO TECNOLOGIA',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
    locale: 'pt_BR',
    type: 'website',
  },
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "JR Girotto Tecnologia",
    "url": "https://www.jrgirotto.com.br",
    "logo": "https://www.jrgirotto.com.br/logo.svg",
    "sameAs": ["https://www.futureon.com.br"],
    "address": {"@type":"PostalAddress","addressLocality":"Marília","addressRegion":"SP","addressCountry":"BR"}
  };
  return (
    <html lang="pt-BR">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
        {children}
      </body>
    </html>
  );
}
