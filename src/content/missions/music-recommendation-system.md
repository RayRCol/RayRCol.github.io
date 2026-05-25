---
title: Music Recommendation System
summary: Hybrid recommendation engine that suggests tracks based on listening history and audio features, combining collaborative filtering and content-based methods via the Spotify API.
status: Recommender
statusTone: green
icon: rocket
order: 5
vehicle: Python · Surprise · Pandas · Spotify API
missionWindow: 4 weeks
destination: Spotify Track Dataset
coverImage: /images/report-article-02.png
---
## Project Overview

Built a music recommendation system that surfaces personalized track suggestions by combining two complementary approaches: collaborative filtering based on user listening patterns, and content-based filtering based on audio features extracted from the Spotify API.

## Methodology

User-track interaction data was used to train a matrix factorization model (SVD) using the Surprise library. In parallel, a content-based model was built using audio features (tempo, energy, danceability, valence, and acousticness) to identify tracks similar to a user's recent history. The two scores were combined using a weighted hybrid approach, with weights tuned via cross-validation.

## Results

The hybrid model improved precision@10 by 18% over the pure collaborative filtering baseline. Cold-start performance — recommendations for new users with little listening history — was significantly improved by the content-based component.

## Impact

The system demonstrates how combining behavioral signals (what users listen to) with audio content signals (what the music sounds like) produces better recommendations than either method alone, a pattern applicable to any domain where both interaction history and item features are available.
