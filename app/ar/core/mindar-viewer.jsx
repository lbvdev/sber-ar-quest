'use client';

import { useEffect, useRef, useState } from 'react';

const MindARViewer = () => {
  const sceneRef = useRef(null);
  const isStartedRef = useRef(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadLibraries = async () => {
      await import('aframe');
      await import('mind-ar/dist/mindar-image-aframe.prod.js');
      setLoaded(true);
    };

    loadLibraries();
  }, []);

  useEffect(() => {
    if (!loaded || !sceneRef.current) return;

    let isMounted = true;
    const sceneEl = sceneRef.current;
    
    const handleRenderStart = () => {
      if (!isMounted) return;
      
      const arSystem = sceneEl.systems["mindar-image-system"];
      if (arSystem && !isStartedRef.current) {
        try {
          arSystem.start();
          isStartedRef.current = true;
        } catch {}
      }
    };
    
    sceneEl.addEventListener('renderstart', handleRenderStart);
    
    return () => {
      isMounted = false;
      sceneEl.removeEventListener('renderstart', handleRenderStart);
      
      try {
        const arSystem = sceneEl.systems["mindar-image-system"];
        if (arSystem && isStartedRef.current) {
          arSystem.stop();
        }
      } catch {} finally {
        isStartedRef.current = false;
      }
    };
  }, [loaded]);

  if (!loaded) {
    return <div>Loading AR...</div>;
  }

  return (
    <a-scene ref={sceneRef} mindar-image="imageTargetSrc: /markers.mind; autoStart: false; uiLoading: no; uiError: no; uiScanning: no; maxTrack: 6" color-space="sRGB" embedded renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-assets>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img id="beeAfter" src="/images/bee-after.png" alt="" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img id="sberAfter1" src="/images/sbercard-after1.png" alt="" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img id="sberAfter2" src="/images/sbercard-after2.png" alt="" />
        <a-asset-item id="leaf" src="/models/leaf/scene.gltf"></a-asset-item>
        <a-asset-item id="bee" src="/models/bee/scene.gltf"></a-asset-item>
        <a-asset-item id="sunflower" src="/models/sunflower/scene.gltf"></a-asset-item>
        <a-asset-item id="croissant" src="/models/croissant/scene.gltf"></a-asset-item>
        <a-asset-item id="elSeed" src="/models/el-seed/scene.gltf"></a-asset-item>
        <a-asset-item id="butterflyOcean" src="/models/butterfly-ocean/scene.gltf"></a-asset-item>
        <a-asset-item id="butterflyGlitch" src="/models/butterfly-glitch/scene.gltf"></a-asset-item>
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      {/* bee */}
      <a-entity mindar-image-target="targetIndex: 0">
        <a-image
        src="#beeAfter"
        width="1"
        height="0.5"
        position="0 0 0"
        rotation="0 0 0"
        scale="1 1 1"
        ></a-image>
        
        <a-gltf-model
        src="#sunflower"
        rotation="-70 130 70"
        position="0.15 -0.1 0"
        scale="4.5 4.5 4.5"
        ></a-gltf-model>

        <a-gltf-model
        src="#bee"
        rotation="-90 130 70"
        position="-0.3 -0.18 0"
        scale="0.1 0.1 0.1"
        ></a-gltf-model>
      </a-entity>

      {/* butterfly-glitch */}
      <a-entity mindar-image-target="targetIndex: 1">
        <a-gltf-model
        src="#butterflyGlitch"
        rotation="-50 130 70"
        position="-0.3 0.1 0"
        scale="0.8 0.8 0.8"
        ></a-gltf-model>
      </a-entity>

      {/* butterfly-ocean */}
      <a-entity mindar-image-target="targetIndex: 2">
        <a-gltf-model
        src="#butterflyOcean"
        rotation="-40 180 0"
        position="-0.15 0 0.2"
        scale="0.8 0.8 0.8"
        animation="property: position; to: 0.15 0 0.2; dur: 3000; easing: easeInOutQuad; loop: true; dir: alternate"
        ></a-gltf-model>
      </a-entity>

      {/* croissant */}
      <a-entity mindar-image-target="targetIndex: 3">
        <a-gltf-model
        src="#croissant"
        rotation="55 -58 -12"
        position="0.1 0.18 0"
        scale="5 5 5"
        animation="property: rotation; to: 55 70 -12; dur: 3000; easing: easeInOutQuad; loop: true; dir: alternate"
        ></a-gltf-model>
      </a-entity>

      {/* el-seed */}
      <a-entity mindar-image-target="targetIndex: 4">
        <a-gltf-model
        src="#elSeed"
        rotation="30 -80 -60"
        position="0 0 -0.2"
        scale="1.65 1.65 1.65"></a-gltf-model>
      </a-entity>

      {/* sbercard */}
      <a-entity mindar-image-target="targetIndex: 5">
      <a-image
        src="#sberAfter1"
        width="0.656"
        height="0.157"
        position="0 0.4 0"
        rotation="0 0 0"
        scale="1 1 1"></a-image>
        <a-image
        src="#sberAfter2"
        width="0.815"
        height="0.175"
        position="0 -0.4 0"
        rotation="0 0 0"
        scale="1 1 1"></a-image>
        <a-gltf-model rotation="-35 140 40" position="-0.15 0 0.2" scale="0.6 0.6 0.6" src="#leaf" animation="property: position; to: -0.25 0 0.2; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"></a-gltf-model>
      </a-entity>
    </a-scene>
  )
};

export default MindARViewer;
