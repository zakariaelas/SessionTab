# SessionTab

SessionTab is a chrome extension built to help you manage your open tabs. 

### Motivation

I always find myself in front of an excessive amount of open tabs and windows. The way I structure my browsing sessions is by keeping relevant tabs under a specific window. Whatever I do, I usually keep at least 2 windows open, one for miscellaneous tabs (social media, music, netflix, etc.), and another one for a specific task I am doing. I am not sure about you, but personally, I almost never work on a task until completion. Most of the time, I interleave tasks. For example, one day I could be working on a programming project and having tabs open for docs, for stackoverflow, github issues, etc. Then the following day, I find myself working on a course assignment or reviewing for an exam. The result is 3 windows open with a ton of tabs in each. I don't like to close the window because I don't want to lose my "browsing progress". 

One solution is using bookmarks to save all open tabs in different windows. This could work, however, i'm not a big fan of chrome bookmarks. I always get lost trying to find, add, or deleting bookmarks. In addition, I wanted to be **only** a few clicks away from "saving" and "retrieving" my sessions.

I briefly looked for a chrome extension online, but most of them were too complicated for what I needed, so I created an opportunity to build my own chrome extension. 

A chrome extension easily hooks into the browsing experience. It wouldn't require me to open a new window, which makes the experience smoother. 

This extension was built with React, emotion, reach-ui, and formik. 

## Installation

If you wish to play around with the source code, simply download or `git clone` the repository.

```
git clone git@github.com:zakariaelas/SessionTab.git
cd SessionTab
yarn install
```

## Usage

If you wish to use SessionTab in your Chrome browser, follow these instructions:

1. Download and extract the repository.
2. Open your Chrome browser, and then go to options -> More tools -> Extensions :

![screenshot1](https://user-images.githubusercontent.com/33696020/59946998-013e2080-9464-11e9-84b4-89a7425c24a6.jpg)

3. Click on "Load unpacked" on the upper left corner. Make sure the developer mode is activated:

![screenshot3](https://user-images.githubusercontent.com/33696020/59947424-23846e00-9465-11e9-91b7-569797e273ab.jpg)

4. Open your SessionTab folder.

5. Notice the SessionTab icon added to the right of the search bar:

![screenshot4](https://user-images.githubusercontent.com/33696020/59947636-a3123d00-9465-11e9-9903-4969f5367e7b.jpg)

![Screenshot5](https://user-images.githubusercontent.com/33696020/59957462-86d7c580-9490-11e9-81dc-a3a5b476d10a.jpg)

