'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/store'
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const storeRef = useRef<AppStore>(null)

  if (!storeRef.current) {
    storeRef.current = makeStore()
  }


  return (
    <html lang="en">
      <body>
        <Provider store={storeRef.current}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
