import { useState, useEffect } from "react";
import "./App.css";
import Cursor from "./components/Cursor/Cursor";
import MemoryWall from "./components/MemoryWall/MemoryWall";
import Hero from "./components/Hero/Hero";
import IntroSequence from "./components/IntroSequence/IntroSequence";
import { MusicPlayerProvider, useMusic } from "./components/MusicPlayer/MusicPlayer";
import ScrollPrompt from "./components/ScrollPrompt/ScrollPrompt";
import Letter from "./components/Letter/Letter";
import ChapterThree from "./components/ChapterThree/ChapterThree";
import introSong from "./assets/songs/using/hermaj-introfadein_[cut_27sec].mp3";

function AppContent() {
  const { play } = useMusic();
  const [storyState, setStoryState] = useState("gift");

  const handleOpen = () => {
    // Start the intro music on the user's click gesture. One audio instance,
    // plays once, continues seamlessly through the landing transition.
    play(introSong);
  };

  const handleReveal = () => {
    setStoryState("landing-entering");
  };

  const handleIntroComplete = () => {
    setStoryState("landing");
    setTimeout(() => {
      setStoryState("music-playing");
    }, 800);
  };

  useEffect(() => {
    const handleMusicEnded = () => {
      if (storyState === "music-playing") {
        setStoryState("music-finished");
        
        // Immediately fade in the invitation. No artificial delay.
        setStoryState("scroll-prompt");
        
        setTimeout(() => {
          setStoryState("scroll-unlocked");
        }, 1200); 
      }
    };
    
    window.addEventListener('music-ended', handleMusicEnded);
    return () => window.removeEventListener('music-ended', handleMusicEnded);
  }, [storyState]);

  const handlePromptClick = () => {
    const letter = document.getElementById("chapter-two-half");
    if (letter) {
      letter.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (storyState === "scroll-unlocked") {
      document.body.style.overflowY = "auto";
    } else {
      document.body.style.overflowY = "hidden";
    }
    
    return () => {
      document.body.style.overflowY = "auto"; 
    };
  }, [storyState]);

  const isIntroActive = storyState === "gift" || storyState === "opening" || storyState === "landing-entering";
  const isWallVisible = storyState !== "gift" && storyState !== "opening";
  const isHeroVisible = storyState === "music-playing" || storyState === "music-finished" || storyState === "scroll-prompt" || storyState === "scroll-unlocked";
  const isPromptVisible = storyState === "scroll-prompt" || storyState === "scroll-unlocked";
  const isChapterThreeVisible = storyState === "scroll-unlocked" || storyState === "scroll-prompt"; 

  return (
    <main className="app-root">
      <Cursor visible={!isIntroActive} />
      
      <section className="chapter-two-landing">
        {isIntroActive && (
          <IntroSequence 
            onOpen={handleOpen} 
            onReveal={handleReveal} 
            onComplete={handleIntroComplete} 
          />
        )}

        <MemoryWall visible={isWallVisible} />
        <Hero visible={isHeroVisible} />
        <ScrollPrompt 
          visible={isPromptVisible} 
          onClick={handlePromptClick} 
        />
      </section>

      {isChapterThreeVisible && (
        <>
          <Letter />
          <ChapterThree />
        </>
      )}
      
    </main>
  );
}

export default function App() {
  return (
    <MusicPlayerProvider>
      <AppContent />
    </MusicPlayerProvider>
  );
}
