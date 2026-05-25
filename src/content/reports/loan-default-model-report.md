---
title: LOAN DEFAULT / PREDICTION MODEL
summary: XGBoost classifier achieves 94% AUC-ROC on the held-out test set, with SHAP analysis identifying debt-to-income ratio as the single strongest default signal.
label: Model Report
publishedAt: 2026-04-15
image: /images/report-article-02.png
spectrumBars: [60, 72, 78, 85, 70, 88, 76, 92, 68, 83, 78, 94]
rangeStart: Epoch 1
rangeEnd: Epoch 12
highlight: 94% AUC-ROC on held-out test set
---
## Summary

An XGBoost binary classifier trained on 150,000 loan records predicts default risk with an AUC-ROC of 0.94. The model was tuned using Bayesian optimization over 200 trials and evaluated on a stratified hold-out set to account for class imbalance (default rate: 7.2%).

## Model Notes

SMOTE oversampling was applied during training to address class imbalance without leaking test-set information. The bar chart above shows model AUC progression across training epochs, demonstrating consistent improvement without overfitting after epoch 8.

## Key Takeaway

SHAP global feature importance ranked debt-to-income ratio, total open credit lines, and months since last delinquency as the three strongest predictors — results that align with domain expertise and support the model's trust and interpretability profile for regulatory review.
