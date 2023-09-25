import { SignedIn, SignedOut, UserButton, auth } from '@clerk/nextjs';
import GameWrapper from '@/components/GameWrapper';
import FreezeButton from '@/components/FreezeButton';
import LoginButton from '@/components/LoginButton';

// Disabling SSR for these since they don't work server side.
import dynamic from 'next/dynamic';
const MusicButton = dynamic(() => import('../components/MusicButton'), { ssr: false });

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between font-body game-background">
      <div className="p-6 absolute top-0 right-0 z-10 text-2xl">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>

        <SignedOut>
          <LoginButton />
        </SignedOut>
      </div>

      <div className="w-full min-h-screen relative isolate overflow-hidden p-2 lg:p-8 shadow-2xl flex flex-col justify-center">
        <h1 className="mx-auto text-center text-6xl sm:text-8xl lg:text-4xl font-bold font-display leading-none tracking-wide game-title" style={{lineHeight: '1.5'}}>
          无期迷途
        </h1>

        <p className="mx-auto text-center text-xl sm:text-base text-white leading-tight shadow-solid w-2/3">
        在众多受到“狂厄”影响的人群中，有极少数被称为“禁闭者”的个体获得了强大异能。这些个体表现出了比一般患者更深的精神异变程度，
        却仍保留了自我意识，没有最终崩坏。由于其远超普通人类的力量，因此，专门设立了MBCC来对禁闭者进行管理。
        </p>

        <GameWrapper />

        <footer className="absolute bottom-0 left-0 w-full flex items-center mt-4 gap-6 p-6 flex-wrap pointer-events-none">
          <div className="flex gap-4 flex-grow pointer-events-none">
            <MusicButton />
            <FreezeButton />
            {/* <a
              className="button text-white shadow-solid text-2xl pointer-events-auto"
              href="https://github.com/a16z-infra/ai-town"
            >
              <div className="inline-block bg-clay-700">
                <span>
                  <div className="inline-flex items-center gap-4">
                    <img className="w-6 h-6" src="/assets/star.svg" />
                    Star
                  </div>
                </span>
              </div>
            </a> */}
          </div>
        </footer>
      </div>
    </main>
  );
}
