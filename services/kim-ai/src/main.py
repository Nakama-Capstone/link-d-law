# save this as app.py
from flask import Flask
from env import env_config
from flask import Flask, request, jsonify
import numpy as tf
import tensorflow as tf
from tensorflow import keras
from keras.models import load_model
from keras.preprocessing.sequence import pad_sequences
import pickle
import os
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import pandas as pd
import re

try:
  # CONFIG 
  # set config from env, and set default value if not exist
  PORT=env_config['SERVICE_API_LAW_PORT'] if 'SERVICE_API_LAW_PORT' in env_config else 5000

  # INIT APP
  app = Flask(__name__)
  # Muat model yang sudah ada dari __dirname__ ../model/model_hukum.h5
  dirname = os.path.dirname(os.path.abspath(__file__))
  model = load_model(dirname + '/../model/model_hukum.h5')

  # Muat objek tokenizer yang sudah ada
  with open(dirname + '/../model/tokenizer.pickle', 'rb') as handle:
      tokenizer = pickle.load(handle)

  # Fungsi untuk memproses input teks
  def preprocess_input_user(text):
      text = text.lower()
      sequence = tokenizer.texts_to_sequences([text])
      padded = pad_sequences(sequence, maxlen=50, padding='post')
      return padded

  # Fungsi untuk melakukan prediksi
  def predict_jenis_hukum(text, model):
      processed_input = preprocess_input_user(text)
      prediction = model.predict(processed_input)
      return 'Hukum Pidana' if prediction[0][0] > 0.3 else 'Hukum Perdata'

  # ROUTES
  @app.route("/v1/hello")
  def hello():
    return "Hello, World!"

  #route fitur 2
  @app.route('/v1/role/predict', methods=['POST'])
  def predict(): 
      print("awoekwoake")
      data = request.json
      input_text = data['text']
      predicted_category = predict_jenis_hukum(input_text, model)
      print(predicted_category)
      return jsonify({'category': predicted_category})
except Exception as e:
  print(e)

#Fitur 1
try:
  # Akses ke dataset
  UPLOAD_FITUR1 = r'/../datasets\dataset_fitur 1.csv'


  # Fungsi pra-pemrosesan teks
  def preprocess_text(text):
      text = text.lower()
      text = re.sub(r'[^\w\s]', '', text)
      return text

  # Baca dataset
  df = pd.read_csv(UPLOAD_FITUR1, encoding='ISO-8859-1')
  df['processed_text'] = df['Isi'].apply(preprocess_text)

  # Membuat matriks TF-IDF
  vectorizer = TfidfVectorizer()
  tfidf_matrix = vectorizer.fit_transform(df['processed_text'])

  # Fungsi untuk mencari pasal dan menampilkan isinya
  def search_with_content(query):
      query_processed = preprocess_text(query)
      query_vector = vectorizer.transform([query_processed])
      similarities = cosine_similarity(query_vector, tfidf_matrix).flatten()
      most_relevant_index = similarities.argsort()[-1]
      relevant_pasal = df.iloc[most_relevant_index]['Pasal']
      relevant_content = df.iloc[most_relevant_index]['Isi']
      return relevant_pasal, relevant_content

  #route fitur 1
  @app.route('/v1/tanyakim/search', methods=['POST']) #input search
  def search_page():
      user_query = request.form.get('user_query')  # Mengambil input pengguna dari permintaan POST
      if user_query:
          pasal, isi= search_with_content(user_query)
          response = {
              'Pasal': pasal,
              'Isi': isi,
          }
          return jsonify(response)
      else:
          return jsonify({'error': 'Masukkan query Anda dalam permintaan POST.'})
except Exception as e:
  print(e)

# MAIN
if __name__ == '__main__':
  # dont edit this line please
  app.run(
    debug=True,
    use_debugger=False,
    use_reloader=True,
    port=PORT,
  )