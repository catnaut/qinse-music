---
sidebar_position: 1
---

# Overview

This document is intended to provide a high-level overview of the design of the project. It is intended to provide a starting point for understanding the project and its components.


## Project Structure

项目分为以下组件：

- **[前端](./frontend)**: 前端是一个 Next.js 应用程序，负责渲染用户界面
- **[后端](./backend.md)**: 后端是一个 Java 应用程序，负责处理用户请求

前后端通过插件系统，官方后端作为一个插件，提供用户自行部署的音乐源


## Frontend Design

当我们团队的主要任务是提供方便的音乐平台体验时，我们不仅注重功能性，也致力于确保我们的平台在各种设备上都能流畅运行。为此，我们采用了适应性强、界面漂亮的前端组件库 [[shadcn]]。这个组件库不仅提供了易于自定义的组件，而且默认样式十分吸引人，为我们的用户带来了愉悦的视觉体验。我们也选择了 [[Next.js]] 作为我们的前端框架，它不仅提供了强大的服务器渲染(SSR)和搜索引擎优化(SEO)功能，还具有出色的生态系统和丰富的资料支持。

