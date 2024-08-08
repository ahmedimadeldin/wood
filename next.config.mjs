/** @type {import('next').NextConfig} */
import { i18n } from 'next-i18next';
const nextConfig = {
    i18n: {
        locales: ['en', 'ar'],
        defaultLocale: 'ar',
        localeDetection: false,
      },
};

export default nextConfig;
