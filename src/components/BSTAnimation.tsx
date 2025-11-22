"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const BSTAnimation = () => {
  const [activePath, setActivePath] = useState<number[]>([]);

  // Simple tree structure: value, x, y, left child index, right child index
  const nodes = [
    { id: 0, val: 50, x: 50, y: 10, left: 1, right: 2 },
    { id: 1, val: 30, x: 30, y: 30, left: 3, right: 4 },
    { id: 2, val: 70, x: 70, y: 30, left: 5, right: 6 },
    { id: 3, val: 20, x: 20, y: 50, left: null, right: null },
    { id: 4, val: 40, x: 40, y: 50, left: null, right: null },
    { id: 5, val: 60, x: 60, y: 50, left: null, right: null },
    { id: 6, val: 80, x: 80, y: 50, left: null, right: null },
  ];

  // Edges based on nodes
  const edges = [
    { from: 0, to: 1 },
    { from: 0, to: 2 },
    { from: 1, to: 3 },
    { from: 1, to: 4 },
    { from: 2, to: 5 },
    { from: 2, to: 6 },
  ];

  useEffect(() => {
    const paths = [
      [0, 1, 3], // Search 20
      [0, 1, 4], // Search 40
      [0, 2, 5], // Search 60
      [0, 2, 6], // Search 80
    ];
    
    let currentPathIndex = 0;

    const animateSearch = () => {
      const path = paths[currentPathIndex];
      let step = 0;
      
      const interval = setInterval(() => {
        if (step <= path.length) {
          setActivePath(path.slice(0, step + 1));
          step++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setActivePath([]);
            currentPathIndex = (currentPathIndex + 1) % paths.length;
            setTimeout(animateSearch, 500);
          }, 1000);
        }
      }, 600);
    };

    animateSearch();
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 100 60" className="w-full h-full max-w-md drop-shadow-2xl">
        {/* Edges */}
        {edges.map((edge, i) => {
          const startNode = nodes[edge.from];
          const endNode = nodes[edge.to];
          return (
            <motion.line
              key={`edge-${i}`}
              x1={startNode.x}
              y1={startNode.y}
              x2={endNode.x}
              y2={endNode.y}
              stroke="currentColor"
              className="text-neutral-700 dark:text-neutral-600"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => {
          const isActive = activePath.includes(node.id);
          const isTarget = activePath.length > 0 && activePath[activePath.length - 1] === node.id;
          
          return (
            <motion.g key={`node-${node.id}`}>
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="3"
                className={`${
                  isActive 
                    ? "fill-blue-500 stroke-blue-400" 
                    : "fill-neutral-900 dark:fill-black stroke-neutral-500 dark:stroke-neutral-700"
                } transition-colors duration-300`}
                strokeWidth="0.5"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10, delay: node.id * 0.1 }}
              />
              <text
                x={node.x}
                y={node.y}
                dy="1"
                textAnchor="middle"
                fontSize="2"
                className={`${
                  isActive ? "fill-white" : "fill-neutral-500 dark:fill-neutral-400"
                } font-bold select-none pointer-events-none transition-colors duration-300`}
              >
                {node.val}
              </text>
              {isActive && (
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="3"
                  className="stroke-blue-500 fill-none"
                  strokeWidth="0.5"
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
};

export default BSTAnimation;
