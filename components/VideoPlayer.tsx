'use client';
/*
import { CloudinaryContext, Video } from 'cloudinary-react';
import { useRef } from 'react';
import youtube from 'react-youtube';
import styles from './videoplayer.module.css';

export const metadata = {
  title: { default: ' Movies| Welcome Home', Template: '%s |  Welcome Home' },
  description: 'Generated by create next app',
};
export default function VideoPlayer() {
  const videoRef = useRef();
  const cloudName = 'dxaudtsar';
  const videoUrl = 'Video_Background_loop_HD_Free_bkld97';
  return (
    <div>
      <CloudinaryContext cloudName={cloudName}>
        <Video
          publicId={videoUrl}
          width="100%"
          autoPlay
          muted
          loop
          controls="true"
        />
      </CloudinaryContext>
    </div>
  );
}

// Import necessary modules
 */
// VideoPlayer.js

import { CloudinaryContext, Video } from 'cloudinary-react';
import { useRef } from 'react';

export const metadata = {
  title: { default: ' Movies| Welcome Home', Template: '%s |  Welcome Home' },
  description: 'Generated by create next app',
};

export default function VideoPlayer() {
  /* const videoRef = useRef(); */
  const cloudName = 'dxaudtsar';
  const videoUrl = 'Video_Background_loop_HD_Free_bkld97';

  return (
    <div className="relative h-screen">
      <CloudinaryContext cloudName={cloudName}>
        <Video
          publicId={videoUrl}
          width="100%"
          autoPlay
          muted
          loop
          controls="true"
          className="w-full h-full object-cover"
        />
      </CloudinaryContext>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to your MOVIEDB</h1>
        {/* Add additional content here if needed */}
      </div>
    </div>
  );
}
