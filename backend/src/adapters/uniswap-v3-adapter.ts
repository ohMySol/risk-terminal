// Adapter is a helper module that knows which getters to call in the contract, to find
// this contract dependencies.
// Adapter receive ABI + address and returns a list of dependencies.
// Dependencies are addresses of other contracts that this contract depends on.
// Adapter is unique and specific to the protocol. 