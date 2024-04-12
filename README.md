# ReactResumeSrc

## How to build project from source

While in the ReactResumeSrc directory:
1. yarn create vite client --template react
2. mv src/assets client
3. mv -force src/* client/src
4. mv -force index.html client
5. rm -r src
6. cd client
7. yarn add @react-three/fiber @react-three/drei @react-three/rapier @react-three/postprocessing three react-device-detect react-swipe
8. yarn run dev
