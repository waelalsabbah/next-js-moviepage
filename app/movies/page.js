import Head from 'next/head';
import VideoPlayer from '../../components/VideoPlayer';

export const metadata = {
  title: { default: ' About| Willcome Home', Template: '%s |  Willcome Home' },
  description: 'Generated by create next app',
};

export default function IndexPage() {
  return (
    <div>
      <title>Video Player with Cloudinary</title>
      <header>
        <h1>Video Player</h1>
      </header>

      <section>
        <p>
          There is no one who loves pain itself, who seeks after it and wants to
          have it
        </p>
        <VideoPlayer />
      </section>
    </div>
  );
}
