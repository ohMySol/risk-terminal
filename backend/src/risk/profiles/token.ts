// 1. Risk profile with checks based on the contract type - token in this case.
// E.g blacklist, fee-on-transfer, etc.
//
// 2. Each profile is a function that takes an address + ABI and returns a list of findings.
// E.g: smth like below:
// {
//     id: "token:blacklistable",
//     severity: "warning",          // "info" | "warning" | "critical"
//     label: "Blacklist mechanism",
//     detail: "Contract has blacklist(address) — issuer can freeze individual addresses",
//     evidence: "function blacklist(address) found in ABI",
// }
//
// 3. The graph will show then for the related node its identity (name, address, etc.), the universal findings and its type specific findings.
// The frontend renders this info per node, so different nodes show different risk points