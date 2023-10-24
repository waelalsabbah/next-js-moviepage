import Link from 'next/link';
import React from 'react';
import VideoPlayer from '../../components/VideoPlayer';

export const metadata = {
  title: { default: ' Video| Welcome Home', Template: '%s |  Willcome Home' },
  description: 'Generated by create next app',
};
export default function Video() {
  return (
    <div>
      <h1>My Video Page</h1>
      <a href="https://www.youtube.com/watch?v=cYAcAxWv-14">
        <button>click me</button>
      </a>
      <VideoPlayer />
    </div>
  );
}
