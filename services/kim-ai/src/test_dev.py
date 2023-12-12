# save this as app.py
from flask import Flask
from env import env_config
from flask import Flask, request, jsonify
import numpy as tf
import pickle

# CONFIG 
# set config from env, and set default value if not exist
PORT=env_config['SERVICE_API_LAW_PORT'] if 'SERVICE_API_LAW_PORT' in env_config else 5000

# INIT APP
app = Flask(__name__)

# ROUTES
@app.route("/v1/hello")
def hello():
  # return json
  return jsonify({
    'message': 'Hello from kim-AI'
  })
  
# MAIN
if __name__ == '__main__':
  # dont edit this line please
  app.run(
    debug=True,
    use_debugger=False,
    use_reloader=True,
    port=PORT,
  )