import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ItineraryForm.css';

const translations = {
  english: {
    title: "Create Your Itinerary",
    destination: "Destination",
    startDate: "Start Date",
    endDate: "End Date",
    travelType: "Travel Type",
    numberOfTravelers: "Number of Travelers",
    interests: "Interests",
    budget: "Budget (₹)",
    preferredLanguage: "Preferred Language",
    generateButton: "Generate Itinerary",
    generatingButton: "Generating Itinerary...",
    resultTitle: "Your Generated Itinerary",
    solo: "Solo",
    couple: "Couple",
    family: "Family",
    group: "Group",
    culture: "Culture",
    food: "Food",
    nature: "Nature",
    adventure: "Adventure",
    shopping: "Shopping",
    enterBudget: "Enter your budget",
    required: "Required",
    endDateError: "End date must be after start date"
  },
  hindi: {
    title: "अपनी यात्रा योजना बनाएं",
    destination: "गंतव्य",
    startDate: "प्रारंभ तिथि",
    endDate: "समाप्ति तिथि",
    travelType: "यात्रा का प्रकार",
    numberOfTravelers: "यात्रियों की संख्या",
    interests: "रुचियां",
    budget: "बजट (₹)",
    preferredLanguage: "पसंदीदा भाषा",
    generateButton: "यात्रा योजना बनाएं",
    generatingButton: "यात्रा योजना बन रही है...",
    resultTitle: "आपकी यात्रा योजना",
    solo: "अकेले",
    couple: "जोड़े",
    family: "परिवार",
    group: "समूह",
    culture: "संस्कृति",
    food: "भोजन",
    nature: "प्रकृति",
    adventure: "साहसिक",
    shopping: "खरीदारी",
    enterBudget: "अपना बजट दर्ज करें",
    required: "आवश्यक",
    endDateError: "समाप्ति तिथि प्रारंभ तिथि के बाद होनी चाहिए"
  },
  bengali: {
    title: "আপনার ভ্রমণ পরিকল্পনা তৈরি করুন",
    destination: "গন্তব্য",
    startDate: "শুরুর তারিখ",
    endDate: "শেষের তারিখ",
    travelType: "ভ্রমণের ধরন",
    numberOfTravelers: "ভ্রমণকারীর সংখ্যা",
    interests: "আগ্রহ",
    budget: "বাজেট (₹)",
    preferredLanguage: "পছন্দের ভাষা",
    generateButton: "পরিকল্পনা তৈরি করুন",
    generatingButton: "পরিকল্পনা তৈরি করা হচ্ছে...",
    resultTitle: "তমারী বনা঵েলী যজনা",
    solo: "একাকী",
    couple: "দম্পতি",
    family: "পরিবার",
    group: "দল",
    culture: "সংস্কৃতি",
    food: "খોরাক",
    nature: "প્রকૃতি",
    adventure: "সাহস",
    shopping: "শોপিং",
    enterBudget: "তমারো বজেট দাখল করো",
    required: "প্রয়োজনীয়",
    endDateError: "শেষের তারিখ শরਂআতু তারিখের পিছত হ'ব লাগে"
  },
  telugu: {
    title: "మీ ప్రయాణ ప్రణాళికను సృష్టించండి",
    destination: "గమ్యం",
    startDate: "ప్రారంభ తేదీ",
    endDate: "ముగింపు తేదీ",
    travelType: "ప్రయాణ రకం",
    numberOfTravelers: "ప్రయాణికుల సంఖ్య",
    interests: "ఆసక్తులు",
    budget: "బడ్జెట్ (₹)",
    preferredLanguage: "ఇష్టమైన భాష",
    generateButton: "ప్రణాళికను సృష్టించండి",
    generatingButton: "ప్రణాళిక సృష్టించబడుతೋంది...",
    resultTitle: "మీ సృష్టించిన ప్రణాళిక",
    solo: "ఒంటరిగా",
    couple: "జంట",
    family: "కుటుంబం",
    group: "సమూహం",
    culture: "సంస్కృతి",
    food: "ఆహారం",
    nature: "ప్రకృతి",
    adventure: "సాహస",
    shopping: "షాపింగ్",
    enterBudget: "మీ బడ్జెట్ నమೂదిసి",
    required: "అవసరం",
    endDateError: "ముగింపు తేదీ ప్రారంభ తేదీ తర్వాత ఉండాలి"
  },
  marathi: {
    title: "आपली प्रवास योजना तयार करा",
    destination: "गंतव्य",
    startDate: "प्रारंभ तारीख",
    endDate: "समाप्ती तारीख",
    travelType: "प्रवासाचा प्रकार",
    numberOfTravelers: "प्रवाशांची संख्या",
    interests: "आवडी",
    budget: "बजेट (₹)",
    preferredLanguage: "पसंतीची भाषा",
    generateButton: "योजना तयार करा",
    generatingButton: "योजना तयार केली जात आहे...",
    resultTitle: "आपली तयार केलेली योजना",
    solo: "एकटा",
    couple: "जोडपे",
    family: "कुटुंब",
    group: "गट",
    culture: "संस्कृती",
    food: "अन्न",
    nature: "निसर्ग",
    adventure: "साहस",
    shopping: "शॉपिंग",
    enterBudget: "आपला बजेट टाका",
    required: "आवश्यक",
    endDateError: "समाप्ती तारीख प्रारंभ तारीखेपेक्षा नंतर असणे आवश्यक आहे"
  },
  tamil: {
    title: "உங்கள் பயண திட்டத்தை உருவாக்கவும்",
    destination: "இடம்",
    startDate: "தொடக்க தேதி",
    endDate: "முடிவு தேதி",
    travelType: "பயண வகை",
    numberOfTravelers: "பயணிகளின் எண்ணிக்கை",
    interests: "ஆர்வங்கள்",
    budget: "பட்ஜெட் (₹)",
    preferredLanguage: "விருப்பமான மொழி",
    generateButton: "திட்டத்தை உருவாக்கவும்",
    generatingButton: "திட்டம் உருவாக்கப்படுகிறது...",
    resultTitle: "உங்கள் உருவாக்கிய திட்டம்",
    solo: "தனியாக",
    couple: "தம்பதிகள்",
    family: "குடும்பம்",
    group: "குழு",
    culture: "கலாச்சாரம்",
    food: "உணவு",
    nature: "இயற்கை",
    adventure: "ஸாகசம்",
    shopping: "கடைவீதி",
    enterBudget: "உங்கள் பட்ஜெட்டை உள்ளிடவும்",
    required: "தேவை",
    endDateError: "முடிவு தேதி தொடக்க தேதிக்குப் பிறகு இருக்க வேண்டும்"
  },
  urdu: {
    title: "اپنی سفر کی منصوبہ بندی بنائیں",
    destination: "منزل",
    startDate: "شروع کی تاریخ",
    endDate: "آخری تاریخ",
    travelType: "سفر کی قسم",
    numberOfTravelers: "مسافروں کی تعداد",
    interests: "دلچسپیاں",
    budget: "بجٹ (₹)",
    preferredLanguage: "ترجیحی زبان",
    generateButton: "منصوبہ بنائیں",
    generatingButton: "منصوبہ بنایا جا رہا ہے...",
    resultTitle: "آپ کا بنایا ہوا منصوبہ",
    solo: "اکیلا",
    couple: "جوڑا",
    family: "خاندان",
    group: "گروپ",
    culture: "ثقافت",
    food: "کھانا",
    nature: "فطرت",
    adventure: "مہم جوئی",
    shopping: "خریداری",
    enterBudget: "اپنا بجٹ درج کریں",
    required: "ضروری",
    endDateError: "آخری تاریخ شروع کی تاریخ کے بعد ہونی چاہیے"
  },
  gujarati: {
    title: "તમારી મુસાફરીની યોજના બનાવો",
    destination: "ગંતવ્ય",
    startDate: "શુરੂઆતની તારીખ",
    endDate: "સમાપ્તિની તારીખ",
    travelType: "મુસાફરીનો પ્રકાર",
    numberOfTravelers: "મુસાફરોની સંખ્યા",
    interests: "રુચિઓ",
    budget: "બજેટ (₹)",
    preferredLanguage: "પસંદગીની ભાષા",
    generateButton: "યોજના બનાવો",
    generatingButton: "યોજના બનાવી રહ્યા છીએ...",
    resultTitle: "તમારી બનાવેલી યોજના",
    solo: "એકલા",
    couple: "જોડી",
    family: "પરિવાર",
    group: "જૂથ",
    culture: "સંસ્કૃતિ",
    food: "ખોરાક",
    nature: "પ્રકૃતિ",
    adventure: "સાહસ",
    shopping: "શોપિંગ",
    enterBudget: "તમારો બજેટ દાખલ કરો",
    required: "જરૂરી",
    endDateError: "સમાપ્તિની તારીખ શુરੂઆતની તારીખ પછી હોવી જોઈએ"
  },
  kannada: {
    title: "ನಿಮ್ಮ ಪ్ರವಾಸ ಯೋಜನೆಯನ್ನು ರಚಿಸಿ",
    destination: "ಗಮ್ಯಸ್ಥಾನ",
    startDate: "ಆರಂಭ ದಿನಾಂಕ",
    endDate: "ಅಂತಿಮ ದಿನಾಂಕ",
    travelType: "ಪ్ರವಾಸದ ವಿಧ",
    numberOfTravelers: "ಪ్ರವಾಸಿಗರ ಸಂಖ್ಯೆ",
    interests: "ಆಸಕ್ತಿಗಳು",
    budget: "ಬಜೆಟ್ (₹)",
    preferredLanguage: "ಆದ್ಯತೆಯ ಭಾಷೆ",
    generateButton: "ಯೋಜನೆ ರಚಿಸಿ",
    generatingButton: "ಯೋಜನೆ ರಚಿಸಲಾಗುತ್ತಿದೆ...",
    resultTitle: "ನಿಮ್ಮ ರಚಿಸಿದ ಯೋಜನೆ",
    solo: "ಏಕಾಂಗಿ",
    couple: "ಜೋಡಿ",
    family: "ಕುಟುಂಬ",
    group: "ಗುಂಪು",
    culture: "ಸಂಸ್ಕೃತಿ",
    food: "ಆಹಾರ",
    nature: "ಪ್ರಕೃತಿ",
    adventure: "ಸಾಹಸ",
    shopping: "ಶಾಪಿಂಗ್",
    enterBudget: "ನಿಮ್ಮ ಬಜೆಟ್ ನಮೂದಿಸಿ",
    required: "ಅಗತ್ಯ",
    endDateError: "ಅಂತಿಮ ದಿನಾಂಕ ಆರಂಭ ದಿನಾಂಕದ ನಂತರ ಇರಬೇಕು"
  },
  odia: {
    title: "ଆପଣଙ୍କର ଭ୍ରমণ ଯୋଜନା ତିଆରି କରନ୍ତୁ",
    destination: "ଗନ୍ତବ୍ୟ",
    startDate: "ଆରମ୍ଭ ତାରିଖ",
    endDate: "ଶେଷ ତାରିଖ",
    travelType: "ଭ୍ରমণ ପ୍ରକାର",
    numberOfTravelers: "ଭ୍ରমণକାରୀଙ୍କ ସଂଖ୍ୟା",
    interests: "ଆଗ୍ରହ",
    budget: "ବଜେଟ୍ (₹)",
    preferredLanguage: "ପସନ୍ଦର ଭାଷା",
    generateButton: "ଯୋଜନା ତିଆରି କରନ୍ତୁ",
    generatingButton: "ଯୋଜନା ତିଆରି କରାଯାଉଛି...",
    resultTitle: "ଆପଣଙ୍କର ତିଆରି କରାଯାଇଥିବା ଯୋଜନା",
    solo: "ଏକାକୀ",
    couple: "ଯୋଡ଼ି",
    family: "ପରିବାର",
    group: "ଦଳ",
    culture: "ସଂସ୍କୃତି",
    food: "ଖାଦ୍ୟ",
    nature: "ପ୍ରକୃତି",
    adventure: "ସାହସ",
    shopping: "ସପିଂ",
    enterBudget: "ଆପଣଙ୍କର ବଜେଟ୍ ଲେଖନ୍ତୁ",
    required: "ଆବଶ୍ୟକ",
    endDateError: "ଶେଷ ତାରିଖ ଆରମ୍ଭ ତାରିଖ ପରେ ହେବା ଉଚିତ"
  },
  malayalam: {
    title: "നിങ്ങളുടെ യാത്രാ പദ്ധതി സൃഷ്ടിക്കുക",
    destination: "ലക്ഷ്യസ്ഥാനം",
    startDate: "ആരംഭ തീയതി",
    endDate: "അവസാന തീയതി",
    travelType: "യാത്രയുടെ തരം",
    numberOfTravelers: "യാത്രക്കാരുടെ എണ്ണം",
    interests: "താല്പര്യങ്ങൾ",
    budget: "ബജറ്റ് (₹)",
    preferredLanguage: "ഇഷ്ടപ്പെട്ട ഭാഷ",
    generateButton: "പദ്ധതി സൃഷ്ടിക്കുക",
    generatingButton: "പദ്ധതി സൃഷ്ടിക്കുന്നു...",
    resultTitle: "നിങ്ങളുടെ സൃഷ്ടിച്ച പദ്ധതി",
    solo: "ഒറ്റയ്ക്ക്",
    couple: "ജോഡി",
    family: "കുടുംബം",
    group: "ഗ്രൂപ്പ്",
    culture: "സംസ്കാരം",
    food: "ഭക്ഷണം",
    nature: "പ്രകൃതി",
    adventure: "സാഹസം",
    shopping: "ഷോപ്പിംഗ്",
    enterBudget: "നിങ്ങളുടെ ബജറ്റ് നൽകുക",
    required: "ആവശ്യമാണ്",
    endDateError: "അവസാന തീയതി ആരംഭ തീയതിക്ക് ശേഷം ആയിരിക്കണം"
  },
  punjabi: {
    title: "ਆਪਣੀ ਯਾਤਰਾ ਯੋਜਨਾ ਬਣਾਓ",
    destination: "ਮੰਜ਼ਿਲ",
    startDate: "ਸ਼ੁਰੂਆਤੀ ਤਾਰੀਖ",
    endDate: "ਅੰਤਮ ਤਾਰੀਖ",
    travelType: "ਯਾਤਰਾ ਦੀ ਕਿਸਮ",
    numberOfTravelers: "ਯਾਤਰੀਆਂ ਦੀ ਗਿਣਤੀ",
    interests: "ਰੁਚੀਆਂ",
    budget: "ਬਜਟ (₹)",
    preferredLanguage: "ਪਸੰਦੀਦਾ ਭਾਸ਼ਾ",
    generateButton: "ਯੋਜਨਾ ਬਣਾਓ",
    generatingButton: "ਯੋਜਨਾ ਬਣਾਈ ਜਾ ਰਹੀ ਹੈ...",
    resultTitle: "ਤੁਹਾਡੀ ਬਣਾਈ ਯੋਜਨਾ",
    solo: "ਇਕੱਲੇ",
    couple: "ਜੋੜਾ",
    family: "ਪਰਿਵਾਰ",
    group: "ਗਰੁੱਪ",
    culture: "ਸਭਿਆਚਾਰ",
    food: "ਭੋਜਨ",
    nature: "ਕੁਦਰਤ",
    adventure: "ਸਾਹਸ",
    shopping: "ਸ਼ਾਪਿੰਗ",
    enterBudget: "ਆਪਣਾ ਬਜਟ ਦਰਜ ਕਰੋ",
    required: "ਲੋੜੀਂਦਾ",
    endDateError: "ਅੰਤਮ ਤਾਰੀਖ ਸ਼ੁਰੂਆਤੀ ਤਾਰੀਖ ਤੋਂ ਬਾਅਦ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ"
  },
  sanskrit: {
    title: "भवतः यात्रायोजनां सृजतु",
    destination: "गन्तव्यम्",
    startDate: "आरम्भदिनाङ्कः",
    endDate: "अन्तिमदिनाङ्कः",
    travelType: "यात्राप्रकारः",
    numberOfTravelers: "यात्रिणां संख्या",
    interests: "रुचयः",
    budget: "व्ययः (₹)",
    preferredLanguage: "पसन्दीदाभाषा",
    generateButton: "योजनां सृजतु",
    generatingButton: "योजना सृज्यते...",
    resultTitle: "भवतः सृजिता योजना",
    solo: "एकाकी",
    couple: "दम्पती",
    family: "परिवारः",
    group: "समूहः",
    culture: "संस्कृतिः",
    food: "भोजनम्",
    nature: "प्रकृतिः",
    adventure: "साहसम्",
    shopping: "क्रयविक्रयम्",
    enterBudget: "भवतः व्ययं प्रविशतु",
    required: "आवश्यकम्",
    endDateError: "अन्तिमदिनाङ्कः आरम्भदिनाङ्कात् परं भवितव्यम्"
  },
  assamese: {
    title: "আপোনাৰ ভ্ৰমণ পৰিকল্পনা সৃষ্টি কৰক",
    destination: "গন্তব্য",
    startDate: "আৰম্ভণি তাৰিখ",
    endDate: "শেষ তাৰিখ",
    travelType: "ভ্ৰমণৰ প্ৰকাৰ",
    numberOfTravelers: "ভ্ৰমণকাৰীৰ সংখ্যা",
    interests: "আগ্ৰহ",
    budget: "বাজেট (₹)",
    preferredLanguage: "পছন্দৰ ভাষা",
    generateButton: "পৰিকল্পনা সৃষ্টি কৰক",
    generatingButton: "পৰিকল্পনা সৃষ্টি কৰা হৈছে...",
    resultTitle: "আপোনাৰ সৃষ্টি কৰা পৰিকল্পনা",
    solo: "একক",
    couple: "দম্পতি",
    family: "পৰিয়াল",
    group: "দল",
    culture: "সংস্কৃতি",
    food: "খাদ্য",
    nature: "প্ৰকৃতি",
    adventure: "সাহসিক",
    shopping: "ক্ৰয়-বিক্ৰয়",
    enterBudget: "আপোনাৰ বাজেট লিখক",
    required: "প্ৰয়োজনীয়",
    endDateError: "শেষ তাৰিখ আৰম্ভণি তাৰিখৰ পিছত হ'ব লাগে"
  },
  maithili: {
    title: "अहाँक यात्रा योजना बनाउ",
    destination: "गन्तव्य",
    startDate: "शुरू तिथि",
    endDate: "अन्तिम तिथि",
    travelType: "यात्रा प्रकार",
    numberOfTravelers: "यात्री संख्या",
    interests: "रुचि",
    budget: "बजेट (₹)",
    preferredLanguage: "पसन्द भाषा",
    generateButton: "योजना बनाउ",
    generatingButton: "योजना बनाएल जाइत अछि...",
    resultTitle: "अहाँक बनाएल योजना",
    solo: "एकला",
    couple: "जोड़ी",
    family: "परिवार",
    group: "समूह",
    culture: "संस्कृति",
    food: "खाना",
    nature: "प्रकृति",
    adventure: "साहस",
    shopping: "खरीदारी",
    enterBudget: "अहाँक बजेट भरू",
    required: "जरूरी",
    endDateError: "अन्तिम तिथि शुरू तिथि सँ पछा होनाइ चाही"
  },
  santali: {
    title: "ᱟᱢᱟᱜ ᱥᱟᱸᱜᱷᱟᱨ ᱥᱩᱵᱤᱫᱷᱟ ᱵᱮᱱᱟᱣ ᱢᱮ",
    destination: "ᱜᱚᱱᱛᱚᱵᱽ",
    startDate: "ᱮᱛᱚᱦᱚᱵ ᱢᱟᱦᱟᱸ",
    endDate: "ᱢᱩᱪᱟᱹᱫ ᱢᱟᱦᱟᱸ",
    travelType: "ᱥᱟᱸᱜᱷᱟᱨ ᱞᱮᱠᱟᱱ",
    numberOfTravelers: "ᱥᱟᱸᱜᱷᱟᱨᱤᱭᱟᱹ ᱮᱞ",
    interests: "ᱵᱟᱛᱟᱣ",
    budget: "ᱵᱟᱡᱮᱴ (₹)",
    preferredLanguage: "ᱯᱨᱤᱭ ᱯᱟᱹᱨᱥᱤ",
    generateButton: "ᱥᱩᱵᱤᱫᱷᱟ ᱵᱮᱱᱟᱣ ᱢᱮ",
    generatingButton: "ᱥᱩᱵᱤᱫᱷᱟ ᱵᱮᱱᱟᱣᱚᱜ ᱠᱟᱱᱟ...",
    resultTitle: "ᱟᱢᱟᱜ ᱵᱮᱱᱟᱣ ᱥᱩᱵᱤᱫᱷᱟ",
    solo: "ᱮᱠᱟᱞ",
    couple: "ᱡᱩᱨᱤ",
    family: "ᱜᱷᱟᱨᱚᱸᱡᱽ",
    group: "ᱜᱩᱴ",
    culture: "ᱞᱟᱠᱪᱟᱨ",
    food: "ᱡᱚᱢᱟᱜ",
    nature: "ᱫᱷᱟᱹᱨᱛᱤ",
    adventure: "ᱥᱟᱦᱟᱥ",
    shopping: "ᱠᱤᱱᱤᱢ",
    enterBudget: "ᱟᱢᱟᱜ ᱵᱟᱡᱮᱴ ᱟᱫᱮᱨ ᱢᱮ",
    required: "ᱞᱟᱹᱠᱛᱤ",
    endDateError: "ᱢᱩᱪᱟᱹᱫ ᱢᱟᱦᱟᱸ ᱮᱛᱚᱦᱚᱵ ᱢᱟᱦᱟᱸ ᱛᱟᱭᱚᱢ ᱦᱩᱭᱩᱜ ᱠᱟᱱᱟ"
  },
  kashmiri: {
    title: "تہٕند سفر پلان بنیو",
    destination: "منزل",
    startDate: "شروعاتی تاریخ",
    endDate: "آخری تاریخ",
    travelType: "سفر قسم",
    numberOfTravelers: "مسافرن ہند گنتی",
    interests: "دلچسپیاں",
    budget: "بجٹ (₹)",
    preferredLanguage: "پسندیدہ زبان",
    generateButton: "پلان بنیو",
    generatingButton: "پلان بنیو پۄتھ رہے...",
    resultTitle: "تہٕند بنیو پلان",
    solo: "اکیلا",
    couple: "جوڑا",
    family: "خاندان",
    group: "گروپ",
    culture: "ثقافت",
    food: "خوراک",
    nature: "فطرت",
    adventure: "مہم جوئی",
    shopping: "خریداری",
    enterBudget: "تہٕند بجٹ درج کرو",
    required: "ضروری",
    endDateError: "آخری تاریخ شروعاتی تاریخ پتہٕ ہونی چاہیدہ"
  },
  nepali: {
    title: "आफ्नो यात्रा योजना सिर्जना गर्नुहोस्",
    destination: "गन्तव्य",
    startDate: "सुरु मिति",
    endDate: "अन्तिम मिति",
    travelType: "यात्रा प्रकार",
    numberOfTravelers: "यात्रीहरूको संख्या",
    interests: "रुचिहरू",
    budget: "बजेट (₹)",
    preferredLanguage: "मनपर्ने भाषा",
    generateButton: "योजना सिर्जना गर्नुहोस्",
    generatingButton: "योजना सिर्जना गरिँदैछ...",
    resultTitle: "आफ्नो सिर्जना गरिएको योजना",
    solo: "एक्लै",
    couple: "जोडी",
    family: "परिवार",
    group: "समूह",
    culture: "संस्कृति",
    food: "खाना",
    nature: "प्रकृति",
    adventure: "साहस",
    shopping: "किनमेल",
    enterBudget: "आफ्नो बजेट लेख्नुहोस्",
    required: "आवश्यक",
    endDateError: "अन्तिम मिति सुरु मिति पछि हुनुपर्छ"
  },
  sindhi: {
    title: "پنهنجي سفر جو منصوبو ٺاهيو",
    destination: "منزل",
    startDate: "شروعاتي تاريخ",
    endDate: "آخري تاريخ",
    travelType: "سفر جو قسم",
    numberOfTravelers: "مسافري جو تعداد",
    interests: "دلچسپيون",
    budget: "بجٽ (₹)",
    preferredLanguage: "پسنديده ٻولي",
    generateButton: "منصوبو ٺاهيو",
    generatingButton: "منصوبو ٺهي رهيو آهي...",
    resultTitle: "پنهنجو ٺاهيل منصوبو",
    solo: "اڪيلو",
    couple: "جوڙو",
    family: "خاندان",
    group: "گروپ",
    culture: "ثقافت",
    food: "کاڌو",
    nature: "فطرت",
    adventure: "مهامت",
    shopping: "خريداري",
    enterBudget: "پنهنجو بجٽ داخل ڪريو",
    required: "ضروري",
    endDateError: "آخري تاريخ شروعاتي تاريخ کان پوءِ هجڻ گهرجي"
  },
  dogri: {
    title: "अपनी यात्रा योजना बनाओ",
    destination: "गंतव्य",
    startDate: "शुरू तिथि",
    endDate: "अंतिम तिथि",
    travelType: "यात्रा प्रकार",
    numberOfTravelers: "यात्रियों की संख्या",
    interests: "रुचियां",
    budget: "बजट (₹)",
    preferredLanguage: "पसंदीदा भाषा",
    generateButton: "योजना बनाओ",
    generatingButton: "योजना बन रही है...",
    resultTitle: "आपकी बनाई योजना",
    solo: "अकेले",
    couple: "जोड़े",
    family: "परिवार",
    group: "समूह",
    culture: "संस्कृति",
    food: "भोजन",
    nature: "प्रकृति",
    adventure: "साहस",
    shopping: "खरीदारी",
    enterBudget: "अपना बजट दर्ज करें",
    required: "आवश्यक",
    endDateError: "अंतिम तिथि शुरू तिथि के बाद होनी चाहिए"
  },
  konkani: {
    title: "तुमची प्रवास योजना तयार करात",
    destination: "गंतव्य",
    startDate: "सुरवातीची तारीख",
    endDate: "अखेरची तारीख",
    travelType: "प्रवासाचो प्रकार",
    numberOfTravelers: "प्रवाशांची संख्या",
    interests: "आवडी",
    budget: "बजेट (₹)",
    preferredLanguage: "पसंतीची भास",
    generateButton: "योजना तयार करात",
    generatingButton: "योजना तयार जाता...",
    resultTitle: "तुमची तयार केल्ली योजना",
    solo: "एकटो",
    couple: "जोडी",
    family: "कुटुंब",
    group: "गट",
    culture: "संस्कृती",
    food: "जेवण",
    nature: "निसर्ग",
    adventure: "साहस",
    shopping: "खरेदी",
    enterBudget: "तुमचो बजेट भरात",
    required: "गरजेचें",
    endDateError: "अखेरची तारीख सुरवातीची तारीखे उपरांत जावंक जाय"
  },
  manipuri: {
    title: "নিংগৈদা লম্বীগীদমকী লৈরাকপা",
    destination: "লম্বীগীদম",
    startDate: "থোক্লবা তাংখাই",
    endDate: "মখোই তাংখাই",
    travelType: "লম্বীগীদম লै",
    numberOfTravelers: "লম্বীগীদম মেথৈবী",
    interests: "মমাং",
    budget: "বাজেট (₹)",
    preferredLanguage: "মমাং লোল",
    generateButton: "লৈরাকপা",
    generatingButton: "লৈরাকপা থোক্লবা...",
    resultTitle: "নিংগৈদা লৈরাকপা",
    solo: "মাপাল",
    couple: "মেথৈ",
    family: "ইমা-পা",
    group: "মেথৈ",
    culture: "সনামহী",
    food: "চা",
    nature: "সনাম",
    adventure: "সাহস",
    shopping: "লৈরাক",
    enterBudget: "নিংগৈদা বাজেট লৈ",
    required: "মখোই",
    endDateError: "মখोই তাংখাই থোক্লবা তাংখাইগী মখोঈ"
  },
  bodo: {
    title: "नोंथांनि सफारि योजना बानाय",
    destination: "गोनांथि",
    startDate: "सुरुबारि तारिख",
    endDate: "मोनसेबारि तारिख",
    travelType: "सफारिनि रोखोम",
    numberOfTravelers: "सफारि गिरिफ्राइनि सानखा",
    interests: "मोजां",
    budget: "बजेट (₹)",
    preferredLanguage: "मोजां खोन्दो",
    generateButton: "योजना बानाय",
    generatingButton: "योजना बानाय जागासिनो दं...",
    resultTitle: "नोंथांनि बानायजाखांनाय योजना",
    solo: "गोजोन",
    couple: "जोरा",
    family: "बार",
    group: "दल",
    culture: "सांस्कृतिक",
    food: "जाम",
    nature: "सोरखर",
    adventure: "साहस",
    shopping: "खरिद",
    enterBudget: "नोंथांनि बजेट लिर",
    required: "गोनां",
    endDateError: "मोनसेबारि तारिख सुरुबारि तारिखनिफ्राय मोनसेबा जागोन"
  },
  spanish: {
    title: "Crea tu Itinerario",
    destination: "Destino",
    startDate: "Fecha de Inicio",
    endDate: "Fecha de Fin",
    travelType: "Tipo de Viaje",
    numberOfTravelers: "Número de Viajeros",
    interests: "Intereses",
    budget: "Presupuesto (₹)",
    preferredLanguage: "Idioma Preferido",
    generateButton: "Generar Itinerario",
    generatingButton: "Generando Itinerario...",
    resultTitle: "Tu Itinerario Generado",
    solo: "Solo",
    couple: "Pareja",
    family: "Familia",
    group: "Grupo",
    culture: "Cultura",
    food: "Comida",
    nature: "Naturaleza",
    adventure: "Aventura",
    shopping: "Compras",
    enterBudget: "Ingresa tu presupuesto",
    required: "Requerido",
    endDateError: "La fecha de fin debe ser posterior a la fecha de inicio"
  }
};

const ItineraryForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    travelType: 'solo',
    numberOfTravelers: 1,
    interests: {
      culture: false,
      food: false,
      nature: false,
      adventure: false,
      shopping: false
    },
    budget: '',
    preferredLanguage: 'english'
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [itinerary, setItinerary] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState('english');

  const t = translations[currentLanguage];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.destination.trim()) {
      newErrors.destination = t.required;
    }
    if (!formData.startDate) {
      newErrors.startDate = t.required;
    }
    if (!formData.endDate) {
      newErrors.endDate = t.required;
    }
    if (formData.startDate && formData.endDate && new Date(formData.startDate) > new Date(formData.endDate)) {
      newErrors.endDate = t.endDateError;
    }
    if (!formData.budget.trim()) {
      newErrors.budget = t.required;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        interests: {
          ...prev.interests,
          [name]: checked
        }
      }));
    } else if (name === 'budget') {
      const numericValue = value.replace(/[^0-9]/g, '');
      const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      setFormData(prev => ({
        ...prev,
        [name]: formattedValue
      }));
    } else if (name === 'preferredLanguage') {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
      setCurrentLanguage(value);
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const formatInterests = () => {
    return Object.entries(formData.interests)
      .filter(([_, value]) => value)
      .map(([key]) => key)
      .join(', ');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        const selectedInterests = formatInterests();
        const numericBudget = formData.budget.replace(/,/g, '');
        const prompt = `Generate a detailed travel itinerary for:
          Destination: ${formData.destination}
          Dates: ${formData.startDate} to ${formData.endDate}
          Travel Type: ${formData.travelType}
          Number of Travelers: ${formData.numberOfTravelers}
          Interests: ${selectedInterests}
          Budget: ₹${numericBudget}
          Preferred Language: ${formData.preferredLanguage}
          
          Please provide a day-by-day itinerary with recommended activities, restaurants, and attractions that match the interests and budget. Include estimated costs and timing for each activity.`;

        const response = await fetch('http://localhost:3000/api/gemini/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messages: [{ role: 'user', content: prompt }]
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to generate itinerary');
        }

        if (!data.choices?.[0]?.message?.content) {
          throw new Error('Invalid response format from AI service');
        }

        const itineraryResponse = data.choices[0].message.content;

        if (!itineraryResponse.trim()) {
          throw new Error('Generated itinerary is empty');
        }

        setItinerary(itineraryResponse);
        onSubmit(itineraryResponse);
      } catch (error) {
        console.error('Error generating itinerary:', error.message || error);
        setErrors({ 
          submit: `Failed to generate itinerary: ${error.message}. Please try again.` 
        });
        setItinerary(null);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="itinerary-container">
      <form className="itinerary-form" onSubmit={handleSubmit}>
        <h2>{t.title}</h2>
        <div className="form-group">
          <label htmlFor="destination">{t.destination}</label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
          />
          {errors.destination && <span className="error">{errors.destination}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="startDate">{t.startDate}</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
          {errors.startDate && <span className="error">{errors.startDate}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="endDate">{t.endDate}</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
          {errors.endDate && <span className="error">{errors.endDate}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="travelType">{t.travelType}</label>
          <select
            id="travelType"
            name="travelType"
            value={formData.travelType}
            onChange={handleChange}
            required
          >
            <option value="solo">{t.solo}</option>
            <option value="couple">{t.couple}</option>
            <option value="family">{t.family}</option>
            <option value="group">{t.group}</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="numberOfTravelers">{t.numberOfTravelers}</label>
          <input
            type="number"
            id="numberOfTravelers"
            name="numberOfTravelers"
            min="1"
            value={formData.numberOfTravelers}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <fieldset>
            <legend>{t.interests}</legend>
            <div className="interests-checkboxes">
              {Object.entries(formData.interests).map(([interest, checked]) => (
                <div key={interest} className="interest-checkbox">
                  <input
                    type="checkbox"
                    id={`interest-${interest}`}
                    name={interest}
                    checked={checked}
                    onChange={handleChange}
                  />
                  <label htmlFor={`interest-${interest}`}>
                    {t[interest]}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
        <div className="form-group">
          <label htmlFor="budget">{t.budget}</label>
          <div className="budget-input-container">
            <span className="currency-symbol">₹</span>
            <input
              type="text"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder={t.enterBudget}
              required
            />
          </div>
          {errors.budget && <span className="error">{errors.budget}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="preferredLanguage">{t.preferredLanguage}</label>
          <select
            id="preferredLanguage"
            name="preferredLanguage"
            value={formData.preferredLanguage}
            onChange={handleChange}
            required
          >
            <option value="english">English</option>
            <option value="hindi">हिंदी (Hindi)</option>
            <option value="bengali">বাংলা (Bengali)</option>
            <option value="telugu">తెలుగు (Telugu)</option>
            <option value="marathi">मराठी (Marathi)</option>
            <option value="tamil">தமிழ் (Tamil)</option>
            <option value="urdu">اردو (Urdu)</option>
            <option value="gujarati">ગુજરાતી (Gujarati)</option>
            <option value="kannada">ಕನ್ನಡ (Kannada)</option>
            <option value="odia">ଓଡ଼ିଆ (Odia)</option>
            <option value="malayalam">മലയാളം (Malayalam)</option>
            <option value="punjabi">ਪੰਜਾਬੀ (Punjabi)</option>
            <option value="sanskrit">संस्कृतम् (Sanskrit)</option>
            <option value="assamese">অসমীয়া (Assamese)</option>
            <option value="maithili">मैथिली (Maithili)</option>
            <option value="santali">ᱥᱟᱱᱛᱟᱲᱤ (Santali)</option>
            <option value="kashmiri">کٲشُر (Kashmiri)</option>
            <option value="nepali">नेपाली (Nepali)</option>
            <option value="sindhi">سنڌي (Sindhi)</option>
            <option value="dogri">डोगरी (Dogri)</option>
            <option value="konkani">कोंकणी (Konkani)</option>
            <option value="manipuri">মৈতৈলোন্ (Manipuri)</option>
            <option value="bodo">बड़ो (Bodo)</option>
            <option value="spanish">Español (Spanish)</option>
          </select>
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? t.generatingButton : t.generateButton}
        </button>
        {errors.submit && <span className="error">{errors.submit}</span>}
      </form>

      {itinerary && (
        <div className="itinerary-result">
          <h3>{t.resultTitle}</h3>
          <div className="itinerary-content">
            {itinerary.split('\n').map((line, index) => (
              <p key={`itinerary-line-${index}-${line.substring(0, 20)}`}>{line}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

ItineraryForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default ItineraryForm; 