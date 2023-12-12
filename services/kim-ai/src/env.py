from dotenv import load_dotenv
import os

# List of .env paths
envs_paths = [
  '../../.env',
  '../../.env.development',
  '../../.env.production',
]

# Load each .env file and collect the variables
env_config = {}
for env_path in envs_paths:
    load_dotenv(dotenv_path=env_path, override=True)

# Collect all environment variables
for key in os.environ:
    env_config[key] = os.environ[key]
