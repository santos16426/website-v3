declare global {
  interface Window {
    dataLayer: any[];
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: {
        page_path?: string;
        [key: string]: any;
      }
    ) => void;
  }
}

export {};
