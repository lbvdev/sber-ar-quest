/// <reference types="aframe" />

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'a-scene': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        ref?: React.Ref<any>;
        'mindar-image'?: string;
        'color-space'?: string;
        embedded?: boolean;
        renderer?: string;
        'vr-mode-ui'?: string;
        'device-orientation-permission-ui'?: string;
        [key: string]: any;
      };
      'a-assets': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'a-asset-item': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        id?: string;
        src?: string;
      };
      'a-camera': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        position?: string;
        'look-controls'?: string;
      };
      'a-entity': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'mindar-image-target'?: string;
        [key: string]: any;
      };
      'a-plane': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        position?: string;
        height?: string | number;
        width?: string | number;
        rotation?: string;
      };
      'a-gltf-model': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        position?: string;
        rotation?: string;
        scale?: string;
        animation?: string;
      };
    }
  }
  
  interface Window {
    AFRAME: any;
  }
}

export {};

