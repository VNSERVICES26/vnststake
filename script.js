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

// WalletConnect Provider
let walletConnectProvider;

// Web3 and Contract Instance
let web3;
let stakingContract;
let userAddress;

// Initialize WalletConnect
function initWalletConnect() {
  walletConnectProvider = new WalletConnectProvider.default({
    rpc: {
      56: "https://bsc-dataseed.binance.org/", // Binance Smart Chain
      137: "https://polygon-rpc.com/"          // Polygon
      // Add other networks as needed
    }
  });
}

// Initialize Web3
async function initWeb3(providerType) {
  if (providerType === 'metamask') {
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
      alert('Please install MetaMask!');
      return false;
    }
  } else if (providerType === 'walletconnect') {
    try {
      // Enable WalletConnect session
      await walletConnectProvider.enable();
      web3 = new Web3(walletConnectProvider);
      return true;
    } catch (error) {
      console.error("WalletConnect error:", error);
      return false;
    }
  }
  return false;
}

// Initialize Contract
function initContract() {
  stakingContract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
}

// Connect Wallet
async function connectWallet(providerType) {
  const isInitialized = await initWeb3(providerType);
  if (!isInitialized) return;

  const accounts = await web3.eth.getAccounts();
  userAddress = accounts[0];
  
  // Update UI
  updateWalletConnection(providerType === 'metamask' ? 'MetaMask' : 'WalletConnect');
  
  // Initialize contract
  initContract();
  
  // Load data for all pages
  loadHomeData();
  loadStakingData();
  loadTeamData();
  
  // Set up event listeners
  setupEventListeners();
}

// Update Wallet Connection UI
function updateWalletConnection(providerName) {
  const connectBtn = document.getElementById('connect-wallet');
  if (connectBtn) {
    connectBtn.innerHTML = `<i class="fas fa-check-circle"></i> ${providerName} Connected`;
    connectBtn.classList.remove('pulse');
    connectBtn.style.background = 'var(--success)';
  }
  
  // Close modal if open
  const modal = document.getElementById('wallet-modal');
  if (modal) modal.style.display = 'none';
}

// Load Home Page Data
async function loadHomeData() {
  if (!stakingContract || !userAddress) return;

  try {
    const totalUsers = await stakingContract.methods.totalUsers().call();
    const totalStaked = await stakingContract.methods.getTVL().call();
    const activeStakes = await stakingContract.methods.getActiveStakesCount().call();
    const totalWithdrawn = await stakingContract.methods.totalWithdrawn().call();

    // Update Home Page UI
    if (document.getElementById('total-users')) {
      document.getElementById('total-users').textContent = totalUsers;
    }
    if (document.getElementById('total-staked')) {
      document.getElementById('total-staked').textContent = `${web3.utils.fromWei(totalStaked, 'ether')} VNST`;
    }
    if (document.getElementById('active-stakes')) {
      document.getElementById('active-stakes').textContent = activeStakes;
    }
    if (document.getElementById('total-withdrawn')) {
      document.getElementById('total-withdrawn').textContent = `${web3.utils.fromWei(totalWithdrawn, 'ether')} VNST`;
    }
  } catch (error) {
    console.error("Error loading home data:", error);
  }
}

// Load Staking Page Data
async function loadStakingData() {
  if (!stakingContract || !userAddress) return;

  try {
    // Get wallet balance
    const vnstToken = new web3.eth.Contract(ERC20_ABI, TOKEN_ADDRESSES.VNST);
    const balance = await vnstToken.methods.balanceOf(userAddress).call();
    
    // Get user stake info
    const stakeInfo = await stakingContract.methods.stakes(userAddress).call();
    
    // Get rewards
    const rewards = await stakingContract.methods.getPendingRewards(userAddress).call();
    const [stakingRewards, directRewards, dailyROI] = rewards;
    
    // Get user stats
    const userStats = await stakingContract.methods.getUserStats(userAddress).call();
    
    // Update Staking Page UI
    if (document.getElementById('wallet-balance')) {
      document.getElementById('wallet-balance').textContent = `${web3.utils.fromWei(balance, 'ether')} VNST`;
    }
    if (document.getElementById('user-staked')) {
      document.getElementById('user-staked').textContent = `${web3.utils.fromWei(stakeInfo.amount, 'ether')} VNST`;
    }
    if (document.getElementById('user-withdrawn')) {
      document.getElementById('user-withdrawn').textContent = `${web3.utils.fromWei(userStats.totalWithdrawn, 'ether')} VNST`;
    }
    if (document.getElementById('user-active')) {
      document.getElementById('user-active').textContent = stakeInfo.active ? `${web3.utils.fromWei(stakeInfo.amount, 'ether')} VNST` : '0 VNST';
    }
    if (document.getElementById('pending-rewards')) {
      document.getElementById('pending-rewards').textContent = `${web3.utils.fromWei(stakingRewards, 'ether')} VNT`;
    }
    if (document.getElementById('direct-members')) {
      document.getElementById('direct-members').textContent = userStats.totalDirectMembers;
    }
    if (document.getElementById('total-team')) {
      document.getElementById('total-team').textContent = userStats.totalTeamMembers;
    }
    if (document.getElementById('staking-rewards')) {
      document.getElementById('staking-rewards').textContent = `${web3.utils.fromWei(stakingRewards, 'ether')} VNT`;
    }
    if (document.getElementById('direct-rewards')) {
      document.getElementById('direct-rewards').textContent = `${web3.utils.fromWei(directRewards, 'ether')} USDT`;
    }
    if (document.getElementById('daily-roi')) {
      document.getElementById('daily-roi').textContent = `${web3.utils.fromWei(dailyROI, 'ether')} USDT`;
    }
    
    // Enable/disable buttons
    if (document.getElementById('stake-btn')) {
      document.getElementById('stake-btn').disabled = stakeInfo.active;
    }
    if (document.getElementById('claim-staking')) {
      document.getElementById('claim-staking').disabled = parseFloat(web3.utils.fromWei(stakingRewards, 'ether')) < 10;
    }
    if (document.getElementById('claim-direct')) {
      document.getElementById('claim-direct').disabled = parseFloat(web3.utils.fromWei(directRewards, 'ether')) === 0;
    }
    if (document.getElementById('claim-roi')) {
      document.getElementById('claim-roi').disabled = parseFloat(web3.utils.fromWei(dailyROI, 'ether')) === 0;
    }
  } catch (error) {
    console.error("Error loading staking data:", error);
  }
}

// Load Team Page Data
async function loadTeamData() {
  if (!stakingContract || !userAddress) return;

  try {
    // Get team stats
    const teamStats = await stakingContract.methods.getTeamStats(userAddress).call();
    const [totalTeam, teamStaked, teamActive] = teamStats;
    
    // Get level stats
    const levelStats = [];
    for (let i = 1; i <= 5; i++) {
      const stats = await stakingContract.methods.getLevelStats(userAddress, i).call();
      levelStats.push(stats);
    }
    
    // Get referrals
    const referrals = await stakingContract.methods.getReferrals(userAddress).call();
    
    // Update Team Page UI
    if (document.getElementById('total-team')) {
      document.getElementById('total-team').textContent = `${totalTeam} Members`;
    }
    if (document.getElementById('team-staked')) {
      document.getElementById('team-staked').textContent = `${web3.utils.fromWei(teamStaked, 'ether')} VNST`;
    }
    if (document.getElementById('team-active')) {
      document.getElementById('team-active').textContent = teamActive;
    }
    
    // Update level cards
    for (let i = 1; i <= 5; i++) {
      const levelData = levelStats[i-1];
      if (document.getElementById(`level${i}-members`)) {
        document.getElementById(`level${i}-members`).textContent = levelData.memberCount;
      }
      if (document.getElementById(`level${i}-staked`)) {
        document.getElementById(`level${i}-staked`).textContent = `${web3.utils.fromWei(levelData.totalStaked, 'ether')} VNST`;
      }
      if (document.getElementById(`level${i}-active`)) {
        document.getElementById(`level${i}-active`).textContent = levelData.activeCount;
      }
      
      // Update level unlock status
      if (document.getElementById(`level-${i}`)) {
        const levelCard = document.getElementById(`level-${i}`);
        const badge = levelCard.querySelector('.status-badge');
        if (levelData.unlocked) {
          badge.classList.remove('locked');
          badge.classList.add('unlocked');
          badge.innerHTML = '<i class="fas fa-unlock"></i> Unlocked';
        } else {
          badge.classList.remove('unlocked');
          badge.classList.add('locked');
          badge.innerHTML = '<i class="fas fa-lock"></i> Locked';
        }
      }
    }
    
    // Update team tree
    if (document.getElementById('user-stake')) {
      const userStake = await stakingContract.methods.stakes(userAddress).call();
      document.getElementById('user-stake').textContent = `${web3.utils.fromWei(userStake.amount, 'ether')} VNST`;
      document.getElementById('user-status').textContent = userStake.active ? 'Active' : 'Inactive';
    }
    
    // Update level members
    if (document.getElementById('level1-members-list') && referrals.length > 0) {
      const level1List = document.getElementById('level1-members-list');
      level1List.innerHTML = '';
      
      for (const member of referrals) {
        const memberStake = await stakingContract.methods.stakes(member).call();
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';
        memberCard.innerHTML = `
          <div><i class="fas fa-user"></i> ${member.substring(0, 6)}...${member.substring(38)}</div>
          <div><i class="fas fa-coins"></i> ${web3.utils.fromWei(memberStake.amount, 'ether')} VNST</div>
          <div><i class="fas fa-${memberStake.active ? 'check' : 'times'}"></i> ${memberStake.active ? 'Active' : 'Inactive'}</div>
        `;
        level1List.appendChild(memberCard);
      }
    }
  } catch (error) {
    console.error("Error loading team data:", error);
  }
}

// Stake Tokens
async function stakeTokens() {
  const amount = document.getElementById('stake-amount').value;
  const referrer = document.getElementById('referrer').value.trim();
  
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
    document.getElementById('stake-amount').value = '';
    document.getElementById('referrer').value = '';
    
    // Refresh data
    loadStakingData();
    loadTeamData();
    
  } catch (error) {
    console.error("Staking failed:", error);
    alert(`Staking failed: ${error.message}`);
  }
}

// Claim Rewards
async function claimRewards(rewardType) {
  try {
    let method;
    switch (rewardType) {
      case 'staking':
        method = stakingContract.methods.claimStakingRewards();
        break;
      case 'direct':
        method = stakingContract.methods.claimDirectRewards();
        break;
      case 'roi':
        method = stakingContract.methods.claimDailyROI();
        break;
      default:
        return;
    }
    
    await method.send({ from: userAddress });
    alert(`${rewardType.charAt(0).toUpperCase() + rewardType.slice(1)} rewards claimed successfully!`);
    
    // Refresh data
    loadStakingData();
    
  } catch (error) {
    console.error("Claim failed:", error);
    alert(`Claim failed: ${error.message}`);
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Wallet connection
  document.getElementById('connect-wallet')?.addEventListener('click', () => {
    document.getElementById('wallet-modal').style.display = 'flex';
  });
  
  document.querySelector('.close-modal')?.addEventListener('click', () => {
    document.getElementById('wallet-modal').style.display = 'none';
  });
  
  document.getElementById('metamask-btn')?.addEventListener('click', async () => {
    await connectWallet('metamask');
  });
  
  document.getElementById('walletconnect-btn')?.addEventListener('click', async () => {
    await connectWallet('walletconnect');
  });
  
  // Staking form
  document.getElementById('stake-btn')?.addEventListener('click', stakeTokens);
  
  // Claim buttons
  document.getElementById('claim-staking')?.addEventListener('click', () => claimRewards('staking'));
  document.getElementById('claim-direct')?.addEventListener('click', () => claimRewards('direct'));
  document.getElementById('claim-roi')?.addEventListener('click', () => claimRewards('roi'));
  
  // Account change listener
  if (window.ethereum) {
    window.ethereum.on('accountsChanged', (accounts) => {
      if (accounts.length === 0) {
        // Wallet disconnected
        location.reload();
      } else {
        // Account changed
        userAddress = accounts[0];
        loadHomeData();
        loadStakingData();
        loadTeamData();
      }
    });
  }
}

// Initialize WalletConnect
initWalletConnect();

// Initialize when page loads
window.addEventListener('load', () => {
  setupEventListeners();
  
  // Check if wallet is already connected
  if (window.ethereum && window.ethereum.selectedAddress) {
    connectWallet('metamask');
  }
});
