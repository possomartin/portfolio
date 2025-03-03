import { useState, useEffect } from 'react';
import { GLTF, GLTFLoader } from 'three/examples/jsm/Addons.js';

export interface IUseLoaderProps {
  url: string;
}

export const useLoader = ({ url }: IUseLoaderProps) => {
  const [model, setModel] = useState<GLTF | null>(null);

  useEffect(() => {
    if (model) return;
    const getModel = async () => {
      const loader = new GLTFLoader();
      const gltf = await loader.loadAsync(url);
      setModel(gltf);
    };

    getModel();
  });

  return model;
};
