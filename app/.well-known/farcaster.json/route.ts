import { NextResponse } from "next/server";
import { APP_URL } from "../../../lib/constants";

export async function GET() {
  const farcasterConfig = {
  "accountAssociation": {
    "header": "eyJmaWQiOjMyODg1NSwidHlwZSI6ImF1dGgiLCJrZXkiOiIweERCOTczZjliNWI0MDhFMkZFNjNFQ2UzNjBEYjFjODU5YjQ5NDFFRTcifQ",
    "payload": "eyJkb21haW4iOiJmYXJjYXN0ZXItbWluaWFwcC10ZW1wbGF0ZS1lYm9uLnZlcmNlbC5hcHAifQ",
    "signature": "1bH6yx1yjJgF2olNGcmhAgsbS229TmERlvHsktnOqA88aDMQAPm+WSFEgqfIFtcRFIUsewD5Of72EVNKufxX3Bs="
  },
  "frame": {
    "version": "1",
    "name": "Youriii39 Farcaster MiniApp",
    "iconUrl": "https://farcaster-miniapp-one.vercel.app//images/icon.png",
    "homeUrl": "https://farcaster-miniapp-one.vercel.app/",
    "imageUrl": "https://farcaster-miniapp-one.vercel.app//images/feed.png",
    "screenshotUrls": [],
    "tags": [
      "Base",
      "farcaster",
      "miniapp",
      "template"
    ],
    "primaryCategory": "developer-tools",
    "buttonTitle": "Launch Template",
    "splashImageUrl": "https://farcaster-miniapp-one.vercel.app//images/splash.png",
    "splashBackgroundColor": "#ffffff",
    "webhookUrl": "https://farcaster-miniapp-one.vercel.app//api/webhook"
  }
};

  return NextResponse.json(farcasterConfig);
}
