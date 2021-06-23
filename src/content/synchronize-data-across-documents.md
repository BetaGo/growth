---
layout: post
title: 浏览器多个标签页之间的通信方式
author: WanTong
date: 2020-09-19T13:05:02.823Z
draft: false
tags:
  - frontend
  - 前端
  - javascript
---

## windows.postMessage

适用于页面内的 `iframe`； 以及从当前页面用 `window.open()` 打开的页面面；

## EventSource

you also run into maximum connections per origin limits when using EventSource over HTTP/1.1, so if you have >6 tabs open then at least one won't be able to create an EventSource. (This is mostly fixed with HTTP/2+)
see https://stackoverflow.com/questions/16852690/sseeventsource-why-no-more-than-6-connections

## LocalStorage

## BroadcastChannel

not work in safari

There is a feature request bug for BroadcastChannel in Safari: https://bugs.webkit.org/show_bug.cgi?id=161472. It’s currently blocked by a spec issue around partitioning: https://github.com/whatwg/html/issues/5803.

## Service worker

## IDB observers

RXDB

参考[3.143 ways to synchronize data across documents - HTTP 203](https://youtu.be/9UNwHmagedE)
