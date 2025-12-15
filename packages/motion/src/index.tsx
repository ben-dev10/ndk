"use client";
import React from "react";
import { Easing, motion, useInView } from "motion/react";
import { useRef } from "react";
import { motionPresets } from "@_ndk/motion/presets";

/* USAGE:
 * These motion animations only trigger when in view, by default, similar to how
 * the intersection observer works. MotionWrapper is the base wrapper that applies
 * a set of predefined motions defined in the presets file.
 *
 * MotionStagger is a super wrapper for the base wrapper and applies a staggered
 * animation on its children.
 */

export type EasingType =
  | "linear"
  | "easeIn"
  | "easeOut"
  | "easeInOut"
  | "circIn"
  | "circOut"
  | "circInOut"
  | "backIn"
  | "backOut"
  | "backInOut"
  | "anticipate"
  | [number, number, number, number]; // Custom cubic bezier

const easingMap: Record<string, Easing> = {
  linear: "linear",
  easeIn: "easeIn",
  easeOut: "easeOut",
  easeInOut: "easeInOut",
  circIn: "circIn",
  circOut: "circOut",
  circInOut: "circInOut",
  backIn: "backIn",
  backOut: "backOut",
  backInOut: "backInOut",
  anticipate: "anticipate",
};

export interface MotionWrapperProps {
  children: React.ReactElement;
  preset: keyof typeof motionPresets;
  duration?: number;
  delay?: number;
  easing?: EasingType;
  once?: boolean;
  amount?: number;
  className?: string;
}

export function MotionWrapper({
  className,
  children,
  preset,
  duration = 0.5,
  delay = 0,
  easing,
  once = true,
  amount = 0.3,
}: MotionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  const easingValue: Easing | undefined = easing
    ? Array.isArray(easing)
      ? easing
      : easingMap[easing]
    : undefined;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={motionPresets[preset]}
      transition={{
        duration,
        delay,
        ...(easingValue && { ease: easingValue }),
      }}
      className={`_core-motion-wrapper ${className}`}
    >
      {children}
    </motion.div>
  );
}

interface MotionStaggerProps {
  children: React.ReactElement[];
  preset?: keyof typeof motionPresets;
  duration?: number;
  staggerDelay?: number;
  easing?: EasingType;
  once?: boolean;
  amount?: number;
}

export function MotionStagger({
  children,
  preset = "fadeUp",
  duration = 0.5,
  staggerDelay = 0.1,
  easing,
  once = true,
  amount = 0.3,
}: MotionStaggerProps) {
  return (
    <>
      {children.map((child, i) => (
        <MotionWrapper
          key={i}
          preset={preset}
          duration={duration}
          delay={i * staggerDelay}
          easing={easing}
          once={once}
          amount={amount}
        >
          {child}
        </MotionWrapper>
      ))}
    </>
  );
}
