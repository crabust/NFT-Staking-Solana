use anchor_lang::prelude::*;

declare_id!("EpaVx51Q53MKRDcZ3TpRod3NitExviXGcgGBGzLK4pFU");

#[program]
pub mod staking {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
