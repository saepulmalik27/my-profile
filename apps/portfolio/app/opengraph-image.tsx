import { readFile } from 'fs/promises';
import path from 'path';
import { ImageResponse } from 'next/og';
import { profile } from '../content/profile';

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const logoBuffer = await readFile(
    path.join(process.cwd(), 'public/assets/logo/logo.png')
  );
  const logoSrc = `data:image/png;base64,${logoBuffer.toString('base64')}`;

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px',
        background: '#12141f',
        fontFamily: 'sans-serif',
      }}
    >
      <img
        src={logoSrc}
        width={80}
        height={80}
        style={{ borderRadius: '9999px', marginBottom: 36 }}
      />
      <div
        style={{
          display: 'flex',
          fontSize: 66,
          fontWeight: 600,
          color: '#f5ede0',
        }}
      >
        {profile.name}
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 34,
          color: '#f2a65a',
          marginTop: 14,
        }}
      >
        {profile.role}
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 26,
          color: '#f5ede0b3',
          marginTop: 28,
          maxWidth: 920,
        }}
      >
        {profile.tagline}
      </div>
    </div>,
    { ...size }
  );
}
