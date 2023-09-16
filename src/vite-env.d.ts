/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAIL_KEY: string;
  readonly VITE_EMAILID: string;
  readonly VITE_SMTP_HOST: string;
  readonly VITE_SMTP_PORT: string;
  readonly VITE_SMTP_USERNAME: string;
  readonly VITE_SMTP_PASSWORD: string;
  readonly VITE_SMTP_SENDER: string;
  readonly VITE_SMTP_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
