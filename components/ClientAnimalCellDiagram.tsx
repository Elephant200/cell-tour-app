"use client";

import dynamic from "next/dynamic";

const AnimalCellDiagram = dynamic(() => import("./AnimalCellDiagram"), {
  ssr: false,
});

export default AnimalCellDiagram;
