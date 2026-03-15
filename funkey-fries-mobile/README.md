# funkey-fries-mobile

![Expo](https://img.shields.io/badge/Expo-React%20Native-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-4+-blue)

Mobile application (React Native + Expo). Handles native features, push notifications, offline queueing, and biometric authentication.

Key responsibilities

- Menus, cart, checkout flows
- Wallet integrations and Stellar payment flows (where applicable)
- Push notifications and local notifications
- Offline transaction queue and retry

Quick start

```bash
cd funkey-fries-mobile
npm install
# set API in .env or App.tsx: API_URL
expo start --lan
```

Environment

- `API_URL` — backend API base URL (set in `.env` or `app.json` / runtime config)

Important paths

- `src/app` — navigation & screens
- `src/components` — mobile UI components
- `src/services` — API, storage, notifications, blockchain helpers
- `src/hooks` — app hooks (useCart, useAuth, useStellar)

Testing & build

- `npm run test` — unit tests
- `expo build` / `eas build` — production builds (see Expo docs)

Notes

- For device testing, set the LAN API host to your machine IP and run `expo start --lan`.
- Secure storage should use MMKV or secure keystore on device for secrets.
