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
    { x: 50, y: 30, width: 100, height: 15, link: "/organelle/nucleus", name: "Nucleus" },
    { x: 558, y: 158, width: 105, height: 15, link: "/organelle/mitochondria", name: "Mitochondria" },
    { x: 70, y: 192, width: 110, height: 30, link: "/organelle/golgi", name: "Golgi Apparatus" },
    { x: 558, y: 120, width: 100, height: 15, link: "/organelle/lysosome", name: "Lysosome" },
    { x: 80, y: 230, width: 100, height: 15, link: "/organelle/ribosome", name: "Ribosome" },
    { x: 220, y: 180, width: 130, height: 15, link: "/organelle/endoplasmic-reticulum", name: "ER" },
    { x: 430, y: 200, width: 120, height: 15, link: "/organelle/cell-membrane", name: "Cell Membrane" },
    { x: 558, y: 327, width: 90, height: 15, link: "/organelle/cytoplasm", name: "Cytoplasm" }, // DONE
    { x: 560, y: 80, width: 100, height: 15, link: "/organelle/peroxisome", name: "Peroxisome" },
    { x: 557, y: 365, width: 120, height: 30, link: "/organelle/centrosome", name: "Centrosome" },
    { x: 380, y: 310, width: 120, height: 15, link: "/organelle/microtubules", name: "Microtubules" },
    { x: 558, y: 346, width: 115, height: 15, link: "/organelle/secretory-vesicle", name: "Secretory Vesicle" },
    { x: 50, y: 380, width: 100, height: 15, link: "/organelle/nucleolus", name: "Nucleolus" },
    { x: 220, y: 400, width: 120, height: 15, link: "/organelle/chromatin", name: "Chromatin" },
    { x: 60, y: 172, width: 120, height: 15, link: "/organelle/plasma-membrane", name: "Plasma Membrane" },
    { x: 550, y: 450, width: 120, height: 15, link: "/organelle/glycocalyx", name: "Glycocalyx" },
    { x: 40, y: 490, width: 100, height: 15, link: "/organelle/nuclear-membrane", name: "Nuclear Membrane" },
    { x: 200, y: 510, width: 120, height: 15, link: "/organelle/microfilaments", name: "Microfilaments" },
    { x: 400, y: 530, width: 120, height: 15, link: "/organelle/intermediate-filaments", name: "Intermediate Filaments" },
    { x: 540, y: 600, width: 130, height: 15, link: "/organelle/inclusions", name: "Inclusions" },
    { x: 50, y: 590, width: 100, height: 15, link: "/organelle/extracellular-matrix", name: "Extracellular Matrix" },
  ];

  return (
    <Stage width={700} height={468}>
      <Layer>
        {/* Render the image only if it has loaded */}
        {image && <Image image={image} width={700} height={468} />}
  
        {/* Clickable Label Areas */}
        {labelAreas.map((area, index) => (
          <React.Fragment key={index}>
            {/* Label Name Above the Box */}
            <Text
              x={area.x}
              y={area.y} // Position slightly above the rectangle
              text={area.name}
              fontSize={14}
              fill="black"
              fontStyle="bold"
              align="center"
              width={area.width}
            />
            {/* Clickable Rectangle */}
            <Rect
              x={area.x}
              y={area.y}
              width={area.width}
              height={area.height}
              fill="rgba(0, 0, 0, 0.3)" // Light blue for visibility
              stroke="blue"
              strokeWidth={1}
              cornerRadius={4}
              onClick={() => router.push(area.link)}
              onMouseEnter={(e) => {
                const stage = e.target.getStage();
                if (stage) stage.container().style.cursor = "pointer";
                e.target.setAttrs({ fill: "rgba(255, 0, 0, 0.5)" });
              }}
              onMouseLeave={(e) => {
                const stage = e.target.getStage();
                if (stage) stage.container().style.cursor = "default";
                e.target.setAttrs({ fill: "rgba(0, 0, 0, 0.3)" });
              }}
            />
          </React.Fragment>
        ))}
      </Layer>
    </Stage>
  );
  
};

export default AnimalCellDiagram;
