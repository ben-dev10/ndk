import React from "react";
import { MotionWrapper } from "@ndk/motion/core";
import type { MotionWrapperProps, EasingType } from "@ndk/motion/core";

// Re-export EasingType for convenience
export type { EasingType };

export const motionPresets = {
  // fade
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },

  // slide (pure translation without fade)
  slideUp: {
    hidden: { y: 100 },
    visible: { y: 0 },
  },
  slideDown: {
    hidden: { y: -100 },
    visible: { y: 0 },
  },
  slideLeft: {
    hidden: { x: 100 },
    visible: { x: 0 },
  },
  slideRight: {
    hidden: { x: -100 },
    visible: { x: 0 },
  },

  // zoom/scale
  zoomIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  zoomOut: {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { opacity: 1, scale: 1 },
  },
  scaleUp: {
    hidden: { scale: 0.5 },
    visible: { scale: 1 },
  },
  scaleDown: {
    hidden: { scale: 1.5 },
    visible: { scale: 1 },
  },

  // flip
  flipX: {
    hidden: { opacity: 0, rotateX: -90 },
    visible: { opacity: 1, rotateX: 0 },
  },
  flipY: {
    hidden: { opacity: 0, rotateY: -90 },
    visible: { opacity: 1, rotateY: 0 },
  },

  // rotate
  rotateIn: {
    hidden: { opacity: 0, rotate: -180 },
    visible: { opacity: 1, rotate: 0 },
  },
  rotateInLeft: {
    hidden: { opacity: 0, rotate: -180, x: -100 },
    visible: { opacity: 1, rotate: 0, x: 0 },
  },
  rotateInRight: {
    hidden: { opacity: 0, rotate: 180, x: 100 },
    visible: { opacity: 1, rotate: 0, x: 0 },
  },

  // bounce
  bounceIn: {
    hidden: { opacity: 0, scale: 0.3 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
  },
  bounceInUp: {
    hidden: { opacity: 0, y: 100, scale: 0.3 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
  },
  bounceInDown: {
    hidden: { opacity: 0, y: -100, scale: 0.3 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
  },

  // blur
  blurIn: {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },

  // elastic (spring-based)
  elasticIn: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  },
  elasticInUp: {
    hidden: { opacity: 0, y: 100, scale: 0.5 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  },
  elasticInDown: {
    hidden: { opacity: 0, y: -100, scale: 0.5 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  },
} as const;

/* preset components */
// ---- Fade
export const FadeIn: React.FC<Omit<MotionWrapperProps, "preset">> = (props) => (
  <MotionWrapper preset="fadeIn" {...props} />
);

export const FadeUp: React.FC<Omit<MotionWrapperProps, "preset">> = (props) => (
  <MotionWrapper preset="fadeUp" {...props} />
);

export const FadeDown: React.FC<Omit<MotionWrapperProps, "preset">> = (
  props,
) => <MotionWrapper preset="fadeDown" {...props} />;

export const FadeLeft: React.FC<Omit<MotionWrapperProps, "preset">> = (
  props,
) => <MotionWrapper preset="fadeLeft" {...props} />;

export const FadeRight: React.FC<Omit<MotionWrapperProps, "preset">> = (
  props,
) => <MotionWrapper preset="fadeRight" {...props} />;

// ---- Slide
export const SlideUp: React.FC<Omit<MotionWrapperProps, "preset">> = (
  props,
) => <MotionWrapper preset="slideUp" {...props} />;

export const SlideDown: React.FC<Omit<MotionWrapperProps, "preset">> = (
  props,
) => <MotionWrapper preset="slideDown" {...props} />;

export const SlideLeft: React.FC<Omit<MotionWrapperProps, "preset">> = (
  props,
) => <MotionWrapper preset="slideLeft" {...props} />;

export const SlideRight: React.FC<Omit<MotionWrapperProps, "preset">> = (
  props,
) => <MotionWrapper preset="slideRight" {...props} />;

// ---- Zoom/Scale
export const ZoomIn: React.FC<Omit<MotionWrapperProps, "preset">> = (props) => (
  <MotionWrapper preset="zoomIn" {...props} />
);

export const ZoomOut: React.FC<Omit<MotionWrapperProps, "preset">> = (
  props,
) => <MotionWrapper preset="zoomOut" {...props} />;

export const ScaleUp: React.FC<Omit<MotionWrapperProps, "preset">> = (
  props,
) => <MotionWrapper preset="scaleUp" {...props} />;

export const ScaleDown: React.FC<Omit<MotionWrapperProps, "preset">> = (
  props,
) => <MotionWrapper preset="scaleDown" {...props} />;

// ---- Flip
export const FlipX: React.FC<Omit<MotionWrapperProps, "preset">> = (props) => (
  <MotionWrapper preset="flipX" {...props} />
);

export const FlipY: React.FC<Omit<MotionWrapperProps, "preset">> = (props) => (
  <MotionWrapper preset="flipY" {...props} />
);

// ---- Rotate
export const RotateIn: React.FC<Omit<MotionWrapperProps, "preset">> = (
  props,
) => <MotionWrapper preset="rotateIn" {...props} />;

export const RotateInLeft: React.FC<Omit<MotionWrapperProps, "preset">> = (
  props,
) => <MotionWrapper preset="rotateInLeft" {...props} />;

export const RotateInRight: React.FC<Omit<MotionWrapperProps, "preset">> = (
  props,
) => <MotionWrapper preset="rotateInRight" {...props} />;

// ---- Bounce
export const BounceIn: React.FC<Omit<MotionWrapperProps, "preset">> = (
  props,
) => <MotionWrapper preset="bounceIn" {...props} />;

export const BounceInUp: React.FC<Omit<MotionWrapperProps, "preset">> = (
  props,
) => <MotionWrapper preset="bounceInUp" {...props} />;

export const BounceInDown: React.FC<Omit<MotionWrapperProps, "preset">> = (
  props,
) => <MotionWrapper preset="bounceInDown" {...props} />;

// ---- Blur
export const BlurIn: React.FC<Omit<MotionWrapperProps, "preset">> = (props) => (
  <MotionWrapper preset="blurIn" {...props} />
);

// ---- Elastic (spring-based animations)
export const ElasticIn: React.FC<Omit<MotionWrapperProps, "preset">> = (
  props,
) => <MotionWrapper preset="elasticIn" {...props} />;

export const ElasticInUp: React.FC<Omit<MotionWrapperProps, "preset">> = (
  props,
) => <MotionWrapper preset="elasticInUp" {...props} />;

export const ElasticInDown: React.FC<Omit<MotionWrapperProps, "preset">> = (
  props,
) => <MotionWrapper preset="elasticInDown" {...props} />;

// ---- Easing-focused components
export const BackIn: React.FC<Omit<MotionWrapperProps, "preset" | "easing">> = (
  props,
) => <MotionWrapper preset="fadeUp" easing="backIn" {...props} />;

export const BackOut: React.FC<
  Omit<MotionWrapperProps, "preset" | "easing">
> = (props) => <MotionWrapper preset="fadeUp" easing="backOut" {...props} />;

export const BackInOut: React.FC<
  Omit<MotionWrapperProps, "preset" | "easing">
> = (props) => <MotionWrapper preset="fadeUp" easing="backInOut" {...props} />;

export const AnticipateIn: React.FC<
  Omit<MotionWrapperProps, "preset" | "easing">
> = (props) => <MotionWrapper preset="fadeUp" easing="anticipate" {...props} />;

export const CircIn: React.FC<Omit<MotionWrapperProps, "preset" | "easing">> = (
  props,
) => <MotionWrapper preset="fadeUp" easing="circIn" {...props} />;

export const CircOut: React.FC<
  Omit<MotionWrapperProps, "preset" | "easing">
> = (props) => <MotionWrapper preset="fadeUp" easing="circOut" {...props} />;

export const CircInOut: React.FC<
  Omit<MotionWrapperProps, "preset" | "easing">
> = (props) => <MotionWrapper preset="fadeUp" easing="circInOut" {...props} />;
