# ReactResumeSrc

## How to build project from source

While in the ReactResumeSrc directory:
1. yarn create vite client --template react
2. mv -force src/* client/src
3. mv assets client
4. rm src
5. cd client
6. yarn add @react-three/fiber @react-three/drei @react-three/rapier @react-three/postprocessing three
7. yarn run dev
