# ReactResumeSrc

## How to run project from source

While in the ReactResumeSrc directory:
1. yarn create vite client --template react
2. mv -force src/assets/* client/src/assets
3. rm -r src/assets
4. mv -force src/* client/src
5. mv -force index.html client
6. rm -r src
7. cd client
8. yarn add @react-three/fiber @react-three/drei @react-three/rapier @react-three/postprocessing three react-device-detect react-swipe
9. yarn run dev

## How to build project

While in client directory:
1. yarn build
2. cp ./src/assets/* ./dist/assets

> [!WARNING]
> Because yarn does not account for include directories when building the project, we must manually change the include directories in the resulting JS file. In an text editing software, replace every occurance of "./src/assets" with "./assets"
