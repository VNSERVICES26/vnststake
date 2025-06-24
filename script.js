// Contract ABI - Replace with your actual ABI
const VNST_STAKING_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"}],"name":"Blacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPercent","type":"uint256"}],"name":"ROIPercentChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"bool","name":"inVNST","type":"bool"}],"name":"ReferralEarned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"vntAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"RewardClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"RewardRateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newVnstPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newVntPrice","type":"uint256"}],"name":"TokenPricesUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"}],"name":"Unblacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"ANTI_SYBLOCK_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CLAIM_INTERVAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_STAKE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_STAKE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_VNT_WITHDRAWAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REWARD_INTERVAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WITHDRAWAL_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"annualRewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"autoStakeWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"blacklistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"blacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dailyROIPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"directIncomePercents","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"forceClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"level","type":"uint256"}],"name":"getLevelReferralCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"level","type":"uint256"}],"name":"getLevelReferrals","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getPendingRewards","outputs":[{"internalType":"uint256","name":"vntReward","type":"uint256"},{"internalType":"uint256","name":"usdtReward","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getReferralCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserStats","outputs":[{"internalType":"uint256","name":"totalStaked","type":"uint256"},{"internalType":"uint256","name":"totalEarned","type":"uint256"},{"internalType":"uint256","name":"directMembers","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWalletBalances","outputs":[{"internalType":"uint256","name":"vnstStakingBalance","type":"uint256"},{"internalType":"uint256","name":"vntRewardBalance","type":"uint256"},{"internalType":"uint256","name":"usdtRewardBalance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_vnstToken","type":"address"},{"internalType":"address","name":"_vntToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_vnstStakingWallet","type":"address"},{"internalType":"address","name":"_vntRewardWallet","type":"address"},{"internalType":"address","name":"_usdtRewardWallet","type":"address"},{"internalType":"address","name":"_autoStakeWallet","type":"address"},{"internalType":"address","name":"_feeWallet","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"levelReferrals","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"referrals","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"requiredDirectMembers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"pendingVNT","type":"uint256"},{"internalType":"uint256","name":"pendingUSDT","type":"uint256"},{"internalType":"uint256","name":"claimedVNT","type":"uint256"},{"internalType":"uint256","name":"claimedUSDT","type":"uint256"},{"internalType":"uint256","name":"lastClaimTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_dailyROIPercent","type":"uint256"}],"name":"setDailyROIPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_annualRewardRate","type":"uint256"}],"name":"setRewardRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_vnstPrice","type":"uint256"},{"internalType":"uint256","name":"_vntPrice","type":"uint256"}],"name":"setTokenPrices","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_vnstStakingWallet","type":"address"},{"internalType":"address","name":"_vntRewardWallet","type":"address"},{"internalType":"address","name":"_usdtRewardWallet","type":"address"},{"internalType":"address","name":"_autoStakeWallet","type":"address"},{"internalType":"address","name":"_feeWallet","type":"address"}],"name":"setWallets","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakes","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"lastClaimTime","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"},{"internalType":"bool","name":"active","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"unblacklistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtRewardWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userStats","outputs":[{"internalType":"uint256","name":"totalDirectMembers","type":"uint256"},{"internalType":"uint256","name":"totalStaked","type":"uint256"},{"internalType":"uint256","name":"totalEarned","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstStakingWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntRewardWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"}];

// Contract address - Replace with your actual contract address
const CONTRACT_ADDRESS = "0xC0a8496a9ef2aE23D56F886a3205bb4822a497d1";

// Token addresses - Replace with your actual token addresses
const TOKEN_ADDRESSES = {
  VNST: "0x5C6cB004b50278c6726c3cBEDd25165c2072C46D",
  VNT: "0xa7e41CB0A41dbFC801408d3B577fCed150c4eeEc",
  USDT: "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd"
};

// DOM Elements
const desktopWarning = document.getElementById('desktop-warning');
const appContent = document.getElementById('app-content');
const connectWalletBtn = document.getElementById('connect-wallet');
const walletModal = document.getElementById('wallet-modal');
const deviceModal = document.getElementById('device-modal');
const closeModal = document.querySelector('.close-modal');
const deviceIdInput = document.getElementById('device-id');
const copyDeviceIdBtn = document.getElementById('copy-device-id');
const stakeAmountInput = document.getElementById('stake-amount');
const referrerInput = document.getElementById('referrer');
const stakeBtn = document.getElementById('stake-btn');
const claimBtn = document.getElementById('claim-btn');
const tvlDisplay = document.getElementById('tvl');
const totalUsersDisplay = document.getElementById('total-users');
const totalStakedDisplay = document.getElementById('total-staked');
const pendingRewardsDisplay = document.getElementById('pending-rewards');
const directMembersDisplay = document.getElementById('direct-members');

// Web3 and Contract Instance
let web3;
let stakingContract;
let userAddress;

// Device Management
function getDeviceId() {
  let deviceId = localStorage.getItem('vnst_device_id');
  if (!deviceId) {
    deviceId = 'vnst-' + Math.random().toString(36).substr(2, 12);
    localStorage.setItem('vnst_device_id', deviceId);
  }
  return deviceId;
}

// Initialize Web3
async function initWeb3() {
  if (window.ethereum) {
    try {
      web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      return true;
    } catch (error) {
      console.error("User denied account access");
      return false;
    }
  } else if (window.web3) {
    web3 = new Web3(window.web3.currentProvider);
    return true;
  } else {
    alert('Please install MetaMask or another Web3 provider!');
    return false;
  }
}

// Initialize Contract
function initContract() {
  stakingContract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
}

// Connect Wallet
async function connectWallet(provider, address = null) {
  if (address) {
    userAddress = address;
  } else {
    const accounts = await web3.eth.getAccounts();
    userAddress = accounts[0];
  }
  
  connectWalletBtn.innerHTML = `<i class="fas fa-check-circle"></i> ${provider} Connected`;
  connectWalletBtn.classList.remove('pulse');
  connectWalletBtn.style.background = 'var(--success)';
  walletModal.style.display = 'none';
  
  // Initialize contract
  initContract();
  
  // Load user data
  loadUserData();
}

// Load User Data
async function loadUserData() {
  try {
    // Get user stake info
    const stakeInfo = await stakingContract.methods.stakes(userAddress).call();
    
    // Get pending rewards
    const rewards = await stakingContract.methods.getPendingRewards(userAddress).call();
    
    // Get user stats
    const userStats = await stakingContract.methods.getUserStats(userAddress).call();
    
    // Get system stats
    const tvl = await stakingContract.methods.getTVL().call();
    const totalUsers = await stakingContract.methods.totalUsers().call();
    
    // Update UI
    updateUI({
      stakeInfo,
      rewards,
      userStats,
      systemStats: { tvl, totalUsers }
    });
    
  } catch (error) {
    console.error("Error loading user data:", error);
  }
}

// Update UI
function updateUI(data) {
  const { stakeInfo, rewards, userStats, systemStats } = data;
  
  // Format values
  const formatValue = (value, decimals = 2) => {
    return parseFloat(web3.utils.fromWei(value, 'ether')).toFixed(decimals);
  };
  
  // Stake info
  if (stakeInfo.active) {
    totalStakedDisplay.textContent = `${formatValue(stakeInfo.amount)} VNST`;
    stakeAmountInput.disabled = true;
    stakeBtn.disabled = true;
  } else {
    totalStakedDisplay.textContent = '0 VNST';
    stakeAmountInput.disabled = false;
    stakeBtn.disabled = false;
  }
  
  // Rewards
  pendingRewardsDisplay.textContent = `${formatValue(rewards[0])} VNT + ${formatValue(rewards[1])} USDT`;
  
  // User stats
  directMembersDisplay.textContent = userStats.totalDirectMembers || '0';
  
  // System stats
  tvlDisplay.textContent = `${formatValue(systemStats.tvl)} VNST`;
  totalUsersDisplay.textContent = systemStats.totalUsers || '0';
  
  // Enable claim button if rewards meet minimum
  if (parseFloat(formatValue(rewards[0])) >= 10) {
    claimBtn.disabled = false;
    claimBtn.classList.add('pulse');
  } else {
    claimBtn.disabled = true;
    claimBtn.classList.remove('pulse');
  }
}

// Stake Function
async function stakeTokens() {
  const amount = stakeAmountInput.value;
  const referrer = referrerInput.value.trim();
  
  // Validate inputs
  if (!amount || isNaN(amount) || amount < 100 || amount > 10000) {
    alert('Please enter a valid amount between 100 and 10,000 VNST');
    return;
  }
  
  if (!referrer || !web3.utils.isAddress(referrer)) {
    alert('Please enter a valid referrer wallet address');
    return;
  }
  
  try {
    const amountWei = web3.utils.toWei(amount, 'ether');
    
    // Approve token transfer
    const vnstToken = new web3.eth.Contract(ERC20_ABI, TOKEN_ADDRESSES.VNST);
    await vnstToken.methods.approve(CONTRACT_ADDRESS, amountWei).send({ from: userAddress });
    
    // Execute stake
    await stakingContract.methods.stake(amountWei, referrer).send({ from: userAddress });
    
    alert('Staking successful!');
    stakeAmountInput.value = '';
    referrerInput.value = '';
    
    // Refresh data
    loadUserData();
    
  } catch (error) {
    console.error("Staking failed:", error);
    alert(`Staking failed: ${error.message}`);
  }
}

// Claim Rewards
async function claimRewards() {
  try {
    await stakingContract.methods.claimRewards().send({ from: userAddress });
    alert('Rewards claimed successfully!');
    loadUserData();
  } catch (error) {
    console.error("Claim failed:", error);
    alert(`Claim failed: ${error.message}`);
  }
}

// Event Listeners
connectWalletBtn.addEventListener('click', () => {
  walletModal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
  walletModal.style.display = 'none';
});

document.getElementById('metamask-btn').addEventListener('click', async () => {
  if (await initWeb3()) {
    connectWallet('MetaMask');
  }
});

document.getElementById('walletconnect-btn').addEventListener('click', () => {
  alert('WalletConnect integration would be implemented here');
});

document.getElementById('manual-connect').addEventListener('click', () => {
  const address = document.getElementById('manual-address').value;
  if (web3.utils.isAddress(address)) {
    connectWallet('Manual', address);
  } else {
    alert('Please enter a valid wallet address');
  }
});

stakeBtn.addEventListener('click', stakeTokens);
claimBtn.addEventListener('click', claimRewards);

copyDeviceIdBtn.addEventListener('click', () => {
  deviceIdInput.select();
  document.execCommand('copy');
  copyDeviceIdBtn.innerHTML = '<i class="fas fa-check"></i> Copied';
  setTimeout(() => {
    copyDeviceIdBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
    deviceModal.style.display = 'none';
  }, 2000);
});

// Device Check
function checkDevice() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    appContent.style.display = 'flex';
    desktopWarning.style.display = 'none';
    
    // Show device verification
    setTimeout(() => {
      deviceIdInput.value = getDeviceId();
      deviceModal.style.display = 'flex';
    }, 1000);
  } else {
    appContent.style.display = 'none';
    desktopWarning.style.display = 'flex';
  }
}

// Initialize
window.addEventListener('load', () => {
  checkDevice();
  
  // Check if wallet is already connected
  if (window.ethereum && window.ethereum.selectedAddress) {
    initWeb3().then(() => {
      connectWallet('MetaMask');
    });
  }
  
  // Listen for account changes
  if (window.ethereum) {
    window.ethereum.on('accountsChanged', (accounts) => {
      if (accounts.length === 0) {
        // Disconnected
        connectWalletBtn.innerHTML = '<i class="fas fa-wallet"></i> Connect Wallet';
        connectWalletBtn.style.background = 'linear-gradient(135deg, var(--secondary), var(--accent))';
        connectWalletBtn.classList.add('pulse');
      } else {
        // Account changed
        userAddress = accounts[0];
        loadUserData();
      }
    });
  }
});
