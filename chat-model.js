
const utterances = [ 
    ["kamu siapa", "siapa kamu", "apa kamu", "apa ini"],							//0
    ["hai", "hey", "halo", "selamat pagi", "selamat siang"],					//1
    ["baik", "aku baik baik saja", "kabarku baik"],					//2
    ["nidn pak julian","berapa nidn pak julian"],														//3
    ["wifi kampus", "daftar wifi kampus", "bagaimana daftar akun wifi kampus", "daftar akun wifi kampus"],  //4 
  ];
   
  // Possible responses corresponding to triggers
   
  const answers = [
      ["Aku adalah Bot", "Perkenalkan aku adalah Chatbot UNP Kediri"],		//0                                                                          	//0
      ["Halo!", "Hai!", "Halo, apa kabar?", "Hai manusia. Bagaimana kabarmu?", "Hai, senang bertemu denganmu."],										//1
      ["Syukurlah. Ada yang bisa kubantu?", "Alhamdulillah, ada yang bisa kubantu?", "Mantap, ada yang bisa kubantu?"],	//2
      ["NIDN Pak Julian Sahertian adalah 0707079001"],										//3
      ["Untuk mendapatkan akun WiFi dan bisa menggunakan layanan internet kampus, kamu perlu menyiapkan fotokopi KTP, KK, Akte Kelahiran, SKCK, Surat Keterangan Kesehatan, dan Surat Tes Covid Antibody, Antigen, dan PCR"],									//4   
  ];
   
  // For any other user input
   
  const alternatives = [
    "Maaf, saya tidak paham. Bisa kamu ulangi",
    "Haaa? Aapaaa?",
  ];