import { useState, useRef } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import { meal, INTRO_TEXTS } from "../../constants";
import "./Intro.css";

// Intro Komponente: Zeigt ein Video mit Play/Pause-Funktionalität an
export const Intro = () => {
  // State für den Wiedergabestatus des Videos
  const [playVideo, setPlayVideo] = useState(false);
  // Ref für den Zugriff auf das Video-Element
  const vidRef = useRef();

  // Funktion zum Umschalten zwischen Play und Pause
  const handlePlayPause = () => {
    setPlayVideo(!playVideo);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="app__video">
      {/* Video-Element */}
      <video
        title="Stummes Video über unser Essen"
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false} // Versteckt die Standard-Videosteuerung
        muted
        aria-label={`${INTRO_TEXTS.VIDEO_ARIA_LABEL}. Dieses Video hat keinen Ton.`} // Beschreibung für Screenreader
      />
      {/* Overlay für den Play/Pause-Button */}
      <div className="app__video-overlay flex__center">
        <button
          className="app__video-overlay_circle flex__center"
          onClick={handlePlayPause}
          aria-label={playVideo ? INTRO_TEXTS.PAUSE_BUTTON_LABEL : INTRO_TEXTS.PLAY_BUTTON_LABEL} // Dynamisches aria-label für Barrierefreiheit
        >
          {/* Zeigt entweder das Pause- oder Play-Icon an, basierend auf dem Wiedergabestatus */}
          {playVideo ? (
            <BsPauseFill color="var(--color-crimson)" fontSize={30} aria-hidden="true" />
          ) : (
            <BsFillPlayFill color="var(--color-crimson)" fontSize={30} aria-hidden="true" />
          )}
        </button>
      </div>
      {/* Versteckter Text für Screenreader, der den aktuellen Videostatus angibt */}
      <div className="sr-only" aria-live="polite">
        {playVideo ? INTRO_TEXTS.PLAYING_STATUS : INTRO_TEXTS.PAUSED_STATUS}
      </div>
    </div>
  );
};



