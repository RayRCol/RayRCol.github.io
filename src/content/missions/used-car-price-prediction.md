---
title: Used Car Price Prediction
summary: Regression model to estimate the market value of used vehicles based on age, mileage, brand, fuel type, and condition — using ensemble methods with extensive feature engineering.
status: Regression
statusTone: blue
icon: satellite
order: 7
vehicle: Python · LightGBM · Pandas · Feature Engineering
missionWindow: 3 weeks
destination: Used Car Market Dataset
coverImage: /images/departures-article-01.png
---
## Project Overview

Developed a regression model to predict the fair market price of used cars given a set of vehicle attributes. The goal was to produce accurate valuations that could support both buyers looking to assess fair pricing and sellers setting competitive listings.

## Methodology

Extensive feature engineering was performed: log-transforming the target price variable, encoding brand prestige into a numeric tier, extracting age from registration year, and creating interaction features between fuel type and mileage. LightGBM was selected as the primary model after benchmarking against linear regression and XGBoost. Optuna was used for hyperparameter optimization over 100 trials.

## Results

The final model achieved an R² of 0.91 and a mean absolute error of under $1,200 on the test set. Vehicle age and mileage were the strongest price predictors, followed by brand tier and fuel type.

## Impact

This model provides a data-driven baseline for vehicle valuation that outperforms simple heuristic rules. The same pipeline can be adapted to other second-hand markets (electronics, real estate) by swapping the feature set.
