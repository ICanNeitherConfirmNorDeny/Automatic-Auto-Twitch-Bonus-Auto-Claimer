function clickTwitchClaimBonus() {
    // Query for the "Claim Bonus" button specifically using known attributes or classes
    const claimBonusButton = document.querySelector('[aria-label="Claim Bonus"]');
  
    if (claimBonusButton) {
      claimBonusButton.click();
      console.log("Claim Bonus button clicked on Twitch!");
      console.log(new Date().toString());
    } else {
      console.log("No Claim Bonus button found.");
    }
  }
  
  // Run the function every X seconds
  setInterval(clickTwitchClaimBonus, 5000); // 5 seconds
  //setInterval(clickTwitchClaimBonus, 30000); // 30 seconds
  