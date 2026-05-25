---
title: Loan Default Prediction
summary: Binary classification model to predict whether a borrower will default on a loan, using logistic regression, random forest, and XGBoost with hyperparameter tuning and SHAP explainability.
status: ML Model
statusTone: blue
icon: rocket
order: 2
vehicle: Python · XGBoost · Scikit-learn · SHAP
missionWindow: 3 weeks
destination: Financial Credit Risk Dataset
coverImage: /images/mission-article-02.png
---
## Project Overview

Built a credit risk model to predict loan default probability for a financial institution. The goal was to reduce non-performing loans while minimizing false positives that would wrongly deny credit to qualified borrowers.

## Methodology

Three models were developed and compared — logistic regression as a baseline, random forest, and XGBoost. Features were engineered from raw financial variables including debt-to-income ratio, payment history, and credit utilization. Class imbalance was addressed using SMOTE oversampling. Hyperparameter tuning was performed via Bayesian optimization.

## Results

The final XGBoost classifier achieved an AUC-ROC of 0.94 on the held-out test set. SHAP (SHapley Additive Explanations) analysis was used to produce per-prediction explanations, identifying debt-to-income ratio, total credit lines, and delinquency history as the three strongest predictors of default.

## Impact

The model provides lenders with both a calibrated default probability score and an interpretable explanation for each decision, supporting regulatory compliance and loan officer review workflows.
