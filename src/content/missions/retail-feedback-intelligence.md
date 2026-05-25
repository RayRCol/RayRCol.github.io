---
title: Retail Feedback Intelligence
summary: NLP pipeline for real-time sentiment analysis and topic extraction from customer reviews, powering a live dashboard that surfaces actionable product and service insights.
status: NLP Pipeline
statusTone: gold
icon: star
order: 6
vehicle: Python · BERT · Hugging Face · Streamlit
missionWindow: 5 weeks
destination: E-commerce Customer Review Dataset
coverImage: /images/report-article-03.png
---
## Project Overview

Designed and built an end-to-end NLP system that processes customer reviews in real time, classifies their sentiment, extracts recurring topics, and presents findings on an interactive Streamlit dashboard updated as new reviews arrive.

## Methodology

A fine-tuned BERT model (bert-base-uncased) was used for three-class sentiment classification (positive, neutral, negative). Topic modeling was performed using BERTopic, which groups semantically similar review fragments into interpretable themes without requiring predefined labels. The pipeline was connected to a streaming data source and the dashboard refreshes every 60 seconds.

## Results

Sentiment classification achieved 91% accuracy on the hold-out set. BERTopic automatically surfaced seven recurring product themes from 50,000 reviews — including shipping delays, packaging quality, and product sizing — without manual topic definition.

## Impact

The dashboard gives product and operations teams a continuously updated view of customer pain points, enabling faster response to emerging issues rather than relying on periodic manual review analysis.
