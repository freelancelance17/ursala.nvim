#!/bin/bash

# Set log file
export NVIM_NODE_LOG_LEVEL=debug
export NVIM_NODE_LOG_FILE=/tmp/nvim-js-plugin.log

# Clear previous log
> $NVIM_NODE_LOG_FILE

# Path to this plugin
PLUGIN_PATH=$(pwd)

# Create a temporary init.vim
TEMP_FILE=$(mktemp)
cat > $TEMP_FILE << EOF
" Add plugin to runtime path
set rtp+=$PLUGIN_PATH

" Force loading plugin
runtime! plugin/rplugin.vim
EOF

echo "Starting Neovim to register plugin..."
nvim -u $TEMP_FILE -c "UpdateRemotePlugins" -c "quit"

echo "Starting Neovim with plugin loaded..."
nvim -u $TEMP_FILE

# Clean up
rm $TEMP_FILE
