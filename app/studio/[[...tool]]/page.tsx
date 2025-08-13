"use client";

import dynamic from 'next/dynamic';
import StudioWrapper from "../../../components/StudioWrapper";

// This dynamically loads our wrapper, but only in the browser (ssr: false)
const DynamicStudio = dynamic(() => import('../../../components/StudioWrapper'), {
  ssr: false, 
});

export default function StudioPage() {
  return <DynamicStudio />;
}