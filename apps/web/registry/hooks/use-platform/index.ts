"use client";
import { useState, useEffect } from "react";

/*
 * USAGE:
 * const { platform, os, isMobile } = usePlatform();
 *
 * <div className="p-4">
 *    <p>Platform: {platform}</p>
 *    {isMobile === true ? <p>Is mobile</p> : <p>not mobile</p>}
 *    {os === "android" ? <p>android</p> : <p>not android</p>}
 *    {os === "ios" ? <p>ios</p> : <p>not ios</p>}
 *    {os === "linux" ? <p>linux</p> : <p>not linux</p>}
 * </div>
 */

interface PlatformInfo {
  os: "windows" | "macos" | "linux" | "ios" | "android" | "unknown";
  device: "mobile" | "tablet" | "desktop";
  platform: string; // e.g., "android-mobile", "windows-desktop"
  isMobile: boolean;
  isDesktop: boolean;
  userAgent: string;
}

export const usePlatform = (): PlatformInfo => {
  const [platform, setPlatform] = useState<PlatformInfo>(() => {
    // SSR-safe: return default values during server-side rendering
    if (typeof window === "undefined") {
      return {
        os: "unknown",
        device: "desktop",
        platform: "unknown-desktop",
        isMobile: false,
        isDesktop: true,
        userAgent: "",
      };
    }

    return detectPlatform();
  });

  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  return platform;
};

function detectPlatform(): PlatformInfo {
  const ua = navigator.userAgent.toLowerCase();

  // OS
  let os: PlatformInfo["os"] = "unknown";
  if (ua.includes("win")) os = "windows";
  else if (ua.includes("mac") && !ua.includes("iphone") && !ua.includes("ipad"))
    os = "macos";
  else if (ua.includes("linux") && !ua.includes("android")) os = "linux";
  else if (ua.includes("iphone") || ua.includes("ipad") || ua.includes("ipod"))
    os = "ios";
  else if (ua.includes("android")) os = "android";

  // device type
  const isMobileUA =
    /mobile|android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua);
  const isTabletUA = /ipad|android(?!.*mobile)|tablet/i.test(ua);

  let device: PlatformInfo["device"] = "desktop";
  if (isTabletUA) device = "tablet";
  else if (isMobileUA) device = "mobile";

  // platform string
  const platformString = `${os}-${device}`;

  return {
    os,
    device,
    platform: platformString,
    isMobile: device === "mobile",
    isDesktop: device === "desktop",
    userAgent: navigator.userAgent,
  };
}
