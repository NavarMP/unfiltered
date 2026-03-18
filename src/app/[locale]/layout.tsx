import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { geistSans, geistMono, playfair, inter } from "@/lib/fonts";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScroll } from "@/components/animation/SmoothScroll";
import { FloatingNav } from "@/components/navigation/FloatingNav";
import { Header } from "@/components/navigation/Header";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { CustomContextMenu } from "@/components/ui/CustomContextMenu";
import { PersistentAudio } from "@/components/ui/PersistentAudio";
import "../globals.css";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Index' });
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${inter.variable} antialiased selection:bg-primary/30 font-inter`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProvider>
            <SmoothScroll>
              <CustomCursor />
              <Header />
              <div className="relative min-h-screen">
                <CustomContextMenu />
                <PersistentAudio />
                {/* Dynamic Background */}
                <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                   <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
                   <div className="absolute bottom-[0%] right-[-5%] w-[35%] h-[35%] bg-accent/15 rounded-full blur-[100px]" />
                </div>
                
                <main className="relative z-10 px-6 pt-24 pb-40 max-w-7xl mx-auto">
                  {children}
                </main>
                
                <FloatingNav />
              </div>
            </SmoothScroll>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
