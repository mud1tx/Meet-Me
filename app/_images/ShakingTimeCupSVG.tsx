"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const ShakingTimeCupSVG: React.FC = () => {
  const controls = useAnimation();

  const rotateLeft = {
    rotate: -20,
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  const rotateRight = {
    rotate: 20,
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  const rotate = async () => {
    while (true) {
      await controls.start(rotateRight);
      await controls.start(rotateLeft);
    }
  };

  useEffect(() => {
    rotate(); // Start the animation loop
  }, []);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="none"
      viewBox="0 0 248 249"
      aria-hidden="true"
      initial={false}
      animate={controls}
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
      // style={{ touchAction: "none" }}
      // style={{ verticalAlign: "middle" }}
      className="w-12 font-bold inline-block"
    >
      <path
        fill="url(#paint0_linear_1629_34054)"
        fillRule="evenodd"
        d="M9.222 48.227A127.478 127.478 0 0 1 .015 8.005C-.262 3.594 3.353.009 7.78.009h232.44c4.427 0 8.042 3.585 7.765 7.995a127.47 127.47 0 0 1-9.207 40.224 126.123 126.123 0 0 1-26.93 40.877c-11.537 11.699-25.231 20.98-40.305 27.312a123.042 123.042 0 0 1-25.497 7.592 122.981 122.981 0 0 1 25.497 7.592c15.074 6.332 28.768 15.613 40.305 27.312a126.122 126.122 0 0 1 26.93 40.877 127.472 127.472 0 0 1 9.207 40.224c.277 4.41-3.338 7.995-7.765 7.995H7.78c-4.427 0-8.042-3.585-7.765-7.995a127.48 127.48 0 0 1 9.207-40.224 126.132 126.132 0 0 1 26.93-40.877c11.537-11.699 25.231-20.98 40.305-27.312a122.987 122.987 0 0 1 25.497-7.592 123.048 123.048 0 0 1-25.497-7.592c-15.074-6.332-28.768-15.613-40.305-27.313a126.134 126.134 0 0 1-26.93-40.877Z"
        clipRule="evenodd"
        style={{
          touchAction: "none",
        }}
      />
      <path
        fill="url(#pattern0)"
        fillOpacity={0.6}
        fillRule="evenodd"
        d="M9.222 48.227A127.478 127.478 0 0 1 .015 8.005C-.262 3.594 3.353.009 7.78.009h232.44c4.427 0 8.042 3.585 7.765 7.995a127.47 127.47 0 0 1-9.207 40.224 126.123 126.123 0 0 1-26.93 40.877c-11.537 11.699-25.231 20.98-40.305 27.312a123.042 123.042 0 0 1-25.497 7.592 122.981 122.981 0 0 1 25.497 7.592c15.074 6.332 28.768 15.613 40.305 27.312a126.122 126.122 0 0 1 26.93 40.877 127.472 127.472 0 0 1 9.207 40.224c.277 4.41-3.338 7.995-7.765 7.995H7.78c-4.427 0-8.042-3.585-7.765-7.995a127.48 127.48 0 0 1 9.207-40.224 126.132 126.132 0 0 1 26.93-40.877c11.537-11.699 25.231-20.98 40.305-27.312a122.987 122.987 0 0 1 25.497-7.592 123.048 123.048 0 0 1-25.497-7.592c-15.074-6.332-28.768-15.613-40.305-27.313a126.134 126.134 0 0 1-26.93-40.877Z"
        clipRule="evenodd"
        style={{
          mixBlendMode: "multiply",
          touchAction: "none",
        }}
      />
      <path
        fill="url(#paint1_radial_1629_34054)"
        fillRule="evenodd"
        d="M9.222 48.227A127.478 127.478 0 0 1 .015 8.005C-.262 3.594 3.353.009 7.78.009h232.44c4.427 0 8.042 3.585 7.765 7.995a127.47 127.47 0 0 1-9.207 40.224 126.123 126.123 0 0 1-26.93 40.877c-11.537 11.699-25.231 20.98-40.305 27.312a123.042 123.042 0 0 1-25.497 7.592 122.981 122.981 0 0 1 25.497 7.592c15.074 6.332 28.768 15.613 40.305 27.312a126.122 126.122 0 0 1 26.93 40.877 127.472 127.472 0 0 1 9.207 40.224c.277 4.41-3.338 7.995-7.765 7.995H7.78c-4.427 0-8.042-3.585-7.765-7.995a127.48 127.48 0 0 1 9.207-40.224 126.132 126.132 0 0 1 26.93-40.877c11.537-11.699 25.231-20.98 40.305-27.312a122.987 122.987 0 0 1 25.497-7.592 123.048 123.048 0 0 1-25.497-7.592c-15.074-6.332-28.768-15.613-40.305-27.313a126.134 126.134 0 0 1-26.93-40.877Z"
        clipRule="evenodd"
        style={{
          touchAction: "none",
        }}
      />
      <path
        fill="url(#pattern1)"
        fillOpacity={0.6}
        fillRule="evenodd"
        d="M9.222 48.227A127.478 127.478 0 0 1 .015 8.005C-.262 3.594 3.353.009 7.78.009h232.44c4.427 0 8.042 3.585 7.765 7.995a127.47 127.47 0 0 1-9.207 40.224 126.123 126.123 0 0 1-26.93 40.877c-11.537 11.699-25.231 20.98-40.305 27.312a123.042 123.042 0 0 1-25.497 7.592 122.981 122.981 0 0 1 25.497 7.592c15.074 6.332 28.768 15.613 40.305 27.312a126.122 126.122 0 0 1 26.93 40.877 127.472 127.472 0 0 1 9.207 40.224c.277 4.41-3.338 7.995-7.765 7.995H7.78c-4.427 0-8.042-3.585-7.765-7.995a127.48 127.48 0 0 1 9.207-40.224 126.132 126.132 0 0 1 26.93-40.877c11.537-11.699 25.231-20.98 40.305-27.312a122.987 122.987 0 0 1 25.497-7.592 123.048 123.048 0 0 1-25.497-7.592c-15.074-6.332-28.768-15.613-40.305-27.313a126.134 126.134 0 0 1-26.93-40.877Z"
        clipRule="evenodd"
        style={{
          mixBlendMode: "multiply",
          touchAction: "none",
        }}
      />
      <path
        fill="url(#paint2_radial_1629_34054)"
        fillRule="evenodd"
        d="M9.222 48.227A127.478 127.478 0 0 1 .015 8.005C-.262 3.594 3.353.009 7.78.009h232.44c4.427 0 8.042 3.585 7.765 7.995a127.47 127.47 0 0 1-9.207 40.224 126.123 126.123 0 0 1-26.93 40.877c-11.537 11.699-25.231 20.98-40.305 27.312a123.042 123.042 0 0 1-25.497 7.592 122.981 122.981 0 0 1 25.497 7.592c15.074 6.332 28.768 15.613 40.305 27.312a126.122 126.122 0 0 1 26.93 40.877 127.472 127.472 0 0 1 9.207 40.224c.277 4.41-3.338 7.995-7.765 7.995H7.78c-4.427 0-8.042-3.585-7.765-7.995a127.48 127.48 0 0 1 9.207-40.224 126.132 126.132 0 0 1 26.93-40.877c11.537-11.699 25.231-20.98 40.305-27.312a122.987 122.987 0 0 1 25.497-7.592 123.048 123.048 0 0 1-25.497-7.592c-15.074-6.332-28.768-15.613-40.305-27.313a126.134 126.134 0 0 1-26.93-40.877Z"
        clipRule="evenodd"
        style={{
          touchAction: "none",
        }}
      />
      <path
        fill="url(#pattern2)"
        fillRule="evenodd"
        d="M9.222 48.227A127.478 127.478 0 0 1 .015 8.005C-.262 3.594 3.353.009 7.78.009h232.44c4.427 0 8.042 3.585 7.765 7.995a127.47 127.47 0 0 1-9.207 40.224 126.123 126.123 0 0 1-26.93 40.877c-11.537 11.699-25.231 20.98-40.305 27.312a123.042 123.042 0 0 1-25.497 7.592 122.981 122.981 0 0 1 25.497 7.592c15.074 6.332 28.768 15.613 40.305 27.312a126.122 126.122 0 0 1 26.93 40.877 127.472 127.472 0 0 1 9.207 40.224c.277 4.41-3.338 7.995-7.765 7.995H7.78c-4.427 0-8.042-3.585-7.765-7.995a127.48 127.48 0 0 1 9.207-40.224 126.132 126.132 0 0 1 26.93-40.877c11.537-11.699 25.231-20.98 40.305-27.312a122.987 122.987 0 0 1 25.497-7.592 123.048 123.048 0 0 1-25.497-7.592c-15.074-6.332-28.768-15.613-40.305-27.313a126.134 126.134 0 0 1-26.93-40.877Z"
        clipRule="evenodd"
        style={{
          mixBlendMode: "multiply",
          touchAction: "none",
        }}
      />
      <defs
        style={{
          touchAction: "none",
        }}
      >
        <pattern
          id="pattern0"
          width={0.806}
          height={0.806}
          patternContentUnits="objectBoundingBox"
          style={{
            touchAction: "none",
          }}
        >
          <use
            xlinkHref="#svg-noise"
            transform="scale(.00161)"
            style={{
              touchAction: "none",
            }}
          />
        </pattern>
        <pattern
          id="pattern1"
          width={1.145}
          height={1.145}
          patternContentUnits="objectBoundingBox"
          style={{
            touchAction: "none",
          }}
        >
          <use
            xlinkHref="#svg-noise"
            transform="scale(.00229)"
            style={{
              touchAction: "none",
            }}
          />
        </pattern>
        <pattern
          id="pattern2"
          width={0.403}
          height={0.403}
          patternContentUnits="objectBoundingBox"
          style={{
            touchAction: "none",
          }}
        >
          <use
            xlinkHref="#svg-noise"
            transform="scale(.0008)"
            style={{
              touchAction: "none",
            }}
          />
        </pattern>
        <radialGradient
          id="paint1_radial_1629_34054"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(76.0007 -837.0006 358.90647 32.58915 177 394.509)"
          gradientUnits="userSpaceOnUse"
          style={{
            touchAction: "none",
          }}
        >
          <stop
            stopColor="#FF8709"
            style={{
              touchAction: "none",
            }}
          />
          <stop
            offset={0.455}
            stopColor="#FFC78A"
            style={{
              touchAction: "none",
            }}
          />
          <stop
            offset={0.667}
            stopColor="#FFD9B0"
            style={{
              touchAction: "none",
            }}
          />
        </radialGradient>
        <radialGradient
          id="paint2_radial_1629_34054"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(-48.289 195.776 87.758) scale(235.103 157.04)"
          gradientUnits="userSpaceOnUse"
          style={{
            touchAction: "none",
          }}
        >
          <stop
            stopColor="#FFD9B0"
            style={{
              touchAction: "none",
            }}
          />
          <stop
            offset={0.807}
            stopColor="#FD9F3B"
            style={{
              touchAction: "none",
            }}
          />
          <stop
            offset={1}
            stopColor="#FF8709"
            style={{
              touchAction: "none",
            }}
          />
        </radialGradient>
        <linearGradient
          id="paint0_linear_1629_34054"
          x1={11.365}
          x2={202.145}
          y1={62.241}
          y2={148.968}
          gradientUnits="userSpaceOnUse"
          style={{
            touchAction: "none",
          }}
        >
          <stop
            offset={0.152}
            stopColor="#0AE448"
            style={{
              touchAction: "none",
            }}
          />
          <stop
            offset={0.855}
            stopColor="#ABFF84"
            style={{
              touchAction: "none",
            }}
          />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};
export default ShakingTimeCupSVG;
