# ReactResumeSrc

## How to run project from source

While in the ReactResumeSrc directory:
1. yarn create vite client --template react
2. mv -force src/assets/* client/src/assets
3. rm client/src/assets/react.svg
4. rm -r src/assets
5. mv -force src/* client/src
6. mv -force index.html client
7. rm -r src
8. cd client
9. yarn add @react-three/fiber @react-three/drei @react-three/rapier @react-three/postprocessing three react-device-detect react-swipe
10. yarn run dev

## How to build project

While in client directory:
1. yarn build
2. cp ./src/assets/* ./dist/assets

> [!WARNING]
> Because yarn does not account for include directories when building the project, we must manually change the include directories in the resulting JS file. In an text editing software, replace every occurance of "./src/assets" with "./assets"

> ### TODO
> 1. Small messages to clarify to tap the heads and swipe the project cards
> 2. Experience cards should not have as much padding and margin in mobile
> 3. Experience cards should brighten as you scroll towards them
> 4. Contact label should be in the middle on mobile but isnt
> 5. Find a way to include the old opening animation
