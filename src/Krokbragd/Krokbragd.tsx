type Props = {
  sett: number;
  ppi: number;
  width: number;
  height: number;
};

// drawing units per inch
const SCALE = 200;

export const Krokbragd = ({ sett, ppi, width, height }: Props) => {
  const stitchWidth = SCALE / sett;
  const stitchHeight = SCALE / ppi;

  const halfStitch = stitchWidth / 2;
  const controlDx = halfStitch / 2;

  const pathData = [];

  const heightCount = height / stitchHeight + 1;

  for (let y = 0; y < heightCount; y++) {
    pathData.push(`M ${-(y % 2) * halfStitch} ${y * stitchHeight}`);
    for (let x = 0; x < width + stitchWidth; x += stitchWidth) {
      pathData.push(
        `c ${controlDx} 0, ${controlDx} ${stitchHeight}, ${halfStitch} ${stitchHeight}`
      );
      pathData.push(
        `c ${controlDx} 0, ${controlDx} ${-stitchHeight}, ${halfStitch} ${-stitchHeight}`
      );
    }
  }

  return (
    <svg width={width} height={height}>
      <path d={pathData.join(" ")} stroke="black" fill="transparent" />
    </svg>
  );
};
