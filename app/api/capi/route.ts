import { NextResponse, NextRequest } from 'next/server' // 🍪 Added NextRequest for easy cookie reading

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { event_name, event_id, url } = body

    // Read the user's IP and Browser User Agent automatically from server headers
    const userAgent = request.headers.get('user-agent') || ''
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || '127.0.0.1'

    // 🍪 Extract Facebook cookies automatically from the incoming request session
    const fbp = request.cookies.get('_fbp')?.value
    const fbc = request.cookies.get('_fbc')?.value

    const PIXEL_ID = '1221430710011654' // Matches your exact pixel ID from image_3dde6b.png
    const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN 

    if (!ACCESS_TOKEN) {
      return NextResponse.json({ error: 'Missing META_ACCESS_TOKEN in .env file' }, { status: 500 })
    }

    // Build the official Meta Conversions API Payload
    const fbPayload = {
      data: [
        {
          event_name: event_name,
          event_time: Math.floor(Date.now() / 1000),
          event_id: event_id, // Crucial: Must match GTM's browser event_id to prevent double-counting
          action_source: 'website',
          event_source_url: url,
          user_data: {
            client_ip_address: ip,
            client_user_agent: userAgent,
            fbp: fbp || undefined, // 🚀 Passed Browser ID to maximize anonymous matching
            fbc: fbc || undefined, // 🚀 Passed Click ID to secure paid Facebook ad tracking match
          },
        },
      ],
    }

    const response = await fetch(`https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fbPayload),
    })

    const result = await response.json()
    return NextResponse.json({ success: true, result })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}