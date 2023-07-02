// Array pertanyaan
const utterances = [ 
    ["kamu siapa", "siapa kamu", "apa kamu", "apa ini"],							//0
    ["hai", "hey", "halo", "selamat pagi", "selamat siang"],					//1
    ["baik", "aku baik baik saja", "kabarku baik", "saya baik"],					//2
    ["nidn pak julian","berapa nidn pak julian"],														//3
    ["wifi kampus", "daftar wifi kampus", "bagaimana daftar akun wifi kampus", "daftar akun wifi kampus"],  //4 
    ["nidn pak ardi","berapa nidn pak ardi"],														//5
    ["nidn pak bagus","nidn kaprodi","berapa nidn pak bagus"]       //6		
  ];
   
  // Array jawaban
   
  const answers = [
      ["Aku adalah Bot", "Perkenalkan aku adalah Chatbot UNP Kediri"],		//0                                                                          	//0
      ["Halo!", "Hai!", "Halo, apa kabar?", "Hai manusia. Bagaimana kabarmu?", "Hai, senang bertemu denganmu."],										//1
      ["Syukurlah. Ada yang bisa kubantu?", "Alhamdulillah, ada yang bisa kubantu?", "Mantap, ada yang bisa kubantu?"],	//2
      ["NIDN Pak Julian Sahertian, S.Pd., M.T adalah 0707079001"],										//3
      ["Untuk mendapatkan akun WiFi dan bisa menggunakan layanan internet kampus, kamu perlu menyiapkan fotokopi KTP, KK, Akte Kelahiran, SKCK, Surat Keterangan Kesehatan, dan Surat Tes Covid Antibody, Antigen, dan PCR"],									//4   
      ["NIDN Pak Ardi Sanjaya, M.Kom. adalah 0706118101"],						//5      
      ["NIDN Pak Ahmad Bagus Setiawan, ST, M.Kom., MM. adalah 0703018704"]    //6
  ];
   
  // Jawaban ketika tidak ada yang sama dengan pertanyaan
   
  const alternatives = [
    "Maaf, saya tidak paham. Bisa kamu ulangi",
    "Haaa? Aapaaa?",
  ];