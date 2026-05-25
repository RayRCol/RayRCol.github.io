---
title: USED CAR / PRICE PREDICTION
summary: LightGBM regression model achieves R² of 0.91 with mean absolute error under $1,200, with vehicle age and mileage as the dominant price predictors.
label: Regression Report
publishedAt: 2026-03-20
image: /images/report-article-03.png
spectrumBars: [45, 58, 68, 75, 70, 82, 72, 85, 65, 78, 83, 91]
rangeStart: Q1
rangeEnd: Q12
highlight: R² 0.91 · MAE < $1,200
---
## Summary

A LightGBM regression model trained on 120,000 used vehicle listings predicts market price with R² = 0.91 and a mean absolute error of $1,140. Performance was validated on a 20% hold-out set stratified by vehicle age and brand tier.

## Model Notes

Feature engineering included log-transforming the price target, creating a brand prestige tier (economy / mid-range / premium / luxury), and deriving age from registration year. Optuna optimized 12 hyperparameters over 100 trials. The bar chart above shows quarterly model accuracy improvement through the training period as more data was incorporated.

## Key Takeaway

Vehicle age and mileage together explain approximately 58% of price variance. Brand tier adds a strong multiplicative effect: equivalent mileage and age produce prices that are on average 2.8× higher in the premium tier compared to economy. This interaction was captured by a custom feature combining both signals.
