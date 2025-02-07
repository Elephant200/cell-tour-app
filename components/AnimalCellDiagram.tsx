"use client";

import { useEffect, useState } from "react";
import { Stage, Layer, Image, Rect, Text } from "react-konva";
import { useRouter } from "next/navigation";
import React from "react";

const AnimalCellDiagram = () => {
  const router = useRouter();
  const [image, setImage] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const img = new window.Image();
      img.src = "/animal-cell.png"; // Ensure it's inside the `public/` folder
      img.onload = () => setImage(img);
    }
  }, []);

  const labelAreas = [
    // Nucleus section
    { x: 180, y: 7.5, width: 110, height: 100, link: "/organelle/nucleus", name: "Nucleus" },
    { x: 200, y: 22.5, width: 90, height: 15, link: "/organelle/nuclear-pore", name: "Nuclear Pore" },
    { x: 210, y: 37.5, width: 80, height: 15, link: "/organelle/chromatin", name: "Chromatin" },
    { x: 185, y: 52.5, width: 105, height: 15, link: "/organelle/nuclear-envelope", name: "Nuclear Envelope" },
    { x: 210, y: 82.5, width: 80, height: 15, link: "/organelle/nucleolus", name: "Nucleolus" },

    // Left side
    { x: 60, y: 172.5, width: 120, height: 15, link: "/organelle/plasma-membrane", name: "Plasma Membrane" },
    { x: 70, y: 192.5, width: 110, height: 30, link: "/organelle/golgi", name: "Golgi Apparatus" }, 
    { x: 80, y: 230, width: 100, height: 15, link: "/organelle/ribosome", name: "Ribosome" },
    { x: 10, y: 250, width: 170, height: 15, link: "/organelle/rough-endoplasmic-reticulum", name: "Rough Endoplasmic Reticulum" },
    { x: 0, y: 270, width: 180, height: 15, link: "/organelle/smooth-endoplasmic-reticulum", name: "Smooth Endoplasmic Reticulum" },
    { x: 70, y: 290, width: 110, height: 15, link: "/organelle/cytoskeleton", name: "Actin Filaments" },
    
    // Right side (upper)
    { x: 558, y: 80, width: 100, height: 15, link: "/organelle/peroxisome", name: "Peroxisome" },
    { x: 558, y: 100, width: 100, height: 15, link: "/organelle/microtubules", name: "Microtubules" },
    { x: 558, y: 120, width: 100, height: 15, link: "/organelle/lysosome", name: "Lysosome" },
    { x: 558, y: 140, width: 110, height: 15, link: "/organelle/ribosome", name: "Free Ribosome" },
    { x: 558, y: 159, width: 110, height: 15, link: "/organelle/mitochondria", name: "Mitochondrion" },
    { x: 558, y: 178, width: 140, height: 15, link: "/organelle/cytoskeleton", name: "Intermediate Filaments" },

    // Right side (lower)
    { x: 558, y: 327, width: 90, height: 15, link: "/organelle/cytoplasm", name: "Cytoplasm" },    
    { x: 558, y: 346, width: 115, height: 15, link: "/organelle/secretory-vesicle", name: "Secretory Vesicle" },
    { x: 557, y: 365, width: 120, height: 30, link: "/organelle/centrosome", name: "Centrosome" },

    // Bottom
    { x: 270, y: 415, width: 80, height: 15, link: "/organelle/flagellum", name: "Flagellum" },
  ];

  return (
    <Stage width={700} height={468}>
      <Layer>
        {/* Render the image only if it has loaded */}
        {image && <Image image={image} width={700} height={468} />}
  
        {/* Clickable Label Areas */}
        {labelAreas.map((area, index) => (
          <React.Fragment key={index}>
            {/* Clickable Rectangle */}
            <Rect
              x={area.x}
              y={area.y}
              width={area.width}
              height={area.height}
              fill="rgba(0, 0, 0, 0)" // Light blue for visibility
              //stroke="blue"
              strokeWidth={1}
              cornerRadius={4}
              onClick={() => router.push(area.link)}
              onMouseEnter={(e) => {
                const stage = e.target.getStage();
                if (stage) stage.container().style.cursor = "pointer";
                e.target.setAttrs({ fill: "rgba(255, 0, 0, 0)" });
              }}
              onMouseLeave={(e) => {
                const stage = e.target.getStage();
                if (stage) stage.container().style.cursor = "default";
                e.target.setAttrs({ fill: "rgba(0, 0, 0, 0)" });
              }}
            />
          </React.Fragment>
        ))}
      </Layer>
    </Stage>
  );
  
};

export default AnimalCellDiagram;
