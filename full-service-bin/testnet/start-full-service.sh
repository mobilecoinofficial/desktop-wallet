#!/bin/bash

# Copyright (c) 2018-2021 MobileCoin Inc.
#
# Launches a local `full-service` instance that syncs the ledger from two nodes in the
# network and hosts a wallet service running on port 9090

set -e

trap "trap - SIGTERM && kill -- -$$" SIGINT SIGTERM EXIT

pushd "$(dirname "$0")"

killall full-service || true

LEDGER_DB_DIR="$1"
WALLET_DB_DIR="$2"
WALLET_DB_FILE="$3"
MC_API_KEY="$4"

mkdir -p "${LEDGER_DB_DIR}"
mkdir -p "${WALLET_DB_DIR}"

echo "Starting full-service with ${LEDGER_DB_DIR} and ${WALLET_DB_DIR} and ${WALLET_DB_FILE} and api-key ${MC_API_KEY}" > /tmp/mylog

export MC_API_KEY=${MC_API_KEY}

RUST_LOG=debug,mc_connection=error,mc_ledger_sync=error ./full-service \
        --ledger-db "${LEDGER_DB_DIR}" \
        --wallet-db "${WALLET_DB_FILE}" \
        --poll-interval 1 \
        --peer mc://node1.test.mobilecoin.com/ \
        --peer mc://node2.test.mobilecoin.com/ \
        --tx-source-url https://s3-us-west-1.amazonaws.com/mobilecoin.chain/node1.test.mobilecoin.com/ \
        --tx-source-url https://s3-us-west-1.amazonaws.com/mobilecoin.chain/node2.test.mobilecoin.com/ \
        --fog-ingest-enclave-css ./ingest-enclave.css \
        &> /tmp/full-service-$(date '+%Y-%m-%d-%H:%M:%S').log &

pid=$!

wait $pid

popd
