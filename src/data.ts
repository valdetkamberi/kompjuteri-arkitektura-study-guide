export interface Question {
  id: number;
  type: 'multiple-choice' | 'open-ended';
  question: string;
  options?: string[];
  correctAnswer: string;
  logic: string;
  memorizationTip: string;
  imageHint?: string;
}

export const questions: Question[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: "Sa herë ekzekutohet instruksioni në rreshtin 06 në programin e paraqitur?",
    options: ["4 herë", "1 herë", "5 herë"],
    correctAnswer: "1 herë",
    logic: "Megjithëse fillimisht CX vendoset në 5 (rreshti 03) dhe pastaj CX bëhet 4 (rreshti 04), instruksioni i rreshtit 08 është 'jmp fundi'. Ky është një kërcim i pakushtëzuar (unconditional jump). Sapo procesori ekzekuton 'add ax, 1' (rreshti 06) dhe bën krahasimin, ai menjëherë kërcen te 'fundi', duke injoruar plotësisht rreshtin 09 'loop unaza'. Pra, kodi brenda unazës ekzekutohet vetëm 1 herë.",
    memorizationTip: "Kur sheh një 'jmp' (kërcim pa kusht) brenda një blloku që supozohet të jetë unazë, ai jmp do ta ndërpresë unazën menjëherë herën e parë.",
    imageHint: "02: mov ax, 4\n03: mov cx, 5\n04: dec cx\n05: unaza:\n06: add ax, 1\n07: cmp cx, 4\n08: jmp fundi\n09: loop unaza\n10: fundi:"
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: "Përmes instruksionit: lea bx, variabla3",
    options: [
      "vlera prej variablës variabla3 vendoset në regjistrin bx",
      "offset-i i variablës variabla3 vendoset në regjistrin bx",
      "vlera e variablës variabla3 rritet për 1 dhe vendoset në regjistrin bx"
    ],
    correctAnswer: "offset-i i variablës variabla3 vendoset në regjistrin bx",
    logic: "LEA (Load Effective Address) nuk e merr vlerën që ndodhet brenda variablës, por merr 'adresën' (offset-in) e saj. Është sikur të thuash 'Ku ndodhet kjo?' në vend të 'Çfarë ka kjo?'.",
    memorizationTip: "LEA = Adresa (Offset). Mendoje si një tregues (pointer) në C++: 'bx = &variabla3'."
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: "Madhësia e bllokut në memorien SRAM ndaj asaj DRAM është:",
    options: [
      "më e vogël se madhësia e bllokut në memorien DRAM",
      "më e madhe se madhësia e bllokut në memorien DRAM",
      "e barabartë me madhësinë e bllokut në memorien DRAM"
    ],
    correctAnswer: "e barabartë me madhësinë e bllokut në memorien DRAM",
    logic: "Kur transferohen të dhëna nga memoria kryesore (DRAM) në kesh (SRAM), ato lëvizin në formë blloqesh të plota. Prandaj, një linjë kesh-i (cache line ose SRAM block) HETË të jetë fiks sa madhësia e një blloku në DRAM për t'u përputhur.",
    memorizationTip: "Blloku Cesh = Blloku RAM. Po s'qenë barabar, nuk puthiten kutitë!"
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: "Nëse procesori Intel 8086 për të lexuar në memorien DRAM përdorë offset-in 0512h do të përdoret kjo adresë fizike:",
    options: ["07512h", "7512h", "070512h"],
    correctAnswer: "07512h",
    logic: "Adresa Fizike = (Segment * 16) + Offset. Nëse offseti është 0512h, dhe adresa fizike rezulton 07512h, kjo vjen sepse segmenti ka qenë 0700h. (07000h + 0512h = 07512h).",
    memorizationTip: "Adresa fizike ka gjithmonë 5 shifra heksadecimale (20 bit). Shto një zero në fund të segmentit dhe mblidhe me offsetin."
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: "Përmes instruksionit iret:",
    options: [
      "procesori Intel 8086 mundëson ndërprerjen e ekzekutimit të programit pas ekzekutimit të instruksionit aktual",
      "procesori Intel 8086 nuk lejon që të ndërprehet ekzekutimi i programit aktual",
      "procesori Intel 8086 mundëson vazhdimin e ekzekutimit të programit të ndërprerë duke kthyer prej stek vlerat e regjistrave Flags, IP dhe CS"
    ],
    correctAnswer: "procesori Intel 8086 mundëson vazhdimin e ekzekutimit të programit të ndërprerë duke kthyer prej stek vlerat e regjistrave Flags, IP dhe CS",
    logic: "IRET (Interrupt Return) përdoret në fund të një ISR (Interrupt Service Routine). Kur ndodh një interrupt, procesori automatikisht ruan Flags, CS dhe IP në stek. IRET i kthen ato mbrapsht që programi të vazhdojë aty ku ishte.",
    memorizationTip: "IRET = Interrupt Return. Kthen 'Treshen e Shenjtë': Flags, CS, IP."
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: "Numri i instruksioneve që një procesor mund të përkrahë varet nga:",
    options: [
      "gjatësia e fushës së kodit të operacionit",
      "madhësia e niveleve të memories kesh",
      "numri i bërthamave që ka procesori"
    ],
    correctAnswer: "gjatësia e fushës së kodit të operacionit",
    logic: "Kodi i operacionit (Opcode) është pjesa e instruksionit që thotë 'çfarë' të bëhet. Nëse kodi është 8 bit, mund të kesh 2^8 = 256 instruksione të ndryshme. Nëse është 16 bit, mund të kesh 65536.",
    memorizationTip: "Opcode = Emri i rrobës. Sa më shumë shkronja (bit-e) të kesh në dispozicion, aq më shumë emra unikë mund të krijosh."
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: "Sa tela duhet t'i shtohen busit të adresave në një kompjuter që përdor bus 32 bitësh ashtu që procesori të mund të adresojë memorie DRAM me kapacitet 64 GB:",
    options: ["1", "3", "4"],
    correctAnswer: "4",
    logic: "32 bit mundëson 2^32 = 4 GB adresa. Ne duam 64 GB. 64 / 4 = 16. Na duhet 16 herë më shumë hapësirë. Ekuacioni 2^n = 16. Pra na duhen n = 4 bitë (tela) shtesë.",
    memorizationTip: "4 bitë = herë 16. Çdo bit shtesë e dyfishon hapësirën (4GB -> 8GB -> 16GB -> 32GB -> 64GB)."
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: "Njësia kontrolluese e CPU-së e merr të dhënën prej memories dhe e vendos në regjistrin:",
    options: ["AC", "MAR", "MBR/MDR"],
    correctAnswer: "MBR/MDR",
    logic: "MAR (Memory Address Register) mban adresën se KU do kërkohet. Kurse MBR (Memory Buffer Register) ose MDR (Memory Data Register) ruan TË DHËNËN (Data) që vjen nga memoria.",
    memorizationTip: "MBR/MDR -> D për Data, B për Buffer. MAR -> A për Address (Adresa)."
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: "Duke u bazuar në formatin e instruksionit 32 bit, ku bitët 31 deri në 26 përdoren për kodin e operacionit, sa është numri i kodeve të operacioneve:",
    options: ["256", "64", "128"],
    correctAnswer: "64",
    logic: "Nga biti 31 deri tek biti 26 janë saktësisht 6 bit (31, 30, 29, 28, 27, 26). Numri maksimal i operacioneve me 6 bit është 2^6 = 64.",
    memorizationTip: "Numëroj bitat: 31-26 janë 6! Pastaj gjithmonë ngrije 2 në atë fuqi: 2^6 = 64.",
    imageHint: "[ Kodi i operacionit (31 - 26) ] [ Adresa e operandit (25 - 0) ]"
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: "Njësia ALU bashkë me disa prej regjistrave të CPU-së njihet edhe si:",
    options: ["Datapath", "Control Unit", "Register File"],
    correctAnswer: "Datapath",
    logic: "Procesori ka dy përbërës thelbësorë grafikisht: Control Unit (Njësia truri që jep urdhra) dhe Datapath (ALU + Regjistrat + Rrugët, e cila bën punën fizike të të dhënave).",
    memorizationTip: "Datapath = Rruga e të Dhënave (Gjithë 'muskujt' dhe tubat: ALU + Regjistra)."
  },
  {
    id: 11,
    type: 'multiple-choice',
    question: "Offset-i është:",
    options: [
      "numri i përgjithshëm i bajtëve në një fjalë, bllok, faqe ose segment",
      "adresa e një bajti brenda një fjale, blloku, faqeje ose segmenti në memorien DRAM",
      "adresa e bllokut brenda një faqeje"
    ],
    correctAnswer: "adresa e një bajti brenda një fjale, blloku, faqeje ose segmenti në memorien DRAM",
    logic: "Offseti do të thotë 'zhvendosje'. Tregon sa larg gjendet diçka nga pika e fillimit (baza). Pra, është adresa (koordinata relavtive) e një elementi brenda hapësirës.",
    memorizationTip: "Offset = Zhvendosje. Adresa relative brenda 'kufijve'."
  },
  {
    id: 12,
    type: 'multiple-choice',
    question: "Numri i cikleve për instruksion (CPI) është në raport:",
    options: [
      "të zhdrejtë me numrin e instruksioneve për cikël (IPC)",
      "të drejtë me numrin e instruksioneve për cikël",
      "nuk varet fare prej numrit të instruksioneve për cikël"
    ],
    correctAnswer: "të zhdrejtë me numrin e instruksioneve për cikël (IPC)",
    logic: "Matematika është e thjeshtë: CPI = 1 / IPC. Meqënëse janë të kundërtat e njëra-tjetrës, raporti i tyre është i zhdrejtë.",
    memorizationTip: "Cikle/Instruksion (CPI) dhe Instruksion/Cikël (IPC) janë thyesa të kthyera mbrapsht. Pra i zhdrejtë."
  },
  {
    id: 13,
    type: 'multiple-choice',
    question: "Fshirja e përmbajtjes në memorien flash:",
    options: [
      "bëhet elektrikisht në nivel të bllokut",
      "bëhet me rrezatim UV në nivel të bajtit",
      "bëhet elektrikisht në nivel të bajtit"
    ],
    correctAnswer: "bëhet elektrikisht në nivel të bllokut",
    logic: "Memoria Flash (si USB, SSD) është një lloj i EEPROM, por ndryshe nga EEPROM-të e vjetra që fshihen bajt-për-bajt, kjo e fshin të dhënën në blloqe të mëdha (ndaj quhet Flash, se fshihet shpejt).",
    memorizationTip: "Blici (Flash) kap një fushë të gjerë (bllok). Nuk vret mushkonja tek e tek (bajt)."
  },
  {
    id: 14,
    type: 'multiple-choice',
    question: "Brenda regjistrit IP të procesorit Intel 8086:",
    options: [
      "mund të ruhet një offset 16 bitësh",
      "mund të ruhet një offset 32 bitësh",
      "mund të ruhet një offset 8 bitësh"
    ],
    correctAnswer: "mund të ruhet një offset 16 bitësh",
    logic: "Gjithë arkitektura thelbësore e Intel 8086 është 16-bit. Regjistri IP (Instruction Pointer) ruan offset-in e instruksionit vijues, prandaj duhet të jetë 16 bitësh, njëjtë si segmenti.",
    memorizationTip: "8086 = Procesor me regjistra 16 bit. Çfarëdo që të pyesin për regjistrat kryesorë, janë 16 bit."
  },
  {
    id: 15,
    type: 'multiple-choice',
    question: "Instruksioni cmp AX, 0:",
    options: [
      "shkruan vlerën e bitit fleg ZF",
      "nuk shkruan vlerën e bitit fleg ZF",
      "shkruan vlerën e bitit fleg IF"
    ],
    correctAnswer: "shkruan vlerën e bitit fleg ZF",
    logic: "CMP (Compare) funksionon duke bërë zbritje (AX - 0) pa e ruajtur rezultatin. Vetëm rifreskon 'Flamujt e Statusit'. Nëse AX është i barabartë me 0, rezultati është 0 dhe ndizet Zero Flag (ZF = 1).",
    memorizationTip: "CMP freskon Flamujt (ZF, SF, OF, CF). Zero Flag tregon gjithmonë nëse dy numrat ishin të barabartë."
  },
  {
    id: 16,
    type: 'multiple-choice',
    question: "Memoria DRAM me madhësi 1 MB e procesorit Intel 8086 ndahet në segmente me madhësi:",
    options: ["32 KB", "16 KB", "64 KB"],
    correctAnswer: "64 KB",
    logic: "Sepse një regjistër offset është 16 bit (psh. regjistri BX, SI, DI, IP). Numri maksimal i kombinimeve me 16 bit është 2^16 = 65,536 Bytes, që është ekzaktësisht 64 KB. Prandaj një segment nuk mund të jetë më i madh se kaq.",
    memorizationTip: "Kufiri i offset-it 16-bit është 64 KB. Ky është rregulli i artë i 8086!"
  },
  {
    id: 17,
    type: 'multiple-choice',
    question: "Instruksioni jmp në gjuhën assembly për Intel 8086:",
    options: [
      "përdoret për të realizuar degëzim vetëm nëse plotësohet ndonjë kusht",
      "përdoret për të realizuar degëzim në program pa testim të ndonjë kushti",
      "përdoret për të deklaruar variabla për degëzim në program"
    ],
    correctAnswer: "përdoret për të realizuar degëzim në program pa testim të ndonjë kushti",
    logic: "JMP do të thotë 'Unconditional Jump'. Procesori hidhet te adresa pa bërë asnjë pyetje. Degëzimet me kusht bëhen me JZ, JNE, JC etj.",
    memorizationTip: "JMP = Kërce!. Nuk pyet pse dhe si."
  },
  {
    id: 18,
    type: 'multiple-choice',
    question: "Për një CPU themi se është 64 bitësh nëse:",
    options: [
      "i ka maksimumi 64 regjistra",
      "gjerësia e regjistrave të tij e ka 64 bit",
      "nëse përdorë operandë me gjatësi 64 bit"
    ],
    correctAnswer: "gjerësia e regjistrave të tij e ka 64 bit",
    logic: "Kapaciteti thelbësor i një procesori ('word size' ose madhësia e fjalës) përcaktohet nga numri i bitëve që datapath-i (ALU + regjistrat) mund të përpunojë me një kalim. Pra, gjerësia regjistrave kryesorë.",
    memorizationTip: "Procesori X bitësh mban regjistra me gjerësi X bitë."
  },
  {
    id: 19,
    type: 'multiple-choice',
    question: "Sa herë ekzekutohet instruksioni në rreshtin 06 në programin e mëposhtëm?",
    options: ["1 herë", "65536 herë (ose pafundësisht)", "0 herë"],
    correctAnswer: "65536 herë (ose pafundësisht)",
    logic: "Fillimisht CX=1. Rreshti 04 bën zbresje 'dec cx', kështu që CX bëhet 0 para se të nisim rrotullimin. Komanda 'loop' bën 2 gjëra: SË PARI i zbret 1 vlerës CX (0 - 1 = FFFFh). Pasi FFFFh (ose -1) nuk është zero, atëherë kërcen lart. Pra, bën 65536 cikle (sepse ashtu funksionon overfllow në 16-bit).",
    memorizationTip: "Kujdes kur CX = 0 para loop! Loop e zbret DIREKT në FFFFh, duke shkaktuar zbrazje epike (65536 herë).",
    imageHint: "02: mov ax, 5\n03: mov cx, 1\n04: dec cx\n05: unaza:\n06: add ax, 2\n07: loop unaza\n08: ret"
  },
  {
    id: 20,
    type: 'multiple-choice',
    question: "Sa herë ekzekutohet instruksioni në rreshtin 06 (add ax, 2) me unazën (mov cx, 4; inc cx; ... cmp cx, 3; je fundi) varësisht nga theksimi në provim?",
    options: ["3 herë", "4 herë", "pafundësisht herë"],
    correctAnswer: "4 herë",
    logic: "Kujdes! Përgjigjja '4 herë' është ajo që theksohet si e saktë në origjinalin e provimit (me shënim të kuq dhe rreth). Teknikisht në programim strikt, pasi CX nis nga 5 dhe zbret -> Iter1(cx=5), Iter2(cx=4), Iter3(cx=3)->KUSHTI(3=3) plotësohet dhe Thyhet (pra 3 ekzekutime). Por çelësi zyrtar e konsideron 4, mbase ngaqë pedagogu kishte si qëllim kodin 'cmp cx, 2' ose e llogarit inkrementin ndryshe. Rekomandohet të mbani mend '4 herë' si të saktën sipas testit, por ta kuptoni si funksionon realisht.",
    memorizationTip: "Kur sheh LOOP-in ku bëhet 'inc cx' dhe mbaron me 'cmp cx, 3' + 'je fundi', thekso 4 sipas çelësit! (Provimi e do 4)."
  },
  {
    id: 21,
    type: 'multiple-choice',
    question: "Nëse një program për procesorin Intel 8086 përdorë instruksionin `call shuma`:",
    options: [
      "ekzekutohet procedura shuma dhe adresa e kthimit ruhet në stek",
      "adresa e kthimit ruhet në stek dhe fillon ekzekutimi i procedurës shuma",
      "ekzekutohet procedura shuma dhe adresa e kthimit nuk ruhet në stek"
    ],
    correctAnswer: "adresa e kthimit ruhet në stek dhe fillon ekzekutimi i procedurës shuma",
    logic: "Së pari, programi duhet të dijë si të kthehet mbrapa. Prandaj automatikisht bën 'push' në stek adresën e instruksionit që vjen mbrapa call-it (return address). Dhe PËRMBAS kalon kontrollin tek procedura (funksioni).",
    memorizationTip: "CALL = Lë një shënim (Push Address) që të dish ku të kthehesh, pastaj niset për pushime (Jumps to procedure)."
  },
  {
    id: 22,
    type: 'multiple-choice',
    question: "Nëse vlera e pjesëtuesit është në regjistrin CL, përmes instruksionit DIV CL në procesorë intel 8086 kryhet llogaritja:",
    options: ["AX/CL", "(DXAX)/CL", "CL/AX"],
    correctAnswer: "AX/CL",
    logic: "Pjesëtimi pa shenjë 8 bit (div). Në 8086, nëse pjesëtuesi (divisor) është mjet 8-bitësh (CL), programi implikon si të pjestueshëm (dividend) regjistrin vëzhgues AX (16-bit). Rezultati hidhet në AL, mbetja në AH.",
    memorizationTip: "Divizion 8-bit kërkon dividend AX. Pra: AX pjesëtuar me njësine tënde CL."
  },
  {
    id: 23,
    type: 'multiple-choice',
    question: "Për leximin e vlerës së një variable në DRAM procesori Intel 8086 e formon adresën fizike duke përdorur vlerat e regjistrave:",
    options: ["CS dhe IP", "DS dhe EA", "SS dhe SP"],
    correctAnswer: "DS dhe EA",
    logic: "Të gjitha variablat (që quhen Të Dhëna / Data) by default ruhen në 'Data Segment' (DS). Procesori krijon adresën nga regjistri Segment DS dhe një offset specifik (shpesh quhet EA - Effective Address, si BX, DI, SI, etj).",
    memorizationTip: "Kodi (CS:IP). Steku (SS:SP/BP). Të Dhënat/Variablat (DS:BX/SI/DI)."
  },
  {
    id: 24,
    type: 'multiple-choice',
    question: "Për shumëzimin e vlerës së regjistrit CX me vlerën e regjistrit AX në procesorin Intel 8086 përdoret instruksioni:",
    options: ["MUL CX", "MUL AX, AX, CX", "MUL AX, CX"],
    correctAnswer: "MUL CX",
    logic: "Në assembly x86, te instruksioni MUL operandi i parë NUK shkruhet, pasi gjithmonë nënkuptohet që është AX (AL për 8-bit, AX për 16-bit). Ne i themi vetëm gjej regjistrin tjetër mllë (MUL CX), dhe ai shumëzon AX * CX e lë rezultatin DX:AX.",
    memorizationTip: "Shumëzimi (MUL) merr vetëm nji gja. Tjetrën (AX) e ka gjithmonë me vete të nënkuptuar."
  },
  {
    id: 25,
    type: 'multiple-choice',
    question: "Për adresimin e secilit bajt të kapacitetit 128 GB e 64 bit të memories DRAM nevojiten:",
    options: ["64 bit", "37 bit", "34 bit"],
    correctAnswer: "37 bit",
    logic: "Konvertimi në fuqitë e 2: 1 Gigabajt = 2^30 bitë për bajt. 128 Gigabajt = 128 * 2^30. Dimë 128 = 2^7. Kthyer është 2^7 * 2^30 = 2^37 Bajt kapacitet. Prandaj na duhet tel ose bus logjik 37 bitësh.",
    memorizationTip: "1 GB = 30 bit. 2^x = shuma e GB. Per 128, X=7. 30+7=37 bit."
  },
  {
    id: 26,
    type: 'multiple-choice',
    question: "Sipas ligjit të Amdahl-it shpejtimi i ekzekutimit të një programi:",
    options: [
      "varet nga instruksionet që ekzekutohen në mënyrë paralele dhe ato në mënyrë sekuenciale",
      "varet vetëm prej pjesës së instruksioneve që ekzekutohen në mënyrë sekuenciale",
      "nuk varet fare nga pjesa e instruksioneve që ekzekutohen në mënyrë sekuenciale"
    ],
    correctAnswer: "varet nga instruksionet që ekzekutohen në mënyrë paralele dhe ato në mënyrë sekuenciale",
    logic: "Ligji Themelor i Amdahl-it përgjigjet që ndonëse shton sa të duash bërthama paralele, kurrë s'do shkosh mbi tavanin që ta mban lidhur pjesa e programit që kërkon ekzekutim të ngadaltë thellësisht sekuencial. Varet tek ekuilibri i të dycave.",
    memorizationTip: "Amdahl thotë: Nuk mund të jesh pafundësisht i shpejtë! 'Frena' e vërtetë, varet sa e paralelizueshme OSE sekuenciale është situata."
  },
  {
    id: 27,
    type: 'multiple-choice',
    question: "Pas operacionit të ndërrimit të vendit të bitëve për katër pozita majtas në vlerën 0700h fitohet vlera:",
    options: ["00700h", "070000h", "07000h"],
    correctAnswer: "07000h",
    logic: "Një shifër heksadecimale (1 Hex) zë fiks 4 bit. Kështu që të shtysh 4 pozita majtas (1 shift i plotë Hex) do të thotë që e shton edhe 1 zerro. Rrjedhimisht numri 0700 rritet në 07000 (shtojmë një zero në fund).",
    memorizationTip: "Shift 4 bit L = Shto një zero heksi majtas në fund. 0700 bëhet 07000."
  },
  {
    id: 28,
    type: 'open-ended',
    question: "Numri binar 0000000.0000111 të paraqitet brenda një regjistri sipas formatit me pikë lëvizëse (IEEE 754 32-bit floating point).",
    correctAnswer: "1. Normalizimi: 1.11 x 2^-5 (pika zhvendoset 5 pozita).\n2. Shenja (S): 0 (pozitiv).\n3. Eksponenti (E): -5 + 127 = 122 (Binar: 01111010).\n4. Mantisa (M): 11 me 21 zero prapa (deri në 23 bit).\nPërgjigja: 0 | 01111010 | 11000000000000000000000",
    logic: "1. Normalizo: 0.0000111 = 1.11 * 2^-5. \n2. Sign: 0 (pozitiv). \n3. Exponent: -5 + 127 (bias) = 122. Ekuivalenca Binar 122 -> 01111010. \n4. Mantissa: Pjesa pas pikës ('11') e plotësuar me zero prapa deri në bllokimin e thellë 23 bit.",
    memorizationTip: "1. Çoje pikën tek njëshi i parë. \n2. Fuqia + 127 = Eksponenti! \n3. Shto sa zero të duash nga prapa për t'i bërë njësitë një rresht me 23 kuti."
  },
  {
    id: 29,
    type: 'open-ended',
    question: "Tregoni përmes një shembulli se çfarë ndikimi mund të ketë ekzekutimi i një instruksioni për degëzim me kusht në punën e instruction pipelining?",
    correctAnswer: "Shkakton \"Control Hazard\" (ndërprerje e quajtur Stall ose Pipeline Flush).\nProcesori ngarkon instruksionet e radhës para kohe. Nëse kushti i degëzimit (p.sh. JZ) plotësohet, instruksionet e ngarkuara gabimisht duhet të fshihen, duke humbur cikle.\nShembull: Nëse kemi 'jz adresa' dhe ekzekutohet kërcimi, të gjitha instruksionet poshtë tij që tashmë u ngarkuan në pipeline zbrazen (flush).",
    logic: "Pipelining preferon që instruksionet të jenë të shtruara 'bukur si tela'. Kur merr një degëzim me kusht (si JZ/JNE), nuk e kupton a t'a marr kokën apo ta lërë. Zbraz gjithë 'pipeline-in' (flush) prapa krahëve derisa të llogaritet kushti real. Humbitet minimumi nja disa cikle shpejtësie.",
    memorizationTip: "E njëjtë si treni me shpejtësi të lartë: Nqs linjat e binarëve e kërkojnë me patjetër të dalë një kordon, lokomotiva frenon krejt që të jetë e sigurt se kush vijë lartëson."
  },
  {
    id: 30,
    type: 'open-ended',
    question: "Shkruani së paku pesë karakteristika të memories kesh (cache). Shkruani formulën për kohën mesatare të qasjes në memorie (average memory access time).",
    correctAnswer: "Karakteristikat:\n1. Është shumë e shpejtë (më e shpejtë se RAM).\n2. Ka kapacitet të vogël dhe kosto të lartë.\n3. Humb të dhënat pa rrymë (volatile).\n4. Përdor teknologjinë SRAM.\n5. Ndodhet brenda CPU-së ose afër saj.\nFormula (AMAT): T_avg = h * T_c + (1 - h) * T_m",
    logic: "H (Hit rate) tregon probabilitetin (me presje) të gjetjes në xhep. Tc është koha për ta kap në kesh. Nëse dështoi (1-h Miss penalty), kërkon të udhëtosh te RAM (Tm).",
    memorizationTip: "Average = (Sukses % x Koha Cesh) + (Humbje % x Koha RAM)."
  },
  {
    id: 31,
    type: 'open-ended',
    question: "Shkruani të gjitha mënyrat e adresimit të operandëve përmes instruksioneve në gjuhën assembly për Intel 8086. Cila prej tyre ofron fleksibilitet maximal? Merrni shembull leximin e stekut me BP.",
    correctAnswer: "Mënyrat: Implicit, Immediate, Register, Direct, Register Indirect, Based, Indexed, Based Indexed.\nFleksibiliteti maksimal: 'Based Indexed Addressing' (E bazuar me indeksim).\nShembull me BP: `mov ax, [bp+4]`. Përdoret BP në vend të SP për të mos prishur treguesin e stekut ndërsa lexohet parametri.",
    logic: "Sistemi me BP përdoret ekskluzivisht për funksione. Kompilatori përdor `bp+4` për të kapur pa problem parametrin e parë që u bë push në stek (Stack). Ofron mundësi adresimi me hapësirë tejet precize në variabla lokale pa lëvizur Pointerin Themelor (SP).",
    memorizationTip: "Më e gjata = Më fleksibëlja (Based + Indexed). Dhe tekstet e Stekut duan mikun besnik 'Base Pointer' (BP)."
  },
  {
    id: 32,
    type: 'multiple-choice',
    question: "Instruksioni LOAD 200H, #100 përdorë:",
    options: ["Zero adresa", "Një adresë", "Dy adresa", "Tri adresa"],
    correctAnswer: "Një adresë",
    logic: "Kujdes! Megjithëse duket se ka dy parametra (200H dhe vlerën 100), në arkitekturat klasike LOAD me Accumulator, destinacioni (AC) nënkuptohet. Sipas çelësit të provimit (shënimi i theksuar kryesor), adresa kryesore që lexohet nga memorja formon thelbin, dhe kategoria klasifikohet si format me 'Një adresë'.",
    memorizationTip: "LOAD klasikisht jepet si shembulli numër 1 i procesorëve me Accumulator, të cilët quhen gjithashtu kompjuterë me 'Një adresë' (1-Address Machine)."
  },
  {
    id: 33,
    type: 'open-ended',
    question: "Përshkruani funksionin e 3 basave, dhe specifikoni për secilin bus cilët regjistra (MAR, MBR, PC, IR) komunikojnë me to.",
    correctAnswer: "1. Address Bus (Adresave): Dërgon adresat (Njëkahësh). Komunikon me: MAR dhe PC.\n2. Data Bus (Dhënave): Bart të dhënat dhe instruksionet (Dykahësh). Komunikon me: MBR dhe IR.\n3. Control Bus (Kontrollit): Dërgon sinjalet si Read/Write (Dykahësh).",
    logic: "1. Address Bus: Dërgon vetëm adresat (Njëkahësh CPU->Memorie). Regjistri kryesor: MAR dhe PC. \n2. Data Bus: Transporton vetë të dhënat dhe udhëzimet (Dykahësh). Regjistrat: MBR (MDR) dhe IR. \n3. Control Bus: Dërgon sinjalet e kontrollit si Read/Write (Dykahësh).",
    memorizationTip: "Kujto Postën! Address Bus = Zarfi (MAR mban adresën). Data Bus = Letra vetë (MBR mban letrën). Control Bus = Vula (dërgohet apo lexohet)."
  },
  {
    id: 34,
    type: 'open-ended',
    question: "Procesorët modern përdorin adresa virtuale... si arrihet konvertimi në adresë fizike që të mos mbishkruhen të dhënat dhe të arrihet siguria?",
    correctAnswer: "Arrihet përmes MMU (Memory Management Unit) dhe Tabelës së Faqeve (Page Table).\nMMU kthen çdo adresë virtuale në fizike. Siguria arrihet sepse çdo program ka 'Page Table-in' e tij unik. MMU nuk lejon kapërcimin tek fusha e programeve të tjera (nëse e bën, shkakton Segmentation Fault).",
    logic: "Sistemi operativ zhvillon një hapësirë iluzive për çdo program (Virtual Memory). Kur programi interakton, pajisja harduerike MMU kontrollon 'Page Table' për ta përkthyer këtë adresë imagjinare në Adresë Fizike të vërtetë RAM-i. Nëse programi përpiqet të prekë memorie jashtë kësaj tabele, MMU e bllokon (Segmentation Fault).",
    memorizationTip: "MMU (Memory Management Unit) është rojtari i sigurisë dhe përkthyesi i gjuhës nga Virtuale në Fizike!"
  },
  {
    id: 35,
    type: 'multiple-choice',
    question: "Nëse një program për procesorin Intel 8086 përdorë instruksionin loop:",
    options: [
      "ekzekutohet procedura loop dhe adresa e kthimit ruhet në stek",
      "zbritet vlera në regjistrin CX dhe nëse nuk është zero kërcehet",
      "ekzekutohet procedura loop dhe vlera krahasuese ruhet në stek"
    ],
    correctAnswer: "zbritet vlera në regjistrin CX dhe nëse nuk është zero kërcehet",
    logic: "Instruksioni 'loop' ka gjithmonë të thelluar (hard-coded) lidhjen me regjistrin CX. Ai bën saktësisht dy gjëra: (1) e zbret (decrement) CX me një, (2) nëse gjen që CX nuk është ZERO, hidhet mbrapa. Nuk komunikon me stekun, vetëm me CX.",
    memorizationTip: "LOOP = CX - 1; Nqs CX ≠ 0, ik lart! (LOOP nuk jeton dot pa CX-in)."
  },
  {
    id: 36,
    type: 'multiple-choice',
    question: "Një procesori në një sistem kompjuterik për adresim të kapacitetit 64 GB të memories DRAM i nevojitet adresë fizike me gjatësi:",
    options: ["34 bit", "28 bit", "36 bit"],
    correctAnswer: "36 bit",
    logic: "Formula e adresimit është 2^N = Kapaciteti (në Bajt). \nDimë që 64 = 2^6 dhe 1 Giga = 2^30. \nKapaciteti = 2^6 * 2^30 = 2^36 Bajt. \nEkuacioni barazohet me N = 36 bit.",
    memorizationTip: "Giga është e fiksushme me 30. Gjejmë dyshin që formon numrin fillestar (64 është e 6-ta). 30+6 = 36."
  },
  {
    id: 37,
    type: 'multiple-choice',
    question: "Për llogaritjen e vlerës së shprehjes AX/CX në procesorin Intel 8086 do të mund të shkruanim instruksionin:",
    options: ["DIV CX", "DIV AX, CX", "DIV CX, AX"],
    correctAnswer: "DIV CX",
    logic: "Gjuhë e pastër Assembly: Instruksionet e pjesëtimit te Intel marrin gjithmonë vetëm 1 operand i cili është Pjesëtuesi (Divisor). AX dhe DX shërbejnë bashkë automatikisht si i Pjesëtueshmi (Dividend) i nënkuptuar (Implicit). Ndaj shkruhet vetëm 'DIV CX'.",
    memorizationTip: "DIV jepet gjithmonë vetëm! Ai lyp vetëm mjetin pjesëtues (CX), kurse brumin (AX) e ka te xhepi gjithmonë gati."
  }
];
