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
Once you finish hacking, you should run the following command:
```
yarn build
```

## Usage

If you wish to use SessionTab in your Chrome browser, follow these instructions:

1. Download and extract the repository.
2. Open your Chrome browser, and then go to options -> More tools -> Extensions :

![screenshot1](https://user-images.githubusercontent.com/33696020/102027503-d147b300-3da4-11eb-9d07-bbd255b8d0a7.png)

3. Click on "Load unpacked" on the upper left corner. Make sure the developer mode is activated:

![screenshot3](https://user-images.githubusercontent.com/33696020/59947424-23846e00-9465-11e9-91b7-569797e273ab.jpg)

4. Open your SessionTab build folder.

5. Notice the SessionTab icon added to the right of the search bar:

![screenshot4](https://user-images.githubusercontent.com/33696020/102029599-559f3380-3daf-11eb-98d9-afebe6c30f96.jpg)

6. Start Saving!

![screenshot5](https://user-images.githubusercontent.com/33696020/102027623-a6aa2a00-3da5-11eb-8731-d46c1d341a19.jpg)

![screenshot6](https://user-images.githubusercontent.com/33696020/102029894-a2373e80-3db0-11eb-91bd-e876e68a90a5.jpg)

![screenshot7](https://user-images.githubusercontent.com/33696020/102029804-36ed6c80-3db0-11eb-8b99-ad3776dba6b2.jpg)

![screenshot8](https://user-images.githubusercontent.com/33696020/102029944-e32f5300-3db0-11eb-8c64-83a8e564c261.jpg)

![screenshot9](https://user-images.githubusercontent.com/33696020/102029943-e1fe2600-3db0-11eb-812c-704cad0ece1c.jpg)