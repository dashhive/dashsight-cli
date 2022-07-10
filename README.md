# [DashSight CLI](https://github.com/dashhive/dashsight-cli)

Mac, Linux, & Windows CLI for [insight.dash.org](https://insight.dash.org/),
Dash's flavor of the Insight API

This cross-platform DashSight CLI makes it easy to check balances and utxos, and
see and send transactions.

# Install

## Node.js

You must have [node.js](https://webinstall.dev/node) v16 installed:

### Mac & Linux

```bash
curl https://webinstall.dev/node@16 | bash
```

Follow the on-screen instructions. \
You may need to close and re-open your terminal.

### Windows

```pwsh
curl.exe -A MS https://webinstall.dev/node@lts | powershell
```

Follow the on-screen instructions. \
You may need to close and re-open your terminal.

## Install

```bash
npm install --location=global dashsight-cli
```

# Usage

```txt
dashsight balance     <addr1> [addr2 ...] [--json]
dashsight instantsend <raw-tx-hex>        [--json]
dashsight tx          <txid1> [txid2 ...] [--json]
dashsight txs         <addr1> [addr2 ...] [--json] [--max-pages 10]
dashsight utxos       <addr1> [addr2 ...] [--json]
```

## balance

Check the instant balance - based on Dash _instant-send_ lock rather than block
confirmation.

```bash
dashsight balance XmCyQ6qARLWXap74QubFMunngoiiA1QgCL
```

```txt
Instant balance is...
    0.00099809
```

## instantsend

Broadcast a raw transaction to the network through a Dash Insight API relay.

```bash
dashsight instantsend \
  030000000187ab81e88e2c19ca354f33f14d5b43b60d171ac851eb97dddd271b510cadbdb0000000006b483045022100ec38c77b9f285d4c9aeeba36c1fac51bb88f7443185caf7eec21b170cc5d40620220098dcb5d90cb5f4ddc75ef54e2b2d1dbf220eb6fc28eed61c43192c0a420802c012103a6da86f51829979a3c9f05251d9400d153111655526c6c25f8f82aba38b8a745ffffffff0118850100000000001976a9149a00c2072c0209688cc6de5cc557af03e4f41b6388ac00000000
```

```txt
Instant balance is...
    0.00099809
```

## tx

```bash
dashsight tx f92e66edc9c8da41de71073ef08d62c56f8752a3f4e29ced6c515e0b1c074a38
```

```txt
Transaction Details...

[f92e66edc9c8da41de71073ef08d62c56f8752a3f4e29ced6c515e0b1c074a38]
Inputs:
  Đ   0.00100001 <= Xhn6eTCwW94vhVifhshyTeihvTa7LcatiM
Outputs:
  Đ   0.00099809 => XmCyQ6qARLWXap74QubFMunngoiiA1QgCL
  Đ   0.00000192 => (Network Fee)
```

## txs

```bash
dashsight txs XmCyQ6qARLWXap74QubFMunngoiiA1QgCL
```

```txt
Transactions:

[f92e66edc9c8da41de71073ef08d62c56f8752a3f4e29ced6c515e0b1c074a38]
Inputs:
  Đ   0.00100001 <= Xhn6eTCwW94vhVifhshyTeihvTa7LcatiM
Outputs:
  Đ   0.00099809 => XmCyQ6qARLWXap74QubFMunngoiiA1QgCL
  Đ   0.00000192 => (Network Fee)
```

## utxos

```bash
dashsight utxos XmCyQ6qARLWXap74QubFMunngoiiA1QgCL
```

```txt
Unspent Transaction Outputs:
    XmCyQ6qARLWXap74QubFMunngoiiA1QgCL     00099809 (0)
```
