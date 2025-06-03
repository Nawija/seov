"use client";
import { AnimatePresence, motion } from "framer-motion";
import {
  ExternalLink,
  Monitor,
  RefreshCw,
  Smartphone,
  Tablet,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

// Types
interface WebsitePreviewProps {
  url: string;
  title: string;
  onClose: () => void;
}

type DeviceType = "desktop" | "tablet" | "mobile";

const deviceSizes = {
  desktop: { width: "100%", height: "100%", maxWidth: "none" },
  tablet: { width: "768px", height: "824px", maxWidth: "768px" },
  mobile: { width: "375px", height: "667px", maxWidth: "375px" },
};

export function LiveWebsitePreview({
  url,
  title,
  onClose,
}: WebsitePreviewProps) {
  const [selectedDevice, setSelectedDevice] = useState<DeviceType>("desktop");
  const [isLoading, setIsLoading] = useState(true);
  const [key, setKey] = useState(0);

  const handleRefresh = () => {
    setIsLoading(true);
    setKey((prev) => prev + 1);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="flex h-full flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between border bg-white px-3 py-2">
          <div className="flex items-center gap-4">
            <h2 className="text-brand-main text-xl font-semibold">{title}</h2>
            <div className="hidden text-sm text-gray-500 sm:block">{url}</div>
          </div>

          {/* Device Toggle */}
          <div className="flex items-center gap-2">
            {/* Refresh Button */}
            <button
              onClick={handleRefresh}
              className="cursor-pointer rounded-lg p-2 transition-colors hover:bg-gray-100"
              title="Odśwież"
            >
              <RefreshCw
                className={`h-5 w-5 text-gray-600 ${isLoading ? "animate-spin" : ""}`}
              />
            </button>

            {/* External Link */}
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-lg p-2 transition-colors hover:bg-gray-100"
              title="Otwórz w nowej karcie"
            >
              <ExternalLink className="h-5 w-5 text-gray-600" />
            </Link>

            {/* Device Buttons */}
            <div className="flex items-center gap-1 rounded-lg bg-gray-100 p-1">
              <button
                onClick={() => setSelectedDevice("desktop")}
                className={`cursor-pointer rounded-lg p-2 transition-colors ${
                  selectedDevice === "desktop"
                    ? "text-brand-main bg-white shadow-sm"
                    : "text-gray-600 hover:bg-gray-200/80"
                }`}
                title="Desktop"
              >
                <Monitor className="h-5 w-5" />
              </button>
              <button
                onClick={() => setSelectedDevice("tablet")}
                className={`cursor-pointer rounded-lg p-2 transition-colors ${
                  selectedDevice === "tablet"
                    ? "text-brand-main bg-white shadow-sm"
                    : "text-gray-600 hover:bg-gray-200/80"
                }`}
                title="Tablet"
              >
                <Tablet className="h-5 w-5" />
              </button>
              <button
                onClick={() => setSelectedDevice("mobile")}
                className={`cursor-pointer rounded-lg p-2 transition-colors ${
                  selectedDevice === "mobile"
                    ? "text-brand-main bg-white shadow-sm"
                    : "text-gray-600 hover:bg-gray-200/80"
                }`}
                title="Mobile"
              >
                <Smartphone className="h-5 w-5" />
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="ml-2 cursor-pointer rounded-lg p-2 transition-colors hover:bg-gray-100"
              title="Zamknij (ESC)"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Preview Container */}
        <div className="flex-1 overflow-auto bg-gradient-to-tl from-blue-100 to-pink-50  p-6">
          <div className="flex h-full items-center justify-center">
            <motion.div
              key={selectedDevice}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-xl bg-white shadow-2xl"
              style={{
                width: deviceSizes[selectedDevice].width,
                height:
                  selectedDevice === "desktop"
                    ? "calc(100vh - 130px)"
                    : deviceSizes[selectedDevice].height,
                maxWidth: deviceSizes[selectedDevice].maxWidth,
                minHeight:
                  selectedDevice === "desktop"
                    ? "600px"
                    : deviceSizes[selectedDevice].height,
              }}
            >
              {/* Loading Overlay */}
              {isLoading && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-white">
                  <div className="flex flex-col items-center gap-4">
                    <div className="text-brand-main h-8 w-8 animate-spin rounded-full border-t-2 border-blue-400"></div>
                    <p className="text-gray-600">Ładowanie strony...</p>
                  </div>
                </div>
              )}

              {/* Device Frame for Mobile/Tablet */}
              {selectedDevice !== "desktop" && (
                <div className="pointer-events-none absolute inset-0 z-20">
                  <div className="h-full w-full rounded-xl border-8 border-gray-800">
                    {selectedDevice === "mobile" && (
                      <>
                        {/* Home indicator */}
                        <div className="absolute bottom-2 left-1/2 h-1 w-32 -translate-x-1/2 transform rounded-full bg-gray-400"></div>
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 h-6 w-32 -translate-x-1/2 transform rounded-b-2xl bg-gray-800"></div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Iframe */}
              <iframe
                key={key}
                src={url}
                className="h-full w-full border-0"
                onLoad={handleIframeLoad}
                title={`Preview of ${title}`}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
              />
            </motion.div>
          </div>
        </div>

        {/* Device Info */}
        <div className="border bg-white px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>
                <strong>Urządzenie:</strong>{" "}
                {selectedDevice === "desktop"
                  ? "Desktop"
                  : selectedDevice === "tablet"
                    ? "Tablet (768×1024)"
                    : "Mobile (375×667)"}
              </span>
              <span>
                <strong>Zoom:</strong> Dopasuj do ekranu
              </span>
            </div>
            <div className="text-sm text-gray-500">
              Naciśnij ESC aby zamknąć
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Demo component to showcase the preview
export function WebsitePreviewDemo() {
  const [showPreview, setShowPreview] = useState(false);
  const [selectedSite, setSelectedSite] = useState<{
    url: string;
    title: string;
  } | null>(null);

  const demoSites = [
    {
      url: "https://tailwindcss.com",
      title: "Tailwind CSS",
      description: "Utility-first CSS framework",
    },
    {
      url: "https://react.dev",
      title: "React Documentation",
      description: "Official React documentation",
    },
    {
      url: "https://framer.com/motion",
      title: "Framer Motion",
      description: "Animation library for React",
    },
    {
      url: "https://lucide.dev",
      title: "Lucide Icons",
      description: "Beautiful & consistent icons",
    },
  ];

  const openPreview = (site: { url: string; title: string }) => {
    setSelectedSite(site);
    setShowPreview(true);
  };

  const closePreview = () => {
    setShowPreview(false);
    setSelectedSite(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            Live Website Preview
          </h1>
          <p className="text-gray-600">
            Kliknij na dowolną stronę aby zobaczyć responsywny podgląd
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {demoSites.map((site, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer rounded-xl border bg-white p-6 transition-shadow hover:shadow-lg"
              onClick={() => openPreview(site)}
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="bg-brand-matext-brand-main flex h-10 w-10 items-center justify-center rounded-lg">
                  <ExternalLink className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{site.title}</h3>
                  <p className="text-sm text-gray-500">{site.description}</p>
                </div>
              </div>
              <div className="text-brand-main text-sm hover:text-blue-700">
                {site.url}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showPreview && selectedSite && (
          <LiveWebsitePreview
            url={selectedSite.url}
            title={selectedSite.title}
            onClose={closePreview}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
