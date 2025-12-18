#!/bin/bash

# Download pre-built ffmpeg binary for macOS
# This avoids Homebrew permission issues

FFMPEG_DIR="$HOME/ffmpeg"
FFMPEG_BIN="$FFMPEG_DIR/ffmpeg"

# Check if already downloaded
if [ -f "$FFMPEG_BIN" ]; then
    echo "ffmpeg already downloaded at $FFMPEG_BIN"
    exit 0
fi

echo "Downloading ffmpeg..."
mkdir -p "$FFMPEG_DIR"
cd "$FFMPEG_DIR"

# Download from a reliable source (using GitHub releases or static build)
# For macOS, we'll use a static build from johnvansickle.com or similar
ARCH=$(uname -m)
if [ "$ARCH" == "arm64" ]; then
    echo "Detected Apple Silicon (arm64)"
    # For Apple Silicon, try downloading from a reliable source
    curl -L -o ffmpeg.zip "https://evermeet.cx/ffmpeg/ffmpeg-7.0.zip" 2>/dev/null || {
        echo "Failed to download. Please install ffmpeg manually:"
        echo "  brew install ffmpeg"
        echo "Or download from: https://ffmpeg.org/download.html"
        exit 1
    }
    unzip -q ffmpeg.zip 2>/dev/null && rm ffmpeg.zip
    chmod +x ffmpeg
else
    echo "Detected Intel (x86_64)"
    curl -L -o ffmpeg.zip "https://evermeet.cx/ffmpeg/ffmpeg-7.0.zip" 2>/dev/null || {
        echo "Failed to download. Please install ffmpeg manually:"
        echo "  brew install ffmpeg"
        echo "Or download from: https://ffmpeg.org/download.html"
        exit 1
    }
    unzip -q ffmpeg.zip 2>/dev/null && rm ffmpeg.zip
    chmod +x ffmpeg
fi

if [ -f "$FFMPEG_BIN" ]; then
    echo "ffmpeg downloaded successfully to $FFMPEG_BIN"
    echo "You can now run: ./compress-video.sh"
else
    echo "Download failed. Please install ffmpeg manually."
    exit 1
fi

