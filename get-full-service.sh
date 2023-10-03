#!/bin/bash

# Base URL for full-service binary downloads
BASE_URL="https://github.com/mobilecoinofficial/full-service/releases/download"
TEMP_DIR=/tmp/full-service

# Setup defaults
FS_ARCH="X64"
FS_NET="mainnet"


# Parse arguments
while getopts 'o:v:a:n:h' opt; do
  case "$opt" in
    o)
      FS_OS=${OPTARG}
      ;;
    v)
      FS_VERSION=${OPTARG}
      ;;
    a)
      FS_ARCH=${OPTARG}
      ;;
    n)
      FS_NET=${OPTARG}
      ;;
    ?|h)
      echo "Usage: $(basename $0) [-o OS] [-v VERSION] [-a ARCH] [-n NETWORK]"
      echo "OS: mac|linux|win"
      echo "ARCH: X64|ARM64"
      echo "NETWORK: mainnet|testnet"
      exit 1
      ;;
  esac
done

# Resolve OS if not specified
if [ -z ${FS_OS} ]; then
  echo "Inferring OS from $OSTYPE"

  if [ "${OSTYPE}" == "linux-gnu" ]; then
    FS_OS="linux"
  elif [ "$OSTYPE" == "darwin"* ]; then
    FS_OS="mac"
  else
    echo "Unable to resolve OS type, please use '-o OS'"
    exit 2
  fi
fi

# Lookup latest release if not specified
if [ -z ${FS_VERSION} ]; then
  FS_VERSION=$(curl -L https://api.github.com/repos/mobilecoinofficial/full-service/releases/latest | jq -r '.name')
  echo "Resolved latest full-service version: ${FS_VERSION}"
else
  echo "Using specified full-service version: ${FS_VERSION}"
fi

echo "Fetching ${FS_VERSION} binaries for ${FS_OS}-${FS_ARCH}-${FS_NET}"

# Compute download URLs
case $FS_OS in
  mac)
    echo "Fetching macOS ${FS_NET} binaries"
    FILE="${FS_VERSION}-macOS-${FS_ARCH}-${FS_NET}.tar.gz"
    ;;

  linux)
    echo "Fetching linux ${FS_NET} binaries"
    FILE="${FS_VERSION}-Linux-${FS_ARCH}-${FS_NET}.tar.gz"
    ;;

  win)
    echo "Windows not (yet?) supported"
    exit 1
    ;;

  *)
    echo "Unrecognised OS ${FS_OS}"
    exit 2
    ;;
esac

# Setup temporary directory
mkdir -p $TEMP_DIR

# Download file
if [ ! -f "${TEMP_DIR}/${FILE}" ]; then
  echo "Downloading ${BASE_URL}/${FS_VERSION}/${FILE} to ${TEMP_DIR}"
  curl -L "${BASE_URL}/${FS_VERSION}/${FILE}" --output ${TEMP_DIR}/${FILE}
else
  echo "Using existing ${TEMP_DIR}/${FILE}"
fi

# Unpack to binary directory
echo "Extracting ${FILE} to ./full-service-bin/${FS_NET}"
tar -xf ${TEMP_DIR}/${FILE} --strip-components=1 -C ./full-service-bin/${FS_NET}
