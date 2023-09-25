import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import ConvexClientProvider from './ConvexClientProvider';
import localFont from 'next/font/local';
import clsx from 'clsx';

export const metadata = {
  title: '无期迷途',
  description: '在众多受到“狂厄”影响的人群中,有极少数被称为“禁闭者”的个体获得了强大异能。这些个体表现出了比一般患者更深的精神异变程度，却仍保留了自我意识，没有最终崩坏。由于其远超普通人类的力量，因此，专门设立了MBCC来对禁闭者进行管理。',
};

const fontDisplay = localFont({
  src: '../../public/assets/fonts/upheaval_pro.ttf',
  variable: '--font-display',
});
const fontBody = localFont({
  src: '../../public/assets/fonts/vcr_osd_mono.ttf',
  variable: '--font-body',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <ConvexClientProvider>
        <html lang="en">
          <body className={clsx(fontDisplay.variable, fontBody.variable)}>{children}</body>
        </html>
      </ConvexClientProvider>
    </ClerkProvider>
  );
}
