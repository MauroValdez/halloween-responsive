import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

(async () => {
  await imagemin(["./source/img/*.{jpg,png}"], {
    destination: "./source/img",
    plugins: [
      imageminWebp({ quality: 50 }),
    ],
  });

  console.log("Images optimized");
})();