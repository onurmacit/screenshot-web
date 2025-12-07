"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, ExternalLink } from "lucide-react";

export function DemoSection() {
  const [url, setUrl] = useState("https://example.com");
  const [isLoading, setIsLoading] = useState(false);
  const [screenshotUrl, setScreenshotUrl] = useState<string | null>(null);

  const handleDemo = async () => {
    setIsLoading(true);
    // Simulated API call - replace with actual API when ready
    setTimeout(() => {
      setScreenshotUrl(
        `https://api.screenshotapi.net/v1/screenshot?url=${encodeURIComponent(
          url
        )}&width=1280&height=720`
      );
      setIsLoading(false);
    }, 2000);
  };

  return (
    <section className="container mx-auto px-4 py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Try It Live</h2>
        <p className="text-xl text-gray-600">
          See our API in action. Enter any URL and generate a screenshot.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Live Demo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 mb-4">
              <Input
                type="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleDemo} disabled={isLoading || !url}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  "Generate"
                )}
              </Button>
            </div>
            {screenshotUrl && (
              <div className="mt-4 border rounded-lg overflow-hidden">
                <img
                  src={screenshotUrl}
                  alt="Screenshot preview"
                  className="w-full h-auto"
                />
              </div>
            )}
            {!screenshotUrl && !isLoading && (
              <div className="mt-4 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center text-gray-400">
                <ExternalLink className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Enter a URL and click Generate to see a screenshot</p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
          <div className="text-center">
            <div className="font-semibold text-gray-900 mb-1">
              ⚡ Fast Rendering
            </div>
            <div>Average 2-3 seconds</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-gray-900 mb-1">
              🎨 High Quality
            </div>
            <div>Retina-ready images</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-gray-900 mb-1">
              📱 Responsive
            </div>
            <div>Mobile & desktop support</div>
          </div>
        </div>
      </div>
    </section>
  );
}

