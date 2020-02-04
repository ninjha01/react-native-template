iOS: 
[![Build status](https://build.appcenter.ms/v0.1/apps/00f7acd4-3735-4be3-af9d-fa7ef3b9f4f0/branches/master/badge)](https://appcenter.ms)

Android:
[![Build status](https://build.appcenter.ms/v0.1/apps/59f3bde1-c779-4f92-92f7-80a6acfbf3c6/branches/master/badge)](https://appcenter.ms)

# Hello World

TODO:
1. Set up VS App Center CICD
1. Change Firebase Key


# Set up react native

## Common

```
brew install node
brew install watchman
cd react-native/mast/;
npm install
yarn install
cd ios/;
pod install
pod install --repo-update # not sure if both are necessary
```

## iOS

setup Xcode

```
sudo gem install cocoapods
```

## Android

```
brew tap AdoptOpenJDK/openjdk
brew cask install adoptopenjdk8

brew cask install android-studio
```

Set up android studio according to:

put

```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

into `~/.bash_profile`

`source ~/.bash_profile`
