import { Camera, HourglassMedium, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import { ScreenshotBackground } from "./style";
import ReactDOM from "react-dom";

interface ScreenshotButtonProps {
  onScreenshotTook: (screenshot: string | null) => void;
  screenshot: string | null;
}

export function ScreenshotButton({
  screenshot,
  onScreenshotTook,
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setisTakingScreenshot] = useState(false);
  //função que tira foto
  async function handleTakeScreenshot() {
    setisTakingScreenshot(true);

    console.log(document.querySelector("#html") )

    var htmlSource =
      document.querySelector("#html") || document.createElement("div");
    //O ponto de exclamação no final garante que nunca vai se nula
    //ou seja, sempre haverá uma tag html no meu documento html :D
    await html2canvas(htmlSource).then(function (
      canvas
    ) {
      const base64image = canvas.toDataURL("image/png");
      onScreenshotTook(base64image);
      setisTakingScreenshot(false);
    });
  }
  if (screenshot) {
    return (
      <ScreenshotBackground>
        <button
          type="button"
          className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
          onClick={() => onScreenshotTook(null)}
          style={{
            backgroundImage: `url(${screenshot})`,
            backgroundPosition: "right bottom",
            backgroundSize: 180,
          }}
        >
          <Trash weight="fill" />
        </button>
      </ScreenshotBackground>
    );
  }
  return (
    <ScreenshotBackground>
      <button
        type="button"
        onClick={handleTakeScreenshot}
        className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
      >
        {isTakingScreenshot ? (
          <HourglassMedium />
        ) : (
          <Camera className="w-6 h-6 text-zinc-100" />
        )}
      </button>
    </ScreenshotBackground>
  );
}
