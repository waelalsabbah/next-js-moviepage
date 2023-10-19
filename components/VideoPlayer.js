'use client';
import { CloudinaryContext, Video } from 'cloudinary-react';
import { useRef } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef();
  const cloudName = 'dxaudtsar';
  const videoUrl = 'shagrol_zzgwml';
  return (
    <div>
      <CloudinaryContext cloudName={cloudName}>
        <Video publicId={videoUrl} width="550" controls />
      </CloudinaryContext>
    </div>
  );
};
export default VideoPlayer;
