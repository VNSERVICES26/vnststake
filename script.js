// Contract ABI - Replace with your actual ABI
const VNST_STAKING_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"}],"name":"Blacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPercent","type":"uint256"}],"name":"ROIPercentChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"bool","name":"inVNST","type":"bool"}],"name":"ReferralEarned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"vntAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"RewardClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"RewardRateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newVnstPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newVntPrice","type":"uint256"}],"name":"TokenPricesUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"}],"name":"Unblacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"ANTI_SYBLOCK_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CLAIM_INTERVAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_STAKE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_STAKE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_VNT_WITHDRAWAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REWARD_INTERVAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WITHDRAWAL_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"annualRewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"autoStakeWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"blacklistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"blacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dailyROIPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"directIncomePercents","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"forceClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"level","type":"uint256"}],"name":"getLevelReferralCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"level","type":"uint256"}],"name":"getLevelReferrals","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getPendingRewards","outputs":[{"internalType":"uint256","name":"vntReward","type":"uint256"},{"internalType":"uint256","name":"usdtReward","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getReferralCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserStats","outputs":[{"internalType":"uint256","name":"totalStaked","type":"uint256"},{"internalType":"uint256","name":"totalEarned","type":"uint256"},{"internalType":"uint256","name":"directMembers","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWalletBalances","outputs":[{"internalType":"uint256","name":"vnstStakingBalance","type":"uint256"},{"internalType":"uint256","name":"vntRewardBalance","type":"uint256"},{"internalType":"uint256","name":"usdtRewardBalance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_vnstToken","type":"address"},{"internalType":"address","name":"_vntToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_vnstStakingWallet","type":"address"},{"internalType":"address","name":"_vntRewardWallet","type":"address"},{"internalType":"address","name":"_usdtRewardWallet","type":"address"},{"internalType":"address","name":"_autoStakeWallet","type":"address"},{"internalType":"address","name":"_feeWallet","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"levelReferrals","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"referrals","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"requiredDirectMembers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"pendingVNT","type":"uint256"},{"internalType":"uint256","name":"pendingUSDT","type":"uint256"},{"internalType":"uint256","name":"claimedVNT","type":"uint256"},{"internalType":"uint256","name":"claimedUSDT","type":"uint256"},{"internalType":"uint256","name":"lastClaimTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_dailyROIPercent","type":"uint256"}],"name":"setDailyROIPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_annualRewardRate","type":"uint256"}],"name":"setRewardRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_vnstPrice","type":"uint256"},{"internalType":"uint256","name":"_vntPrice","type":"uint256"}],"name":"setTokenPrices","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_vnstStakingWallet","type":"address"},{"internalType":"address","name":"_vntRewardWallet","type":"address"},{"internalType":"address","name":"_usdtRewardWallet","type":"address"},{"internalType":"address","name":"_autoStakeWallet","type":"address"},{"internalType":"address","name":"_feeWallet","type":"address"}],"name":"setWallets","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakes","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"lastClaimTime","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"},{"internalType":"bool","name":"active","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"unblacklistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtRewardWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userStats","outputs":[{"internalType":"uint256","name":"totalDirectMembers","type":"uint256"},{"internalType":"uint256","name":"totalStaked","type":"uint256"},{"internalType":"uint256","name":"totalEarned","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstStakingWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntRewardWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"}];

// Contract address - Replace with your actual contract address
const CONTRACT_ADDRESS = "0xC0a8496a9ef2aE23D56F886a3205bb4822a497d1";

// Token addresses - Replace with your actual token addresses
const TOKEN_ADDRESSES = {
  VNST: "0x5C6cB004b50278c6726c3cBEDd25165c2072C46D",
  VNT: "0xa7e41CB0A41dbFC801408d3B577fCed150c4eeEc",
  USDT: "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd",
};

// Device and Mobile Check
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Generate or retrieve device ID
function getDeviceId() {
  let deviceId = localStorage.getItem('vnst_device_id');
  if (!deviceId) {
    deviceId = 'vnst-' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('vnst_device_id', deviceId);
  }
  return deviceId;
}

// DOM Elements
const desktopWarning = document.getElementById('desktop-warning');
const appContent = document.getElementById('app-content');
const connectWalletBtn = document.getElementById('connect-wallet');
const walletModal = document.getElementById('wallet-modal');
const deviceModal = document.getElementById('device-modal');
const deviceIdInput = document.getElementById('device-id');
const copyDeviceIdBtn = document.getElementById('copy-device-id');
const stakeAmountInput = document.getElementById('stake-amount');
const referrerInput = document.getElementById('referrer');
const stakeBtn = document.getElementById('stake-btn');
const claimBtn = document.getElementById('claim-btn');
const totalStakedDisplay = document.getElementById('total-staked');
const pendingRewardsDisplay = document.getElementById('pending-rewards');
const claimTimeDisplay = document.getElementById('claim-time');
const tvlDisplay = document.getElementById('tvl');
const totalUsersDisplay = document.getElementById('total-users');
const directMembersDisplay = document.getElementById('direct-members');
const levelRequirementsDisplay = document.getElementById('level-requirements');
const referralStructureDisplay = document.getElementById('referral-structure');
const activeStakesDisplay = document.getElementById('active-stakes');
const inactiveStakesDisplay = document.getElementById('inactive-stakes');
const downlineStatsDisplay = document.getElementById('downline-stats');
const systemStatsDisplay = document.getElementById('system-stats');

// Web3 and Contract Instance
let web3;
let stakingContract;
let userAddress;

// Check device type and show appropriate content
if (isMobileDevice()) {
  appContent.style.display = 'flex';
  desktopWarning.style.display = 'none';
  
  // Show device verification modal
  setTimeout(() => {
    deviceIdInput.value = getDeviceId();
    deviceModal.style.display = 'flex';
  }, 1000);
} else {
  appContent.style.display = 'none';
  desktopWarning.style.display = 'flex';
}

// Initialize Web3
async function initWeb3() {
  if (window.ethereum) {
    try {
      web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      stakingContract = new web3.eth.Contract(VNST_STAKING_ABI, CONTRACT_ADDRESS);
      return true;
    } catch (error) {
      console.error("User denied account access");
      return false;
    }
  } else if (window.web3) {
    web3 = new Web3(window.web3.currentProvider);
    stakingContract = new web3.eth.Contract(VNST_STAKING_ABI, CONTRACT_ADDRESS);
    return true;
  } else {
    alert('Please install MetaMask or another Web3 provider!');
    return false;
  }
}

// Copy Device ID
copyDeviceIdBtn.addEventListener('click', () => {
  deviceIdInput.select();
  document.execCommand('copy');
  copyDeviceIdBtn.textContent = 'Copied!';
  setTimeout(() => {
    copyDeviceIdBtn.textContent = 'Copy Device ID';
    deviceModal.style.display = 'none';
  }, 1500);
});

// Wallet Connection
connectWalletBtn.addEventListener('click', () => {
  walletModal.style.display = 'flex';
});

// Close modals when clicking outside
[walletModal, deviceModal].forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

// Wallet Connection Handlers
document.getElementById('metamask-btn').addEventListener('click', async () => {
  if (await initWeb3()) {
    const accounts = await web3.eth.getAccounts();
    userAddress = accounts[0];
    connectWallet('MetaMask', userAddress);
    loadContractData();
  }
});

document.getElementById('walletconnect-btn').addEventListener('click', async () => {
  // WalletConnect integration would go here
  alert('WalletConnect integration would be implemented here');
});

document.getElementById('manual-connect').addEventListener('click', () => {
  const address = document.getElementById('manual-address').value;
  if (address && address.length === 42 && address.startsWith('0x')) {
    userAddress = address;
    connectWallet('Manual', address);
    loadContractData();
  } else {
    alert('Please enter a valid wallet address');
  }
});

function connectWallet(provider, address = null) {
  const walletAddress = address || `0x${Math.random().toString(16).substr(2, 40)}`;
  
  connectWalletBtn.textContent = `${provider} Connected`;
  connectWalletBtn.style.backgroundColor = '#4CAF50';
  walletModal.style.display = 'none';
  
  // Enable staking functionality
  stakeBtn.disabled = false;
}

// Load contract data
async function loadContractData() {
  if (!stakingContract || !userAddress) return;

  try {
    // Get user stake info
    const stakeInfo = await stakingContract.methods.stakes(userAddress).call();
    
    // Get pending rewards
    const [vntReward, usdtReward] = await stakingContract.methods.getPendingRewards(userAddress).call();
    
    // Get user stats
    const userStats = await stakingContract.methods.getUserStats(userAddress).call();
    
    // Get system stats
    const walletBalances = await stakingContract.methods.getWalletBalances().call();
    const totalUsers = await stakingContract.methods.totalUsers().call();
    
    // Update UI
    updateUI({
      stakeInfo,
      rewards: { vntReward, usdtReward },
      userStats,
      systemStats: {
        tvl: walletBalances.vnstStakingBalance,
        totalUsers
      }
    });
    
    // Load referral data
    loadReferralData(userAddress);
    
  } catch (error) {
    console.error("Error loading contract data:", error);
  }
}

// Update UI with contract data
function updateUI(data) {
  const { stakeInfo, rewards, userStats, systemStats } = data;
  
  // Stake info
  if (stakeInfo.active) {
    totalStakedDisplay.textContent = `${web3.utils.fromWei(stakeInfo.amount, 'ether')} VNST`;
    stakeAmountInput.disabled = true;
    stakeBtn.disabled = true;
  } else {
    totalStakedDisplay.textContent = '0 VNST';
    stakeAmountInput.disabled = false;
    stakeBtn.disabled = false;
  }
  
  // Rewards
  pendingRewardsDisplay.textContent = `${web3.utils.fromWei(rewards.vntReward, 'ether')} VNT + ${web3.utils.fromWei(rewards.usdtReward, 'ether')} USDT`;
  
  // User stats
  directMembersDisplay.textContent = userStats.directMembers;
  
  // System stats
  tvlDisplay.textContent = `${web3.utils.fromWei(systemStats.tvl, 'ether')} VNST`;
  totalUsersDisplay.textContent = systemStats.totalUsers;
  
  // Enable claim button if rewards meet minimum
  if (parseFloat(web3.utils.fromWei(rewards.vntReward, 'ether')) >= 10) {
    claimBtn.disabled = false;
  } else {
    claimBtn.disabled = true;
  }
}

// Load referral data
async function loadReferralData(userAddress) {
  try {
    // Get referral counts
    const referralCount = await stakingContract.methods.getReferralCount(userAddress).call();
    
    // Get level requirements
    const levelRequirements = await stakingContract.methods.requiredDirectMembers().call();
    
    // Update UI
    referralStructureDisplay.innerHTML = '';
    levelRequirementsDisplay.innerHTML = '';
    
    // Display referral structure
    for (let i = 0; i < 5; i++) {
      const levelCount = await stakingContract.methods.getLevelReferralCount(userAddress, i).call();
      referralStructureDisplay.innerHTML += `<p>Level ${i+1}: ${levelCount} members</p>`;
      
      levelRequirementsDisplay.innerHTML += `<p>Level ${i+1}: Need ${levelRequirements[i]} direct members</p>`;
    }
    
    // Load downline stats
    loadDownlineStats(userAddress);
    
  } catch (error) {
    console.error("Error loading referral data:", error);
  }
}

// Load downline stats
async function loadDownlineStats(userAddress) {
  try {
    let activeCount = 0;
    let inactiveCount = 0;
    let totalDownlineStake = 0;
    
    // Get all referrals
    const referrals = await stakingContract.methods.getReferrals(userAddress).call();
    
    // Check each referral
    for (const referral of referrals) {
      const stakeInfo = await stakingContract.methods.stakes(referral).call();
      if (stakeInfo.active) {
        activeCount++;
        totalDownlineStake += parseFloat(web3.utils.fromWei(stakeInfo.amount, 'ether'));
      } else {
        inactiveCount++;
      }
    }
    
    // Update UI
    activeStakesDisplay.textContent = activeCount;
    inactiveStakesDisplay.textContent = inactiveCount;
    downlineStatsDisplay.innerHTML = `
      <p>Active Stakes: ${activeCount}</p>
      <p>Inactive Stakes: ${inactiveCount}</p>
      <p>Total Downline Stake: ${totalDownlineStake} VNST</p>
    `;
    
  } catch (error) {
    console.error("Error loading downline stats:", error);
  }
}

// Stake Functionality
stakeBtn.addEventListener('click', async () => {
  const amount = parseFloat(stakeAmountInput.value);
  const referrer = referrerInput.value.trim();
  
  if (isNaN(amount)) {
    alert('Please enter a valid amount');
    return;
  }
  
  if (amount < 100 || amount > 10000) {
    alert('Stake amount must be between 100 and 10,000 VNST');
    return;
  }
  
  if (!referrer || referrer.length !== 42 || !referrer.startsWith('0x')) {
    alert('Please enter a valid referrer wallet address');
    return;
  }
  
  try {
    const amountWei = web3.utils.toWei(amount.toString(), 'ether');
    
    // Approve token transfer first
    const vnstToken = new web3.eth.Contract(IERC20_ABI, TOKEN_ADDRESSES.VNST);
    await vnstToken.methods.approve(CONTRACT_ADDRESS, amountWei).send({ from: userAddress });
    
    // Then stake
    await stakingContract.methods.stake(amountWei, referrer).send({ from: userAddress });
    
    alert('Staking successful!');
    stakeAmountInput.value = '';
    referrerInput.value = '';
    
    // Refresh data
    loadContractData();
    
  } catch (error) {
    console.error("Staking failed:", error);
    alert('Staking failed: ' + error.message);
  }
});

// Claim Functionality
claimBtn.addEventListener('click', async () => {
  try {
    await stakingContract.methods.claimRewards().send({ from: userAddress });
    alert('Rewards claimed successfully!');
    
    // Refresh data
    loadContractData();
    
  } catch (error) {
    console.error("Claim failed:", error);
    alert('Claim failed: ' + error.message);
  }
});

// Initialize when page loads
window.addEventListener('load', async () => {
  // Check if wallet is already connected
  if (window.ethereum && window.ethereum.selectedAddress) {
    userAddress = window.ethereum.selectedAddress;
    if (await initWeb3()) {
      connectWallet('MetaMask', userAddress);
      loadContractData();
    }
  }
  
  // Listen for account changes
  if (window.ethereum) {
    window.ethereum.on('accountsChanged', (accounts) => {
      if (accounts.length === 0) {
        // User disconnected wallet
        connectWalletBtn.textContent = 'Connect Wallet';
        connectWalletBtn.style.backgroundColor = '';
      } else {
        // Account changed
        userAddress = accounts[0];
        loadContractData();
      }
    });
  }
});
