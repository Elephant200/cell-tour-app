"use client";

import dynamic from "next/dynamic";

const AnimalCellDiagramWrapper = dynamic(() => import("./AnimalCellDiagram"), {
  ssr: false,
});

export default AnimalCellDiagramWrapper;
