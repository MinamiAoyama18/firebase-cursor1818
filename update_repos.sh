#!/bin/bash

# Array of project directories
PROJECTS=(
    "firebase-todo-app"
    "firebase-cursor1818"
    "streamlit-app"
)

# Base directory
BASE_DIR="$HOME/Development_M2"

# Print current date/time
echo "Starting repository updates at $(date)"
echo "-----------------------------------"

# Loop through each project
for project in "${PROJECTS[@]}"; do
    echo "Updating $project..."
    cd "$BASE_DIR/$project" || continue
    git pull
    echo "-----------------------------------"
done

echo "All updates completed!"
