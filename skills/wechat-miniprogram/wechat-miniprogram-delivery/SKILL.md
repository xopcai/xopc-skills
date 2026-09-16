---
name: wechat-miniprogram-delivery
description: Build or modify a WeChat Mini Program from supplied requirements and source, then verify it against current official platform constraints. Use for 微信小程序、WXML、WXSS、页面开发、分包、登录、云开发 and 开发者工具调试; do not reverse engineer third-party code, collect secrets, bypass platform review, or publish without authorization.
metadata:
  version: "0.18.3"
---

# WeChat Mini Program Delivery

Confirm the user journey, existing repository, framework and versions, AppID ownership context, target environments, backend contract, data classification, required platform capabilities, and acceptance criteria. Do not request private keys or session secrets in chat; use existing secure configuration paths.

Inspect project configuration, app/page structure, routing, components, subpackages, network layer, authentication, storage, permissions, privacy declarations, and build constraints before editing. Browse current official WeChat documentation when API availability, review policy, privacy, domain allowlists, quotas, or tooling behavior matters.

Implement the smallest coherent change using the project's established patterns. Keep UI states for loading, empty, error, denied permission, and retry. Minimize requested permissions and personal data, avoid logging tokens or identifiers, and preserve server-side authorization rather than trusting client state. Do not copy logic from minified or third-party applications without rights.

Verify with static checks and project tests, then use WeChat Developer Tools or its supported CLI when available to build and exercise the affected journey. Record environment-dependent gaps, device-specific checks, backend assumptions, privacy-console actions, and release prerequisites. Preview uploads, submissions, or publication and require explicit authorization before external mutation.
