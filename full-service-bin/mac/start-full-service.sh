#!/bin/bash

# Copyright (c) 2018-2020 MobileCoin Inc.
#
# Launches a local `mc-mobilecoind` instance that syncs the ledger from two nodes in the
# test network and hosts a wallet service running on port 4444, then launches a local
# `mc-testnet-client` instance that interacts with the local `mc-mobilecoind`.

set -e

trap "trap - SIGTERM && kill -- -$$" SIGINT SIGTERM EXIT

pushd "$(dirname "$0")"

killall mobilecoind || true

LEDGER_DB="$1"
TRANSACTION_DB="$2"

mkdir -p ${LEDGER_DB}
mkdir -p ${TRANSACTION_DB}

echo "Starting mobilecoid with ${LEDGER_DB} and ${TRANSACTION_DB}" > /tmp/mylog

./mobilecoind \
        --ledger-db "${LEDGER_DB}" \
        --wallet-db "${TRANSACTION_DB}" \
        --poll-interval 1 \
        --peer mc://node1.test.mobilecoin.com/ \
        --peer mc://node2.test.mobilecoin.com/ \
        --tx-source-url https://s3-us-west-1.amazonaws.com/mobilecoin.chain/node1.test.mobilecoin.com/ \
        --tx-source-url https://s3-us-west-1.amazonaws.com/mobilecoin.chain/node2.test.mobilecoin.com/ \

pid=$!

wait $pid

popd
