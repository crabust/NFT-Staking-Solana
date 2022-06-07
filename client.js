
// client.js is used to introduce the reader to generating clients from IDLs.
// It is not expected users directly test with this example. For a more
// ergonomic example, see `tests/basic-0.js` in this workspace.

const anchor = require("@project-serum/anchor");

// Configure the local cluster.
anchor.setProvider(anchor.AnchorProvider.local());

async function main() {
  // #region main
  // Read the deployed program from the workspace.
const program = anchor.workspace.Staking;

  // Execute the RPC.
  await program.rpc.initialize();
  // #endregion main
}

console.log("Running client.");
main().then(() => console.log("Success"));