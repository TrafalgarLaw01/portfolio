import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
    width: 180,
    height: 180,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 120, // Scaled up for 180x180
                    background: '#0a0a0a',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '18%', // iOS icons usually have rounded corners, but the device crops it. 
                    // However, putting a bg color ensures no transparency issues.
                    // 50% border radius for the implementation to match the circular design request
                    overflow: 'hidden',
                }}
            >
                {/* Container for the circular design centered in the square icon */}
                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    {/* Outer Glow Ring */}
                    <div
                        style={{
                            position: 'absolute',
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(59,130,246,0) 30%, rgba(59,130,246,0.3) 70%, rgba(59,130,246,0.6) 100%)',
                            filter: 'blur(8px)',
                        }}
                    />

                    {/* Inner Core */}
                    <div
                        style={{
                            width: '36px',
                            height: '36px',
                            background: '#e0f2fe',
                            borderRadius: '50%',
                            boxShadow: '0 0 40px 8px rgba(59, 130, 246, 0.9), 0 0 70px 16px rgba(59, 130, 246, 0.5)',
                            filter: 'blur(1px)',
                        }}
                    />
                </div>
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    )
}
