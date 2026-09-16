---
name: ecommerce-performance-diagnosis
description: Diagnose Chinese ecommerce performance from platform exports and produce an evidence-backed action plan. Use for 电商经营分析、GMV 拆解、淘宝/天猫/京东/拼多多/抖店/快手/视频号店铺复盘、流量转化商品复购履约分析; do not use for generic charting, ad buying, account operation, or fabricated platform benchmarks.
metadata:
  version: "0.18.1"
---

# Ecommerce Performance Diagnosis

Confirm the store, platform, period, business objective, campaign calendar, product scope, currency, refund basis, attribution window, and available exports. Keep each platform's definitions separate until a documented mapping makes them comparable.

## Establish metric contracts

Create a metric dictionary from the supplied export or platform documentation. At minimum resolve GMV versus paid amount versus settled revenue, visitors versus visits, placed versus paid orders, refund timing, coupon and subsidy treatment, ad spend, fulfillment cost, and tax inclusion. Show unknown definitions instead of choosing one silently.

Validate duplicate orders, cancelled and refunded orders, timezone and day boundaries, missing dates, SKU changes, traffic-source labels, and totals against the platform summary. Preserve raw exports and transformations.

## Diagnose the operating system

Use a driver tree appropriate to the available data:

- transaction: paid GMV = qualified traffic × paid conversion × average paid order value;
- product: sales, units, margin, stock cover, refund rate, and new-product contribution by SKU or category;
- customer: new versus returning buyers, repurchase cohort, purchase frequency, and customer concentration;
- acquisition: organic and paid traffic, spend, attributed revenue, CAC or ROAS under the stated attribution rule;
- fulfillment: cancellation, ship time, delivery, after-sales, and refund reasons;
- economics: contribution margin after platform fees, discounts, advertising, fulfillment, and refunds when those costs exist.

Compare against the previous equivalent period, target, and campaign-adjusted baseline. Do not compare a promotion day with a normal day without marking the calendar effect. Segment before averaging when platform, channel, product, or customer mix changed.

## Convert evidence into action

For every material gap, provide observed evidence, likely driver, confidence, alternative explanation, and the smallest test that can distinguish them. Prioritize by expected value, effort, reversibility, and risk. Avoid declaring causation from a dashboard correlation.

Deliver:

- a one-page performance summary;
- metric dictionary and data-quality exceptions;
- GMV and contribution-margin driver trees;
- funnel, product, customer, and fulfillment findings;
- an anomaly queue with owner and evidence needed;
- a 7/30-day action plan with hypothesis, change, guardrail, success metric, and review date.

Do not modify listings, prices, ads, inventory, or customer messages without explicit authorization. Do not expose order-level personal information in reports.
