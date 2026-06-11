import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(__dirname, "..", "docs", "new assets", "Gemini_Generated_Image_bd7yfwbd7yfwbd7y.png");
const outDir = path.join(__dirname, "..", "public", "images");

const meta = await sharp(src).metadata();
const W = meta.width;
const H = meta.height;
console.log(`Source: ${W}x${H}`);

const colW = Math.floor(W / 3);
const rowH = Math.floor(H / 3);
const pad = 8; // trim grid borders/labels

const cases = [
  { row: 0, label: "implant",  beforeCol: 0, afterCol: 2 },
  { row: 1, label: "rct",      beforeCol: 0, afterCol: 2 },
  { row: 2, label: "smile",    beforeCol: 0, afterCol: 2 },
];

for (const c of cases) {
  const y = c.row * rowH + pad;
  const h = rowH - pad * 2 - 20; // extra bottom trim for labels

  const bx = c.beforeCol * colW + pad;
  const bw = colW - pad * 2;
  await sharp(src)
    .extract({ left: bx, top: y, width: bw, height: h })
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, `transform-before-${c.row + 1}.jpg`));

  const ax = c.afterCol * colW + pad;
  const aw = colW - pad * 2;
  await sharp(src)
    .extract({ left: ax, top: y, width: aw, height: h })
    .jpeg({ quality: 92 })
    .toFile(path.join(outDir, `transform-after-${c.row + 1}.jpg`));

  console.log(`${c.label}: before(${bx},${y} ${bw}x${h}) after(${ax},${y} ${aw}x${h})`);
}

console.log("Done! 6 images extracted.");
