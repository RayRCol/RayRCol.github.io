---
title: Tools & Stack
summary: A pragmatic stack built around Python, tree-based ensembles, deep learning frameworks, and cloud-ready deployment tools — selected for real-world performance, not resume padding.
eyebrow: Technology
image: /images/singleton-technology.png
highlights:
  - label: Core Languages
    value: Python (primary), SQL, Bash.
  - label: ML & DL
    value: Scikit-learn, XGBoost, LightGBM, CatBoost, TensorFlow, Keras, PyTorch, Hugging Face Transformers.
  - label: Data & Deployment
    value: Pandas, NumPy, Matplotlib, Seaborn, Plotly, Streamlit, FastAPI, Docker, GitHub Actions.
---
My technical choices are driven by one question: does this tool make the work more reliable and the results more trustworthy? I reach for complexity only when simpler solutions have been ruled out.

## Machine learning stack

For tabular problems I default to gradient boosting (XGBoost, LightGBM, CatBoost) with strong feature engineering. Linear models serve as baselines and interpretability benchmarks. Scikit-learn provides the pipeline infrastructure, cross-validation, and preprocessing utilities that keep experiments consistent and reproducible.

For hyperparameter optimization I use Optuna, which offers Bayesian search without verbose boilerplate. SHAP is standard practice for model explainability — I include SHAP force plots and summary plots in every model report.

## Deep learning

TensorFlow and Keras are my primary deep learning tools for computer vision and NLP tasks. I use PyTorch when a project requires custom training loops or research-oriented flexibility. Hugging Face Transformers is the default starting point for any NLP task where pre-trained language models are applicable.

## Data engineering and visualization

Pandas and NumPy cover nearly all data manipulation needs. For visualization I use Matplotlib and Seaborn for static reporting and Plotly for interactive charts embedded in Streamlit dashboards.

## Deployment and MLOps

Production deployments are built with FastAPI (REST inference endpoints), containerized with Docker, and served on Railway or Hugging Face Spaces. CI/CD is managed through GitHub Actions. I'm currently expanding my MLOps knowledge toward experiment tracking with MLflow and model monitoring with Evidently.
