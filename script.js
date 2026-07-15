/* ==========================================
   WEDDING INVITATION - JavaScript
   Animations, Countdown, Interactions
   ========================================== */

// ===== FORCE START FROM TOP - IMMEDIATE =====
// Disable browser scroll restoration before anything else
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
// Immediate scroll to top (works even before DOM is ready)
window.scrollTo(0, 0);

// ===== TRANSLATIONS =====
const translations = {
    en: {
        ganesh_prayer: '॥ Om Sri Ganeshaya Namah ॥',
        ramanuja_prayer: '॥ Om Sri Hanumate Namah ॥',
        tagline: 'Are getting married',
        couple_title: 'The Couple',
        couple_subtitle: 'Two souls, one journey',
        
        groom_name: 'Venkata Abhilash Kumar',
        son_of: 'Son of',
        
        bride_name: 'Navya Sri Lalitha',
        daughter_of: 'Daughter of',
        details_title: 'Wedding Details',
        details_subtitle: 'Save the auspicious date',
        detail_date_title: 'Wedding Date',
        detail_date_text: 'August 16, 2026',
        detail_date_sub: 'Sunday Night (Aadivaaram)',
        detail_time_title: 'Muhurtham Time',
        detail_time_text: '11:30 PM – 1:15 AM',
        detail_time_sub: 'Hasta Nakshatra · Pushkara Kala 12:21 AM – 12:25 AM',
        detail_venue_title: 'Venue',
        detail_venue_text: 'Nedurumalli Subbiraami Reddy Kalaa Bhavan (NBKR) Kalyana Mandapam',
        detail_venue_sub: 'Vidyanagar, Nellore District',
        event1_name: 'Wedding Celebrations Begin',
        event2_name: 'Muhurtham & Main Ceremony',
        rituals_title: 'Sacred Rituals',
        rituals_subtitle: 'The divine ceremonies of our wedding',
        venue_title: 'Wedding Venue',
        venue_subtitle: 'We would be honoured by your presence',
        venue_name: 'Nedurumalli Subbiraami Reddy Kalaa Bhavan (NBKR) Kalyana Mandapam',
        venue_address: 'Vidyanagar, Kota Mandal, Nellore District, AP',
        venue_feat1: '🪔 Sacred Fire Altar',
        venue_feat2: '🌺 Flower Decorated',
        venue_feat3: '🎵 Nadaswaram',
        hero_date: 'August 16, 2026 | Sunday Night',
        hero_nakshatra: 'Shravana Maasam • Shukla Paksha Panchami • Aadivaaram',
        sumuhurtam_title: 'Sumuhurtam',
        sumuhurtam_text: 'Parabhava Nama Samvathsaram, Shravana Maasam, Shukla Paksha Panchami',
        sumuhurtam_time: '11:30 PM – 1:15 AM',
        sumuhurtam_nakshatra: 'Hasta Nakshatra • Vrushabha Lagna • Pushkara Kala 12:21 AM – 12:25 AM',
        rsvp_title: "Welcoming",

        rsvp_subtitle: "Kindly honour us with your gracious presence",

        rsvp_message:
        "Your presence is the greatest blessing for our new beginning. We humbly invite you and your family to grace this auspicious occasion with your presence and blessings.",

        vara_paksham: "Vara Pakshamu",
        kanya_paksham: "Kanya Pakshamu",

        groom_side: "(Groom's Side)",
        bride_side: "(Bride's Side)",

        grand_parents: "Grand Parents",
        sister: "Sister",
        brother_wife: "Brother & Wife",

        groom_grandfather: "Sri Yamana Rao",
        groom_grandmother: "Smt. Nagamani",

        groom_sister: "Chi. Rajeswari Medini",

        bride_grandfather: "Sri Sreehari",
        bride_grandmother: "Smt. Ramadevi",

        bride_brother: "Sri Ganesh",
        bride_sister_in_law: "Smt. Sivaani",

        blessing_translation: "May all beings be happy and prosperous",
        rsvp_contact_label: 'Kaarya Nirvahakulu (Grand Parents)',
        blessing_translation: 'May all beings be happy',
        visitor_label: 'Blessings Received',
        visitor_sublabel: 'Unique visitors who opened this invitation',
        footer_text: 'With Love & Blessings 🙏',
        nav_home: 'Home', nav_couple: 'Couple', nav_details: 'Details',
        nav_rituals: 'Rituals', nav_venue: 'Venue', nav_rsvp: 'RSVP',
        gotra_heading: "Sacred Lineage",
        groom_role: "The Groom",
        bride_role: "The Bride",

        groom_name: "Panganaamala Venkata Abhilash Kumar",
        bride_name: "Sola Navya Sri Lalitha",

        groom_gotra: "Kasyapasa Gotram",
        bride_gotra: "Bharadwajasa Gotram",

        son_of: "Son of",
        daughter_of: "Daughter of",

        groom_father: "Sri Panganaamala Venkata Sarath Kumar",
        groom_mother: "Smt. Swarna Lakshmi",
        groom_grandfather: "Sri Panganaamala Yamana Rao",
        groom_grandmother: "Smt. Nagamani",

        bride_father: "Dr. Sola Sushruth Kumar",
        bride_mother: "Smt. SriDevi",
        bride_grandfather: "Sri Sola Sreehari",
        bride_grandmother: "Smt. Ramadevi",
        gotra_subheading: "Ancestral Heritage",
        uncle_aunt: "Uncle & Aunt",
        younger_brother: "Brother",
        bride_second_brother: "Chi. Abhiram",

        groom_uncle: "Sri Panganaamala Kishore Kumar",
        groom_aunt: "Smt. Panganaamala Sravani Kumari",
        grand_son_of: "Grand Son of",
        grand_daughter_of: "Grand Daughter of",
        groom_rishi_name: "Kasyapa Prajapati",
        groom_gotra_label: "Groom's Gotram",
        groom_gotra_name: "Kasyapasa Gotram",
        universal_blessing: "॥ Sarve Janaah Sukhino Bhavantu ॥",

        bride_rishi_name: "Bharadwaja Maharshi",
        bride_gotra_label: "Bride's Gotram",
        bride_gotra_name: "Bharadwajasa Gotram",
        // 17 Rituals Translations (English)
        ritual_1_title: "Samaa Varthanamu",
        ritual_1_desc: "Samaa Varthanamu is a sacred purification ceremony performed before marriage. It signifies the completion of an important stage of life and prepares the groom spiritually, mentally, and physically for the responsibilities of married life. Through prayers, blessings, and traditional rituals, the individual seeks divine grace to begin the journey of family life with purity, discipline, and devotion.",
        ritual_2_title: "Kaasi Yaatra",
        ritual_2_desc: "In this symbolic ritual, the groom declares his intention to renounce worldly life and travel to Kashi in search of spiritual knowledge. The bride's father respectfully persuades him to embrace the path of family life instead, highlighting the importance of marriage, duty, and social responsibility.",
        ritual_3_title: "Vivaaha Deeksha Sweekaranam",
        ritual_3_desc: "The groom formally accepts the sacred vows of marriage and dedicates himself to the responsibilities of married life. This ritual represents commitment, discipline, and readiness to establish a harmonious household.",
        ritual_4_title: "Yagnopaveetha Dhaaranam",
        ritual_4_desc: "The sacred thread is ceremonially renewed, symbolizing spiritual awareness, purity, and preparedness to perform the sacred duties associated with marriage and family life.",
        ritual_5_title: "Gruhasthaasrama Pramaanam Sweekaranam",
        ritual_5_desc: "The groom formally accepts the responsibilities of Gruhastha Ashrama, the householder stage of life. This includes caring for family, serving society, practicing dharma, and maintaining spiritual values while fulfilling worldly duties.",
        ritual_6_title: "Kanya Varanam",
        ritual_6_desc: "The groom respectfully seeks the bride's hand in marriage, expressing acceptance, consent, and mutual willingness to enter into a sacred lifelong partnership.",
        ritual_7_title: "Vara Pooja",
        ritual_7_desc: "The bride's family welcomes and honors the groom as a representative of Lord Vishnu. This ritual expresses gratitude, respect, and reverence before the commencement of the wedding ceremony.",
        ritual_8_title: "Kaallu Kaduguta",
        ritual_8_desc: "The bride's parents ceremonially wash the groom's feet as a mark of humility, respect, and hospitality. It symbolizes welcoming him into the family with affection and honor.",
        ritual_9_title: "Kanyadhaanam",
        ritual_9_desc: "One of the most sacred moments of the wedding. The bride's parents lovingly entrust their daughter to the groom, seeking divine blessings for her happiness, protection, and prosperity throughout married life.",
        ritual_10_title: "Madhuparkam",
        ritual_10_desc: "The groom is offered a traditional mixture of honey, milk, and curd, symbolizing sweetness, harmony, nourishment, and prosperity in the life that the couple is about to begin together.",
        ritual_11_title: "Maangalya Dhaaranam",
        ritual_11_desc: "The groom ties the sacred Mangalsutra around the bride's neck, symbolizing an eternal marital bond, mutual commitment, protection, love, and companionship.",
        ritual_12_title: "Akshathaaropanamu",
        ritual_12_desc: "Family members shower the couple with blessed rice grains mixed with turmeric, invoking divine blessings for prosperity, fertility, happiness, abundance, and success.",
        ritual_13_title: "Brahmamudi",
        ritual_13_desc: "The garments of the bride and groom are tied together with a sacred knot, symbolizing the union of two souls, two families, and two life journeys into one shared destiny.",
        ritual_14_title: "Homamu",
        ritual_14_desc: "Offerings are made into the sacred fire while Vedic mantras are chanted. Agni, the divine fire, serves as the witness to the marriage and carries the couple's prayers to the gods.",
        ritual_15_title: "Paani Grahanamu",
        ritual_15_desc: "The groom takes the bride's hand in his own, promising protection, companionship, mutual respect, and support throughout every stage of life.",
        ritual_16_title: "Saptapadhi",
        ritual_16_desc: "The bride and groom take seven sacred steps together around the holy fire. Each step represents a vow concerning nourishment, strength, prosperity, family, wellbeing, harmony, friendship, and lifelong companionship.",
        ritual_17_title: "Nakshatra Darshanam",
        ritual_17_desc: "The newly married couple views the sacred Arundhati and Vasishta stars, symbolizing unwavering devotion, mutual respect, fidelity, and an ideal married life."
    },
    te: {
        ganesh_prayer: '॥ ఓం శ్రీ గణేశాయ నమః ॥',
        ramanuja_prayer: '॥ ఓం శ్రీ హనుమతే నమః ॥',
        tagline: 'వివాహ వేడుక',
        couple_title: 'వధూవరులు',
        couple_subtitle: 'రెండు ఆత్మలు, ఒక ప్రయాణం',
        
        groom_name: 'పంగనామల వెంకట అభిలాష్ కుమార్',
        son_of: 'తల్లిదండ్రులు',
        groom_role: "వరుడు",
        bride_role: "వధువు",
        grand_son_of: "తాతయ్య & నానమ్మ",
        grand_daughter_of: "తాతయ్య & నానమ్మ",

        groom_name: "పంగనామల వెంకట అభిలాష్ కుమార్",
        bride_name: "సోలా నవ్య శ్రీ లలిత",
        groom_grandfather: "శ్రీ పంగనామల యమానారావు",
        groom_grandmother: "శ్రీమతి నాగమణి",

        bride_grandfather: "శ్రీ సోలా శ్రీహరి",
        bride_grandmother: "శ్రీమతి రమాదేవి",
        uncle_aunt: "బాబాయి & పిన్ని",

        groom_uncle: "శ్రీ పంగనామాల కిషోర్ కుమార్",
        groom_aunt: "శ్రీమతి శ్రావణి కుమారి",
        groom_gotra: "కశ్యప గోత్రం",
        bride_gotra: "భరద్వాజ గోత్రం",

        daughter_of: "తల్లిదండ్రులు",

        groom_father: "శ్రీ పంగనామల వెంకట శరత్ కుమార్",
        groom_mother: "శ్రీమతి స్వర్ణ లక్ష్మి",

        bride_father: "డాక్టర్ సోలా సుశ్రుత్ కుమార్",
        bride_mother: "శ్రీమతి శ్రీదేవి",
        bride_name: 'సోలా నవ్య శ్రీ లలిత',
        details_title: 'వివాహ వివరాలు',
        details_subtitle: 'శుభ ముహూర్తం గుర్తుంచుకోండి',
        detail_date_title: 'వివాహ తేదీ',
        detail_date_text: 'ఆగష్టు 16, 2026',
        detail_date_sub: 'ఆదివారం రాత్రి',
        detail_time_title: 'ముహూర్తం సమయం',
        detail_time_text: 'రాత్రి 11:30 – 1:15',
        detail_time_sub: 'హస్తా నక్షత్రం · పుష్కర కాలం 12:21 – 12:25',
        detail_venue_title: 'వేదిక',
        detail_venue_text: 'నేదురుమల్లి సుబ్బిరామి రెడ్డి కళా భవన్ (NBKR) కళ్యాణ మండపం',
        detail_venue_sub: 'విద్యానగర్, నెల్లూరు జిల్లా',
        event1_name: 'వివాహ వేడుకలు ప్రారంభం',
        gotra_heading: "పవిత్ర వంశ పరంపర",
        gotra_subheading: "ఋషుల వంశ వారసత్వం",

        groom_rishi_name: "కశ్యప ప్రజాపతి",
        groom_gotra_label: "వరుని గోత్రం",
        groom_gotra_name: "కాశ్యపస గోత్రం",

        bride_rishi_name: "భరద్వాజ మహర్షి",
        bride_gotra_label: "వధువు గోత్రం",
        bride_gotra_name: "భరద్వాజస గోత్రం",
        event2_name: 'ముహూర్తం & ప్రధాన వేడుక',
        rituals_title: 'పవిత్ర ఆచారాలు',
        rituals_subtitle: 'మా వివాహంలోని దివ్య కార్యక్రమాలు',
        venue_title: 'వివాహ మండపం',
        venue_subtitle: 'మీ దివ్య సమక్షంతో మమ్మల్ని ఆశీర్వదించండి',
        venue_name: 'నేదురుమల్లి సుబ్బిరామి రెడ్డి కళా భవన్ (NBKR) కళ్యాణ మండపం',
        venue_address: 'విద్యానగర్, కోట మండలం, నెల్లూరు జిల్లా',
        venue_feat1: '🪔 పవిత్ర అగ్ని వేదిక',
        venue_feat2: '🌺 పుష్ప అలంకారం',
        venue_feat3: '🎵 నాదస్వరం',
        hero_date: 'ఆగష్టు 16, 2026 | ఆదివారం రాత్రి',
        hero_nakshatra: 'శ్రావణ మాసం • శుద్ధ పంచమి • ఆదివారం',
        sumuhurtam_title: 'సుముహూర్తం',
        universal_blessing: "॥ సర్వే జనాః సుఖినో భవంతు ॥",

        sumuhurtam_text: 'పరాభవ నామ సంవత్సరం, శ్రావణ మాసం, శుద్ధ పంచమి',
        sumuhurtam_time: 'రాత్రి 11:30 – 1:15',
        sumuhurtam_nakshatra: 'హస్తా నక్షత్రం • వృషభ లగ్నం • పుష్కర కాలం 12:21 – 12:25',
        rsvp_title: "ఆహ్వానం",

        rsvp_subtitle: "మీ సాన్నిధ్యంతో మా శుభకార్యాన్ని విజయవంతం చేయండి",

        rsvp_message:
        "మా జీవితంలోని ఈ పవిత్రమైన కొత్త అధ్యాయానికి మీ ఆశీర్వాదాలు అత్యంత విలువైనవి. మీ కుటుంబ సమేతంగా విచ్చేసి మమ్మల్ని ఆశీర్వదించవలసిందిగా మనఃపూర్వకంగా ఆహ్వానిస్తున్నాము.",

        vara_paksham: "వర పక్షము",
        kanya_paksham: "కన్యా పక్షము",

        groom_side: "(వరుని కుటుంబం)",
        bride_side: "(వధువు కుటుంబం)",

        grand_parents: "తాతయ్య & నానమ్మ",
        sister: "సోదరి",
        brother_wife: "సోదరుడు & వదిన",

        groom_grandfather: "శ్రీ పంగనామల యమానారావు",
        groom_grandmother: "శ్రీమతి నాగమణి",

        groom_sister: "చి. రాజేశ్వరి మేధిని",        

        bride_grandfather: "శ్రీ సోలా శ్రీహరి",
        bride_grandmother: "శ్రీమతి రమాదేవి",

        bride_brother: "శ్రీ సోలా గణేష్",
        bride_sister_in_law: "శ్రీమతి సోలా శివాని",

        younger_brother: "సోదరుడు",

        bride_second_brother: "చి. అభిరామ్",

        blessing_translation: "సమస్త ప్రజలు సుఖసంతోషాలతో ఉండుగాక",
        blessing_translation: 'అందరికీ సుఖము కలుగు గాక',
        visitor_label: 'ఆశీర్వాదాలు అందాయి',
        visitor_sublabel: 'మంది ఈ ఆహ్వాన పత్రికను తెరిచి ఆశీర్వదించారు',
        footer_text: 'ప్రేమతో & ఆశీర్వాదాలతో 🙏',
        nav_home: 'గ్రుహమ్', nav_couple: 'వధూవరులు', nav_details: 'వివరాలు',
        nav_rituals: 'ఆచారాలు', nav_venue: 'మండపం', nav_rsvp: 'ఆహ్వానం',

        // 17 Rituals Translations (Telugu)
        ritual_1_title: "సమావర్తనము",
        ritual_1_desc: "సమావర్తనము అనేది వివాహానికి ముందు నిర్వహించే పవిత్ర శుద్ధి కర్మ. ఇది విద్యాభ్యాసం మరియు బ్రహ్మచర్య దశ ముగిసి, గృహస్థాశ్రమంలోకి ప్రవేశించేందుకు సిద్ధమవుతున్న సంకేతంగా భావించబడుతుంది. ఈ కర్మ ద్వారా దైవానుగ్రహాన్ని కోరుతూ కొత్త జీవితానికి ఆహ్వానం పలుకుతారు.",
        ritual_2_title: "కాశీయాత్ర",
        ritual_2_desc: "కాశీయాత్రలో వరుడు సంసారాన్ని విడిచి ఆధ్యాత్మిక జీవితం కోసం కాశీకి వెళ్తానని సంకేతంగా ప్రకటిస్తాడు. అనంతరం వధువు తండ్రి అతనిని గృహస్థ ధర్మాన్ని స్వీకరించమని ఆహ్వానిస్తాడు.",
        ritual_3_title: "వివాహ దీక్ష స్వీకరణం",
        ritual_3_desc: "వివాహ దీక్ష స్వీకరణం ద్వారా వరుడు వివాహ బంధానికి సంబంధించిన పవిత్ర బాధ్యతలను అంగీకరిస్తాడు.",
        ritual_4_title: "యజ్ఞోపవీత ధారణం",
        ritual_4_desc: "యజ్ఞోపవీత ధారణం ఆధ్యాత్మిక పవిత్రత, ధార్మిక కర్తవ్యాల పట్ల నిబద్ధత మరియు వివాహ సిద్ధతకు సంకేతం.",
        ritual_5_title: "గృహస్థాశ్రమ ప్రమాణ స్వీకరణం",
        ritual_5_desc: "గృహస్థాశ్రమ ప్రమాణ స్వీకరణం ద్వారా కుటుంబ పోషణ, ధర్మాచరణ, సమాజ సేవ వంటి బాధ్యతలను స్వీకరిస్తాడు.",
        ritual_6_title: "కన్యావరణం",
        ritual_6_desc: "కన్యావరణం అనగా వరుడు వధువును వివాహం చేసుకోవాలనే తన సంకల్పాన్ని అధికారికంగా తెలియజేయడం.",
        ritual_7_title: "వరపూజ",
        ritual_7_desc: "వరపూజలో వధువు కుటుంబ సభ్యులు వరుడిని శ్రీమహావిష్ణువు స్వరూపంగా భావించి గౌరవంతో పూజిస్తారు.",
        ritual_8_title: "కాళ్లు కడుగుట",
        ritual_8_desc: "కాళ్లు కడుగుట ద్వారా వధువు తల్లిదండ్రులు వరుడిని గౌరవంతో కుటుంబంలోకి ఆహ్వానిస్తారు.",
        ritual_9_title: "కన్యాదానం",
        ritual_9_desc: "కన్యాదానం అనేది తల్లిదండ్రులు తమ కుమార్తెను ప్రేమతో, ఆశీర్వాదాలతో వరుడికి అప్పగించే అత్యంత పవిత్రమైన క్షణం.",
        ritual_10_title: "మధుపర్కం",
        ritual_10_desc: "మధుపర్కం దాంపత్య జీవితంలో మాధుర్యం, ఆనందం మరియు ఐశ్వర్యం నెలకొనాలని కోరుతూ నిర్వహించే సంప్రదాయం.",
        ritual_11_title: "మాంగల్యధారణం",
        ritual_11_desc: "మాంగల్యధారణం వివాహ బంధానికి శాశ్వత గుర్తుగా, ప్రేమ మరియు బాధ్యతలకు ప్రతీకగా నిర్వహించబడుతుంది.",
        ritual_12_title: "అక్షతారోపణంలో",
        ritual_12_desc: "అక్షతారోపణంలో ఆశీర్వదించిన అక్షతలను జల్లుతూ దంపతులకు ఐశ్వర్యం, సంతోషం మరియు సంతాన సౌభాగ్యాన్ని కోరుతారు.",
        ritual_13_title: "బ్రహ్మముడి",
        ritual_13_desc: "బ్రహ్మముడి ద్వారా వధూవరుల జీవితాలు ఇకపై విడదీయరాని బంధంతో కలిసిపోయాయని సూచిస్తారు.",
        ritual_14_title: "హోమం",
        ritual_14_desc: "హోమంలో అగ్నిదేవుని సాక్షిగా వేదమంత్రాలతో ఆహుతులు సమర్పించి దైవానుగ్రహం కోరుతారు.",
        ritual_15_title: "పాణిగ్రహణం",
        ritual_15_desc: "పాణిగ్రహణంలో వరుడు వధువు చేయి పట్టుకొని జీవితాంతం తోడుగా ఉంటానని ప్రతిజ్ఞ చేస్తాడు.",
        ritual_16_title: "సप्तపది",
        ritual_16_desc: "సప్తపదిలో వధూవరులు ఏడు అడుగులు కలిసి వేస్తూ జీవితంలోని ఏడు ప్రధాన సంకల్పాలను స్వీకరిస్తారు.",
        ritual_17_title: "నక్షత్ర దర్శనం",
        ritual_17_desc: "నక్షత్ర దర్శనంలో అరుంధతి-వశిష్ఠ నక్షత్రాలను दर्शन చేసి ఆదర్శ దాంపత్య జీవితం కోసం ఆశీర్వాదాలు కోరుతారు."
    },
    sa: {
        ganesh_prayer: '॥ ॐ श्री गणेशाय नमः ॥',
        ramanuja_prayer: '॥ ॐ श्री हनुमते नमः ॥',
        tagline: 'विवाह महोत्सवः आमन्त्रणम्',
        gotra_heading: "पवित्रवंशपरम्परा",
        gotra_subheading: "ऋषिवंशसम्प्रदायः",
        groom_role: "वरः",
        bride_role: "वधूः",

        groom_name: "वेङ्कट अभिलाषकुमारः",
        bride_name: "नव्या श्रीललिता",

        groom_gotra: "कश्यपगोत्रम्",
        bride_gotra: "भरद्वाजगोत्रम्",
        grand_son_of: "पितामह & दादी",
        grand_daughter_of: "पितामह & दादी",

        uncle_aunt: "पितृव्यः तथा पितृव्यपत्नी",

        groom_uncle: "श्री पङ्गनामाल किशोरकुमारः",
        groom_aunt: "श्रीमती श्रावणीकुमारी",

        groom_father: "श्री वेङ्कट शरथकुमारः",
        groom_mother: "श्रीमती स्वर्णलक्ष्मी",

        bride_father: "डा. सुश्रुतकुमारः",
        bride_mother: "श्रीमती श्रीदेवी",
        groom_rishi_name: "कश्यपमहर्षिः",
        groom_gotra_label: "वरस्य गोत्रम्",
        groom_gotra_name: "कश्यपगोत्रम्",
        younger_brother: "भ्राता",

        bride_second_brother: "अभिरामः",
        bride_rishi_name: "भरद्वाजमहर्षिः",
        bride_gotra_label: "वध्वाः गोत्रम्",
        bride_gotra_name: "भरद्वाजगोत्रम्",
        couple_title: 'वधूवरौ',
        couple_subtitle: 'द्वे आत्मानौ, एकं पथम्',
        
        groom_name: 'वेङ्कट अभिलाष कुमारः',
        son_of: 'मातापितरौ',
        universal_blessing: "॥ सर्वे जनाः सुखिनो भवन्तु ॥",
        
        bride_name: 'नव्या श्री ललिता',
        daughter_of: 'मातापितरौ',
        details_title: 'विवाहविवरणम्',
        details_subtitle: 'शुभमुहूर्तं स्मरत',
        detail_date_title: 'विवाहदिनम्',
        detail_date_text: 'आगष्ट् 16, 2026',
        detail_date_sub: 'रविवासरः रात्रौ',
        detail_time_title: 'मुहूर्तसमयः',
        detail_time_text: 'रात्रौ 11:30 – 1:15',
        detail_time_sub: 'हस्तानक्षत्रम् · पुष्करकालः 12:21 – 12:25',
        detail_venue_title: 'स्थानम्',
        detail_venue_text: 'नेदुरुमल्ली सुब्बिरामी रेड्डी कला भवन (NBKR) कल्याणमण्डपम्',
        detail_venue_sub: 'विद्यानगरम्, नेल्लूरु',
        event1_name: 'विवाहोत्सवारम्भः',
        event2_name: 'मुहूर्तम् एवं प्रधानविधिः',
        rituals_title: 'पवित्रसंस्काराः',
        rituals_subtitle: 'अस्माकं विवाहस्य दिव्यक्रियाः',
        venue_title: 'विवाहमण्डपम्',
        venue_subtitle: 'भवतां दिव्यसान्निध्येन अस्मान् आशीर्वदन्तु',
        venue_name: 'नेदुरुमल्ली सुब्बिरामी रेड्डी कला भवन (NBKR) कल्याणमण्डपम्',
        venue_address: 'विद्यानगरम्, नेल्लूरु',
        venue_feat1: '🪔 पवित्राग्निवेदिका',
        venue_feat2: '🌺 पुष्पालङ्कारः',
        venue_feat3: '🎵 नादस्वरम्',
        hero_date: 'आगष्ट् 16, 2026 | रविवासरः रात्रौ',
        hero_nakshatra: 'श्रावणमासः • शुक्लपक्षपञ्चमी • रविवासरः',
        sumuhurtam_title: 'सुमुहूर्तम्',
        sumuhurtam_text: 'पराभवनामसंवत्सरः, श्रावणमासः, शुक्लपक्षपञ्चमी',
        sumuhurtam_time: 'रात्रौ 11:30 – 1:15',
        sumuhurtam_nakshatra: 'हस्तानक्षत्रम् • वृषभलग्नम् • पुष्करकालः 12:21 – 12:25',
        rsvp_title: "आमन्त्रणम्",

        rsvp_subtitle: "भवतः सस्नेहसन्निध्या अस्माकं विवाहमहोत्सवः शोभां प्राप्नुयात्",

        rsvp_message:
        "भवतः उपस्थितिः एव अस्माकं नूतनजीवनस्य परमं मङ्गलाशिषः। कृपया परिवारसमेताः आगत्य अस्मान् आशीर्वदन्तु।",

        vara_paksham: "वरपक्षः",
        kanya_paksham: "कन्यापक्षः",

        groom_side: "(वरकुलम्)",
        bride_side: "(वधूकुलम्)",

        grand_parents: "पितामहौ",
        sister: "भगिनी",
        brother_wife: "भ्राता सह पत्नी",

        groom_grandfather: "श्री यमनारावः",
        groom_grandmother: "श्रीमती नागमणिः",

        groom_sister: "राजेश्वरी मेधिनी",

        bride_grandfather: "श्री श्रीहरिः",
        bride_grandmother: "श्रीमती रामादेवी",

        bride_brother: "श्री गणेशः",
        bride_sister_in_law: "श्रीमती शिवानी",

        blessing_translation: "सर्वे जनाः सुखिनो भवन्तु",
        blessing_translation: 'सर्वे जनाः सुखिनो भवन्तु',
        visitor_label: 'आशीर्वादाः प्राप्ताः',
        visitor_sublabel: 'जनाः एतत् निमन्त्रणपत्रं दृष्ट्वा आशीर्वदितवन्तः',
        footer_text: 'स्नेहेन आशिषा च सह 🙏',
        nav_home: 'गृहम्', nav_couple: 'वधूवरौ', nav_details: 'विवरणम्',
        nav_rituals: 'संस्काराः', nav_venue: 'मण्डपम्', nav_rsvp: 'निमन्त्रणम्',

        // 17 Rituals Translations (Sanskrit)
        ritual_1_title: "समावर्तनम्",
        ritual_1_desc: "समावर्तनं ब्रह्मचर्याश्रमसमाप्तेः सूचकं पवित्रसंस्कारः। गृहस्थजीवनस्य आरम्भाय आत्मशुद्धिं ददाति।",
        ritual_2_title: "काशीयात्रा",
        ritual_2_desc: "काशीयात्रा वैराग्यस्य प्रतीकः। ततः कन्यापिता गृहस्थधर्मस्वीकाराय वरं प्रार्थयति।",
        ritual_3_title: "विवाहदीक्षास्वीकारः",
        ritual_3_desc: "विवाहदीक्षास्वीकारः दाम्पत्यजीवनस्य पवित्रप्रतिज्ञा।",
        ritual_4_title: "यज्ञोपवीतधारणम्",
        ritual_4_desc: "यज्ञोपवीतधारणं शौचं, धर्मनिष्ठां, तथा वैवाहिककर्तव्येषु सज्जतां सूचयति।",
        ritual_5_title: "गृहस्थाश्रमप्रतिज्ञा",
        ritual_5_desc: "गृहस्थाश्रमप्रतिज्ञा परिवारपालनस्य धर्मपालनस्य च स्वीकृतिः।",
        ritual_6_title: "कन्यावरणम्",
        ritual_6_desc: "कन्यावरणं विवाहार्थं कन्यायाः औपचारिकस्वीकारः।",
        ritual_7_title: "वरपूजा",
        ritual_7_desc: "वरपूजायां वरः विष्णुस्वरूपेण सम्मान्यते।",
        ritual_8_title: "पादप्रक्षालनम्",
        ritual_8_desc: "पादप्रक्षालनं आदरस्य सत्कारस्य च प्रतीकम्।",
        ritual_9_title: "कन्यादानम्",
        ritual_9_desc: "कन्यादानं सर्वश्रेष्ठदानरूपेण शास्त्रेषु प्रशस्यते।",
        ritual_10_title: "मधुपर्कः",
        ritual_10_desc: "मधुपर्कः माधुर्यसमृद्ध्योः मंगलप्रतीकः।",
        ritual_11_title: "माङ्गल्यधारणम्",
        ritual_11_desc: "माङ्गल्यधारणं दाम्पत्यबन्धस्य शाश्वतचिह्नम्।",
        ritual_12_title: "अक्षतारोपणम्",
        ritual_12_desc: "अक्षतारोपणं सौभाग्यसमृद्ध्याशिषां वर्षणम्।",
        ritual_13_title: "ब्रह्ममुद्रा",
        ritual_13_desc: "ब्रह्ममुद्रा वधूवरयोः अविच्छिन्नैक्यस्य प्रतीकम्।",
        ritual_14_title: "होमः",
        ritual_14_desc: "होमे अग्निः विवाहस्य दिव्यसाक्षी भवति।",
        ritual_15_title: "पाणिग्रहणम्",
        ritual_15_desc: "पाणिग्रहणं सहजीवनप्रतिज्ञायाः पवित्रक्षणम्।",
        ritual_16_title: "सप्तपदी",
        ritual_16_desc: "सप्तपदी दाम्पत्यजीवनस्य सप्तमंगलप्रतिज्ञाः वहति।",
        ritual_17_title: "नक्षत्रदर्शनम्",
        ritual_17_desc: "नक्षत्रदर्शनं अरुन्धतीवसिष्ठयोः आदर्शदाम्पत्यस्मरणम्।"
    }
};

let currentLang = 'en';

function selectLanguage(lang) {
    currentLang = lang;
    applyTranslations(lang);
    const overlay = document.getElementById('langDialogOverlay');
    overlay.classList.remove('visible');
    overlay.classList.add('hidden');
    // Trigger the grand door opening
    triggerDoorOpening();
}

function triggerDoorOpening() {
    const grandDoors = document.getElementById('grandDoors');
    const hero = document.getElementById('home');
    const doorParticles = document.getElementById('doorParticles');

    if (!grandDoors || !hero) return;

    // Step 1: Burst golden particles from center
    createDoorParticles(doorParticles);

    // Step 2: Open the doors after a brief dramatic pause
    setTimeout(() => {
        grandDoors.classList.add('doors-opened');

        // Step 3: Reveal hero content with staggered animations
        setTimeout(() => {
            hero.classList.add('doors-revealed');
        }, 600);

        // Step 4: Hide doors completely after they've swung open
        setTimeout(() => {
            grandDoors.classList.add('doors-hidden');
        }, 2500);

        // Step 5: Remove doors from DOM after fade
        setTimeout(() => {
            grandDoors.style.display = 'none';
        }, 4000);
    }, 400);
}

function createDoorParticles(container) {
    if (!container) return;
    const colors = ['#FFD700', '#D4AF37', '#FFEC8B', '#FFA500', '#FF6600'];
    for (let i = 0; i < 40; i++) {
        const p = document.createElement('div');
        p.className = 'door-particle';
        p.style.left = '50%';
        p.style.top = (30 + Math.random() * 40) + '%';
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        const size = 3 + Math.random() * 6;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        const angle = (Math.random() * 360) * (Math.PI / 180);
        const distance = 80 + Math.random() * 300;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;
        const duration = 1200 + Math.random() * 1200;
        p.style.transition = `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
        container.appendChild(p);
        // Trigger animation in next frame
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                p.style.opacity = '1';
                p.style.transform = `translate(${dx}px, ${dy}px) scale(0)`;
                p.style.opacity = '0';
            });
        });
        setTimeout(() => p.remove(), duration + 200);
    }
}

function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.innerHTML = t[key];
        }
    });
}

// ===== MAP REVEAL =====
function revealMap() {
    const overlay = document.getElementById('mapOverlay');
    const iframe = document.getElementById('venueMapFrame');
    overlay.classList.add('hidden');
    iframe.style.opacity = '1';
}

document.addEventListener('DOMContentLoaded', () => {

    // ===== FORCE SCROLL TO TOP ON PAGE LOAD/REFRESH =====
    // Prevent browser from restoring scroll position
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    // Force immediate scroll to top
    window.scrollTo(0, 0);

    // ===== PRELOADER =====
    const preloader = document.getElementById('preloader');
    const langOverlay = document.getElementById('langDialogOverlay');

    function showLanguageDialog() {
        // Always show language dialog on every visit/refresh
        setTimeout(() => {
            langOverlay.classList.add('visible');
        }, 300);
    }

    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
            showLanguageDialog();
        }, 2500);
    });

    // Fallback: hide preloader after 5 seconds regardless
    setTimeout(() => {
        preloader.classList.add('hidden');
        showLanguageDialog();
    }, 5000);

    // ===== NAVIGATION =====
    const nav = document.getElementById('mainNav');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    // Scroll effect for nav
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile nav toggle
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + 150;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = navLinks.querySelector(`a[href="#${id}"]`);
            if (link) {
                if (scrollPos >= top && scrollPos < top + height) {
                    navLinks.querySelectorAll('a').forEach(a => a.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    });

    // ===== COUNTDOWN TIMER =====
    const weddingDate = new Date('August 16, 2026 23:30:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        if (distance < 0) {
            document.getElementById('days').textContent = '0';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(3, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // ===== FLOATING PETALS =====
    const petalsContainer = document.getElementById('petalsContainer');
    const flowerImages = [
        'flower_images/1 (1).png', 'flower_images/1 (2).png', 'flower_images/1 (3).png',
        'flower_images/1 (4).png', 'flower_images/1 (5).png', 'flower_images/1 (6).png',
        'flower_images/1 (7).png', 'flower_images/1 (8).png', 'flower_images/1 (9).png'
    ];

    function createPetal() {
        const petal = document.createElement('img');
        petal.classList.add('petal');
        petal.src = flowerImages[Math.floor(Math.random() * flowerImages.length)];
        petal.alt = '';
        petal.style.left = Math.random() * 100 + 'vw';
        const size = 25 + Math.random() * 30;
        petal.style.width = size + 'px';
        petal.style.height = size + 'px';
        petal.style.animationDuration = (8 + Math.random() * 8) + 's';
        petal.style.animationDelay = Math.random() * 2 + 's';
        petal.style.opacity = 0.4 + Math.random() * 0.4;

        // Randomly choose petal animation style
        const animations = ['petalFall', 'petalSpiral', 'petalDrift'];
        petal.style.animationName = animations[Math.floor(Math.random() * animations.length)];

        petalsContainer.appendChild(petal);

        // Remove petal after animation
        setTimeout(() => {
            petal.remove();
        }, 18000);
    }

    // Flower burst effect - triggered on scroll near sections
    function createFlowerBurst(x, y) {
        for (let i = 0; i < 8; i++) {
            const flower = document.createElement('img');
            flower.classList.add('flower-burst');
            flower.src = flowerImages[Math.floor(Math.random() * flowerImages.length)];
            flower.alt = '';
            flower.style.left = x + 'px';
            flower.style.top = y + 'px';
            flower.style.setProperty('--angle', (i * 45) + 'deg');
            flower.style.setProperty('--distance', (40 + Math.random() * 60) + 'px');
            const size = 20 + Math.random() * 15;
            flower.style.width = size + 'px';
            flower.style.height = size + 'px';
            petalsContainer.appendChild(flower);
            setTimeout(() => flower.remove(), 1500);
        }
    }

    // Trigger flower burst on section entry
    let burstTriggered = {};
    const sectionObserverBurst = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !burstTriggered[entry.target.id]) {
                burstTriggered[entry.target.id] = true;
                const rect = entry.target.getBoundingClientRect();
                createFlowerBurst(rect.left + rect.width / 2, rect.top + 50);
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.section').forEach(section => {
        sectionObserverBurst.observe(section);
    });

    // Create initial petals
    for (let i = 0; i < 6; i++) {
        setTimeout(createPetal, i * 1000);
    }

    // Continuously create petals
    setInterval(createPetal, 3000);

    // ===== SCROLL REVEAL ANIMATIONS =====
    const revealElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 70; // Nav height
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== PARALLAX EFFECT FOR HERO =====
    // Gentle parallax without fading - keeps content visible
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
            const heroContent = document.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrolled * 0.08}px)`;
                // No opacity change - content stays visible while scrolling
            }
        }
    });

    // ===== RITUAL ITEMS STAGGER ANIMATION =====
    const ritualItems = document.querySelectorAll('.ritual-item');
    const ritualObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, 100);
                ritualObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -30px 0px'
    });

    ritualItems.forEach(item => {
        ritualObserver.observe(item);
    });

    // ===== BACKGROUND MUSIC (Mangalam) =====
    const audioToggle = document.getElementById('audioToggle');
    const bgMusic = new Audio('mangalam.mp3');
    bgMusic.loop = true;
    bgMusic.volume = 0.4;
    let musicPlaying = false;

    function startMusic() {
        bgMusic.play().then(() => {
            musicPlaying = true;
            audioToggle.textContent = '🔊';
        }).catch(() => {
            // Autoplay blocked - user will click toggle
        });
    }

    // Try to auto-play after user's first interaction (language selection)
    const origSelectLanguage = window.selectLanguage;
    window.selectLanguage = function(lang) {
        origSelectLanguage(lang);
        if (!musicPlaying) startMusic();
    };

    audioToggle.addEventListener('click', () => {
        if (musicPlaying) {
            bgMusic.pause();
            musicPlaying = false;
            audioToggle.textContent = '🔇';
        } else {
            startMusic();
        }
        audioToggle.style.transform = 'scale(1.2)';
        setTimeout(() => {
            audioToggle.style.transform = 'scale(1)';
        }, 200);
    });

    // ===== SPARKLE EFFECT ON GOLD ELEMENTS =====
    function createSparkle(element) {
        const sparkle = document.createElement('div');
        sparkle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: #FFD700;
            border-radius: 50%;
            pointer-events: none;
            animation: sparkleAnim 0.6s ease-out forwards;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            z-index: 10;
        `;
        element.style.position = 'relative';
        element.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 600);
    }

    // Add sparkle animation to stylesheet
    const sparkleStyle = document.createElement('style');
    sparkleStyle.textContent = `
        @keyframes sparkleAnim {
            0% { transform: scale(0); opacity: 1; }
            50% { transform: scale(1.5); opacity: 0.8; }
            100% { transform: scale(0); opacity: 0; }
        }
    `;
    document.head.appendChild(sparkleStyle);

    // Sparkle on frame border hover
    const frameBorder = document.querySelector('.frame-border');
    if (frameBorder) {
        frameBorder.addEventListener('mouseenter', () => {
            for (let i = 0; i < 5; i++) {
                setTimeout(() => createSparkle(frameBorder), i * 100);
            }
        });
    }

    // ===== PAGE VISIBILITY - PAUSE ANIMATIONS =====
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            document.body.style.animationPlayState = 'paused';
        } else {
            document.body.style.animationPlayState = 'running';
        }
    });

    // ===== RESET SCROLL POSITION ON PAGE UNLOAD =====
    // Ensures the page always starts from top on next load
    window.addEventListener('beforeunload', () => {
        window.scrollTo(0, 0);
    });

    // ===== VISITOR COUNTER (Unique UUID-based, shared count via CountAPI) =====
    function initVisitorCounter() {
        // Generate or retrieve a persistent UUID for this browser/device
        let visitorId = localStorage.getItem('weddingVisitorId');
        const isNewVisitor = !visitorId;

        if (isNewVisitor) {
            // Create a new UUID for this visitor
            visitorId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                const r = Math.random() * 16 | 0;
                const v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
            localStorage.setItem('weddingVisitorId', visitorId);
        }

        const NAMESPACE = 'abhi-navya-wedding-2026';
        const KEY       = 'unique-visitors';

        if (isNewVisitor) {
            // New visitor — increment the shared counter, then display
            fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`)
                .then(res => res.json())
                .then(data => {
                    // data.value is 1-based; display as 0-based visitor ID (first visitor = 0)
                    const displayId = data.value - 1;
                    updateVisitorDisplay(displayId);
                })
                .catch(() => fallbackCounter(isNewVisitor));
        } else {
            // Returning visitor — just read the current count (no increment)
            fetch(`https://api.countapi.xyz/get/${NAMESPACE}/${KEY}`)
                .then(res => res.json())
                .then(data => {
                    const displayId = Math.max(0, data.value - 1);
                    updateVisitorDisplay(displayId);
                })
                .catch(() => fallbackCounter(isNewVisitor));
        }
    }

    // Fallback when CountAPI is unreachable — use localStorage-only counting
    function fallbackCounter(isNewVisitor) {
        let count = parseInt(localStorage.getItem('weddingVisitorFallbackCount') || '0', 10);
        if (isNewVisitor) {
            count += 1;
            localStorage.setItem('weddingVisitorFallbackCount', count.toString());
        }
        updateVisitorDisplay(count - 1); // 0-based
    }

    function updateVisitorDisplay(count) {
        const digits = document.querySelectorAll('.visitor-digit');
        // Pad to match however many digit spans exist (4 by default)
        const countStr = String(count).padStart(digits.length, '0');
        digits.forEach((digit, i) => {
            const newVal = countStr[i] !== undefined ? countStr[i] : '0';
            if (digit.textContent !== newVal) {
                digit.classList.add('flip');
                setTimeout(() => {
                    digit.textContent = newVal;
                    digit.classList.remove('flip');
                }, 300);
            }
        });
    }

    // Animate counter on scroll into view
    const visitorCounter = document.getElementById('visitorCounter');
    if (visitorCounter) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    initVisitorCounter();
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        counterObserver.observe(visitorCounter);
    }

    // ===== MANDAPAM SCENE SCROLL ANIMATION =====
    const mandapamScene = document.getElementById('mandapamScene');
    if (mandapamScene) {
        const mandapamObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    mandapamScene.classList.add('revealed');
                    mandapamObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
        mandapamObserver.observe(mandapamScene);
    }

    // ===== VENUE CARD 3D TILT EFFECT =====
    const venueCard = document.getElementById('venueCard');
    if (venueCard) {
        venueCard.addEventListener('mousemove', (e) => {
            const rect = venueCard.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            venueCard.style.transform = `translateY(-8px) rotateX(${y * -5}deg) rotateY(${x * 5}deg)`;
        });
        venueCard.addEventListener('mouseleave', () => {
            venueCard.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
        });
    }

});
