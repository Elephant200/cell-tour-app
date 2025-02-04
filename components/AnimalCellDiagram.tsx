"use client";

import { useEffect, useState } from "react";
import { Stage, Layer, Image, Rect } from "react-konva";
import { useRouter } from "next/navigation";

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
    { x: 50, y: 30, width: 100, height: 30, link: "/organelle/nucleus" },
    { x: 200, y: 50, width: 120, height: 30, link: "/organelle/mitochondria" },
    { x: 400, y: 70, width: 110, height: 30, link: "/organelle/golgi" },
    { x: 550, y: 100, width: 120, height: 30, link: "/organelle/lysosome" },
    { x: 50, y: 160, width: 100, height: 30, link: "/organelle/ribosome" },
    { x: 220, y: 180, width: 130, height: 30, link: "/organelle/endoplasmic-reticulum" },
    { x: 430, y: 200, width: 120, height: 30, link: "/organelle/cell-membrane" },
    { x: 580, y: 230, width: 110, height: 30, link: "/organelle/cytoplasm" },
    { x: 40, y: 270, width: 100, height: 30, link: "/organelle/peroxisome" },
    { x: 200, y: 290, width: 120, height: 30, link: "/organelle/centrosome" },
    { x: 380, y: 310, width: 120, height: 30, link: "/organelle/microtubules" },
    { x: 540, y: 340, width: 130, height: 30, link: "/organelle/vacuole" },
    { x: 50, y: 380, width: 100, height: 30, link: "/organelle/nucleolus" },
    { x: 220, y: 400, width: 120, height: 30, link: "/organelle/chromatin" },
    { x: 400, y: 420, width: 110, height: 30, link: "/organelle/plasma-membrane" },
    { x: 550, y: 450, width: 120, height: 30, link: "/organelle/glycocalyx" },
    { x: 40, y: 490, width: 100, height: 30, link: "/organelle/nuclear-membrane" },
    { x: 200, y: 510, width: 120, height: 30, link: "/organelle/microfilaments" },
    { x: 400, y: 530, width: 120, height: 30, link: "/organelle/intermediate-filaments" },
    { x: 540, y: 560, width: 130, height: 30, link: "/organelle/inclusions" },
    { x: 50, y: 590, width: 100, height: 30, link: "/organelle/extracellular-matrix" },
  ];

  return (
    <Stage width={700} height={700}>
      <Layer>
        {/* Render the image only if it has loaded */}
        {image && <Image image={image} width={700} height={700} />}

        {/* Clickable Label Areas */}
        {labelAreas.map((area, index) => (
          <Rect
            key={index}
            x={area.x}
            y={area.y}
            width={area.width}
            height={area.height}
            fill="rgba(0, 0, 255, 0.3)" // Light blue for visibility
            stroke="blue"
            strokeWidth={1}
            cornerRadius={4}
            onClick={() => router.push(area.link)}
            onMouseEnter={(e) => e.target.setAttrs({ fill: "rgba(255, 0, 0, 0.5)" })}
            onMouseLeave={(e) => e.target.setAttrs({ fill: "rgba(0, 0, 255, 0.3)" })}
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default AnimalCellDiagram;
