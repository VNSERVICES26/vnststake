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

// Mock Wallet Connection
document.getElementById('metamask-btn').addEventListener('click', () => {
  connectWallet('MetaMask');
});

document.getElementById('walletconnect-btn').addEventListener('click', () => {
  connectWallet('WalletConnect');
});

document.getElementById('manual-connect').addEventListener('click', () => {
  const address = document.getElementById('manual-address').value;
  if (address && address.length === 42 && address.startsWith('0x')) {
    connectWallet('Manual', address);
  } else {
    alert('Please enter a valid wallet address');
  }
});

function connectWallet(provider, address = null) {
  // In a real app, this would connect to the actual wallet provider
  const walletAddress = address || `0x${Math.random().toString(16).substr(2, 40)}`;
  
  connectWalletBtn.textContent = `${provider} Connected`;
  connectWalletBtn.style.backgroundColor = '#4CAF50';
  walletModal.style.display = 'none';
  
  // Enable staking functionality
  stakeBtn.disabled = false;
  
  // Load mock user data
  loadUserData(walletAddress);
}

// Mock Data Functions
function loadUserData(walletAddress) {
  // In a real app, this would fetch from the blockchain
  const mockData = {
    totalStaked: 1500,
    pendingVNT: 25.4,
    pendingUSDT: 12.8,
    claimTime: '4h 30m',
    tvl: 250000,
    totalUsers: 1843
  };
  
  totalStakedDisplay.textContent = `${mockData.totalStaked} VNST`;
  pendingRewardsDisplay.textContent = `${mockData.pendingVNT} VNT + ${mockData.pendingUSDT} USDT`;
  claimTimeDisplay.textContent = mockData.claimTime;
  tvlDisplay.textContent = `${mockData.tvl.toLocaleString()} VNST`;
  totalUsersDisplay.textContent = mockData.totalUsers.toLocaleString();
  
  // Enable claim button if rewards are available
  if (mockData.pendingVNT > 10) { // Minimum 10 VNT to claim
    claimBtn.disabled = false;
  }
}

// Stake Functionality
stakeBtn.addEventListener('click', () => {
  const amount = parseFloat(stakeAmountInput.value);
  const referrer = referrerInput.value.trim();
  
  if (isNaN(amount) {
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
  
  // In a real app, this would call the smart contract
  alert(`Staking ${amount} VNST with referrer ${referrer}`);
  
  // Reset form
  stakeAmountInput.value = '';
  referrerInput.value = '';
  
  // Update UI
  const currentStaked = parseFloat(totalStakedDisplay.textContent);
  totalStakedDisplay.textContent = `${currentStaked + amount} VNST`;
});

// Claim Functionality
claimBtn.addEventListener('click', () => {
  // In a real app, this would call the smart contract
  alert('Claiming rewards...');
  
  // Update UI
  pendingRewardsDisplay.textContent = '0 VNT + 0 USDT';
  claimBtn.disabled = true;
});
