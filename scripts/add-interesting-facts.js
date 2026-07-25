import fs from 'fs';

const facts = {
  'JP': 'Japonya\'da geç kalan trenler için istasyon şefi yolculara resmi bir özür belgesi (Chien shoumeisho) dağıtır.',
  'KR': 'Güney Kore\'de yaş sistemi farklıdır; doğduğunuzda 1 yaşında kabul edilirsiniz ve her yeni yılda yaşınız bir artar.',
  'SG': 'Singapur\'da sakız satmak ve ülkeye sakız sokmak, tıbbi nedenler dışında kesinlikle yasaktır.',
  'TH': 'Tayland\'da insanların başı kutsal kabul edilir, bu yüzden birinin -özellikle de çocukların- başına dokunmak büyük saygısızlıktır.',
  'VN': 'Vietnam\'da yaklaşık 45 milyon motosiklet bulunur ve trafik kuralları büyük ölçüde "akışa ayak uydurmak" üzerinedir.',
  'ID': 'Endonezya, 17.000\'den fazla adadan oluşur ve dünyadaki tüm bitki ve hayvan türlerinin %17\'sine ev sahipliği yapar.',
  'IN': 'Hindistan\'da 2 milyondan fazla Hindu tapınağı bulunur ve her birinin kendine özgü bir hikayesi vardır.',
  'MY': 'Malezya\'daki dünyanın en büyük çiçeklerinden biri olan Rafflesia arnoldii, çürüyen et gibi kokar.',
  'PH': 'Filipinler, dünyada boşanmanın (Vatikan dışında) yasa dışı olduğu tek ülkedir.',
  'CN': 'Çin o kadar büyüktür ki coğrafi olarak 5 farklı zaman dilimini kapsamasına rağmen tüm ülke Pekin saatini (UTC+8) kullanır.',
  'ES': 'İspanya milli marşı "La Marcha Real", dünyada resmi sözleri olmayan dört milli marştan biridir.',
  'IT': 'İtalya\'da sabah 11:00\'den sonra Cappuccino sipariş etmek turist olduğunuzu ele veren en büyük işarettir.',
  'FR': 'Fransa\'da yasal olarak bir domuzu "Napolyon" olarak adlandırmak, eski bir yasa yüzünden uzun süre yasaklanmıştı.',
  'DE': 'Almanya\'da otobanlarda (Autobahn) yakıtınızın bitmesi yasa dışıdır ve ceza almanıza neden olur.',
  'NL': 'Hollanda\'da bisiklet sayısı insan sayısından daha fazladır; 17 milyon insana karşılık yaklaşık 23 milyon bisiklet vardır.',
  'BE': 'Belçika, saniyede 12 miligram hızla ışık saçan dünyanın en büyük çikolata satış noktası olan Brüksel Havalimanı\'na sahiptir.',
  'GB': 'İngiltere Kraliçesi\'nin pasaportu yoktur, çünkü tüm İngiliz pasaportları zaten Kraliçe (veya Kral) adına düzenlenir.',
  'IE': 'İrlanda\'da hiç yılan bulunmaz; efsaneye göre Aziz Patrick hepsini denize dökmüştür (aslında buzul çağından beri yokturlar).',
  'PT': 'Portekiz, 1755 Lizbon depreminden sonra dünyanın ilk modern sismoloji araştırmalarına ev sahipliği yapmıştır.',
  'CH': 'İsviçre\'de akşam saat 10\'dan sonra apartmanda sifon çekmek, gürültü kuralları (Ruhestörung) nedeniyle yasaktır.',
  'AT': 'Avusturya, dünyanın sürekli çalışan en eski hayvanat bahçesi olan Tiergarten Schönbrunn\'a (1752) ev sahipliği yapar.',
  'CZ': 'Çekya, kişi başına düşen bira tüketiminde dünyanın bir numaralı ülkesidir.',
  'GR': 'Yunanistan\'da o kadar çok arkeolojik alan vardır ki, Atina\'da metro kazısı yaparken yüzlerce antik eser bulunmuştur.',
  'HR': 'Hırvatistan, Game of Thrones dizisindeki "King\'s Landing" (Dubrovnik) şehriyle ününe ün katmıştır.',
  'HU': 'Macaristan\'daki Budapeşte metrosu, Londra\'dan sonra dünyanın en eski ikinci yeraltı ulaşım sistemidir (1896).',
  'NO': 'Norveç\'te bir penguen olan Sir Nils Olav, Norveç Kraliyet Muhafızları\'nın onursal albayı ve maskotudur.',
  'SE': 'İsveç, atıkların çoğunu geri dönüştürdüğü için o kadar az çöp üretir ki, bazen diğer ülkelerden çöp ithal etmek zorunda kalır.',
  'DK': 'Danimarka bayrağı (Dannebrog), 1219 yılından beri kullanılarak dünyadaki en eski sürekli kullanılan ulusal bayrak ünvanına sahiptir.',
  'US': 'ABD\'nin Alaska eyaleti, ülkenin hem en batı hem en kuzey hem de (Aleut Adaları nedeniyle) en doğu noktasıdır.',
  'CA': 'Kanada, dünyadaki tüm göllerin yarısından fazlasına ev sahipliği yapar; yaklaşık 3 milyondan fazla göl bulunur.',
  'MX': 'Meksika\'da bulunan Chicxulub krateri, 66 milyon yıl önce dinozorların yok olmasına neden olan göktaşının çarptığı yerdir.',
  'AR': 'Arjantin, radyo yayıncılığını başlatan ülkelerden biridir; 1920\'de 20 kişi tarafından dinlenen ilk yayını yapmışlardır.',
  'BR': 'Brezilya, dünyadaki en fazla sayıda izole kabileye (henüz modern dünya ile temasa geçmemiş) ev sahipliği yapan ülkedir.',
  'CO': 'Kolombiya, dünyadaki kelebek türlerinin %20\'sine ev sahipliği yaparak bu alanda dünya birincisidir.',
  'PE': 'Peru\'daki gizemli Nazca Çizgileri, sadece gökyüzünden bakıldığında anlaşılabilecek kadar devasa figürlerdir.',
  'CL': 'Şili\'deki Atacama Çölü o kadar kurudur ki, çölün bazı bölgelerine tarih boyunca hiç yağmur yağdığı kaydedilmemiştir.',
  'ZA': 'Güney Afrika Cumhuriyeti\'nin üç farklı başkenti vardır: Pretoria (yürütme), Bloemfontein (yargı) ve Cape Town (yasama).',
  'EG': 'Mısır\'daki Büyük Gize Piramidi, günümüzde hala ayakta kalan tek Antik Dünyanın Yedi Harikası\'dır.',
  'MA': 'Fas\'ta bulunan Al Quaraouiyine Üniversitesi, 859 yılında kurulmuş olup dünyanın halen eğitim veren en eski üniversitesidir.',
  'KE': 'Kenya\'da tek bir mevsimde (Temmuz-Eylül) 1.5 milyondan fazla antilobun Büyük Göç\'üne şahit olabilirsiniz.',
  'TZ': 'Tanzanya\'daki Kilimanjaro Dağı, dünyanın en yüksek serbest duran (bir sıradağ parçası olmayan) dağıdır.',
  'AU': 'Avustralya o kadar büyüktür ki, genişliği Ay\'ın çapından daha fazladır.',
  'NZ': 'Yeni Zelanda\'da her bir insana karşılık yaklaşık 5 koyun düşmektedir.',
  'FJ': 'Fiji, Pasifik Okyanusu\'nda 332 adadan oluşur ancak insanların sadece üçte birinde yaşadığı bilinmektedir.'
};

let content = fs.readFileSync('src/data/countries.js', 'utf8');

const countriesMatch = content.match(/export const countries = (\[[\s\S]*?\]);/);
if (!countriesMatch) {
  console.error("Could not find countries array in file");
  process.exit(1);
}

let countriesList = [];
try {
  countriesList = eval(countriesMatch[1]);
} catch (e) {
  console.error("Failed to parse countries array", e);
  process.exit(1);
}

countriesList.forEach(c => {
  if (facts[c.id]) {
    c.interestingFact = facts[c.id];
  } else {
    // Basic fallback for other countries
    c.interestingFact = `${c.name}, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur.`;
  }
});

const newArrayStr = JSON.stringify(countriesList, null, 2)
  .replace(/"([^"]+)":/g, '$1:');

const newContent = content.replace(countriesMatch[0], `export const countries = ${newArrayStr};`);

fs.writeFileSync('src/data/countries.js', newContent);
console.log("Successfully updated src/data/countries.js with interesting facts.");
