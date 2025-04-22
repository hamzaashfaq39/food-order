const { NextResponse } = require("next/server");

function middleware(request) {
  const url = request.nextUrl;
  const hostname = request.headers.get("host") || "";
  const subdomain = hostname.split(".")[0];
  url.pathname = `/${subdomain}${url.pathname}`;
  return NextResponse.rewrite(url);
}

module.exports = middleware;
