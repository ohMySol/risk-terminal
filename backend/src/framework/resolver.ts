// 1. Fetch ABI from Sourcify or Etherscan
// 2. Detect which protocol type the contract relates to
// 3. Direct execution to the right adapter
// 4. Collect nodes + edges the adapter returns
// 5. Recurse on each new address (same process) until depth is reached
// 6. Return the graph