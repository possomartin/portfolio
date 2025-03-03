'use client';

import * as Three from 'three';
import { useLoader } from '@/app/hooks/useLoader';
import React, { ReactElement, useRef, useEffect } from 'react';

export interface IModelProps {
  url: string;
  className?: string;
  style?: {
    width: string;
    height: string;
  };
}

export const Model = ({ url, className, style }: IModelProps): ReactElement => {
  const containerRef = useRef<HTMLDivElement>(null);
  const model = useLoader({ url: url });

  useEffect(() => {
    if (containerRef) {
      const width = containerRef.current?.offsetWidth || 100;
      const height = containerRef.current?.offsetHeight || 100;

      const scene = new Three.Scene();
      const camera = new Three.PerspectiveCamera(75, width / height, 0.1, 1000);

      const renderer = new Three.WebGLRenderer({ alpha: true });
      renderer.setSize(width, height);

      if (model) {
        console.log(model);

        const pointLight = new Three.DirectionalLight(0xffffff, 1);
        pointLight.position.set(12, -4, 4);
        scene.add(pointLight);

        const pointLight2 = new Three.DirectionalLight(0x45b6fe, 0.6);
        pointLight2.position.set(-4, -4, 2);
        scene.add(pointLight2);

        const pointLight3 = new Three.DirectionalLight(0xff7383, 0.5);
        pointLight3.position.set(4, 5, 5);
        scene.add(pointLight3);

        const pointLight4 = new Three.DirectionalLight(0xbd30ff, 0.2);
        pointLight4.position.set(-9, 10, 5);
        scene.add(pointLight4);

        containerRef.current?.appendChild(renderer.domElement);

        camera.lookAt(model.scene.position);
        camera.position.z = 3;

        scene.add(model.scene);
        //scene.add(cube);

        const animate = () => {
          model.scene.rotation.y += 0.01;
          renderer.setClearColor(0x000000, 0);
          renderer.render(scene, camera);

          requestAnimationFrame(animate);
        };
        animate();
      }
    }
  }, [model]);
  return <div ref={containerRef} className={className} style={style}></div>;
};
