"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config"; // This path is now corrected

export default function StudioPage() {
  return <NextStudio config={config} />;
}