# save this as app.py
from flask import Flask
from env import env_config

# CONFIG 
# set config from env, and set default value if not exist
PORT=env_config['SERVICE_API_LAW_PORT'] if 'SERVICE_API_LAW_PORT' in env_config else 5000

# INIT APP
app = Flask(__name__)

# ROUTES
@app.route("/v1/tanyakim/hello")
def hello():
  return "Hello, World!"

# MAIN
if __name__ == '__main__':
  # dont edit this line please
  app.run(
    debug=True,
    use_debugger=False,
    use_reloader=True,
    port=PORT,
  )