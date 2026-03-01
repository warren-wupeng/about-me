import React from 'react';
import '../styles/global.css';
import Head from 'next/head';

const App = ({ Component, pageProps }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickAnywhere = () => {
    // Only auto-focus on desktop (pointer: fine = mouse)
    // On mobile this would pop the keyboard every time the user taps to scroll
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
          key="viewport"
        />
      </Head>

      <div
        className="text-light-foreground dark:text-dark-foreground w-full text-xs md:text-base overflow-x-hidden"
        onClick={onClickAnywhere}
      >
        <main className="bg-light-background dark:bg-dark-background w-full h-full p-2">
          <Component {...pageProps} inputRef={inputRef} />
        </main>
      </div>
    </>
  );
};

export default App;
