import { createClient } from '@supabase/supabase-js';
//import 'AudioPlayer.css';
import React, { useEffect, useRef, useState } from 'react';

// Initialize Supabase client
const supabaseUrl = 'https://skojolxihqmikyakxdrz.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pvbHhpaHFtaWt5YWt4ZHJ6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMjc0MTMzNCwiZXhwIjoyMDQ4MzE3MzM0fQ.8Yi66UegJYdoON1fq5sSUDeopXfhSXIfB2XqH7p5fww'; // Replace with your Supabase anon key
const supabase = createClient(supabaseUrl, supabaseKey);

const AudioPlayer: React.FC = () => {
  const [audioFiles, setAudioFiles] = useState<string[]>([]);
  const [currentTrack, setCurrentTrack] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const fetchAudioFiles = async () => {
      try {
        const { data, error } = await supabase.storage
          .from('beats-by-cruz')
          .list();

        if (error) {
          console.error('Error fetching audio files:', error);
        } else {
          const fileNames = data.map((file) => file.name);
          setAudioFiles(fileNames);
        }
      } catch (error) {
        console.error('Error fetching audio files:', error);
      }
    };

    fetchAudioFiles();
  }, []);

  useEffect(() => {
    const handleTimeUpdate = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
      }
    };

    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener('timeupdate', handleTimeUpdate);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTrackChange = (index: number) => {
    setCurrentTrack(index);
  };

  const handleScrub = (value: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value;
      setCurrentTime(value);
    }
  };

  return (
    <div className="audio-player-container">
      <div className="skills-header">Audio Tracks</div>
      <ul className="track-list">
        {audioFiles.map((file, index) => (
          <li key={index} className={currentTrack === index ? 'active' : ''}>
            <button onClick={() => handleTrackChange(index)}>{file}</button>
          </li>
        ))}
      </ul>
      <div className="player-controls">
        <button className="play-button" onClick={togglePlay}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={(e) => handleScrub(parseFloat(e.target.value))}
          className="time-slider"
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
