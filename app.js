/**
 * KisanDirect - Enterprise B2B Agritech Platform
 * Core Application Engine & State Management
 */

// --- Global State ---
const state = {
  activeView: 'landing', // 'landing', 'farmer', 'buyer', 'pooling', 'mandi', 'logistics'
  role: 'farmer', // 'farmer', 'buyer'
  currentLang: 'en',
  soundEnabled: true,
  farmerKYC: {
    verified: true,
    name: 'Rameshwar Patil',
    aadhaar: 'XXXX-XXXX-4921',
    kccId: 'KCC-MH-2023-88219',
    landSurvey: 'Gat No. 142/A, Sinnar, Nashik',
    bank: 'State Bank of India (Kisan Branch)',
    account: 'XXXXXX8912',
    ifsc: 'SBIN0001842'
  },
  listings: [
    {
      id: 'LOT-NSK-101',
      crop: 'Nashik Red Onion',
      category: 'Vegetables',
      farmer: 'Rameshwar Patil',
      farmerAvatar: 'assets/farmer_portrait.jpg',
      location: 'Sinnar, Nashik (Maharashtra)',
      coords: '19.8475° N, 73.9822° E',
      distanceKm: 34,
      qtyQuintals: 180,
      moq: 20,
      pricePerQ: 2450,
      mandiBenchmark: 1750,
      harvestDate: '2026-10-02',
      shelfLifeDays: 45,
      grade: 'Grade A',
      purityScore: 94.2,
      moisture: '11.2%',
      organic: true,
      certifications: ['Jaivik Bharat', 'Direct Deal Verified'],
      soilSummary: 'pH 6.8 | N: 285 kg/ha | P: 24 kg/ha | OC: 0.74%',
      image: 'assets/hero_agritech.jpg',
      status: 'active'
    },
    {
      id: 'LOT-AGR-204',
      crop: 'Agra Kufri Jyoti Potato',
      category: 'Vegetables',
      farmer: 'Hardeep Singh Sandhu',
      farmerAvatar: 'assets/farmer_portrait.jpg',
      location: 'Khandauli, Agra (Uttar Pradesh)',
      coords: '27.2841° N, 78.0734° E',
      distanceKm: 68,
      qtyQuintals: 250,
      moq: 50,
      pricePerQ: 1680,
      mandiBenchmark: 1180,
      harvestDate: '2026-10-01',
      shelfLifeDays: 60,
      grade: 'Grade A',
      purityScore: 96.0,
      moisture: '18.4%',
      organic: false,
      certifications: ['Global GAP Compliant', 'Cold Storage Ready'],
      soilSummary: 'pH 7.1 | Alluvial Loam | High Potash',
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80',
      status: 'active'
    },
    {
      id: 'LOT-KLR-309',
      crop: 'Kolar Hybrid Tomato',
      category: 'Vegetables',
      farmer: 'M. Venkataswamy',
      farmerAvatar: 'assets/farmer_portrait.jpg',
      location: 'Srinivaspur, Kolar (Karnataka)',
      coords: '13.1367° N, 78.1332° E',
      distanceKm: 42,
      qtyQuintals: 120,
      moq: 15,
      pricePerQ: 1980,
      mandiBenchmark: 1350,
      harvestDate: '2026-10-04',
      shelfLifeDays: 14,
      grade: 'Grade A',
      purityScore: 93.5,
      moisture: '91.8%',
      organic: true,
      certifications: ['Jaivik Bharat', 'Zero Chemical Residue'],
      soilSummary: 'Red Sandy Loam | pH 6.5 | Micronutrient Enriched',
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80',
      status: 'active'
    },
    {
      id: 'LOT-MP-412',
      crop: 'Sehore Sharbati Wheat',
      category: 'Grains & Pulses',
      farmer: 'Kailash Patidar',
      farmerAvatar: 'assets/farmer_portrait.jpg',
      location: 'Ashta, Sehore (Madhya Pradesh)',
      coords: '23.0189° N, 76.5412° E',
      distanceKm: 185,
      qtyQuintals: 320,
      moq: 40,
      pricePerQ: 3150,
      mandiBenchmark: 2450,
      harvestDate: '2026-09-28',
      shelfLifeDays: 365,
      grade: 'Grade A+',
      purityScore: 98.4,
      moisture: '9.8%',
      organic: true,
      certifications: ['Jaivik Bharat', 'GI Tagged Sharbati'],
      soilSummary: 'Deep Black Cotton Soil | Rich Organic Carbon',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80',
      status: 'active'
    },
    {
      id: 'LOT-SHM-508',
      crop: 'Shimla Royal Delicious Apple',
      category: 'Fruits',
      farmer: 'Surender Chauhan',
      farmerAvatar: 'assets/farmer_portrait.jpg',
      location: 'Kotkhai, Shimla (Himachal Pradesh)',
      coords: '31.1154° N, 77.5312° E',
      distanceKm: 310,
      qtyQuintals: 90,
      moq: 10,
      pricePerQ: 9400,
      mandiBenchmark: 6800,
      harvestDate: '2026-10-03',
      shelfLifeDays: 90,
      grade: 'Grade A',
      purityScore: 95.8,
      moisture: '84.0%',
      organic: true,
      certifications: ['Himalayan Organic', 'Cold-Chain Certified'],
      soilSummary: 'Mountain Humus Soil | High Natural Acidity',
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80',
      status: 'active'
    },
    {
      id: 'LOT-NAG-614',
      crop: 'Nagpur Mandarin Orange',
      category: 'Fruits',
      farmer: 'Sudhakar Bhoyar',
      farmerAvatar: 'assets/farmer_portrait.jpg',
      location: 'Katol, Nagpur (Maharashtra)',
      coords: '21.2827° N, 78.5864° E',
      distanceKm: 240,
      qtyQuintals: 140,
      moq: 20,
      pricePerQ: 4200,
      mandiBenchmark: 3100,
      harvestDate: '2026-10-02',
      shelfLifeDays: 25,
      grade: 'Grade A',
      purityScore: 92.4,
      moisture: '88.1%',
      organic: false,
      certifications: ['GI Tagged Nagpur', 'Direct Farm Gate'],
      soilSummary: 'Black Basaltic Soil | pH 7.4',
      image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=800&q=80',
      status: 'active'
    }
  ],
  bids: [
    {
      id: 'BID-991',
      lotId: 'LOT-NSK-101',
      buyerName: 'BigBasket Wholesale Hub',
      buyerType: 'Supermarket Chain',
      buyerRating: 4.9,
      buyerLocation: 'Bhiwandi Central Fulfillment',
      crop: 'Nashik Red Onion',
      qtyRequested: 60,
      bidPricePerQ: 2420,
      targetPricePerQ: 2450,
      totalAmount: 145200,
      expiresIn: '4h 12m',
      status: 'pending',
      createdDate: 'Today, 09:30 AM'
    },
    {
      id: 'BID-992',
      lotId: 'LOT-NSK-101',
      buyerName: 'Reliance Retail Fresh',
      buyerType: 'Hypermarket Chain',
      buyerRating: 4.8,
      buyerLocation: 'Thane Regional DC',
      crop: 'Nashik Red Onion',
      qtyRequested: 80,
      bidPricePerQ: 2440,
      targetPricePerQ: 2450,
      totalAmount: 195200,
      expiresIn: '1h 45m',
      status: 'pending',
      createdDate: 'Today, 11:15 AM'
    },
    {
      id: 'BID-993',
      lotId: 'LOT-AGR-204',
      buyerName: 'DMart Institutional Mart',
      buyerType: 'Supermarket Chain',
      buyerRating: 4.9,
      buyerLocation: 'Noida Agro Terminal',
      crop: 'Agra Kufri Jyoti Potato',
      qtyRequested: 100,
      bidPricePerQ: 1670,
      targetPricePerQ: 1680,
      totalAmount: 167000,
      expiresIn: '7h 20m',
      status: 'pending',
      createdDate: 'Today, 08:45 AM'
    },
    {
      id: 'BID-994',
      lotId: 'LOT-KLR-309',
      buyerName: 'Nature’s Basket Co-op',
      buyerType: 'Gourmet Retailer',
      buyerRating: 5.0,
      buyerLocation: 'Whitefield Bengaluru Hub',
      crop: 'Kolar Hybrid Tomato',
      qtyRequested: 40,
      bidPricePerQ: 1970,
      targetPricePerQ: 1980,
      totalAmount: 78800,
      expiresIn: '3h 10m',
      status: 'pending',
      createdDate: 'Today, 12:05 PM'
    }
  ],
  escrowRecords: [
    {
      id: 'ESC-4081',
      lotId: 'LOT-NSK-092',
      crop: 'Nashik Red Onion (Lot 92)',
      buyer: 'Reliance Fresh Distribution Center',
      farmer: 'Rameshwar Patil',
      qtyQuintals: 100,
      amount: 240000,
      status: 'settled', // 'locked', 'in_transit', 'delivered', 'settled'
      step: 4,
      utr: 'UTR-HDFC-99218491823',
      date: '2026-10-03',
      receiptGenerated: true
    },
    {
      id: 'ESC-4082',
      lotId: 'LOT-NSK-101',
      crop: 'Nashik Red Onion (Lot 101)',
      buyer: 'BigBasket Wholesale Hub',
      farmer: 'Rameshwar Patil',
      qtyQuintals: 60,
      amount: 145200,
      status: 'in_transit',
      step: 2,
      truckNo: 'MH-15-EG-8821',
      temp: '14.2°C',
      driver: 'Mahesh Gound (98221-XXXXX)',
      utr: 'ESCROW-LOCK-AXIS-7712',
      date: '2026-10-05',
      receiptGenerated: false
    },
    {
      id: 'ESC-4083',
      lotId: 'LOT-KLR-288',
      crop: 'Kolar Tomato (Grade A)',
      buyer: 'Spencers Hypermarket',
      farmer: 'Rameshwar Patil',
      qtyQuintals: 50,
      amount: 98000,
      status: 'locked',
      step: 1,
      utr: 'ESCROW-DEPOSIT-ICICI-4419',
      date: '2026-10-05',
      receiptGenerated: false
    }
  ],
  poolingRooms: [
    {
      id: 'POOL-ON-802',
      crop: 'Nashik Red Onion (Grade A)',
      destination: 'Metro Cash & Carry - Mumbai Central Tender',
      targetQuintals: 100,
      currentQuintals: 78,
      participatingFarmers: 4,
      offeredPricePerQ: 2500,
      mandiLocalRate: 1750,
      deadline: 'Closing in 8 hours',
      status: 'open',
      contributors: [
        { name: 'Rameshwar Patil', qty: 25 },
        { name: 'Ganesh Shinde', qty: 20 },
        { name: 'Balasaheb Jadhav', qty: 18 },
        { name: 'Vitthal Kadam', qty: 15 }
      ]
    },
    {
      id: 'POOL-TM-401',
      crop: 'Kolar Hybrid Tomato (Grade A)',
      destination: 'Reliance Fresh South India Daily Supply',
      targetQuintals: 60,
      currentQuintals: 45,
      participatingFarmers: 3,
      offeredPricePerQ: 2050,
      mandiLocalRate: 1400,
      deadline: 'Closing in 4 hours',
      status: 'open',
      contributors: [
        { name: 'S. Narayanaswamy', qty: 20 },
        { name: 'Rajanna Gowda', qty: 15 },
        { name: 'Muniraju K.', qty: 10 }
      ]
    },
    {
      id: 'POOL-WT-119',
      crop: 'MP Sharbati Wheat (GI Certified)',
      destination: 'ITC Choupal Institutional Flour Milling',
      targetQuintals: 250,
      currentQuintals: 190,
      participatingFarmers: 5,
      offeredPricePerQ: 3200,
      mandiLocalRate: 2500,
      deadline: 'Closing tomorrow',
      status: 'open',
      contributors: [
        { name: 'Kailash Patidar', qty: 50 },
        { name: 'Mohan Sharma', qty: 40 },
        { name: 'Deepak Malviya', qty: 35 },
        { name: 'Bhagwan Singh', qty: 35 },
        { name: 'Rameshwar Patil', qty: 30 }
      ]
    }
  ],
  logisticsPartners: [
    {
      id: 'LOG-01',
      name: 'KisanGati Cold Fleet (Reefer 14ft)',
      capacity: '4.5 Metric Tons',
      tempRange: '0°C to 15°C (Active Chiller)',
      baseRatePerKm: 16,
      currentHub: 'Nashik Agri Hub (6 km away)',
      driverRating: 4.9,
      tripsDone: 1240,
      gpsLive: true,
      features: ['Digital Temp Logger', 'Fast-Tag Enabled', 'Insurance Covered (100%)']
    },
    {
      id: 'LOG-02',
      name: 'FreshRoute Multi-Temp Heavy Reefer (20ft)',
      capacity: '9.0 Metric Tons',
      tempRange: '-18°C to 18°C (Deep Freeze / Chilled)',
      baseRatePerKm: 22,
      currentHub: 'Mumbai-Thane Corridor',
      driverRating: 4.8,
      tripsDone: 890,
      gpsLive: true,
      features: ['Dual Zone Temperature', 'Hydraulic Lift-Gate', '24x7 Escort Tracking']
    },
    {
      id: 'LOG-03',
      name: 'GreenHaul Eco-Reefer (Electric 8ft)',
      capacity: '2.0 Metric Tons',
      tempRange: '2°C to 12°C',
      baseRatePerKm: 13,
      currentHub: 'Pune-Chakan Express Hub',
      driverRating: 4.9,
      tripsDone: 450,
      gpsLive: true,
      features: ['Zero Tailpipe Emission', 'No City Entry Restriction', 'Subsidized Solar Cooling']
    }
  ],
  notifications: [
    {
      id: 'N1',
      title: 'Reliance Retail countered your Onion lot',
      time: '10 min ago',
      desc: 'Offered ₹2,440/q for 80 Quintals. Accept before 02:00 PM.',
      unread: true,
      type: 'bid'
    },
    {
      id: 'N2',
      title: 'Escrow Payout Settled: ₹2,40,000',
      time: '2 hours ago',
      desc: 'Transferred to SBI KCC A/c via NEFT. UTR: HDFC-99218491823.',
      unread: true,
      type: 'escrow'
    },
    {
      id: 'N3',
      title: 'Govt APMC Mandi Benchmark Alert',
      time: 'Yesterday',
      desc: 'Nashik APMC Onion rate jumped +4.2% due to Southern terminal demand.',
      unread: false,
      type: 'mandi'
    }
  ]
};

// --- Multi-Language Dictionary ---
const translations = {
  en: {
    brandTagline: 'Empowering Farmers • Eliminating Middlemen',
    navHome: 'Overview',
    navFarmer: 'Farmer Portal',
    navBuyer: 'Buyer Marketplace',
    navPooling: 'Smart Pooling',
    navMandi: 'Mandi Margin Tracker',
    navLogistics: 'Cold-Chain Fleet',
    heroBadge: '0% Middlemen • 100% Direct Fair Trade',
    heroTitle: 'Connecting Farm-Fresh Produce Directly to Supermarkets & Retailers',
    heroSub: 'Empowering 12,400+ Indian farmers to bypass predatory dalals, receive guaranteed fair market prices, and deliver bulk produce with real-time cold-chain tracking.',
    btnListProduce: 'List Your Produce (For Farmers)',
    btnSourceBulk: 'Source Bulk Produce (For Buyers)',
    statFarmers: '12,400+ Farmers Enrolled',
    statPayouts: '₹4.8 Cr+ Direct Payouts',
    statHike: '35% Average Income Hike',
    statBuyers: '180+ Supermarket Chains',
    calcTitle: 'Interactive Price Comparison Matrix',
    calcSub: 'See how traditional middlemen pocket up to 45% margins while KisanDirect puts that money back in farmers\' hands.',
    selectCrop: 'Select Commodity:',
    volumeLabel: 'Batch Volume (Quintals):',
    traditionalTitle: 'Traditional Mandi System (With Dalals)',
    kisanDirectTitle: 'KisanDirect Direct Model',
    farmerCut: 'Farmer Received:',
    buyerPaid: 'Supermarket Paid:',
    middlemanCut: 'Middleman (Dalal) Cut:',
    directGain: 'Net Farmer Gain:',
    buyerSavings: 'Supermarket Savings:',
    activeBidsTitle: 'Active Supermarket Bids Desk',
    escrowTrackerTitle: 'Instant Escrow & Payout Pipeline',
    verifiedKyc: 'KYC Verified',
    verifyKyc: 'Verify Aadhaar KYC'
  },
  hi: {
    brandTagline: 'किसानों का सशक्तिकरण • दलालों का खात्मा',
    navHome: 'मुख्य पृष्ठ',
    navFarmer: 'किसान पोर्टल',
    navBuyer: 'खरीदार मंडी',
    navPooling: 'सामूहिक पूलिंग',
    navMandi: 'मंडी मुनाफा कैलकुलेटर',
    navLogistics: 'कोल्ड-चेन वाहन',
    heroBadge: '0% दलाली • 100% सीधा व्यापार',
    heroTitle: 'खेत से सीधी ताज़ा फसल सुपरमार्केट्स और थोक व्यापारियों तक',
    heroSub: '12,400+ से अधिक भारतीय किसान दलालों को दरकिनार कर अपनी उपज का उचित मूल्य सीधे सुपरमार्केट्स और खुदरा व्यापारियों से पा रहे हैं।',
    btnListProduce: 'फसल दर्ज करें (किसानों के लिए)',
    btnSourceBulk: 'थोक उपज खरीदें (खरीदारों के लिए)',
    statFarmers: '12,400+ पंजीकृत किसान',
    statPayouts: '₹4.8 करोड़+ सीधे भुगतान',
    statHike: '35% किसानों की आय में वृद्धि',
    statBuyers: '180+ सुपरमार्केट चेन्स',
    calcTitle: 'मंडी बनाम सीधा व्यापार मूल्य तुलना',
    calcSub: 'देखें कैसे दलाल 40-50% मुनाफा काट लेते हैं और किसानडायरेक्ट से किसान को पूरा लाभ मिलता है।',
    selectCrop: 'फसल चुनें:',
    volumeLabel: 'मात्रा (क्विंटल):',
    traditionalTitle: 'पारंपरिक मंडी (दलालों सहित)',
    kisanDirectTitle: 'किसानडायरेक्ट मॉडल (0% बिचौलिया)',
    farmerCut: 'किसान को मिला:',
    buyerPaid: 'सुपरमार्केट ने दिया:',
    middlemanCut: 'दलाल की जेब में:',
    directGain: 'किसान का अतिरिक्त मुनाफा:',
    buyerSavings: 'खरीदार की बचत:',
    activeBidsTitle: 'सक्रिय सुपरमार्केट बोलियाँ (Bids Desk)',
    escrowTrackerTitle: 'एस्क्रो व तत्काल भुगतान स्थिति',
    verifiedKyc: 'केवाईसी सत्यापित',
    verifyKyc: 'आधार केवाईसी करें'
  },
  mr: {
    brandTagline: 'शेतकऱ्यांचे सक्षमीकरण • दलालीमुक्त थेट बाजार',
    navHome: 'मुख्य पान',
    navFarmer: 'शेतकरी कक्ष',
    navBuyer: 'खरेदीदार बाजार',
    navPooling: 'एकत्रित पूलिंग',
    navMandi: 'बाजारभाव विश्लेषक',
    navLogistics: 'शीतगृह वाहतूक',
    heroBadge: '0% दलाली • 100% थेट व्यवहार',
    heroTitle: 'शेतातील ताजा शेतमाल थेट सुपरमार्केट्स आणि किरकोळ व्यापाऱ्यांपर्यंत',
    heroSub: '12,400+ हून अधिक शेतकरी मध्यस्थांना बाजूला ठेवून योग्य बाजारभाव व बँक खात्यात थेट हमी पेमेंट मिळवत आहेत.',
    btnListProduce: 'शेतमाल नोंदवा (शेतकऱ्यांसाठी)',
    btnSourceBulk: 'थोक खरेदी करा (व्यापाऱ्यांसाठी)',
    statFarmers: '12,400+ नोंदणीकृत शेतकरी',
    statPayouts: '₹4.8 कोटी+ थेट खात्यात वर्ग',
    statHike: '35% सरासरी उत्पन्न वाढ',
    statBuyers: '180+ सुपरमार्केट साखळी',
    calcTitle: 'पारंपरिक बाजार वि. थेट व्यापार तुलना',
    calcSub: 'दलालांचे 40-50% कमिशन कसे वाचते आणि शेतकऱ्यांचा नफा कसा वाढतो ते पहा.',
    selectCrop: 'पीक निवडा:',
    volumeLabel: 'एकूण प्रमाण (क्विंटल):',
    traditionalTitle: 'पारंपरिक बाजार समिती (दलालांसह)',
    kisanDirectTitle: 'किसानडायरेक्ट थेट मॉडेल',
    farmerCut: 'शेतकऱ्याला मिळाले:',
    buyerPaid: 'सुपरमार्केटने भरले:',
    middlemanCut: 'दलालाची कमाई:',
    directGain: 'शेतकऱ्याचा निव्वळ नफा:',
    buyerSavings: 'खरेदीदाराची बचत:',
    activeBidsTitle: 'सुपरमार्केट्सच्या थेट ऑफर (Bids Desk)',
    escrowTrackerTitle: 'एस्क्रो सुरक्षित पेमेंट ट्रॅकर',
    verifiedKyc: 'केवायसी पूर्ण',
    verifyKyc: 'आधार केवायसी करा'
  },
  pa: {
    brandTagline: 'ਕਿਸਾਨਾਂ ਦੀ ਤਾਕਤ • ਦਲਾਲੀ ਦਾ ਖ਼ਾਤਮਾ',
    navHome: 'ਮੁੱਖ ਪੰਨਾ',
    navFarmer: 'ਕਿਸਾਨ ਪੋਰਟਲ',
    navBuyer: 'ਖਰੀਦਦਾਰ ਮੰਡੀ',
    navPooling: 'ਸਮੂਹਿਕ ਪੂਲਿੰਗ',
    navMandi: 'ਮੰਡੀ ਮੁਨਾਫ਼ਾ ਕੈਲਕੁਲੇਟਰ',
    navLogistics: 'ਕੋਲਡ ਟਰਾਂਸਪੋਰਟ',
    heroBadge: '0% ਦਲਾਲੀ • 100% ਸਿੱਧਾ ਵਪਾਰ',
    heroTitle: 'ਖੇਤਾਂ ਤੋਂ ਤਾਜ਼ੀ ਫ਼ਸਲ ਸਿੱਧੀ ਸੁਪਰਮਾਰਕੀਟਾਂ ਤੇ ਥੋਕ ਵਪਾਰੀਆਂ ਤੱਕ',
    heroSub: '12,400+ ਕਿਸਾਨ ਆੜ੍ਹਤੀਆਂ ਦੀ ਲੁੱਟ ਤੋਂ ਬਚ ਕੇ ਆਪਣੀ ਫ਼ਸਲ ਦਾ ਸਹੀ ਮੁੱਲ ਸਿੱਧਾ ਆਪਣੇ ਬੈਂਕ ਖਾਤੇ ਵਿੱਚ ਪ੍ਰਾਪਤ ਕਰ ਰਹੇ ਹਨ।',
    btnListProduce: 'ਫ਼ਸਲ ਦਰਜ ਕਰੋ (ਕਿਸਾਨਾਂ ਲਈ)',
    btnSourceBulk: 'ਥੋਕ ਫ਼ਸਲ ਖਰੀਦੋ (ਖਰੀਦਦਾਰਾਂ ਲਈ)',
    statFarmers: '12,400+ ਰਜਿਸਟਰਡ ਕਿਸਾਨ',
    statPayouts: '₹4.8 ਕਰੋੜ+ ਸਿੱਧੇ ਭੁਗਤਾਨ',
    statHike: '35% ਆਮਦਨ ਵਿੱਚ ਵਾਧਾ',
    statBuyers: '180+ ਸੁਪਰਮਾਰਕੀਟਾਂ',
    calcTitle: 'ਮੰਡੀ ਬਨਾਮ ਸਿੱਧਾ ਵਪਾਰ ਕੈਲਕੁਲੇਟਰ',
    calcSub: 'ਵੇਖੋ ਕਿਵੇਂ ਦਲਾਲ 40% ਹਿੱਸਾ ਖਾਂਦੇ ਹਨ ਅਤੇ ਕਿਸਾਨਡਾਇਰੈਕਟ ਨਾਲ ਕਿਸਾਨ ਨੂੰ ਪੂਰਾ ਮੁਨਾਫ਼ਾ ਮਿਲਦਾ ਹੈ।',
    selectCrop: 'ਫ਼ਸਲ ਚੁਣੋ:',
    volumeLabel: 'ਮਾਤਰਾ (ਕੁਇੰਟਲ):',
    traditionalTitle: 'ਰਵਾਇਤੀ ਮੰਡੀ (ਆੜ੍ਹਤੀਆਂ ਸਮੇਤ)',
    kisanDirectTitle: 'ਕਿਸਾਨਡਾਇਰੈਕਟ ਸਿੱਧਾ ਮਾਡਲ',
    farmerCut: 'ਕਿਸਾਨ ਨੂੰ ਮਿਲਿਆ:',
    buyerPaid: 'ਸੁਪਰਮਾਰਕੀਟ ਨੇ ਭਰਿਆ:',
    middlemanCut: 'ਦਲਾਲ ਦਾ ਕੱਟ:',
    directGain: 'ਕਿਸਾਨ ਦਾ ਵਾਧੂ ਮੁਨਾਫ਼ਾ:',
    buyerSavings: 'ਖਰੀਦਦਾਰ ਦੀ ਬੱਚਤ:',
    activeBidsTitle: 'ਸੁਪਰਮਾਰਕੀਟਾਂ ਦੀਆਂ ਬੋਲੀਆਂ (Bids)',
    escrowTrackerTitle: 'ਐਸਕਰੋ ਸੁਰੱਖਿਅਤ ਭੁਗਤਾਨ ਸਥਿਤੀ',
    verifiedKyc: 'ਕੇਵਾਈਸੀ ਵੈਰੀਫਾਈਡ',
    verifyKyc: 'ਆਧਾਰ ਕੇਵਾਈਸੀ ਕਰੋ'
  },
  te: {
    brandTagline: 'రైతు సాధికారత • దళారుల నివారణ',
    navHome: 'ముఖ్యాంశాలు',
    navFarmer: 'రైతు పోర్టల్',
    navBuyer: 'కొనుగోలుదారుల మార్కెట్',
    navPooling: 'సమూహ పూలింగ్',
    navMandi: 'మార్కెట్ లాభాల కాలిక్యులేటర్',
    navLogistics: 'కోల్డ్ చైన్ రవాణా',
    heroBadge: '0% దళారీ కట్ • 100% పారదర్శక వ్యాపారం',
    heroTitle: 'పొలం నుండి నేరుగా సూపర్ మార్కెట్లు మరియు రిటైలర్లకు తాజా పంట',
    heroSub: '12,400+ పైగా రైతులు దళారులను తప్పించి, తమ పంటకు గరిష్ట ధరను నేరుగా సూపర్ మార్కెట్ కొనుగోలుదారుల నుండి పొందుతున్నారు.',
    btnListProduce: 'పంటను నమోదు చేయండి (రైతుల కోసం)',
    btnSourceBulk: 'బల్క్ పంటను కొనండి (కొనుగోలుదారుల కోసం)',
    statFarmers: '12,400+ రిజిస్టర్డ్ రైతులు',
    statPayouts: '₹4.8 కోట్లు+ నేరుగా చెల్లింపులు',
    statHike: '35% రైతు ఆదాయ పెరుగుదల',
    statBuyers: '180+ సూపర్ మార్కెట్ చైన్లు',
    calcTitle: 'సాంప్రదాయ మార్కెట్ వర్సెస్ కిసాన్‌డైరెక్ట్',
    calcSub: 'దళారులు 40-50% లాభం ఎలా కాజేస్తున్నారో, కిసాన్‌డైరెక్ట్ రైతుకు ఎంత లాభం తెస్తుందో చూడండి.',
    selectCrop: 'పంటను ఎంచుకోండి:',
    volumeLabel: 'పరిమాణం (క్వింటాళ్ళు):',
    traditionalTitle: 'సాంప్రదాయ మండీ (దళారులతో)',
    kisanDirectTitle: 'కిసాన్‌డైరెక్ట్ మోడల్ (0% మధ్యవర్తులు)',
    farmerCut: 'రైతుకు లభించింది:',
    buyerPaid: 'సూపర్ మార్కెట్ చెల్లించింది:',
    middlemanCut: 'దళారీ కట్:',
    directGain: 'రైతు నికర లాభం:',
    buyerSavings: 'కొనుగోలుదారు ఆదా:',
    activeBidsTitle: 'సూపర్ మార్కెట్ బిడ్ల బోర్డు (Bids Desk)',
    escrowTrackerTitle: 'ఎస్క్రావ్ సురక్షిత చెల్లింపుల వివరాలు',
    verifiedKyc: 'కేవైసీ పూర్తయింది',
    verifyKyc: 'ఆధార్ కేవైసీ పూర్తి చేయండి'
  }
};

// --- Web Audio Synthesizer (Zero Dependencies) ---
function playTone(freq = 587.33, duration = 0.15, type = 'sine') {
  if (!state.soundEnabled) return;
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    // Audio context may require prior user interaction
  }
}

function playSuccessChime() {
  playTone(523.25, 0.1, 'sine'); // C5
  setTimeout(() => playTone(659.25, 0.1, 'sine'), 100); // E5
  setTimeout(() => playTone(783.99, 0.25, 'sine'), 200); // G5
}

function playNotificationChime() {
  playTone(659.25, 0.08, 'sine');
  setTimeout(() => playTone(880, 0.15, 'sine'), 80);
}

// --- Toast Notification Manager ---
function showToast(title, message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const bgClass = type === 'success' ? 'bg-emerald-900 text-white border-emerald-500' :
                  type === 'info' ? 'bg-slate-900 text-white border-emerald-400' :
                  type === 'warning' ? 'bg-amber-900 text-white border-amber-500' :
                  'bg-red-900 text-white border-red-500';
  
  const icon = type === 'success' ? '✓' : type === 'info' ? 'ℹ' : '⚠';

  toast.className = `toast-item flex items-start gap-3 p-4 rounded-xl border shadow-xl ${bgClass}`;
  toast.innerHTML = `
    <span class="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold shrink-0">${icon}</span>
    <div class="flex-1">
      <h4 class="font-semibold text-sm">${title}</h4>
      <p class="text-xs text-white/80 mt-0.5 leading-relaxed">${message}</p>
    </div>
    <button onclick="this.parentElement.remove()" class="text-white/60 hover:text-white text-sm shrink-0">&times;</button>
  `;

  container.appendChild(toast);
  playTone(700, 0.08);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 350);
  }, 4500);
}

// --- View Switching System ---
function switchView(viewName) {
  state.activeView = viewName;

  // Update tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    if (btn.dataset.view === viewName) {
      btn.classList.add('text-emerald-700', 'border-emerald-600', 'bg-emerald-50/60');
      btn.classList.remove('text-slate-600', 'border-transparent');
    } else {
      btn.classList.remove('text-emerald-700', 'border-emerald-600', 'bg-emerald-50/60');
      btn.classList.add('text-slate-600', 'border-transparent');
    }
  });

  // Update visible view container
  document.querySelectorAll('.view-panel').forEach(panel => {
    if (panel.id === `view-${viewName}`) {
      panel.classList.remove('hidden');
      panel.classList.add('block');
    } else {
      panel.classList.add('hidden');
      panel.classList.remove('block');
    }
  });

  // Scroll to top of view smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Refresh lucide icons if library loaded
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Trigger charts if entering mandi simulator
  if (viewName === 'mandi') {
    renderMandiMarginChart();
  }
}

// --- Role Switcher (Farmer vs Buyer) ---
function setRole(newRole) {
  state.role = newRole;
  const farmerBtn = document.getElementById('role-btn-farmer');
  const buyerBtn = document.getElementById('role-btn-buyer');

  if (newRole === 'farmer') {
    farmerBtn.classList.add('bg-emerald-700', 'text-white', 'shadow-sm');
    farmerBtn.classList.remove('text-slate-700', 'hover:bg-slate-100');
    buyerBtn.classList.remove('bg-emerald-700', 'text-white', 'shadow-sm');
    buyerBtn.classList.add('text-slate-700', 'hover:bg-slate-100');
    showToast('Role Switched', 'Switched to Farmer View: Manage listings, bids & escrow payouts.', 'info');
    switchView('farmer');
  } else {
    buyerBtn.classList.add('bg-emerald-700', 'text-white', 'shadow-sm');
    buyerBtn.classList.remove('text-slate-700', 'hover:bg-slate-100');
    farmerBtn.classList.remove('bg-emerald-700', 'text-white', 'shadow-sm');
    farmerBtn.classList.add('text-slate-700', 'hover:bg-slate-100');
    showToast('Role Switched', 'Switched to Supermarket / Buyer View: Browse direct produce & cold-chain contracts.', 'info');
    switchView('buyer');
  }
}

// --- Multi-Language Selector ---
function setLanguage(langCode) {
  state.currentLang = langCode;
  const dict = translations[langCode] || translations.en;

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  const langSelect = document.getElementById('lang-select');
  if (langSelect) langSelect.value = langCode;

  showToast('Language Updated', `Switched interface language to ${langCode.toUpperCase()}.`, 'info');
}

// --- Interactive Middleman Elimination Calculator ---
const cropDataCalculator = {
  onion: {
    name: 'Nashik Red Onion',
    farmerMandiPriceKg: 12,
    retailerMandiPriceKg: 35,
    kisanDirectPriceKg: 24,
    supermarketKisanPriceKg: 26,
    defaultQuintals: 100
  },
  potato: {
    name: 'Agra Kufri Potato',
    farmerMandiPriceKg: 9,
    retailerMandiPriceKg: 28,
    kisanDirectPriceKg: 17,
    supermarketKisanPriceKg: 19,
    defaultQuintals: 150
  },
  tomato: {
    name: 'Kolar Hybrid Tomato',
    farmerMandiPriceKg: 11,
    retailerMandiPriceKg: 38,
    kisanDirectPriceKg: 22,
    supermarketKisanPriceKg: 25,
    defaultQuintals: 80
  },
  wheat: {
    name: 'Sehore Sharbati Wheat',
    farmerMandiPriceKg: 22,
    retailerMandiPriceKg: 46,
    kisanDirectPriceKg: 32,
    supermarketKisanPriceKg: 34,
    defaultQuintals: 200
  },
  apple: {
    name: 'Shimla Royal Apple',
    farmerMandiPriceKg: 55,
    retailerMandiPriceKg: 160,
    kisanDirectPriceKg: 105,
    supermarketKisanPriceKg: 115,
    defaultQuintals: 50
  }
};

function updateCalculator() {
  const cropKey = document.getElementById('calc-crop-select').value;
  const quintals = parseFloat(document.getElementById('calc-volume-slider').value) || 100;
  document.getElementById('calc-volume-display').textContent = `${quintals} Quintals (${(quintals / 10).toFixed(1)} Tons)`;

  const crop = cropDataCalculator[cropKey] || cropDataCalculator.onion;
  const kg = quintals * 100;

  // Mandi breakdown:
  const mandiFarmerPayout = kg * crop.farmerMandiPriceKg;
  const mandiRetailerCost = kg * crop.retailerMandiPriceKg;
  const mandiMiddlemanProfit = mandiRetailerCost - mandiFarmerPayout;

  // KisanDirect breakdown:
  const kdFarmerPayout = kg * crop.kisanDirectPriceKg;
  const kdSupermarketCost = kg * crop.supermarketKisanPriceKg;
  const kdPlatformHandling = kdSupermarketCost - kdFarmerPayout; // 1-2% logistics coordination

  // Deltas:
  const farmerExtraGain = kdFarmerPayout - mandiFarmerPayout;
  const buyerDirectSavings = mandiRetailerCost - kdSupermarketCost;
  const percentGainFarmer = Math.round((farmerExtraGain / mandiFarmerPayout) * 100);
  const percentSavingsBuyer = Math.round((buyerDirectSavings / mandiRetailerCost) * 100);

  // Update UI DOM
  document.getElementById('calc-mandi-farmer').textContent = `₹${crop.farmerMandiPriceKg}/kg (Total: ₹${mandiFarmerPayout.toLocaleString('en-IN')})`;
  document.getElementById('calc-mandi-buyer').textContent = `₹${crop.retailerMandiPriceKg}/kg (Total: ₹${mandiRetailerCost.toLocaleString('en-IN')})`;
  document.getElementById('calc-mandi-dalal-cut').textContent = `₹${crop.retailerMandiPriceKg - crop.farmerMandiPriceKg}/kg (Total: ₹${mandiMiddlemanProfit.toLocaleString('en-IN')})`;

  document.getElementById('calc-kd-farmer').textContent = `₹${crop.kisanDirectPriceKg}/kg (Total: ₹${kdFarmerPayout.toLocaleString('en-IN')})`;
  document.getElementById('calc-kd-buyer').textContent = `₹${crop.supermarketKisanPriceKg}/kg (Total: ₹${kdSupermarketCost.toLocaleString('en-IN')})`;
  document.getElementById('calc-kd-dalal-cut').textContent = `₹0 (0% Middleman Cut)`;

  document.getElementById('calc-extra-farmer-gain').textContent = `+₹${farmerExtraGain.toLocaleString('en-IN')} (+${percentGainFarmer}%)`;
  document.getElementById('calc-buyer-savings').textContent = `Save ₹${buyerDirectSavings.toLocaleString('en-IN')} (${percentSavingsBuyer}% Cheaper)`;
}

// --- AI Fair Price Suggestion Simulator ---
const cropAiBenchmarking = {
  'Nashik Red Onion': { base: 2450, rangeMin: 2380, rangeMax: 2520, demand: 'High (Festive + Export)', weatherSignal: 'Nashik Rain Alert (+3.4% premium)' },
  'Agra Kufri Jyoti Potato': { base: 1680, rangeMin: 1640, rangeMax: 1720, demand: 'Steady (Processing Grade demand)', weatherSignal: 'Stable harvest conditions' },
  'Kolar Hybrid Tomato': { base: 1980, rangeMin: 1920, rangeMax: 2060, demand: 'High (Bengaluru & Chennai Hubs)', weatherSignal: 'Slight supply crunch (+5.1% margin)' },
  'Sehore Sharbati Wheat': { base: 3150, rangeMin: 3100, rangeMax: 3250, demand: 'Extremely Strong (ITC & Flour Mills)', weatherSignal: 'Dry storage verified' },
  'Shimla Royal Delicious Apple': { base: 9400, rangeMin: 9100, rangeMax: 9600, demand: 'Peak Season Demand (Retail Chilled)', weatherSignal: 'Cold-chain dispatch mandatory' }
};

function onCropSelectionChange() {
  const cropSelect = document.getElementById('list-crop-name');
  const cropName = cropSelect ? cropSelect.value : 'Nashik Red Onion';
  const aiWidget = document.getElementById('ai-price-widget');
  const aiPriceText = document.getElementById('ai-price-recommendation');
  const aiSignalText = document.getElementById('ai-demand-signal');

  const benchmark = cropAiBenchmarking[cropName] || { base: 2200, rangeMin: 2100, rangeMax: 2300, demand: 'Normal', weatherSignal: 'Clear' };

  if (aiPriceText && aiSignalText) {
    aiPriceText.textContent = `₹${benchmark.rangeMin} - ₹${benchmark.rangeMax} / Quintal`;
    aiSignalText.textContent = `Regional Signals: ${benchmark.demand} • ${benchmark.weatherSignal}`;
  }
}

function applyAiPrice() {
  const cropSelect = document.getElementById('list-crop-name');
  const cropName = cropSelect ? cropSelect.value : 'Nashik Red Onion';
  const benchmark = cropAiBenchmarking[cropName] || { base: 2450 };
  const targetPriceInput = document.getElementById('list-target-price');
  if (targetPriceInput) {
    targetPriceInput.value = benchmark.base;
    showToast('AI Price Applied', `Optimal target price ₹${benchmark.base}/quintal set based on live regional demand.`, 'success');
    playTone(600, 0.1);
  }
}

// --- Simulated AI Computer Vision Quality Scanner ---
function simulateAiScan() {
  const scanBox = document.getElementById('scanner-preview');
  const scanLine = document.getElementById('scan-laser');
  const scanStatus = document.getElementById('scan-status-text');
  const scanBadge = document.getElementById('scan-result-badge');

  if (!scanBox || !scanLine) return;

  scanLine.classList.remove('hidden');
  scanStatus.textContent = 'Scanning image with KisanAI Computer Vision...';
  scanBadge.classList.add('hidden');

  let step = 0;
  const scanInterval = setInterval(() => {
    step++;
    if (step === 1) scanStatus.textContent = 'Analyzing RGB surface reflectance & skin texture...';
    if (step === 2) scanStatus.textContent = 'Measuring caliber diameter & uniformity (94.2%)...';
    if (step === 3) scanStatus.textContent = 'Evaluating moisture index & defect-free threshold...';
    if (step === 4) {
      clearInterval(scanInterval);
      scanLine.classList.add('hidden');
      scanStatus.textContent = 'Scan Complete: Verified Grade A Produce';
      scanBadge.classList.remove('hidden');
      playSuccessChime();
      showToast('AI Quality Grading Verified', 'Grade A (94.2% Purity Score) certified by computer vision.', 'success');
    }
  }, 600);
}

// --- Publish Produce Listing ---
function handlePublishListing(e) {
  e.preventDefault();

  const cropName = document.getElementById('list-crop-name').value;
  const qty = parseFloat(document.getElementById('list-quantity').value);
  const moq = parseFloat(document.getElementById('list-moq').value) || 10;
  const price = parseFloat(document.getElementById('list-target-price').value);
  const grade = document.getElementById('list-grade').value;
  const shelfLife = parseInt(document.getElementById('list-shelf-life').value) || 30;

  if (!cropName || !qty || !price) {
    showToast('Incomplete Listing', 'Please fill in crop variety, available quantity, and target price.', 'warning');
    return;
  }

  const newLot = {
    id: `LOT-NSK-${Math.floor(100 + Math.random() * 900)}`,
    crop: cropName,
    category: cropName.includes('Wheat') ? 'Grains & Pulses' : cropName.includes('Apple') || cropName.includes('Orange') ? 'Fruits' : 'Vegetables',
    farmer: state.farmerKYC.name,
    farmerAvatar: 'assets/farmer_portrait.jpg',
    location: 'Sinnar, Nashik (Maharashtra)',
    coords: '19.8475° N, 73.9822° E',
    distanceKm: 35,
    qtyQuintals: qty,
    moq: moq,
    pricePerQ: price,
    mandiBenchmark: Math.round(price * 0.72),
    harvestDate: new Date().toISOString().split('T')[0],
    shelfLifeDays: shelfLife,
    grade: grade,
    purityScore: 94.8,
    moisture: '11.5%',
    organic: true,
    certifications: ['Jaivik Bharat', 'Direct Deal Verified'],
    soilSummary: 'pH 6.8 | N: 285 kg/ha | Organic Carbon 0.74%',
    image: 'assets/hero_agritech.jpg',
    status: 'active'
  };

  // Add to listings array
  state.listings.unshift(newLot);

  // Reset form
  document.getElementById('produce-listing-form').reset();
  document.getElementById('scan-result-badge').classList.add('hidden');
  document.getElementById('scan-status-text').textContent = 'Upload or take crop photo for instant AI grading';

  // Render marketplace cards & farmer listings
  renderMarketplaceCards();
  renderFarmerListingsTable();

  playSuccessChime();
  showToast('Produce Listed Successfully!', `Lot ${newLot.id} is now live on the Supermarket Procurement Marketplace.`, 'success');
}

// --- Render Farmer Listings Table ---
function renderFarmerListingsTable() {
  const container = document.getElementById('farmer-listings-body');
  if (!container) return;

  container.innerHTML = state.listings.map(lot => `
    <tr class="border-b border-slate-100 hover:bg-slate-50/60 transition">
      <td class="py-3 px-4">
        <div class="flex items-center gap-3">
          <img src="${lot.image}" alt="${lot.crop}" class="w-10 h-10 rounded-lg object-cover border border-slate-200" onerror="this.src='assets/hero_agritech.jpg'">
          <div>
            <span class="font-bold text-slate-800 text-sm block">${lot.crop}</span>
            <span class="text-xs text-slate-400 font-mono">${lot.id}</span>
          </div>
        </div>
      </td>
      <td class="py-3 px-4 font-semibold text-slate-700 text-sm">${lot.qtyQuintals} q <span class="text-xs text-slate-400">(${(lot.qtyQuintals/10).toFixed(1)} T)</span></td>
      <td class="py-3 px-4 font-bold text-emerald-800 text-sm">₹${lot.pricePerQ.toLocaleString('en-IN')}/q</td>
      <td class="py-3 px-4">
        <span class="badge-pill badge-emerald text-xs">${lot.grade}</span>
      </td>
      <td class="py-3 px-4 text-xs text-slate-500 font-medium">${lot.harvestDate}</td>
      <td class="py-3 px-4">
        <span class="badge-pill ${lot.status === 'active' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'} text-xs">
          ${lot.status.toUpperCase()}
        </span>
      </td>
      <td class="py-3 px-4 text-right">
        <button onclick="openSourcingPassport('${lot.id}')" class="text-xs font-semibold text-emerald-700 hover:text-emerald-900 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 hover:bg-emerald-100 transition">
          Passport
        </button>
      </td>
    </tr>
  `).join('');
}

// --- Render Active Bids Negotiation Board ---
function renderBidsBoard() {
  const container = document.getElementById('bids-board-container');
  if (!container) return;

  const pendingBids = state.bids.filter(b => b.status === 'pending');
  document.getElementById('bids-counter-badge').textContent = `${pendingBids.length} Active Offers`;

  if (pendingBids.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-10 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
        <p class="text-slate-500 font-medium">No pending buyer bids at this moment.</p>
        <span class="text-xs text-slate-400">Supermarket offers will appear here in real time.</span>
      </div>
    `;
    return;
  }

  container.innerHTML = pendingBids.map(bid => `
    <div class="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition">
      <div class="flex items-start justify-between gap-3 mb-3">
        <div>
          <span class="badge-pill badge-blue text-[11px] mb-1">${bid.buyerType}</span>
          <h4 class="font-bold text-slate-900 text-base leading-tight">${bid.buyerName}</h4>
          <span class="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
            ★ ${bid.buyerRating} • ${bid.buyerLocation}
          </span>
        </div>
        <span class="badge-pill badge-amber text-xs shrink-0">⏳ ${bid.expiresIn}</span>
      </div>

      <div class="bg-slate-50 rounded-xl p-3 border border-slate-100 my-3 text-xs space-y-1.5">
        <div class="flex justify-between text-slate-600">
          <span>Target Crop:</span>
          <span class="font-semibold text-slate-800">${bid.crop}</span>
        </div>
        <div class="flex justify-between text-slate-600">
          <span>Requested Quantity:</span>
          <span class="font-bold text-slate-900">${bid.qtyRequested} Quintals (${bid.qtyRequested/10} Tons)</span>
        </div>
        <div class="flex justify-between text-slate-600">
          <span>Offered Price:</span>
          <span class="font-bold text-emerald-700 text-sm">₹${bid.bidPricePerQ}/q</span>
        </div>
        <div class="flex justify-between pt-1 border-t border-slate-200 font-bold text-slate-900">
          <span>Total Escrow Value:</span>
          <span class="text-emerald-800 text-sm">₹${bid.totalAmount.toLocaleString('en-IN')}</span>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-2 mt-4">
        <button onclick="acceptBid('${bid.id}')" class="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1 shadow-sm transition">
          ✓ Accept
        </button>
        <button onclick="openCounterOfferModal('${bid.id}')" class="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-2 rounded-xl text-xs flex items-center justify-center gap-1 transition">
          Counter
        </button>
        <button onclick="declineBid('${bid.id}')" class="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2 px-2 rounded-xl text-xs flex items-center justify-center transition">
          Decline
        </button>
      </div>
    </div>
  `).join('');
}

// --- Bid Actions: Accept, Counter, Decline ---
function acceptBid(bidId) {
  const bid = state.bids.find(b => b.id === bidId);
  if (!bid) return;

  bid.status = 'accepted';

  // Create Escrow Record
  const newEscrow = {
    id: `ESC-${Math.floor(4000 + Math.random() * 900)}`,
    lotId: bid.lotId,
    crop: bid.crop,
    buyer: bid.buyerName,
    farmer: state.farmerKYC.name,
    qtyQuintals: bid.qtyRequested,
    amount: bid.totalAmount,
    status: 'locked',
    step: 1,
    utr: `ESCROW-LOCK-${Math.floor(100000 + Math.random() * 900000)}`,
    date: new Date().toISOString().split('T')[0],
    receiptGenerated: false
  };

  state.escrowRecords.unshift(newEscrow);

  renderBidsBoard();
  renderEscrowDashboard();
  playSuccessChime();
  showToast('Bid Accepted & Escrow Locked!', `₹${bid.totalAmount.toLocaleString('en-IN')} locked securely in Escrow from ${bid.buyerName}. Cold-chain pickup scheduled!`, 'success');
}

function declineBid(bidId) {
  const bid = state.bids.find(b => b.id === bidId);
  if (!bid) return;

  bid.status = 'declined';
  renderBidsBoard();
  playTone(350, 0.15, 'sawtooth');
  showToast('Bid Declined', `Offer from ${bid.buyerName} was declined.`, 'info');
}

let activeCounterBidId = null;
function openCounterOfferModal(bidId) {
  const bid = state.bids.find(b => b.id === bidId);
  if (!bid) return;
  activeCounterBidId = bidId;

  document.getElementById('counter-bid-buyer').textContent = bid.buyerName;
  document.getElementById('counter-bid-crop').textContent = `${bid.crop} (${bid.qtyRequested} Quintals)`;
  document.getElementById('counter-bid-original-price').textContent = `₹${bid.bidPricePerQ}/q`;
  document.getElementById('counter-proposed-price').value = bid.targetPricePerQ || (bid.bidPricePerQ + 40);

  document.getElementById('counter-modal').classList.remove('hidden');
}

function closeCounterModal() {
  document.getElementById('counter-modal').classList.add('hidden');
  activeCounterBidId = null;
}

function submitCounterOffer(e) {
  e.preventDefault();
  const counterPrice = parseFloat(document.getElementById('counter-proposed-price').value);
  if (!counterPrice || !activeCounterBidId) return;

  const bid = state.bids.find(b => b.id === activeCounterBidId);
  if (bid) {
    bid.bidPricePerQ = counterPrice;
    bid.totalAmount = counterPrice * bid.qtyRequested;
    bid.expiresIn = 'Countered (Awaiting Buyer)';
    showToast('Counter-Offer Sent!', `Proposed counter rate of ₹${counterPrice}/q sent directly to ${bid.buyerName}.`, 'success');
  }

  closeCounterModal();
  renderBidsBoard();
  playTone(650, 0.12);
}

// --- Escrow & Payout Dashboard ---
function renderEscrowDashboard() {
  const container = document.getElementById('escrow-transactions-body');
  if (!container) return;

  // Calculate totals
  let lockedFunds = 0;
  let settledFunds = 0;

  state.escrowRecords.forEach(rec => {
    if (rec.status === 'locked' || rec.status === 'in_transit') {
      lockedFunds += rec.amount;
    } else if (rec.status === 'settled') {
      settledFunds += rec.amount;
    }
  });

  const lockedEl = document.getElementById('escrow-locked-total');
  const settledEl = document.getElementById('escrow-settled-total');
  if (lockedEl) lockedEl.textContent = `₹${lockedFunds.toLocaleString('en-IN')}`;
  if (settledEl) settledEl.textContent = `₹${settledFunds.toLocaleString('en-IN')}`;

  container.innerHTML = state.escrowRecords.map(rec => {
    const statusPill = rec.status === 'settled' ?
      '<span class="badge-pill bg-emerald-100 text-emerald-800 border-emerald-300">✓ Settled to Bank</span>' :
      rec.status === 'in_transit' ?
      '<span class="badge-pill bg-amber-100 text-amber-800 border-amber-300">🚛 Cold-Chain In-Transit</span>' :
      '<span class="badge-pill bg-blue-100 text-blue-800 border-blue-300">🔒 Funds in Escrow</span>';

    return `
      <tr class="border-b border-slate-100 hover:bg-slate-50 transition">
        <td class="py-3 px-4 font-mono text-xs font-bold text-slate-700">${rec.id}</td>
        <td class="py-3 px-4 font-semibold text-slate-800 text-sm">${rec.crop}</td>
        <td class="py-3 px-4 text-xs text-slate-600">${rec.buyer}</td>
        <td class="py-3 px-4 font-bold text-emerald-800 text-sm">₹${rec.amount.toLocaleString('en-IN')}</td>
        <td class="py-3 px-4">${statusPill}</td>
        <td class="py-3 px-4 font-mono text-xs text-slate-500">${rec.utr || 'ESCROW-SECURED'}</td>
        <td class="py-3 px-4 text-right">
          <button onclick="openChallanModal('${rec.id}')" class="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-1.5 rounded-lg transition">
            📄 e-Challan
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

// --- Supermarket Procurement Marketplace ---
function renderMarketplaceCards() {
  const container = document.getElementById('marketplace-cards-container');
  if (!container) return;

  const searchQuery = (document.getElementById('market-search-input')?.value || '').toLowerCase();
  const radiusFilter = document.getElementById('market-radius-filter')?.value || 'all';
  const categoryFilter = document.getElementById('market-category-filter')?.value || 'all';

  const filtered = state.listings.filter(lot => {
    const matchesSearch = lot.crop.toLowerCase().includes(searchQuery) ||
                          lot.location.toLowerCase().includes(searchQuery) ||
                          lot.farmer.toLowerCase().includes(searchQuery);

    const matchesCategory = categoryFilter === 'all' || lot.category === categoryFilter;

    let matchesRadius = true;
    if (radiusFilter === '50') matchesRadius = lot.distanceKm <= 50;
    if (radiusFilter === '100') matchesRadius = lot.distanceKm <= 100;
    if (radiusFilter === '250') matchesRadius = lot.distanceKm <= 250;

    return matchesSearch && matchesCategory && matchesRadius;
  });

  document.getElementById('market-results-count').textContent = `Showing ${filtered.length} Direct Farm Lots`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-16 bg-white rounded-3xl border border-dashed border-slate-200">
        <p class="text-slate-600 font-semibold text-lg">No farm produce found for the chosen filters.</p>
        <span class="text-xs text-slate-400 mt-1 block">Try expanding your radius or changing the search keyword.</span>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(lot => {
    const mandiSavings = Math.round(((lot.pricePerQ * 1.35) - lot.pricePerQ) / 100);
    return `
      <div class="produce-card bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between">
        <div>
          <div class="relative h-44 w-full overflow-hidden bg-slate-100">
            <img src="${lot.image}" alt="${lot.crop}" class="w-full h-full object-cover" onerror="this.src='assets/hero_agritech.jpg'">
            <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">
              <span class="badge-pill bg-white/95 text-emerald-900 border border-emerald-200 text-xs backdrop-blur-sm shadow-sm font-bold">
                ✓ ${lot.grade}
              </span>
              ${lot.organic ? '<span class="badge-pill bg-emerald-600 text-white text-xs shadow-sm font-semibold">Jaivik Organic</span>' : ''}
            </div>
            <div class="absolute bottom-3 right-3 bg-slate-900/80 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm">
              📍 ${lot.distanceKm} km away
            </div>
          </div>

          <div class="p-5">
            <div class="flex items-center gap-2 mb-2">
              <img src="${lot.farmerAvatar}" alt="${lot.farmer}" class="w-7 h-7 rounded-full object-cover border border-emerald-400">
              <span class="text-xs text-slate-600 font-medium truncate">${lot.farmer} • ${lot.location.split('(')[0]}</span>
            </div>

            <h3 class="font-bold text-slate-900 text-lg leading-snug">${lot.crop}</h3>

            <div class="grid grid-cols-2 gap-2 my-3 text-xs bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <div>
                <span class="text-slate-400 block text-[11px]">Stock Available</span>
                <span class="font-bold text-slate-800">${lot.qtyQuintals} Quintals (${(lot.qtyQuintals/10).toFixed(1)} T)</span>
              </div>
              <div>
                <span class="text-slate-400 block text-[11px]">Minimum Order</span>
                <span class="font-bold text-slate-800">${lot.moq} Quintals</span>
              </div>
              <div>
                <span class="text-slate-400 block text-[11px]">Purity Index</span>
                <span class="font-semibold text-emerald-700">${lot.purityScore}% AI Certified</span>
              </div>
              <div>
                <span class="text-slate-400 block text-[11px]">Harvested</span>
                <span class="font-medium text-slate-700">${lot.harvestDate}</span>
              </div>
            </div>

            <div class="flex items-baseline justify-between pt-1">
              <div>
                <span class="text-2xl font-black text-emerald-900">₹${lot.pricePerQ.toLocaleString('en-IN')}</span>
                <span class="text-xs text-slate-500 font-medium">/quintal</span>
              </div>
              <span class="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                Save ~₹${mandiSavings}/kg vs Mandi
              </span>
            </div>
          </div>
        </div>

        <div class="p-5 pt-0 grid grid-cols-2 gap-2">
          <button onclick="openSourcingPassport('${lot.id}')" class="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2.5 px-3 rounded-xl text-xs transition border border-slate-200 text-center">
            🔍 Passport
          </button>
          <button onclick="openBidModal('${lot.id}')" class="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-semibold py-2.5 px-3 rounded-xl text-xs shadow-sm transition text-center">
            ⚡ Place Bid / Buy
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// --- Sourcing Passport Modal (Traceability & Soil Health) ---
function openSourcingPassport(lotId) {
  const lot = state.listings.find(l => l.id === lotId) || state.listings[0];
  const modal = document.getElementById('passport-modal');

  document.getElementById('pass-crop-name').textContent = lot.crop;
  document.getElementById('pass-lot-id').textContent = `Lot ID: ${lot.id}`;
  document.getElementById('pass-farmer-name').textContent = lot.farmer;
  document.getElementById('pass-farmer-avatar').src = lot.farmerAvatar;
  document.getElementById('pass-farm-location').textContent = lot.location;
  document.getElementById('pass-coords').textContent = lot.coords;
  document.getElementById('pass-harvest-date').textContent = lot.harvestDate;
  document.getElementById('pass-shelf-life').textContent = `${lot.shelfLifeDays} Days`;
  document.getElementById('pass-purity-score').textContent = `${lot.purityScore}%`;
  document.getElementById('pass-moisture').textContent = lot.moisture;
  document.getElementById('pass-soil-report').textContent = lot.soilSummary;
  document.getElementById('pass-qr-text').textContent = `https://kisandirect.gov.in/verify/${lot.id}`;

  const certContainer = document.getElementById('pass-certifications');
  certContainer.innerHTML = lot.certifications.map(c => `
    <span class="badge-pill badge-emerald text-xs">${c}</span>
  `).join('');

  modal.classList.remove('hidden');
  playTone(550, 0.08);
}

function closePassportModal() {
  document.getElementById('passport-modal').classList.add('hidden');
}

// --- Place Bulk Bid Modal ---
let activeBidLotId = null;
function openBidModal(lotId) {
  const lot = state.listings.find(l => l.id === lotId);
  if (!lot) return;
  activeBidLotId = lotId;

  document.getElementById('bid-lot-info').textContent = `${lot.crop} (Available: ${lot.qtyQuintals}q, MOQ: ${lot.moq}q)`;
  document.getElementById('bid-lot-price').textContent = `Farmer's Target Price: ₹${lot.pricePerQ}/q`;
  document.getElementById('bid-input-qty').value = lot.moq;
  document.getElementById('bid-input-price').value = lot.pricePerQ;

  updateBidModalCalculations();
  document.getElementById('bid-modal').classList.remove('hidden');
}

function closeBidModal() {
  document.getElementById('bid-modal').classList.add('hidden');
  activeBidLotId = null;
}

function updateBidModalCalculations() {
  if (!activeBidLotId) return;
  const lot = state.listings.find(l => l.id === activeBidLotId);
  const qty = parseFloat(document.getElementById('bid-input-qty').value) || 0;
  const price = parseFloat(document.getElementById('bid-input-price').value) || 0;

  const produceTotal = qty * price;
  const distance = lot ? lot.distanceKm : 45;
  const coldChainCost = Math.round(distance * 16 * Math.max(1, qty / 40));
  const escrowFee = Math.round(produceTotal * 0.015);
  const grandTotal = produceTotal + coldChainCost + escrowFee;

  document.getElementById('bid-calc-produce').textContent = `₹${produceTotal.toLocaleString('en-IN')}`;
  document.getElementById('bid-calc-freight').textContent = `₹${coldChainCost.toLocaleString('en-IN')} (${distance} km)`;
  document.getElementById('bid-calc-escrow-fee').textContent = `₹${escrowFee.toLocaleString('en-IN')} (1.5%)`;
  document.getElementById('bid-calc-total').textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
}

function submitBulkBid(e) {
  e.preventDefault();
  const lot = state.listings.find(l => l.id === activeBidLotId);
  if (!lot) return;

  const buyerName = document.getElementById('bid-buyer-name').value || 'Reliance Fresh Supermarket';
  const qty = parseFloat(document.getElementById('bid-input-qty').value);
  const bidPrice = parseFloat(document.getElementById('bid-input-price').value);

  const newBid = {
    id: `BID-${Math.floor(1000 + Math.random() * 9000)}`,
    lotId: lot.id,
    buyerName: buyerName,
    buyerType: 'Supermarket Chain',
    buyerRating: 4.9,
    buyerLocation: 'Regional Fulfillment Mart',
    crop: lot.crop,
    qtyRequested: qty,
    bidPricePerQ: bidPrice,
    targetPricePerQ: lot.pricePerQ,
    totalAmount: qty * bidPrice,
    expiresIn: '6h 00m',
    status: 'pending',
    createdDate: 'Just now'
  };

  state.bids.unshift(newBid);

  closeBidModal();
  renderBidsBoard();
  playSuccessChime();
  showToast('Bulk Bid Placed in Escrow!', `Your bid of ₹${bidPrice}/q for ${qty}q (${lot.crop}) has been sent directly to the farmer.`, 'success');
}

// --- Farmer Registration KYC Modal ---
function openKycModal() {
  document.getElementById('kyc-modal').classList.remove('hidden');
}

function closeKycModal() {
  document.getElementById('kyc-modal').classList.add('hidden');
}

function handleKycSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('kyc-farmer-name').value;
  const aadhaar = document.getElementById('kyc-aadhaar').value;
  const kcc = document.getElementById('kyc-kcc').value;
  const survey = document.getElementById('kyc-land-survey').value;

  state.farmerKYC = {
    verified: true,
    name: name || 'Rameshwar Patil',
    aadhaar: aadhaar || 'XXXX-XXXX-4921',
    kccId: kcc || 'KCC-MH-2023-88219',
    landSurvey: survey || 'Gat No. 142/A, Sinnar, Nashik',
    bank: 'State Bank of India (Kisan Branch)',
    account: 'XXXXXX8912',
    ifsc: 'SBIN0001842'
  };

  closeKycModal();
  playSuccessChime();
  showToast('Aadhaar KYC Verified!', 'Farmer identity & land record authenticated. "Verified Farmer" badge issued.', 'success');

  const kycBadge = document.getElementById('navbar-kyc-pill');
  if (kycBadge) {
    kycBadge.innerHTML = '✓ KYC Verified';
    kycBadge.classList.remove('bg-amber-100', 'text-amber-800');
    kycBadge.classList.add('bg-emerald-100', 'text-emerald-800');
  }
}

// --- Digital Mandi Receipt (e-Challan / Tax Invoice) ---
function openChallanModal(escrowId) {
  const rec = state.escrowRecords.find(r => r.id === escrowId) || state.escrowRecords[0];
  const modal = document.getElementById('challan-modal');

  document.getElementById('challan-no').textContent = `KD-ECH-2026/${rec.id.replace('ESC-', '')}`;
  document.getElementById('challan-date').textContent = rec.date || '2026-10-05';
  document.getElementById('challan-farmer').textContent = rec.farmer || state.farmerKYC.name;
  document.getElementById('challan-buyer').textContent = rec.buyer;
  document.getElementById('challan-crop').textContent = rec.crop;
  document.getElementById('challan-qty').textContent = `${rec.qtyQuintals} Quintals (${(rec.qtyQuintals/10).toFixed(1)} Tons)`;
  document.getElementById('challan-rate').textContent = `₹${Math.round(rec.amount / rec.qtyQuintals)}/q`;
  document.getElementById('challan-total').textContent = `₹${rec.amount.toLocaleString('en-IN')}`;
  document.getElementById('challan-utr').textContent = rec.utr || 'ESCROW-PAID-RBI-GATEWAY';

  modal.classList.remove('hidden');
  playTone(500, 0.08);
}

function closeChallanModal() {
  document.getElementById('challan-modal').classList.add('hidden');
}

function printChallan() {
  window.print();
}

// --- Smart Contract Pooling (Collective Bargaining) ---
function renderPoolingRooms() {
  const container = document.getElementById('pooling-rooms-container');
  if (!container) return;

  container.innerHTML = state.poolingRooms.map(room => {
    const percent = Math.min(100, Math.round((room.currentQuintals / room.targetQuintals) * 100));
    return `
      <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
        <div>
          <div class="flex items-start justify-between gap-3 mb-2">
            <div>
              <span class="badge-pill badge-purple text-[11px] mb-1 font-mono">${room.id}</span>
              <h3 class="font-bold text-slate-900 text-lg">${room.crop}</h3>
              <p class="text-xs text-slate-500 font-medium">Buyer: ${room.destination}</p>
            </div>
            <span class="badge-pill badge-amber text-xs font-semibold shrink-0">${room.deadline}</span>
          </div>

          <div class="my-4">
            <div class="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
              <span>Pooled: ${room.currentQuintals} / ${room.targetQuintals} Quintals</span>
              <span class="text-emerald-700">${percent}% Complete</span>
            </div>
            <div class="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
              <div class="h-full bg-emerald-600 rounded-full transition-all duration-500" style="width: ${percent}%"></div>
            </div>
            <span class="text-[11px] text-slate-400 mt-1 block">${room.targetQuintals - room.currentQuintals} Quintals remaining to fulfill contract</span>
          </div>

          <div class="grid grid-cols-2 gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs mb-4">
            <div>
              <span class="text-slate-400 block text-[11px]">Guaranteed Bulk Rate</span>
              <span class="font-bold text-emerald-800 text-sm">₹${room.offeredPricePerQ}/q</span>
            </div>
            <div>
              <span class="text-slate-400 block text-[11px]">Local APMC Rate</span>
              <span class="font-semibold text-slate-500 line-through">₹${room.mandiLocalRate}/q</span>
            </div>
            <div>
              <span class="text-slate-400 block text-[11px]">Contributing Farmers</span>
              <span class="font-semibold text-slate-800">${room.participatingFarmers} Smallholders</span>
            </div>
            <div>
              <span class="text-slate-400 block text-[11px]">Bargaining Premium</span>
              <span class="font-bold text-amber-600">+₹${room.offeredPricePerQ - room.mandiLocalRate}/q</span>
            </div>
          </div>
        </div>

        <button onclick="openJoinPoolModal('${room.id}')" class="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-semibold py-2.5 px-4 rounded-xl text-xs shadow-sm transition">
          + Pledge Produce & Join Collective Pool
        </button>
      </div>
    `;
  }).join('');
}

let activePoolRoomId = null;
function openJoinPoolModal(roomId) {
  const room = state.poolingRooms.find(r => r.id === roomId);
  if (!room) return;
  activePoolRoomId = roomId;

  document.getElementById('pool-modal-title').textContent = `Join Pool: ${room.crop}`;
  document.getElementById('pool-modal-needed').textContent = `Remaining Needed: ${room.targetQuintals - room.currentQuintals} Quintals`;
  document.getElementById('pool-modal-rate').textContent = `Guaranteed Rate: ₹${room.offeredPricePerQ}/q`;
  document.getElementById('pool-pledge-qty').value = Math.min(10, room.targetQuintals - room.currentQuintals);

  document.getElementById('pool-join-modal').classList.remove('hidden');
}

function closeJoinPoolModal() {
  document.getElementById('pool-join-modal').classList.add('hidden');
  activePoolRoomId = null;
}

function submitJoinPool(e) {
  e.preventDefault();
  const room = state.poolingRooms.find(r => r.id === activePoolRoomId);
  const pledge = parseFloat(document.getElementById('pool-pledge-qty').value) || 0;

  if (room && pledge > 0) {
    room.currentQuintals = Math.min(room.targetQuintals, room.currentQuintals + pledge);
    room.participatingFarmers += 1;
    room.contributors.push({ name: state.farmerKYC.name, qty: pledge });

    closeJoinPoolModal();
    renderPoolingRooms();
    playSuccessChime();
    showToast('Joined Collective Pool!', `Pledged ${pledge} Quintals at guaranteed rate of ₹${room.offeredPricePerQ}/q.`, 'success');
  }
}

// --- Mandi Price Tracker & Margin Analyzer (Chart.js) ---
let mandiChartInstance = null;
function renderMandiMarginChart() {
  const canvas = document.getElementById('mandi-comparison-chart');
  if (!canvas || !window.Chart) return;

  const crop = document.getElementById('chart-crop-select')?.value || 'onion';
  const dataMap = {
    onion: {
      mandiGross: 1200,
      cuts: { dalal: 120, mandiTax: 30, weighing: 40, distress: 150 },
      mandiNet: 860,
      kisanDirectNet: 2450
    },
    potato: {
      mandiGross: 900,
      cuts: { dalal: 90, mandiTax: 25, weighing: 35, distress: 100 },
      mandiNet: 650,
      kisanDirectNet: 1680
    },
    tomato: {
      mandiGross: 1100,
      cuts: { dalal: 110, mandiTax: 28, weighing: 45, distress: 200 },
      mandiNet: 717,
      kisanDirectNet: 1980
    }
  };

  const selected = dataMap[crop] || dataMap.onion;

  if (mandiChartInstance) {
    mandiChartInstance.destroy();
  }

  const ctx = canvas.getContext('2d');
  mandiChartInstance = new window.Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Mandi Net Realization', 'KisanDirect Direct Payout'],
      datasets: [{
        label: 'Farmer Realization (₹/Quintal)',
        data: [selected.mandiNet, selected.kisanDirectNet],
        backgroundColor: ['#EF4444', '#065F46'],
        borderRadius: 8,
        barPercentage: 0.55
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (context) => ` ₹${context.raw.toLocaleString('en-IN')} / Quintal`
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: (v) => '₹' + v
          }
        }
      }
    }
  });
}

// --- Logistics Hub Freight Calculator ---
function calculateFreightCost() {
  const distance = parseFloat(document.getElementById('freight-distance').value) || 50;
  const tonnage = parseFloat(document.getElementById('freight-tonnage').value) || 5;
  const vehicleRate = parseFloat(document.getElementById('freight-vehicle-type').value) || 16;

  const baseCost = distance * vehicleRate;
  const tempHandling = Math.round(baseCost * 0.12);
  const totalFreight = baseCost + tempHandling;

  document.getElementById('freight-result-total').textContent = `₹${totalFreight.toLocaleString('en-IN')}`;
  document.getElementById('freight-result-breakdown').textContent = `Base: ₹${baseCost} + Reefer Cooling: ₹${tempHandling}`;
}

// --- Notification Bell Toggle ---
function toggleNotifications() {
  const panel = document.getElementById('notifications-panel');
  if (panel) {
    panel.classList.toggle('hidden');
    if (!panel.classList.contains('hidden')) {
      playNotificationChime();
    }
  }
}

// Close notifications when clicking outside
document.addEventListener('click', (e) => {
  const panel = document.getElementById('notifications-panel');
  const btn = document.getElementById('notification-bell-btn');
  if (panel && !panel.classList.contains('hidden')) {
    if (!panel.contains(e.target) && !btn.contains(e.target)) {
      panel.classList.add('hidden');
    }
  }
});

// --- Audio Mute Toggle ---
function toggleSound() {
  state.soundEnabled = !state.soundEnabled;
  const btn = document.getElementById('sound-toggle-btn');
  if (btn) {
    btn.innerHTML = state.soundEnabled ? '🔊 Sound On' : '🔇 Muted';
    btn.classList.toggle('text-emerald-700', state.soundEnabled);
    btn.classList.toggle('text-slate-400', !state.soundEnabled);
  }
}

// --- Initialize Everything On Load ---
document.addEventListener('DOMContentLoaded', () => {
  // Render sub-components
  renderFarmerListingsTable();
  renderBidsBoard();
  renderEscrowDashboard();
  renderMarketplaceCards();
  renderPoolingRooms();
  updateCalculator();
  onCropSelectionChange();

  // Setup lucide icons if library available
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Setup calculator listeners
  const cropSelect = document.getElementById('calc-crop-select');
  const volumeSlider = document.getElementById('calc-volume-slider');
  if (cropSelect) cropSelect.addEventListener('change', updateCalculator);
  if (volumeSlider) volumeSlider.addEventListener('input', updateCalculator);

  // Setup Produce form listeners
  const listCropSelect = document.getElementById('list-crop-name');
  if (listCropSelect) listCropSelect.addEventListener('change', onCropSelectionChange);

  const produceForm = document.getElementById('produce-listing-form');
  if (produceForm) produceForm.addEventListener('submit', handlePublishListing);

  // Setup Bid listeners
  const bidQty = document.getElementById('bid-input-qty');
  const bidPrice = document.getElementById('bid-input-price');
  if (bidQty) bidQty.addEventListener('input', updateBidModalCalculations);
  if (bidPrice) bidPrice.addEventListener('input', updateBidModalCalculations);

  const bidForm = document.getElementById('bulk-bid-form');
  if (bidForm) bidForm.addEventListener('submit', submitBulkBid);

  // Setup Counter offer form
  const counterForm = document.getElementById('counter-offer-form');
  if (counterForm) counterForm.addEventListener('submit', submitCounterOffer);

  // Setup KYC form
  const kycForm = document.getElementById('farmer-kyc-form');
  if (kycForm) kycForm.addEventListener('submit', handleKycSubmit);

  // Setup Pool pledge form
  const poolForm = document.getElementById('pool-pledge-form');
  if (poolForm) poolForm.addEventListener('submit', submitJoinPool);

  // Setup marketplace filter listeners
  const marketSearch = document.getElementById('market-search-input');
  const marketRadius = document.getElementById('market-radius-filter');
  const marketCategory = document.getElementById('market-category-filter');
  if (marketSearch) marketSearch.addEventListener('input', renderMarketplaceCards);
  if (marketRadius) marketRadius.addEventListener('change', renderMarketplaceCards);
  if (marketCategory) marketCategory.addEventListener('change', renderMarketplaceCards);

  // Setup Freight cost inputs
  const fDist = document.getElementById('freight-distance');
  const fTon = document.getElementById('freight-tonnage');
  const fType = document.getElementById('freight-vehicle-type');
  if (fDist) fDist.addEventListener('input', calculateFreightCost);
  if (fTon) fTon.addEventListener('input', calculateFreightCost);
  if (fType) fType.addEventListener('change', calculateFreightCost);

  // Welcome toast
  setTimeout(() => {
    showToast('Welcome to KisanDirect', 'Empowering Indian farmers with 0% middleman direct commerce.', 'success');
  }, 800);
});
