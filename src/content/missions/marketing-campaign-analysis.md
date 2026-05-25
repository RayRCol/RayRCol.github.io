---
title: Marketing Campaign Analysis
summary: Exploratory analysis of a retail marketing dataset to identify which customer segments respond most effectively to targeted campaigns, using clustering and statistical testing.
status: Complete
statusTone: green
icon: satellite
order: 1
vehicle: Python · Pandas · Scikit-learn · Seaborn
missionWindow: 4 weeks
destination: Retail Customer Dataset (UCI ML Repository)
coverImage: /images/mission-article-01.png
---
## Project Overview

This project analyzes the results of multiple marketing campaigns run by a retail bank. The goal is to identify patterns in customer behavior and determine which segments are most likely to subscribe to a term deposit after being contacted.

## Methodology

Exploratory data analysis uncovered significant class imbalance in the target variable. After handling missing values and encoding categorical features, K-Means clustering was applied to segment customers by their demographic and behavioral profiles. Statistical hypothesis testing validated whether campaign success rates differed meaningfully across segments.

## Key Findings

High-value segments — characterized by higher account balances, longer call durations, and fewer prior contacts — showed a 2.4× higher conversion rate than the population average. Customers contacted in spring and early autumn responded significantly better than those reached in summer, suggesting seasonal timing as a key lever for future campaigns.

## Impact

The segmentation framework produced a prioritized contact list that reduced outreach volume by 38% while maintaining projected conversion targets, making future campaigns more cost-efficient.
