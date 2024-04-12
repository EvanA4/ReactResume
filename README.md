# ReactResumeSrc

## How to run project from source

While in the ReactResumeSrc directory:
1. yarn create vite client --template react
2. mv -force src/assets/* client/src/assets
3. mv -force src/* client/src
4. mv -force index.html client
5. rm -r src
6. cd client
7. yarn add @react-three/fiber @react-three/drei @react-three/rapier @react-three/postprocessing three react-device-detect react-swipe
8. yarn run dev

## How to build project

While in client directory:
1. yarn build
2. mv ./src/assets/* ./dist/assets

> [!WARNING]
> Because yarn does not account for include directories when building the project, we must manually change the include directories in the resulting JS file. In an text editing software, replace every occurance of "./src/assets" with "./assets"
