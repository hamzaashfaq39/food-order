import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const hostname = request.headers.get('host') || ''
  
  // Get the subdomain
  const subdomain = hostname.split('.')[0]
  
  // Add the subdomain to the URL path
  url.pathname = `/${subdomain}${url.pathname}`
  
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: [
    // Match all paths except for:
    // 1. /api routes
    // 2. /_next (Next.js internals)
    // 3. /_static (inside /public)
    // 4. all root files inside /public (e.g. /favicon.ico)
    '/((?!api|_next|_static|_vercel|[\\w-]+\\.\\w+).*)',
  ],
} 