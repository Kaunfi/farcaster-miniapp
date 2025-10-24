import { NextResponse } from "next/server";
import { APP_URL } from "../../../lib/constants";

export async function GET() {
  const farcasterConfig = {
  // TODO: Add your own account association
    accountAssociation": {
    "header": "eyJmaWQiOjgwMDQ1NywidHlwZSI6ImF1dGgiLCJrZXkiOiIweDQxYjgzNEE0Q0MwMEE3NUUyQkM3MkYyMWU3YWMyQTc1NTQzNThDYmEifQ",
    "payload": "eyJkb21haW4iOiJmYXJjYXN0ZXItbWluaWFwcC1vbmUudmVyY2VsLmFwcCJ9",
    "signature": "bgBepVbBUT4h0vz0FdYJekeddLDxVxZsIs/it43m4WN3klQeqf0Yw/q4+FSfy1BV2EaP4wPQC/X6SRYaHS4osBs="
  },
    frame: {
      version: "1",
      name: "Trankil Farcaster MiniApp",
      iconUrl: `${APP_URL}/images/icon.png`,
      homeUrl: `${APP_URL}`,
      imageUrl: `${APP_URL}/images/feed.png`,
      screenshotUrls: [],
      tags: ["Base", "farcaster", "miniapp", "template"],
      primaryCategory: "developer-tools",
      buttonTitle: "Launch Template",
      splashImageUrl: `${APP_URL}/images/splash.png`,
      splashBackgroundColor: "#ffffff",
      webhookUrl: `${APP_URL}/api/webhook`,
    },
  };

  return NextResponse.json(farcasterConfig);
}
