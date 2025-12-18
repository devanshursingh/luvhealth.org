#!/bin/bash

# Video compression script for hero_background_video.mp4
# This script compresses the video while preserving quality using H.264 codec

INPUT="src/assets/hero_background_video.mp4"
OUTPUT="src/assets/hero_background_video_compressed.mp4"
BACKUP="src/assets/hero_background_video_backup.mp4"

# Check if ffmpeg is installed (system, homebrew, or local)
FFMPEG_CMD=""
if command -v ffmpeg &> /dev/null; then
    FFMPEG_CMD="ffmpeg"
elif [ -f "$HOME/ffmpeg/ffmpeg" ]; then
    FFMPEG_CMD="$HOME/ffmpeg/ffmpeg"
elif [ -f "/usr/local/bin/ffmpeg" ]; then
    FFMPEG_CMD="/usr/local/bin/ffmpeg"
else
    echo "Error: ffmpeg is not installed."
    echo "Please install ffmpeg first:"
    echo "  brew install ffmpeg"
    echo "Or download from: https://ffmpeg.org/download.html"
    exit 1
fi

# Create backup
echo "Creating backup..."
cp "$INPUT" "$BACKUP"

# Compress video with high quality settings
# CRF 23 is a good balance between quality and file size (lower = better quality, 18-28 range)
# Using H.264 codec with preset 'medium' for good compression speed
echo "Compressing video (this may take a few minutes)..."
echo "Using: $FFMPEG_CMD"
$FFMPEG_CMD -i "$INPUT" \
  -c:v libx264 \
  -preset medium \
  -crf 23 \
  -c:a aac \
  -b:a 128k \
  -movflags +faststart \
  -y \
  "$OUTPUT"

# Check if compression was successful
if [ -f "$OUTPUT" ]; then
    ORIGINAL_SIZE=$(du -h "$INPUT" | cut -f1)
    NEW_SIZE=$(du -h "$OUTPUT" | cut -f1)
    
    echo ""
    echo "Compression complete!"
    echo "Original size: $ORIGINAL_SIZE"
    echo "Compressed size: $NEW_SIZE"
    echo ""
    echo "Backup saved as: $BACKUP"
    echo "Compressed video saved as: $OUTPUT"
    echo ""
    echo "To use the compressed video, replace the original:"
    echo "  mv $OUTPUT $INPUT"
    echo ""
    echo "Or review the compressed video first and then replace it manually."
else
    echo "Error: Compression failed. Original file is backed up as $BACKUP"
    exit 1
fi

