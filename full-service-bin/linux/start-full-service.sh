#!/bin/bash

# Copyright (c) 2018-2020 MobileCoin Inc.
#
# Launches a local `mc-mobilecoind` instance that syncs the ledger from two nodes in the
# test network and hosts a wallet service running on port 4444, then launches a local
# `mc-testnet-client` instance that interacts with the local `mc-mobilecoind`.

set -e

trap "trap - SIGTERM && kill -- -$$" SIGINT SIGTERM EXIT

pushd "$(dirname "$0")"

killall full-service-testnet || true

LEDGER_DB_DIR="$1"
WALLET_DB_DIR="$2"
WALLET_DB_FILE_DIR="$3"

mkdir -p "${LEDGER_DB_DIR}"
mkdir -p "${WALLET_DB_DIR}"

echo "Starting full-service-testnet with ${LEDGER_DB_DIR} and ${WALLET_DB_DIR} and ${WALLET_DB_FILE_DIR}" > /tmp/mylog

./full-service-testnet \
        --ledger-db "${LEDGER_DB_DIR}" \
        --wallet-db "${WALLET_DB_FILE_DIR}" \
        --poll-interval 1 \
        --peer mc://node1.test.mobilecoin.com/ \
        --peer mc://node2.test.mobilecoin.com/ \
        --tx-source-url https://s3-us-west-1.amazonaws.com/mobilecoin.chain/node1.test.mobilecoin.com/ \
        --tx-source-url https://s3-us-west-1.amazonaws.com/mobilecoin.chain/node2.test.mobilecoin.com/ \
        --fog-ingest-enclave-css ./../ingest-enclave.testnet.css \
        &> /tmp/full-service-$(date '+%Y-%m-%d-%H:%M:%S').log &

pid=$!

wait $pid

popd
