const mühendislikAvatarları = [
    {
        isim: 'Elektrik Mühendisliği',
        resim: 'electrical-engineer.png',
        açıklama: 'Elektrik ve elektronik sistemler üzerine uzmanlaşmış mühendislik dalı',
        mesaj: 'Elektrik çarptı mı? Merak etme, ben buradayım!'
    },
    {
        isim: 'Makine Mühendisliği', 
        resim: 'mechanical-engineer.png',
        açıklama: 'Mekanik sistemlerin tasarımı ve üretimi ile ilgilenen mühendislik dalı',
        mesaj: 'Dişli çarklar arasında kaybolma, ben seni bulurum!'
    },
    {
        isim: 'İnşaat Mühendisliği',
        resim: 'civil-engineer.png', 
        açıklama: 'Yapıların tasarımı ve inşası konusunda uzmanlaşmış mühendislik dalı',
        mesaj: 'Köprüler kurarım, ama kalbini de fethederim!'
    },
    {
        isim: 'Bilgisayar Mühendisliği',
        resim: 'computer-engineer.png',
        açıklama: 'Yazılım ve donanım sistemleri geliştiren mühendislik dalı',
        mesaj: 'Kodlarımda hata yok, ama kalbimde sana yer çok!'
    },
    {
        isim: 'Kimya Mühendisliği',
        resim: 'chemical-engineer.png',
        açıklama: 'Kimyasal süreçler ve malzemeler üzerine çalışan mühendislik dalı',
        mesaj: 'Kimyasal tepkimeler kadar sıcak bir merhaba!'
    },
    {
        isim: 'Endüstri Mühendisliği',
        resim: 'industrial-engineer.png',
        açıklama: 'Üretim süreçlerini optimize eden mühendislik dalı',
        mesaj: 'Optimizasyon mu? Seninle her şey mükemmel!'
    },
    {
        isim: 'Mimarlık',
        resim: 'architect.png',
        açıklama: 'Yapıların estetik ve fonksiyonel tasarımını yapan meslek dalı',
        mesaj: 'Mimari harikalar yaratırım, ama seninle daha da güzel!'
    }
];

function avatarlarıOluştur() {
    const container = document.querySelector('.container');
    
    mühendislikAvatarları.forEach(mühendislik => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'avatar-circle';
        
        const img = document.createElement('img');
        img.src = `https://raw.githubusercontent.com/bayramcinar/engineeringIcons/main/${mühendislik.resim}`;
        img.alt = mühendislik.isim;
        img.className = 'avatar-img';
        
        const title = document.createElement('h3');
        title.className = 'title';
        title.textContent = mühendislik.isim;
        
        const description = document.createElement('p');
        description.className = 'description';
        description.textContent = mühendislik.açıklama;
        
        avatarDiv.appendChild(img);
        card.appendChild(avatarDiv);
        card.appendChild(title);
        card.appendChild(description);
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', avatarlarıOluştur);

function fixBrokenAvatars() {
    const avatars = document.querySelectorAll('.avatar img');
    const fallbackImageUrl = 'https://raw.githubusercontent.com/bayramcinar/engineeringIcons/main/';
    
    const mühendislikIkonları = {
        'Elektrik Mühendisliği': 'electrical-engineer.png',
        'Makine Mühendisliği': 'mechanical-engineer.png', 
        'İnşaat Mühendisliği': 'civil-engineer.png',
        'Bilgisayar Mühendisliği': 'computer-engineer.png',
        'Kimya Mühendisliği': 'chemical-engineer.png',
        'Endüstri Mühendisliği': 'industrial-engineer.png',
        'Mimarlık': 'architect.png'
    };

    avatars.forEach(img => {
        // Resim elementini yeniden oluştur
        const newImg = new Image();
        const altText = img.alt;
        
        if (mühendislikIkonları[altText]) {
            let yeniUrl = fallbackImageUrl + mühendislikIkonları[altText];
            
            // İnşaat Mühendisliği için özel resim URL'si
            if (altText === 'İnşaat Mühendisliği') {
                yeniUrl = 'https://png.pngtree.com/png-vector/20240722/ourmid/pngtree-child-engineer-3d-cartoon-character-png-image_13213213.png';
            }
            
            newImg.onload = function() {
                img.src = yeniUrl;
                img.style.display = 'block';
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'contain';
            };

            newImg.onerror = function() {
                console.error(`${altText} resmi yüklenemedi, yedek resim deneniyor...`);
                img.src = 'images/default-avatar.png'; // Yerel yedek resim
            };

            newImg.src = yeniUrl;
        }
    });
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener('DOMContentLoaded', fixBrokenAvatars);

// Sayfa tam yüklendiğinde tekrar kontrol et
window.addEventListener('load', fixBrokenAvatars);

// Her 2 saniyede bir kontrol et
const kontrolInterval = setInterval(fixBrokenAvatars, 2000);

// 30 saniye sonra interval'i durdur
setTimeout(() => {
    clearInterval(kontrolInterval);
}, 30000);



document.addEventListener('DOMContentLoaded', function() {
    const avatars = document.querySelectorAll('.avatar');
    avatars.forEach(avatar => {
        avatar.addEventListener('click', function() {
            const card = this.closest('.card');
            const engineeringType = card.querySelector('.title').textContent;
            openEngineeringPage(engineeringType);
        });
        avatar.style.cursor = 'pointer';
    });
});
        function openEngineeringPage(engineeringType) {
            const urlName = engineeringType
                .toLowerCase()
                .replace(/ğ/g, 'g')
                .replace(/ü/g, 'u')
                .replace(/ş/g, 's')
                .replace(/ı/g, 'i')
                .replace(/ö/g, 'o')
                .replace(/ç/g, 'c')
                .replace(/\s+/g, '-');

            const url = `${urlName}.html`;
            window.open(url, '_blank');
        }

        function searchEngineering() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const cards = document.getElementsByClassName('card');

            for (let card of cards) {
                const title = card.querySelector('.title').textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                const description = card.querySelector('.description').textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                const normalizedSearchTerm = searchTerm.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

                if (title.includes(normalizedSearchTerm) || description.includes(normalizedSearchTerm)) {
                    card.classList.remove('hidden');
                    if (searchTerm.length > 0) {
                        card.classList.add('highlight');
                    } else {
                        card.classList.remove('highlight');
                    }
                } else {
                    card.classList.add('hidden');
                    card.classList.remove('highlight');
                }
            }
        }

        function openModal(page) {
            const modal = document.createElement('div');
            modal.className = 'modal';

            let content = '';
            switch (page) {
                case 'hakkimizda':
                    content = `
                        <h2>Hakkımızda</h2>
                        <p>Mühendislik Dalları platformu, geleceğin mühendislerini bilgilendirmek ve yönlendirmek amacıyla kurulmuştur.</p>
                        <p>Misyonumuz, mühendislik alanındaki en güncel bilgileri ve kariyer fırsatlarını sizlerle paylaşmaktır.</p>
                        <p>Vizyonumuz, Türkiye'nin mühendislik alanında lider bilgi kaynağı olmaktır.</p>
                    `;
                    break;
                case 'iletisim':
                    content = `
                        <h2>İletişim</h2>
                        <p>Email: info@muhendislikdallari.com</p>
                        <p>Telefon: +90 (212) 555 0000</p>
                        <p>Adres: Teknoloji Vadisi, İstanbul</p>
                    `;
                    break;
            }

            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal" onclick="closeModal(this)">&times;</span>
                    ${content}
                </div>
            `;

            document.body.appendChild(modal);
            modal.style.display = 'block';
        }

        function closeModal(element) {
            element.closest('.modal').remove();
        }

        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.card');
            
            cards.forEach(card => {
                card.addEventListener('click', function() {
                    const title = this.querySelector('.title').textContent;
                    openEngineeringPage(title);
                });
            });
        });
    </script>