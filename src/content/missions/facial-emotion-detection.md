---
title: Facial Emotion Detection
summary: Real-time emotion recognition system that classifies facial expressions into seven emotional categories from video or image input using CNNs trained on the FER-2013 dataset.
status: Computer Vision
statusTone: blue
icon: satellite
order: 4
vehicle: Python · TensorFlow · OpenCV · MediaPipe
missionWindow: 6 weeks
destination: FER-2013 Facial Expression Dataset
coverImage: /images/report-article-01.png
---
## Project Overview

Developed a real-time facial emotion recognition system capable of detecting emotions from a live webcam feed or static images. The seven emotion classes are: angry, disgusted, fearful, happy, neutral, sad, and surprised.

## Methodology

The FER-2013 dataset (35,887 grayscale 48×48 images) was used for training. A custom deep CNN was built with multiple convolutional blocks, batch normalization, and dropout layers. MediaPipe was integrated to detect and crop face regions before feeding them to the classifier, enabling multi-face detection in a single frame.

## Results

The model achieved 65% test accuracy on FER-2013, consistent with published benchmarks given the inherent ambiguity in the dataset's labels. In controlled real-time demos with clear lighting, emotion detection is smooth at 25+ FPS on CPU.

## Impact

This system can be applied to human-computer interaction, accessibility tools for people with social communication difficulties, and affective computing research where understanding user emotional state improves product experience.
