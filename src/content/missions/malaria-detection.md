---
title: Malaria Detection
summary: Deep learning model using convolutional neural networks to classify microscopy cell images as parasitized or uninfected, trained on the NIH malaria dataset with data augmentation.
status: Deep Learning
statusTone: gold
icon: star
order: 3
vehicle: Python · TensorFlow · Keras · OpenCV
missionWindow: 5 weeks
destination: NIH Cell Image Dataset (27,558 images)
coverImage: /images/mission-article-03.png
---
## Project Overview

Malaria diagnosis in resource-limited settings often relies on manual microscopy review, which is time-consuming and requires trained specialists. This project builds a CNN-based image classifier to automate the detection of parasitized red blood cells from microscopy slides.

## Methodology

The NIH Malaria Cell Images dataset (27,558 cell images) was used for training and evaluation. A custom CNN architecture was trained from scratch, and transfer learning was applied using a pre-trained MobileNetV2 backbone. Data augmentation techniques — random flips, rotations, and brightness adjustments — were used to improve generalization.

## Results

The transfer learning model achieved 96.4% accuracy and a recall of 97.1% on the test set. High recall was prioritized over precision to minimize false negatives, which in a clinical context means a parasitized cell being labeled as healthy.

## Impact

This model demonstrates a path toward low-cost automated screening tools that could assist healthcare workers in malaria-endemic regions, reducing diagnostic bottlenecks and enabling faster treatment decisions.
