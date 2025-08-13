"use client";

import dynamic from 'next/dynamic';

// We are using next/dynamic to load our wrapper component only in the browser
const StudioWrapper = dynamic(() => import('../../../components/StudioWrapper'), {
  ssr: false, // This now works because the file is a Client Component
});

export default function StudioPage() {
  return <StudioWrapper />;
}