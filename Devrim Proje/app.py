from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # CORS'u etkinleştir

# Dosyaların yükleneceği klasör
UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'Dosya bulunamadı'}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'Dosya seçilmedi'}), 400
    
    if file:
        filename = os.path.join(UPLOAD_FOLDER, file.filename)
        file.save(filename)
        return jsonify({
            'message': 'Dosya başarıyla yüklendi',
            'filename': file.filename
        })

@app.route('/chat', methods=['POST'])
def chat():
    message = request.json.get('message', '').lower()
    section = request.json.get('section', '')

    # Basit bir chatbot mantığı
    if section == 'mukayese':
        if 'karşılaştır' in message or 'analiz' in message:
            return jsonify({'response': 'Dosyalarınızı karşılaştırıyorum. Biraz bekleyin lütfen...'})
        elif 'fiyat' in message:
            return jsonify({'response': 'Fiyat analizini başlatıyorum. Bu işlem birkaç dakika sürebilir.'})
        elif 'rapor' in message:
            return jsonify({'response': 'Mukayese raporunu hazırlıyorum. Biraz bekleyin lütfen...'})
        else:
            return jsonify({'response': 'Size nasıl yardımcı olabilirim? Karşılaştırma, fiyat analizi veya rapor oluşturma işlemlerini yapabilirim.'})
    
    elif section == 'hakedis':
        if 'metraj' in message:
            return jsonify({'response': 'Metraj hesaplamalarını başlatıyorum. Bu işlem birkaç dakika sürebilir.'})
        elif 'pursantaj' in message:
            return jsonify({'response': 'Pursantaj hesaplamalarını yapıyorum. Biraz bekleyin lütfen...'})
        elif 'rapor' in message:
            return jsonify({'response': 'Hakediş raporunu hazırlıyorum. Biraz bekleyin lütfen...'})
        else:
            return jsonify({'response': 'Size nasıl yardımcı olabilirim? Metraj hesaplama, pursantaj hesaplama veya rapor oluşturma işlemlerini yapabilirim.'})

    return jsonify({'response': 'Üzgünüm, bu konuda size yardımcı olamıyorum.'})

@app.route('/analyze', methods=['POST'])
def analyze():
    analysis_type = request.json.get('type')
    files = request.json.get('files', [])
    
    # Analiz tipine göre işlem yap
    if analysis_type == 'mukayese':
        return jsonify({'message': 'Mukayese analizi tamamlandı'})
    elif analysis_type == 'hakedis':
        return jsonify({'message': 'Hakediş analizi tamamlandı'})
    
    return jsonify({'error': 'Geçersiz analiz tipi'}), 400

if __name__ == '__main__':
    app.run(debug=True) 