import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 24,
                    background: '#0a0a0a',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                }}
            >
                {/* Outer Glow Ring */}
                <div
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(59,130,246,0) 30%, rgba(59,130,246,0.3) 70%, rgba(59,130,246,0.6) 100%)',
                        filter: 'blur(2px)',
                    }}
                />

                {/* Inner Core */}
                <div
                    style={{
                        width: '12px',
                        height: '12px',
                        background: '#e0f2fe',
                        borderRadius: '50%',
                        boxShadow: '0 0 10px 2px rgba(59, 130, 246, 0.8), 0 0 20px 4px rgba(59, 130, 246, 0.4)',
                        filter: 'blur(0.5px)',
                    }}
                />
            </div>
        ),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported icons size metadata
            // config to also set the ImageResponse's width and height.
            ...size,
        }
    )
}
